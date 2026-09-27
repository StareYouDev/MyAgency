import { SplitReveal } from "@/components/motion/SplitReveal";
import { CheckboxIcon, DotsIcon } from "@/components/ui/icons";
import { problem } from "@/lib/copy";
import { checklist, painPoints } from "@/lib/content";

/** Positions are card-relative percentages, transcribed from the reference. */
const chipPositions = [
  { left: "31.9%", top: "11.1%", rotate: -3 },
  { left: "71.8%", top: "87.5%", rotate: 2 },
  { left: "86.7%", top: "15.4%", rotate: -2 },
  { left: "22.5%", top: "46%", rotate: 2 },
  { left: "87.9%", top: "76.1%", rotate: -3 },
  { left: "66.2%", top: "19.3%", rotate: 3 },
  { left: "38.2%", top: "69.5%", rotate: -4 },
];

function ChecklistTrack() {
  return (
    <ul className="flex flex-col gap-[5px]">
      {checklist.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-[5px] border-[1.5px] border-ink-600 bg-ink-700 px-4 py-[13px]"
        >
          <CheckboxIcon />
          <span className="flex-1 font-display text-[14px] leading-none text-grey-400">{item}</span>
          <DotsIcon className="h-[3px] w-[16px] text-ink-500" />
        </li>
      ))}
    </ul>
  );
}

export function Problem() {
  return (
    <section className="relative z-20 bg-paper px-4 pb-6 pt-10 sm:px-6 lg:px-10 lg:pb-[92px] lg:pt-[182px]">
      <div className="relative mx-auto max-w-[1200px] overflow-clip rounded-[24px] bg-ink px-5 py-6 sm:px-8 lg:px-16 lg:py-0">
        <div className="grid items-stretch gap-8 lg:min-h-[480px] lg:grid-cols-[462px_1fr] lg:gap-[110px]">
          {/* Perpetual vertical checklist */}
          <div className="relative h-[300px] overflow-clip lg:h-[480px]">
            <div className="vscroll absolute inset-x-0 top-0 flex flex-col gap-[5px]">
              <ChecklistTrack />
              <ChecklistTrack />
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-center py-6 lg:py-0">
            <ScrollEyebrow />
            <SplitReveal
              as="h2"
              mode="words"
              stagger={0.04}
              y={16}
              className="h-display mt-5 max-w-[484px] text-[34px] text-paper sm:text-[42px] lg:text-[40px] lg:leading-[48px]"
            >
              {problem.heading}
            </SplitReveal>
          </div>
        </div>

        {/* Scattered pain-point speech bubbles */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {painPoints.map((p, i) => (
            <span
              key={p}
              className="chip-tail absolute whitespace-nowrap rounded-[9px] bg-lime px-3 py-1.5 font-display text-[14px] font-bold text-ink shadow-[3px_3px_0_0_rgba(0,0,0,0.35)]"
              style={{
                left: chipPositions[i].left,
                top: chipPositions[i].top,
                transform: `translate(-50%, -50%) rotate(${chipPositions[i].rotate}deg)`,
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Mobile: two representative bubbles so the idea still lands */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <span
            className="chip-tail absolute left-[6%] top-[16%] rounded-[9px] bg-lime px-3 py-1.5 font-display text-[12px] font-bold text-ink"
            style={{ transform: "rotate(-3deg)" }}
          >
            {painPoints[0]}
          </span>
          <span
            className="chip-tail absolute right-[6%] bottom-[8%] rounded-[9px] bg-lime px-3 py-1.5 font-display text-[12px] font-bold text-ink"
            style={{ transform: "rotate(2deg)" }}
          >
            {painPoints[6]}
          </span>
        </div>
      </div>
    </section>
  );
}

function ScrollEyebrow() {
  return (
    <SplitReveal as="p" mode="words" stagger={0.03} y={10} className="text-[16px] font-medium leading-[19.2px] text-paper">
      {problem.eyebrow}
    </SplitReveal>
  );
}
