import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Конфиденциальность — Lait Pur",
  description: "Политика конфиденциальности Lait Pur.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20 md:px-8">
      <Link
        href="/"
        className="text-sm text-[var(--graphite)]/55 transition-colors hover:text-[var(--graphite)]"
      >
        ← На главную
      </Link>
      <h1 className="mt-8 font-display text-4xl text-[var(--graphite)]">
        Конфиденциальность
      </h1>
      <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-[var(--graphite)]/70">
        <p>
          Lait&nbsp;Pur обрабатывает адрес электронной почты только для&nbsp;рассылки
          и&nbsp;не&nbsp;передаёт его третьим лицам без&nbsp;вашего согласия.
        </p>
        <p>
          Вы&nbsp;можете отписаться в&nbsp;любой момент через ссылку в&nbsp;письме
          или&nbsp;запрос на&nbsp;
          <a
            href="mailto:hello@laitpur.farm"
            className="underline decoration-[var(--graphite)]/25 hover:decoration-[var(--graphite)]/60"
          >
            hello@laitpur.farm
          </a>
          .
        </p>
        <p>
          Данные хранятся на&nbsp;защищённых серверах в&nbsp;Евросоюзе
          в&nbsp;соответствии с&nbsp;GDPR.
        </p>
      </div>
    </main>
  );
}
