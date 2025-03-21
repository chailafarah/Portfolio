import Image from "next/image";

const techs = [
  'angular',
  'bootstrap',
  'css',
  'drupal',
  'figma',
  'github',
  'html',
  'javascript',
  'jquery',
  'nextjs',
  'php',
  'react',
  'sass',
  'tailwind',
]

export function Techs() {
  return (
    <section className="text-center">
      <h1 className="text-corn-flower-blue dark:text-white text-4xl font-bold">Technologies récentes</h1>
      <p className="text-dim-gray dark:text-gray-400 mt-2 mb-8">Technologies avec lesquelles j&apos;ai récemment travaillé, explorant de nouvelles <br/>possibilités pour innover et avancer.</p>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-12 md:max-w-[900px] mx-auto place-items-center transition delay-150 duration-300 ease-in-out">
        {techs.map((tech) => (
          <a key={tech} href={`https://github.com/topics/${tech}`} target="_blank">
            <Image
              className="h-[60px] w-[60px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src={`/techs/${tech}.png`}
              alt={`${tech} skills`}
              width={180}
              height={180}
            />
          </a>
        ))}
      </div>
    </section>
  )
}