import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { SHOWCASE_VIDEOS } from "@/lib/videos";

export function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = SHOWCASE_VIDEOS[activeIndex];

  const selectVideo = (index: number) => {
    setActiveIndex(index);
    const el = videoRef.current;
    if (el) {
      el.load();
      void el.play().catch(() => {});
    }
  };

  return (
    <div className="space-y-6">
      <div className="industrial-frame overflow-hidden bg-black aspect-video">
        <video
          ref={videoRef}
          key={active.src}
          className="w-full h-full object-contain"
          controls
          playsInline
          preload="none"
          poster=""
        >
          <source src={active.src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>

      <p className="text-center text-sm font-semibold text-foreground">{active.title}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {SHOWCASE_VIDEOS.map((v, index) => (
          <button
            key={v.id}
            type="button"
            onClick={() => selectVideo(index)}
            className={`group relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              index === activeIndex
                ? "border-primary ring-2 ring-primary/40"
                : "border-border hover:border-primary/50"
            }`}
            aria-label={`Play ${v.title}`}
            aria-pressed={index === activeIndex}
          >
            <video
              src={v.src}
              className="w-full h-full object-cover pointer-events-none"
              muted
              playsInline
              preload="none"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
              <Play className="h-8 w-8 text-white opacity-90" />
            </div>
            <span className="absolute bottom-0 inset-x-0 bg-black/70 px-1 py-1 text-[10px] text-white truncate">
              {v.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
