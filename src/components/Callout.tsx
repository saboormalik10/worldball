import React from 'react';

interface CalloutProps {
  title: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ title, children }) => {
  return (
    <section className="w-full max-w-xl rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-lg shadow-black/30">
      <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-slate-300">{children}</div>
    </section>
  );
};
