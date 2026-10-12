import React from 'react';
import { CitationItem } from '@/lib/types';

interface CitationCardProps {
  item: CitationItem;
}

export const CitationCard: React.FC<CitationCardProps> = ({ item }) => {
  return (
    <div className="p-4 rounded-lg border border-[#1b2e21] bg-[#0c150e]/60 hover:border-emerald-500/30 transition-colors text-xs leading-relaxed group">
      <div className="flex items-baseline justify-between gap-2 mb-1.5">
        <span className="font-mono text-emerald-400 font-semibold text-[11px]">
          [{item.id.replace('ref-', '')}]
        </span>
        <span className="font-mono text-slate-400 text-[10px]">{item.year}</span>
      </div>

      <div className="text-slate-200 mb-1 font-medium group-hover:text-white transition-colors">
        {item.authors} ({item.year}).
      </div>

      <div className="text-slate-300 italic mb-1.5">
        &ldquo;{item.title}&rdquo;
      </div>

      <div className="text-slate-400 text-[11px] mb-2">
        {item.publication}
      </div>

      {(item.doi || item.url) && (
        <a
          href={item.doi || item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[10px] text-cyan-400 hover:text-cyan-300 underline underline-offset-2 break-all"
        >
          <span>↗</span>
          <span>{item.doi ? item.doi.replace('https://doi.org/', 'doi:') : item.url}</span>
        </a>
      )}
    </div>
  );
};

