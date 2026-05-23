"use client";

import Link from "next/link";
import { ArrowLeft, House } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-br from-[#020a1f] via-[#051735] to-[#03102a]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#23B2F9]/25 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#23B2F9]/15 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>
      <section className="text-center max-w-md">
        <Image
          src="/android-chrome-192x192.png"
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto mb-12"
        />
        <span className="text-7xl font-medium font-bebas text-primary">
          ERRO 404
        </span>

        <h1 className="text-4xl font-bold text-white mt-2">
          Ops! Página não encontrada
        </h1>

        <p className="mt-4 text-white/70">
          O conteúdo que você tentou acessar não está disponível.
        </p>

        <div className="flex gap-3 justify-center mt-16">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 border border-white/20 hover:bg-primary/20 text-white px-5 py-3 rounded-xl cursor-pointer"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 text-white border border-white/20 hover:bg-primary/20 rounded-xl px-5 py-3 rounded-xl"
          >
            <House size={18} />
            Início
          </Link>
        </div>
      </section>
    </main>
  );
}
