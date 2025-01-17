import SparkelsIcon from "./SparklesIcon";

export default function DemoSection() {
  return (
    <section className="flex justify-center items-center gap-[0.2rem] sm:gap-4 mt-4 p-4">
      <div>
        <h2 className="text-center text-white/90">Before</h2>
        <div className="w-[180px] h-[400px] md:w-[280px] md:h-[440px] bg-gray-800/50 rounded-xl"></div>
      </div>

      <div>
        <SparkelsIcon size="size-5"/>
      </div>

      <div>
        <h2 className="text-center">After</h2>
        <div className="w-[180px] h-[400px] md:w-[280px] md:h-[440px] bg-gray-800/50 rounded-xl"></div>
      </div>
    </section>
  );
}
