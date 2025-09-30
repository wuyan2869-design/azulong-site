'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import type {
  ColumnFiltersState,
  FilterFn,
  SortingFn,
  SortingState,
} from '@tanstack/react-table';
import type { Product } from '@/src/lib/types';

const NULL_FILTER_VALUE = '__NULL__';

const columnHelper = createColumnHelper<Product>();

const numericSortingFn: SortingFn<Product> = (rowA, rowB, columnId) => {
  const a = rowA.getValue<number | null>(columnId);
  const b = rowB.getValue<number | null>(columnId);

  if (a == null && b == null) {
    return 0;
  }
  if (a == null) {
    return 1;
  }
  if (b == null) {
    return -1;
  }
  return a - b;
};

const numericFilterFn: FilterFn<Product> = (row, columnId, filterValue) => {
  if (!filterValue) {
    return true;
  }

  const cellValue = row.getValue<number | null>(columnId);

  if (filterValue === NULL_FILTER_VALUE) {
    return cellValue == null;
  }

  const expected = Number(filterValue);

  if (Number.isNaN(expected)) {
    return true;
  }

  if (cellValue == null) {
    return false;
  }

  return Math.abs(cellValue - expected) < 1e-6;
};

const formatNumber = (value: number) => {
  const rounded = Number(value.toFixed(3));
  if (Number.isInteger(rounded)) {
    return Math.trunc(rounded).toString();
  }
  return rounded.toString();
};

const formatDimension = (value: number | null) =>
  value == null ? 'N/A' : `${formatNumber(value)}″`;

const formatThread = (value: string | null) => value ?? 'N/A';

const formatWeight = (value: number) =>
  value > 0 ? `${value.toFixed(2)} kg` : 'N/A';

const formatInteger = (value: number) => value.toLocaleString('en-US');

type DropdownOption = {
  value: string;
  label: string;
};

const createMetricOptions = (
  items: Product[],
  key: 'diameter_in' | 'length_in',
): DropdownOption[] => {
  const numericValues = new Set<number>();
  let hasNull = false;

  items.forEach((item) => {
    const value = item[key];
    if (value == null) {
      hasNull = true;
    } else {
      numericValues.add(value);
    }
  });

  const options = Array.from(numericValues)
    .sort((a, b) => a - b)
    .map((value) => ({
      value: value.toString(),
      label: formatDimension(value),
    }));

  if (hasNull) {
    options.push({ value: NULL_FILTER_VALUE, label: 'N/A' });
  }

  return options;
};

const FAMILY_COPY: Record<
  string,
  {
    heading: string;
    tagline: string;
    summary: string;
    highlights: { label: string; value: string }[];
  }
> = {
  'track-bolt': {
    heading: 'Track Bolt',
    tagline: 'Undercarriage fasteners built for crawler equipment and mining fleets.',
    summary:
      'Heat-treated alloy steel bolts with rolled threads, ISO 9001:2015 quality control, and OEM interchangeability for Caterpillar, Komatsu, and John Deere systems.',
    highlights: [
      { label: 'Diameter Range', value: '3/8″ – 1-1/4″' },
      { label: 'Standards', value: 'ASTM A325 / ISO 898-1' },
      { label: 'Finishes', value: 'Zinc, Phosphate, Plain' },
    ],
  },
  'plow-bolt': {
    heading: 'Plow Bolt',
    tagline: 'Countersunk bolts for snow plows and ground engaging tools.',
    summary:
      'Grade 8.8 / 10.9 tensile performance with abrasion-resistant coatings and matched locknuts for safe field service.',
    highlights: [
      { label: 'Head Style', value: 'Full / Short Neck' },
      { label: 'OEM Coverage', value: 'BOSS, Western, Caterpillar' },
      { label: 'Batch Traceability', value: '100% QC Records' },
    ],
  },
  'bucket-teeth': {
    heading: 'Bucket Teeth',
    tagline: 'Wear parts for excavators, loaders, and dredging equipment.',
    summary:
      'Martensitic alloy castings with precision machining, consistent hardness, and comprehensive adapter & pin sets.',
    highlights: [
      { label: 'Hardness', value: 'HRC 48-52' },
      { label: 'Processes', value: 'Lost Wax & Sand Casting' },
      { label: 'MOQ', value: '300 sets / profile' },
    ],
  },
};

