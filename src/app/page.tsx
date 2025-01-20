import EightBall from "@/components/Drag.tsx/Drag";
import DragConstraints from "@/components/Drag.tsx/Drag";
import App from "@/components/Drag.tsx/DragTestExample";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-8 sm:m-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <h1 className="font-bold text-3xl self-center mb-12">
          What would Malou do?
        </h1>
        <EightBall />
      </main>
    </div>
  );
}
