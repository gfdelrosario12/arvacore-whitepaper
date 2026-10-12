'use client';

import React, { useState, useEffect, useRef } from 'react';

interface DiagramLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  figureNumber?: string;
  children: React.ReactNode;
}

const isInteractiveTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false;
  if (['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA'].includes(target.tagName)) return true;
  return Boolean(
    target.closest('[role="slider"], [role="button"], [role="checkbox"], [role="switch"]')
  );
};

export function DiagramLightbox({
  isOpen,
  onClose,
  title,
  figureNumber,
  children,
}: DiagramLightboxProps) {
  const [scale, setScale] = useState(3.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  const dragStart = useRef({ x: 0, y: 0 });
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => closeBtnRef.current?.focus());
    } else {
      document.body.style.overflow = '';
      previouslyFocused.current?.focus?.();
    }
  }, [isOpen]);

  const handleClose = React.useCallback(() => {
    setScale(3.5);
    setPosition({ x: 0, y: 0 });
    onClose();
  }, [onClose]);

  const handleBackdropClick = () => {
    handleClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const overlay = overlayRef.current;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }
      if (e.key !== 'Tab' || !overlay) return;
      const focusables = overlay.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const handlePanelClick = (e: React.MouseEvent) => e.stopPropagation();

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 6.0));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1.0));
  const handleReset = () => {
    setScale(3.5);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isInteractiveTarget(e.target)) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isInteractiveTarget(e.target)) return;
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.current.x,
      y: e.touches[0].clientY - dragStart.current.y,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const transitionCls = !reducedMotion ? 'transition-opacity duration-200 ease-out' : '';
  const transformCls = !reducedMotion ? 'transition-transform duration-200 ease-out' : '';

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex flex-col bg-[#04080a]/95 backdrop-blur-md ${transitionCls}`}
      style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal={isOpen ? true : undefined}
      aria-hidden={!isOpen}
      aria-label={title}
    >
      {/* Inner panel: clicks here must never dismiss the viewer */}
      <div
        className={`flex flex-col flex-1 ${transformCls}`}
        style={{ transform: `scale(${isOpen ? 1 : 0.96})` }}
        onClick={handlePanelClick}
      >
        {/* Lightbox Top Control Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-emerald-900/40 bg-[#08100c]/80 z-20">
          <div className="flex items-center gap-3">
            {figureNumber && (
              <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                {figureNumber}
              </span>
            )}
            <h2 className="text-sm font-semibold text-white tracking-wide truncate max-w-xs sm:max-w-md">
              {title}
            </h2>
          </div>

          {/* Zoom & Close Controls */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/50 border border-emerald-900/40 rounded-lg p-0.5 font-mono text-xs">
              <button
                type="button"
                onClick={handleZoomOut}
                className="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-emerald-900/40 rounded transition-colors"
                title="Zoom out"
                aria-label="Zoom out"
              >
                −
              </button>
              <span className="px-2 text-emerald-400 min-w-[3rem] text-center select-none">
                {Math.round(scale * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                className="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-emerald-900/40 rounded transition-colors"
                title="Zoom in"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-2 py-1 text-slate-400 hover:text-white hover:bg-emerald-900/40 rounded border-l border-emerald-900/40 ml-1 transition-colors"
                title="Reset zoom and position"
                aria-label="Reset zoom and pan"
              >
                Reset
              </button>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              onClick={handleClose}
              className="p-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-slate-300 hover:text-white hover:bg-emerald-900/60 transition-colors"
              title="Close lightbox (Escape)"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pannable Canvas Container */}
        <div
          className="relative flex-1 overflow-hidden flex items-center justify-center p-4 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.15s ease-out',
              transformOrigin: 'center center',
            }}
            className="w-full max-w-5xl flex items-center justify-center"
          >
            {children}
          </div>
        </div>

        {/* Bottom Hint Footer */}
        <div className="px-4 py-2 border-t border-emerald-900/30 bg-[#060c09]/90 text-center font-mono text-[11px] text-slate-400 z-20">
          <span className="hidden sm:inline">Drag to pan • Zoom controls above • </span>
          <span className="hidden sm:inline">Click backdrop or</span>
          <span className="hidden sm:inline"> press </span>
          <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-emerald-900/40 text-emerald-300 font-mono text-[10px]">
            Esc
          </kbd>
          <span className="hidden sm:inline"> to exit lightbox</span>
        </div>
      </div>
    </div>
  );
}