const buildDefaultCopy = (slug: string) => {
  const readable = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
  return {
    heading: `${readable} · Industrial Fasteners`,
    tagline: 'High-performance fasteners manufactured for global OEM supply chains.',
    summary:
      'Discover ISO 9001:2015 certified production, stable lead times, and tailored packaging for international distribution.',
    highlights: [
      { label: 'Lead Time', value: '25–35 days' },
      { label: 'Certification', value: 'ISO 9001:2015 / CE' },
      { label: 'Support', value: '24h Technical Response' },
    ],
  };
};

export default function ProductFamilyPage() {
  const params = useParams<{ family: string }>();
  const searchParams = useSearchParams();
  const highlightedRowRef = useRef<HTMLTableRowElement | null>(null);

  const familyParam = Array.isArray(params.family)
    ? params.family[0]
    : params.family;

  const familySlug = familyParam ?? '';
  const familyCopy = FAMILY_COPY[familySlug] ?? buildDefaultCopy(familySlug);

  const highlightedSku =
    searchParams.get('highlight')?.trim().toUpperCase() ?? null;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'sku', desc: false },
  ]);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!familySlug) {
        setProducts([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setLoadError(null);

        const productsModule = await import('../../../src/content/products.json');

        if (cancelled) {
          return;
        }

        const allProducts = productsModule.default as Product[];
        const filtered = allProducts.filter(
          (item) => item.family === familySlug,
        );

        setProducts(filtered);
      } catch (error) {
        console.error('Failed to load products', error);
        if (!cancelled) {
          setProducts([]);
          setLoadError('Failed to load product data. Please try again later.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [familySlug, reloadToken]);

  useEffect(() => {
    if (highlightedSku && highlightedRowRef.current) {
      highlightedRowRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [highlightedSku, products.length]);

  const filterOptions = useMemo(
    () => ({
      diameters: createMetricOptions(products, 'diameter_in'),
      lengths: createMetricOptions(products, 'length_in'),
    }),
    [products],
  );

  const columns = useMemo(
    () => [
      columnHelper.accessor('sku', {
        header: () => 'SKU',
        cell: (info) => (
          <span className="font-semibold text-slate-900">
            {info.getValue<string>()}
          </span>
        ),
        sortingFn: 'alphanumeric',
      }),
      columnHelper.accessor('standard', {
        header: () => 'Standard',
        cell: (info) => info.getValue<string>() || 'N/A',
      }),
      columnHelper.accessor('diameter_in', {
        header: () => 'Diameter (in)',
        cell: (info) => formatDimension(info.getValue<number | null>()),
        sortingFn: numericSortingFn,
        filterFn: numericFilterFn,
      }),
      columnHelper.accessor('length_in', {
        header: () => 'Length (in)',
        cell: (info) => formatDimension(info.getValue<number | null>()),
        sortingFn: numericSortingFn,
        filterFn: numericFilterFn,
      }),
      columnHelper.accessor('thread', {
        header: () => 'Thread',
        cell: (info) => formatThread(info.getValue<string | null>()),
      }),
      columnHelper.accessor('grade', {
        header: () => 'Grade',
        cell: (info) => info.getValue<string>() || 'N/A',
      }),
      columnHelper.accessor('finish', {
        header: () => 'Finish',
        cell: (info) => info.getValue<string>() || 'N/A',
      }),
      columnHelper.accessor('weight_kg', {
        header: () => 'Unit Weight',
        cell: (info) => formatWeight(info.getValue<number>()),
        sortingFn: numericSortingFn,
      }),
      columnHelper.accessor('min_order', {
        header: () => 'Min Order',
        cell: (info) => formatInteger(info.getValue<number>()),
        sortingFn: numericSortingFn,
      }),
      columnHelper.accessor('pack', {
        header: () => 'Pack Qty',
        cell: (info) => formatInteger(info.getValue<number>()),
        sortingFn: numericSortingFn,
      }),
    ],
    [],
  );

  const table = useReactTable({
    data: products,
    columns,
    state: {
      columnFilters,
      sorting,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleFilterChange = (
    columnId: 'diameter_in' | 'length_in',
    value: string,
  ) => {
    const column = table.getColumn(columnId);
    if (!column) {
      return;
    }

    if (!value) {
      column.setFilterValue(undefined);
      return;
    }

    column.setFilterValue(value);
  };

  const handleRetry = () => {
    setReloadToken((token) => token + 1);
  };

  if (loading) {
    return (
      <div className="flex h-72 items-center justify-center text-lg text-slate-500">
Loading product data...
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="mx-auto max-w-3xl rounded-xl border border-red-200 bg-red-50 p-8 text-center">
        <p className="text-base font-medium text-red-700">{loadError}</p>
        <p className="mt-2 text-sm text-red-600">
          If the issue persists, please contact our sales team for offline product sheets.
        </p>
        <button
          type="button"
          onClick={handleRetry}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-10 text-white shadow-lg">
        <p className="text-sm uppercase tracking-wide text-blue-50/80">
          {familySlug.replace(/-/g, ' ')}
        </p>
        <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
          {familyCopy.heading}
        </h1>
        <p className="mt-3 text-sm font-medium text-blue-50/90">
          {familyCopy.tagline}
        </p>
        <p className="mt-4 max-w-3xl text-base text-blue-50 sm:text-lg">
          {familyCopy.summary}
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          {familyCopy.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur-sm transition hover:bg-white/25"
            >
              <dt className="text-xs uppercase tracking-wide text-blue-50/70">
                {item.label}
              </dt>
              <dd className="text-sm font-semibold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Product Specification Filter
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Quickly locate suitable SKUs by diameter, length and other key parameters.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <label className="flex flex-col text-sm text-slate-600">
              <span className="mb-1 font-medium text-slate-700">
                Diameter (in)
              </span>
              <select
                value={
                  (table.getColumn('diameter_in')?.getFilterValue() as
                    | string
                    | undefined) ?? ''
                }
                onChange={(event) =>
                  handleFilterChange('diameter_in', event.target.value)
                }
                className="w-48 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">All</option>
                {filterOptions.diameters.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col text-sm text-slate-600">
              <span className="mb-1 font-medium text-slate-700">
                Length (in)
              </span>
              <select
                value={
                  (table.getColumn('length_in')?.getFilterValue() as
                    | string
                    | undefined) ?? ''
                }
                onChange={(event) =>
                  handleFilterChange('length_in', event.target.value)
                }
                className="w-48 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">All</option>
                {filterOptions.lengths.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => table.resetColumnFilters()}
              className="self-start rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-auto rounded-2xl">
          {table.getRowModel().rows.length === 0 ? (
            <div className="px-8 py-12 text-center text-sm text-slate-500">
              No products match the current filter criteria. Please adjust filter parameters or contact our sales team for customized solutions.
            </div>
          ) : (
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      const isSorted = header.column.getIsSorted();
                      return (
                        <th
                          key={header.id}
                          scope="col"
                          className="whitespace-nowrap px-4 py-3"
                        >
                          <button
                            type="button"
                            onClick={header.column.getToggleSortingHandler()}
                            className={`inline-flex items-center gap-1 rounded px-1 py-0.5 transition ${
                              header.column.getCanSort()
                                ? 'text-slate-700 hover:text-blue-600'
                                : ''
                            }`}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            {isSorted ? (
                              <span aria-hidden="true">
                                {isSorted === 'desc' ? '↓' : '↑'}
                              </span>
                            ) : null}
                          </button>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {table.getRowModel().rows.map((row) => {
                  const isHighlighted =
                    highlightedSku &&
                    row.original.sku.toUpperCase() === highlightedSku;

                  return (
                    <tr
                      key={row.id}
                      ref={isHighlighted ? highlightedRowRef : undefined}
                      className={`transition ${
                        isHighlighted ? 'bg-blue-50/80' : 'hover:bg-slate-50'
                      }`}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="whitespace-nowrap px-4 py-3">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>
            Total <span className="font-semibold text-slate-900">{products.length}</span>{' '}
            deliverable SKUs, with nuts, washers and surface treatments available as needed.
          </p>
          <a
            href="mailto:sales@azulongparts.com?subject=Product%20Inquiry"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Quote & Samples
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Logistics & Packaging Options
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>· Under 150 kg: International express or air freight door-to-door.</li>
            <li>· 150 kg – 1 ton: Air or sea LCL freight, wooden box/pallet packaging available.</li>
            <li>· Over 1 ton: Full container or LCL sea freight, can work with customer-designated forwarders.</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Each shipment includes Material Test Certificate (MTC) and dimensional inspection report, with custom labeling and barcoding support.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-900">
            Dedicated Engineering Support
          </h3>
          <p className="mt-3 text-sm text-blue-900/80">
            Need custom materials, surface treatments or special packaging? Our engineering team can provide technical recommendations and prototyping solutions within 24 hours.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact Engineering Team
          </Link>
        </div>
      </section>
    </div>
  );
}