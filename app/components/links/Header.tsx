import { BadgeCheck } from "lucide-react";
import Image from "next/image";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  avatar?: string;
};

export function Header({ title, subtitle, description, avatar }: HeaderProps) {
  return (
    <header className="flex flex-col items-center text-center mx-auto max-w-[440px] px-5 pt-12 sm:pt-16">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-primary/60 opacity-30 blur-md" />
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg ring-1 ring-neutral-200/60 sm:h-32 sm:w-32 dark:border-primary/10 dark:ring-primary/10">
          {avatar ? (
            <Image
              src={avatar}
              alt={title ? `Foto de perfil de ${title}` : "Foto de perfil"}
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="h-full w-full object-cover bg-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-primary/20 text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl dark:from-primary/30 dark:to-primary/10 dark:text-primary">
              AR
            </div>
          )}
        </div>
        <span className="absolute -bottom-1 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-neutral-200 dark:ring-white/10 dark:border-white/10 dark:bg-secondary/50">
          <BadgeCheck className="h-4 w-4 text-support" />
        </span>
      </div>

      <h1 className="mt-5 text-2xl font-medium tracking-wider text-neutral-900 sm:text-[26px] dark:text-neutral-50">
        {title}
      </h1>
      <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.14em] text-support dark:text-primary">
        {subtitle}
      </p>
      <p className="mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-neutral-600 dark:text-white/75">
        {description}
      </p>
    </header>
  );
}
