import EightBall from "@/components/Drag/Drag";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#242424]">
      <main className="flex flex-col gap-8 items-center p-8 sm:p-20">
        <h1 className="font-black uppercase text-3xl sm:text-6xl mb-12 text-center text-white select-none">
          What would
          <br />
          <span className="">Malou do?</span>
        </h1>
        <EightBall />
      </main>
      <Link href="https://github.com/MalouLandsgaard" target="_blank">
        <p className="hover:underline absolute bottom-0 right-0 p-4 text-[#5E5E5E]  text-xs sm:text-sm uppercase font-semibold">
          @MalouLandsgaard
        </p>
      </Link>
    </div>
  );
}
