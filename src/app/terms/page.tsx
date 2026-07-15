import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Условия — MŪNA",
  description: "Условия использования сайта MŪNA.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-[100dvh] max-w-2xl px-5 py-20 md:px-8">
      <Link
        href="/"
        className="text-sm text-[var(--graphite)]/55 transition-colors hover:text-[var(--graphite)]"
      >
        ← На главную
      </Link>
      <h1 className="mt-8 font-display text-4xl tracking-wide text-[var(--graphite)]">
        Условия использования
      </h1>
      <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--graphite)]/70">
        <p>
          Материалы сайта MŪNA носят ознакомительный характер. Наличие вкусов
          и&nbsp;партий зависит от&nbsp;сезона и&nbsp;региона доставки.
        </p>
        <p>
          Все товарные знаки и&nbsp;визуальные материалы принадлежат бренду либо
          используются с&nbsp;разрешения правообладателей.
        </p>
        <p>
          По&nbsp;вопросам сотрудничества:&nbsp;
          <a
            href="mailto:hello@muna.farm"
            className="underline decoration-[var(--graphite)]/25 hover:decoration-[var(--graphite)]/60"
          >
            hello@muna.farm
          </a>
          .
        </p>
      </div>
    </main>
  );
}
