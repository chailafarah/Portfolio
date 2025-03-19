import classNames from "classnames";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "ManagePass App Android",
    description:
      "Manage Pass est une application sécurisée pour la gestion des mots de passe, permettant aux utilisateurs de stocker et gérer facilement leurs identifiants.",
    techs: ["Kotlin", "Android Studio", "Firebase", "Figma",],
    thumbnail: "/thumbnails/ManagePassAndroid.png",
    figmaLink: "https://www.figma.com/design/CGJMt8hGIVfcnMVYJUHCL4/App-Mobile?node-id=0-1&p=f&t=Q2jgNdjWgKxx7Jxe-0",
    githubLink: "https://github.com/chailafarah/ManagePassaAndroid",
  },
  {
    id: 2,
    title: "ManagePass Application Web",
    description: "Manage Pass est une application sécurisée pour la gestion des mots de passe, permettant aux utilisateurs de stocker et gérer facilement leurs identifiants.",
    techs: ["Angular", "TypeScript", "Html", "Tailwind CSS", "Firebase", "Angular Toastr",],
    thumbnail: "/thumbnails/ManagePassWeb.png",
    githubLink: "https://github.com/chailafarah/ManagePass?tab=readme-ov-file",
    livePreviewLink: "https://poce-my.sharepoint.com/personal/chaimaa_faris_edu_ece_fr/_layouts/15/stream.aspx?id=%2Fpersonal%2Fchaimaa%5Ffaris%5Fedu%5Fece%5Ffr%2FDocuments%2FAttachments%2FCap%202025%2D01%2D09%20at%2016%2E34%2E03%2Emp4&ct=1741616416850&or=OWA%2DNT%2DMail&cid=06eafb9e%2D5bcb%2D100b%2D9fd9%2Dc9ff89032f26&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E60c0587c%2D4399%2D46b3%2D8eee%2Dde4a5f4b0140",
  },
  {
    id: 3,
    title: "Toronto Website - UX/UI Redesign",
    description: "Refonte UX/UI du site de Toronto avec une nouvelle conception moderne et intuitive pour améliorer l'expérience utilisateur et l'accessibilité.",
    techs: ["Figma"],
    thumbnail: "/thumbnails/Toronto-Cupcakes.png",
    figmaLink: "https://www.figma.com/proto/X0JXkOY3uYzdb7YKLHECku/ux-ui?node-id=109-92&t=FTBhCAZkP6DUvnmP-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=109%3A92",
  },
  {
    id: 4,
    title: "Portfolio - UX/UI & Development",
    description: "Conception UX/UI et développement de mon portfolio personnel. Design réalisé sur Figma, puis développé avec Next.js, React et Tailwind CSS pour un style moderne et responsive.",
    techs: ["Figma", "React", "Next.js", "Tailwind CSS", "daisyUI",],
    thumbnail: "/thumbnails/Portfolio.png",
    figmaLink: "https://www.figma.com/design/DkIo0n76OfwANnHyTCmYM1/Untitled?node-id=0-1&p=f&t=dKtoB5kok3JJX9lG-0",
    githubLink: "https://github.com/chailafarah/Portfolio",
  },
  {
    id: 5,
    title: "Application SuiviBudget",
    description: "SuiviBudget c'est une application web qui vous permet de suivie votre budget.",
    techs: ["Figma", "React", "Next.js", "Tailwind CSS", "daisyUI", "Node.js", "Recharts", "MySQL",],
    thumbnail: "/thumbnails/SuiviBudget.png",
    figmaLink: "https://www.figma.com/proto/Y4TER89lrw8svQD2WNtNuF/SuiviBudget?node-id=101-1285&t=gMxvwWPY4jYfaZSd-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=101%3A1285&show-proto-sidebar=1",
  },
];

const ProjectsSection = () => {
  return (
    <section className="text-center mt-[80px] leading-8">
      <h2 className="text-corn-flower-blue text-4xl font-bold">Projects</h2>
      <p className="text-dim-gray mb-8">Un parcours de création où chaque projet est une aventure, pleine de découvertes et de développements passionnants.</p>

      <div>
        {projects.map((project, index) => (
          <div key={project.id} className={
            classNames(
              'md:flex my-6 md:my-24 shadow-sm border border-slate-200 rounded-lg',
              {
                'md:flex-row-reverse': index % 2 === 0
              }
            )}>
            <div className="md:relative md:-my-8 md:p-2.5 md:w-7/12 shrink-0">
              <Image
                src={project.thumbnail}
                width={1920} height={1080}
                alt={`Thumbnail de l'application ${project.title}`}
                className="h-full w-full rounded-md md:rounded-lg object-cover"
              />
            </div>

            <div className="p-6 md:p-12">
              <h4 className="mb-2 text-slate-800 text-3xl font-semibold">{project.title}</h4>
              <p className="mb-8 text-slate-600 leading-normal font-light text-sm">{project.description}</p>
              <p className="mb-8 text-corn-flower-blue text-xs">Technologies: {project.techs.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <header className="md:flex md:flex-row-reverse md:items-center md:justify-between mt-8 md:mt-24 mb-16">
        <Image className="mb-4 w-[200] md:w-[349]" src="/bannerimage.svg" alt="bannerimage" width={349} height={349} />

        <h1 className="text-corn-flower-blue text-3xl md:text-6xl font-bold leading-[1.20]">
          <span className="block">Bonjour👋,</span>
          <span className="block">Je suis</span>
          <span className="block bg-gr bg-clip-text text-transparent">Chaimaa Faris</span>
          <span className="block">Développeuse Full-Stack</span>
        </h1>
      </header>

      <section className="text-center leading-8">
        <h1 className="text-corn-flower-blue text-4xl font-bold">Technologies récentes</h1>
        <p className="text-dim-gray mb-8">Technologies avec lesquelles j&apos;ai récemment travaillé, explorant de nouvelles possibilités pour innover et avancer.</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-12 md:w-[900px] mx-auto place-items-center">
          {["html", "css", "javascript", "drupal", "github", "bootstrap", "tailwind", "react", "NextJs", "sass", "php", "jira", "figma", "angular", "jquery", "docker"].map((tech) => (
            <Image
              key={tech}
              src={`/techs/${tech}.svg`}
              alt={`${tech} skills`}
              width={60}
              height={60}
            />
          ))}
        </div>
      </section>

      <ProjectsSection />
    </div>
  );
}
