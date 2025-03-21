import Image from "next/image";

export function Hero() {
  return (
    <section className="md:flex md:flex-row-reverse md:items-center md:justify-between mt-8 lg:mt-24 mb-24">
      <Image className="mb-4 w-[116] md:w-[232] lg:w-[349]" src="/me.svg" alt="Photo de profil" loading="eager" width={349} height={349} />

      <h1 className="text-corn-flower-blue dark:text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.20]">
        Bonjour👋,<br/>
        Je suis<br/>
        <span className="block bg-(image:--gr) bg-clip-text text-transparent">Chaimaa Faris</span>
        Développeuse Full-Stack
      </h1>
    </section>
  )
}
