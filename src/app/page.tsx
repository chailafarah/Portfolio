import Image from "next/image";

export default function Home() {
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
        <div className="flex gap-16 justify-center mt-[90px]">
          <Image src="html.svg" alt="Html skills" width={120} height={120}></Image>
          <Image src="css.svg" alt="CSS skills" width={120} height={120}></Image>
          <Image src="javascript.svg" alt="Javascript skills" width={120} height={120}></Image>
          <Image src="drupal.svg" alt="Drupal skills" width={120} height={120}></Image>
          <Image src="github.svg" alt="Github skills" width={120} height={120}></Image>
          <Image src="bootstrap.svg" alt="Bootsrap skills" width={120} height={120}></Image>
        </div>
      </section>
    </div>
  );
}
