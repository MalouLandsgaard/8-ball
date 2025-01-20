import EightBall from "@/components/Drag.tsx/Drag";
import DragConstraints from "@/components/Drag.tsx/Drag";
import App from "@/components/Drag.tsx/DragTestExample";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#242424]">
      <main className="flex flex-col gap-8 items-center p-8 sm:p-20">
        <h1 className="font-black uppercase text-3xl sm:text-6xl mb-12 text-center text-white">
          What would
          <br />
          <span className="">Malou do?</span>
        </h1>
        <EightBall />
      </main>
    </div>
  );
}
