import React from 'react';

const ScanningCornerIndicator = (): JSX.Element => {
  return (
    <div className="fixed top-5 left-5 z-[9999] hidden pointer-events-none md:block">
      <div className="flex flex-col gap-0.5">
        <div className="font-mono text-[8px] text-white/50">
          SCANNING SECTOR...
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 animate-pulse rounded-full bg-white/30" />
          <div
            className="h-1 w-1 animate-pulse rounded-full bg-white/30 [animation-delay:150ms]"
          />
          <div
            className="h-1 w-1 animate-pulse rounded-full bg-white/30 [animation-delay:300ms]"
          />
        </div>
      </div>
    </div>
  );
};

export default ScanningCornerIndicator;