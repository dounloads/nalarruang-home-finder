import { MapPinned } from "lucide-react";
import { cn } from "@/lib/utils";

export function Wordmark({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span className={cn("wordmark", compact && "wordmark-compact", className)} aria-label="NalarRuang">
      <MapPinned aria-hidden="true" />
      <span>Nalar<span>Ruang</span></span>
    </span>
  );
}
