import Image from "next/image";

export default function Home() {
  const iconSize = 60;
  return (
    <div className="font-poppins container mx-auto">
      <header className="flex items-center justify-between text-blue text-xl font-bold mt-[150px] mb-[90px] leading-[1.20]">
        <div>
          <p>Bonjour👋,</p>
          <p>Je suis</p>
          <p className="bg-text-gradient bg-clip-text text-transparent">Chaimaa Faris</p>
          <p>Développeuse Full-Stack</p>
        </div>
        <Image src="bannerimage.svg" alt="bannerimage" width={349} height={349} />
      </header>
      <section className="text-center">
        <h1 className="text-blue text-4xl font-bold">My Tech Stack</h1>
        <p className="text-gray">Technologies I’ve been working with recently</p>
        <div className="grid grid-cols-6 gap-12 mt-[90px] max-w-[800px] mx-auto place-items-center">
          {["html", "css", "javascript", "drupal", "github", "bootstrap", "tailwind", "sass", "php", "jira", "figma", "angular", "jquery", "docker"].map((tech) => (
            <Image key={tech} src={`/${tech}.svg`} alt={`${tech} skills`} width={iconSize} height={iconSize} />
          ))}
        </div>
      </section>
    </div>
  );
}
