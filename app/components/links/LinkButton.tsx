import { LinkItem } from "@/service/links";
import { ArrowUpRight, Info, Music2, MapPin, Stethoscope } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const iconMap = {
  nutrium: Stethoscope,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  tiktok: Music2,
  mapa: MapPin,
  info: Info,
  default: ArrowUpRight,
} as const;

export function LinkButton({ link }: { link: LinkItem }) {
  const Icon = iconMap[link.icon ?? "default"] ?? iconMap.default;
  const isFeatured = link.featured;

  return (
    <li>
      <a
        href={link.url}
        target={link.url.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={[
          "group relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300",
          "border shadow-sm hover:shadow-md active:scale-[0.99]",
          isFeatured
            ? "bg-secondary text-white border-transparent hover:bg-secondary/90 dark:bg-primary-dark dark:text-brand-primary dark:hover:bg-primary/90 dark:shadow-[0_8px_40px_-12px_rgba(35,178,249,0.25)]"
            : "bg-white text-neutral-900 border-neutral-200/80 hover:border-primary/30 hover:-translate-y-0.5 dark:bg-white/5 dark:shadow-[0_8px_40px_-12px_rgba(35,178,249,0.25)] dark:backdrop-blur-sm dark:text-neutral-100 dark:border-white/10 dark:hover:border-primary/50 ",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
            isFeatured
              ? "bg-white/15 text-white dark:bg-secondary/15 dark:text-white"
              : "bg-primary/15 text-secondary dark:bg-primary/15 dark:text-primary",
          ].join(" ")}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>

        <span className="flex flex-1 flex-col text-left">
          <span className="text-[15px] font-semibold leading-tight">
            {link.title}
          </span>
          {link.description && (
            <span
              className={[
                "mt-0.5 text-[13px] leading-snug",
                isFeatured
                  ? "text-white/70 dark:text-white/80"
                  : "text-neutral-500 dark:text-neutral-400",
              ].join(" ")}
            >
              {link.description}
            </span>
          )}
        </span>

        <ArrowUpRight
          className={[
            "h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            isFeatured
              ? "text-white/70 dark:text-white/75"
              : "text-neutral-400 dark:text-neutral-400",
          ].join(" ")}
          strokeWidth={2}
        />
      </a>
    </li>
  );
}
