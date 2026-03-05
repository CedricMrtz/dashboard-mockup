type StatCardProps = {
  label: string;
  value: number;
  color?: "blue" | "green" | "yellow";
};

const colorClasses = {
  blue: {
    badge: "bg-[#89b4fa]/20 text-[#89b4fa] ring-1 ring-inset ring-[#89b4fa]/35",
    glow: "shadow-[0_0_12px_rgba(137,180,250,0.08)]",
  },
  green: {
    badge: "bg-[#a6e3a1]/20 text-[#a6e3a1] ring-1 ring-inset ring-[#a6e3a1]/30",
    glow: "shadow-[0_0_12px_rgba(166,227,161,0.08)]",
  },
  yellow: {
    badge: "bg-[#f9e2af]/20 text-[#f9e2af] ring-1 ring-inset ring-[#f9e2af]/35",
    glow: "shadow-[0_0_12px_rgba(249,226,175,0.08)]",
  },
};

function GenericCard({ label, value, color = "blue" }: StatCardProps) {
  const { badge, glow } = colorClasses[color];

  return (
    <article className={`rounded-2xl border border-[#313244] bg-[#1e1e2e]/95 p-4 text-[#cdd6f4] backdrop-blur-sm ${glow}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#bac2de]">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold text-[#f5e0dc]">
        {value}
      </p>
      <span className={`mt-3 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${badge}`}>
        {value} records
      </span>
    </article>
  );
}

export default GenericCard;