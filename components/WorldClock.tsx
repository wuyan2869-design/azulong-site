'use client';

import { useState, useEffect } from 'react';

interface TimeZone {
  city: string;
  timezone: string;
  country: string;
  flag: string;
}

const timeZones: TimeZone[] = [
  {
    city: 'New York',
    timezone: 'America/New_York',
    country: 'US',
    flag: 'us'
  },
  {
    city: 'Beijing',
    timezone: 'Asia/Shanghai',
    country: 'CN',
    flag: 'cn'
  },
  {
    city: 'Tokyo',
    timezone: 'Asia/Tokyo',
    country: 'JP',
    flag: 'jp'
  },
  {
    city: 'Frankfurt',
    timezone: 'Europe/Berlin',
    country: 'DE',
    flag: 'de'
  }
];


export function CompactClock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3 text-center shadow-lg">
      <div className="text-amber-400 text-sm font-medium mb-1">当前时间</div>
      <div className="font-mono text-lg font-bold text-white bg-slate-700/50 rounded px-2 py-1">
        {time}
      </div>
    </div>
  );
}

export default function WorldClock() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};

      timeZones.forEach(tz => {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        const dateString = now.toLocaleDateString('en-US', {
          timeZone: tz.timezone,
          month: 'short',
          day: 'numeric'
        });
        newTimes[tz.city] = `${timeString} ${dateString}`;
      });

      setTimes(newTimes);
    };

    // 初始更新
    updateTimes();

    // 每秒更新一次
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 rounded-3xl p-6 text-white overflow-hidden shadow-2xl">
      {/* Modern background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-blue-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_60%)]"></div>

      {/* Modern header */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-center mb-2 flex items-center justify-center gap-3">
          {/* Modern clock icon */}
          <div className="relative">
            <div className="w-8 h-8 rounded-full border-2 border-blue-400 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
              <div className="w-1 h-3 bg-white rounded-full"></div>
              <div className="absolute w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full animate-pulse"></div>
          </div>
          <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Global Time
          </span>
        </h3>
        <p className="text-center text-blue-200/80 text-sm font-light tracking-wide mb-6">
          Real-time • Worldwide Coverage
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {timeZones.map((tz, index) => (
          <div
            key={tz.city}
            className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-sm font-bold text-white">{tz.country}</span>
              </div>
            </div>
            <div className="font-semibold text-base text-white group-hover:text-blue-100 transition-colors duration-300 mb-3">{tz.city}</div>

            {/* Clean time display */}
            <div className="relative">
              <div className="font-mono text-lg font-bold text-white bg-black/30 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20 group-hover:border-blue-400/50 transition-all duration-300">
                <span className="relative z-10">{times[tz.city] || '00:00:00'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-6 text-center">
        <p className="text-blue-200/90 text-sm font-light tracking-wide">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            AzuLong Global Operations
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          </span>
        </p>
      </div>
    </div>
  );
}