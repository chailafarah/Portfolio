import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "ManagePass App Android",
    description:
      "Manage Pass est une application sécurisée pour la gestion des mots de passe, permettant aux utilisateurs de stocker et gérer facilement leurs identifiants.",
    technologies: "Technologies: kotlin, Android Studio, Firebase, Figma",
    imageSrc: "ManagePassAndroid.png",
    figmaLink: "https://www.figma.com/design/CGJMt8hGIVfcnMVYJUHCL4/App-Mobile?node-id=0-1&p=f&t=Q2jgNdjWgKxx7Jxe-0",
    githubLink: "https://github.com/chailafarah/ManagePassaAndroid",
  },
  {
    id: 2,
    title: "ManagePass Application Web",
    description: "Manage Pass est une application sécurisée pour la gestion des mots de passe, permettant aux utilisateurs de stocker et gérer facilement leurs identifiants.",
    technologies: "Technologies: Angular, TypeScript, Html, tailwindcss, Firebase, Ngx-toastr",
    imageSrc: "ManagePassWeb.png",
    githubLink: "https://github.com/chailafarah/ManagePass?tab=readme-ov-file",
    livePreviewLink: "https://poce-my.sharepoint.com/personal/chaimaa_faris_edu_ece_fr/_layouts/15/stream.aspx?id=%2Fpersonal%2Fchaimaa%5Ffaris%5Fedu%5Fece%5Ffr%2FDocuments%2FAttachments%2FCap%202025%2D01%2D09%20at%2016%2E34%2E03%2Emp4&ct=1741616416850&or=OWA%2DNT%2DMail&cid=06eafb9e%2D5bcb%2D100b%2D9fd9%2Dc9ff89032f26&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E60c0587c%2D4399%2D46b3%2D8eee%2Dde4a5f4b0140",
  },
  {
    id: 3,
    title: "Toronto Website - UX/UI Redesign",
    description: "Refonte UX/UI du site de Toronto avec une nouvelle conception moderne et intuitive pour améliorer l'expérience utilisateur et l'accessibilité.",
    technologies: "Technologie: Figma",
    imageSrc: "Toronto-Cupcakes.png",
    figmaLink: "https://www.figma.com/design/X0JXkOY3uYzdb7YKLHECku/ux-ui?node-id=109-92&t=qQduTtOxxTpOYC1y-0",
  },
  {
    id: 4,
    title: "Portfolio - UX/UI & Development",
    description: "Conception UX/UI et développement de mon portfolio personnel. Design réalisé sur Figma, puis développé avec Next.js, React et TailwindCss pour un style moderne et responsive.",
    technologies: "Technologies: Figma, React, Next.js, TailwindCss, DazyUI",
    imageSrc: "Portfolio.png",
    figmaLink: "https://www.figma.com/design/DkIo0n76OfwANnHyTCmYM1/Untitled?node-id=0-1&p=f&t=dKtoB5kok3JJX9lG-0",
    githubLink: "https://github.com/chailafarah/Portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section className="text-center mt-[80px]">
      <h1 className="text-blue text-4xl font-bold">Projects</h1>
      <p className="text-gray mb-8">Exploration et création à travers mes projets</p>
      <div className="grid grid-cols-4">
        {projects.map((project) => (
          <div key={project.id} className="card card-compact bg-base-100 shadow-xl m-4">
            <figure>
              <img src={project.imageSrc} alt={`Image de l'application ${project.title}`} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base font-medium">{project.title}</h2>
              <p className="text-gray text-xs">{project.description}</p>
              <p className="text-blue text-xs">{project.technologies}</p>
              <div className="card-actions flex justify-between mt-4">
                <a
                  className="link link-neutral flex"
                  href={project.figmaLink ? project.figmaLink : project.livePreviewLink}
                  target="_blank"
                >
                  <img
                    src={project.figmaLink ? "Figma-icon.png" : "LivePreview-icon.svg"} 
                    alt={project.figmaLink ? "Figma UI Design" : "Aperçu en Direct"}
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                    {project.figmaLink ? 'Voir Figma' : 'Voir Aperçu'}
                </a>
                {
                 project.githubLink && (
                <a className="link link-neutral flex" href={project.githubLink} target="_blank">
                  <img
                    src="github.svg"
                    alt="Github Code"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Voir Github
                </a>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

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
        <h1 className="text-blue text-4xl font-bold">Technos récentes</h1>
        <p className="text-gray">Technologies I’ve been working with recently</p>
        <div className="grid grid-cols-6 gap-12 mt-[90px] max-w-[800px] mx-auto place-items-center">
          {["html", "css", "javascript", "drupal", "github", "bootstrap", "tailwind", "react", "NextJs", "sass", "php", "jira", "figma", "angular", "jquery", "docker"].map((tech) => (
            <Image
              key={tech}
              src={`/${tech}.svg`}
              alt={`${tech} skills`}
              width={iconSize}
              height={iconSize}
            />
          ))}
        </div>
      </section>

      <ProjectsSection /> { }
    </div>
  );
}
