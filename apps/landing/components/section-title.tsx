import { cn } from "@/lib/utils";

type SectionTitleProps = {
  label?: string;
  title?: string;
  text?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  titleWidth?: number;
  contentWidth?: number;
  className?: string;
};

export function SectionTitle({
  label,
  title,
  text,
  align = "left",
  children,
  titleWidth,
  contentWidth,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-balance",
        {
          "md:items-start": align === "left",
        },
        className,
      )}
    >
      <p
        className={cn("font-mono text-sm md:text-md text-white/50 text-center", {
          "md:text-left": align === "left",
        })}
      >
        {label}
      </p>
      <h1
        className={cn(
          "text-[32px] md:text-[52px] leading-[48px] md:leading-[64px] bg-gradient-to-br text-transparent bg-gradient-stop bg-clip-text from-white via-white max-w-sm sm:max-w-md via-30% to-white/30  md:max-w-[463px] pt-4 font-medium text-center",
          { "md:text-left": align === "left" },
        )}
        style={{ maxWidth: titleWidth ? `${titleWidth}px` : "none" }}
      >
        {title}
      </h1>
      <p
        className={cn("text-sm md:text-base text-white leading-7 py-[26px] text-center", {
          "md:text-left": align === "left",
        })}
        style={{ maxWidth: contentWidth ? `${contentWidth}px` : "none" }}
      >
        {text}
      </p>
      {children}
    </div>
  );
}
