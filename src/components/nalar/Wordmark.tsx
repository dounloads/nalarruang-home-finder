import { cn } from "@/lib/utils";

const colors = ["text-brand-orange", "text-brand-sky", "text-brand-green", "text-brand-yellow"];

export function Wordmark({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span className={cn("wordmark inline-flex" , compact ? "text-[1.25rem]" : "text-[clamp(3.1rem,9vw,7.5rem)]", className)} aria-label="NalarRuang">
      {Array.from("NalarRuang").map((letter, index) => (
        <span key={`${letter}-${index}`} className={colors[index % colors.length]} aria-hidden="true">{letter}</span>
      ))}
    </span>
  );
}
