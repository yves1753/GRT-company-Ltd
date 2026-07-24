import { useState } from "react";
import type { FleetRig } from "@/lib/fleetData";

type FleetImageProps = {
  rig: Pick<FleetRig, "name" | "image" | "imageAlt">;
  className?: string;
};

export function FleetImage({ rig, className }: FleetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${rig.imageAlt} image unavailable`}
        className={`flex h-full w-full items-center justify-center bg-muted p-6 text-center text-sm font-medium text-muted-foreground ${className ?? ""}`}
      >
        {rig.name} image unavailable
      </div>
    );
  }

  return (
    <img
      src={rig.image}
      alt={rig.imageAlt}
      loading="lazy"
      decoding="async"
      width={900}
      height={675}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
