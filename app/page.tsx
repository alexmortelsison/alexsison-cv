import { FocusCardsDemo } from "@/components/FocusCardsDemo";
import Image from "next/image";
import PortfolioPage from "./portfolio/page";

export default function Home() {
  return (
    <section className="items-center justify-center max-w-4xl mx-auto px-4">
      <div className="flex gap-6 mb-10 items-center">
        <div className="flex items-center justify-center">
          <Image
            src={"/alex.jpg"}
            alt={""}
            width={100}
            height={100}
            className="object-cover overflow-hidden rounded-full w-[100px] h-[100px]"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-gray-300 tracking-tighter">
            Alex Sison
          </h1>
          <p className="text-muted-foreground tracking-tighter">
            Full Stack Developer
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm md:text-base text-center">
        I&apos;m a Full-Stack developer based in Japan, passionate about
        building smooth, scalable applications with{" "}
        <span className="text-base font-bold">NextJS</span> and{" "}
        <span className="text-base font-bold">React</span>. With a strong focus
        on teamwork, I bring clear communication, adaptability, and a
        collaborative approach to every project. Whether working independently
        or within a team, I aim to create efficient, user-centered solutions —
        that bring ideas to life!
      </p>
      <div className="mt-10 flex gap-1 md:gap-4 items-center justify-center">
        <Image
          src={"/n.svg"}
          alt={""}
          width={70}
          height={70}
          title="NextJS"
          className="w-8 h-8 md:w-12 md:h-12 dark:invert"
        />
        <Image
          src={"/r.svg"}
          alt={""}
          width={70}
          height={70}
          title="React"
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <Image
          src={"/tw.svg"}
          alt={""}
          width={70}
          height={70}
          title="TailwindCSS"
          className="w-8 h-8 md:w-12 md:h-12"
        />
        <Image
          src={"/m.svg"}
          alt={""}
          width={70}
          height={70}
          title="MongoDB"
          className="w-12 h-12 md:w-24 md:h-24"
        />
        <Image
          src={"/s.svg"}
          alt={""}
          width={70}
          height={70}
          title="Sanity"
          className="w-12 h-12 md:w-24 md:h-24"
        />
        <Image
          src={"/prisma.svg"}
          alt={""}
          width={70}
          height={70}
          title="Prisma ORM"
          className="w-8 h-8 md:w-12 md:h-12 dark:invert"
        />
        <Image
          src={"/p.svg"}
          alt={""}
          width={70}
          height={70}
          title="Payload CMS"
          className="w-8 h-8 md:w-12 md:h-12 dark:invert"
        />
        <Image
          src={"/neon-tech.svg"}
          alt={""}
          width={70}
          height={70}
          title="Neon Tech"
          className="w-8 h-8 md:w-12 md:h-12"
        />

        <Image
          src={"/str.svg"}
          alt={""}
          width={70}
          height={70}
          title="Stripe"
          className="w-8 h-8 md:w-12 md:h-12 dark:invert"
        />
      </div>
      <div className="my-12">
        <PortfolioPage />
      </div>
    </section>
  );
}
