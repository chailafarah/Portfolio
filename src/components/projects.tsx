import classNames from "classnames";
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "ManagePass App Android",
    description:
      "Manage Pass est une application sécurisée pour la gestion des mots de passe, permettant aux utilisateurs de stocker et gérer facilement leurs identifiants.",
    techs: ["Kotlin", "Android Studio", "Firebase", "Figma",],
    thumbnail: "/thumbnails/ManagePassAndroid.png",
    figma: "https://www.figma.com/design/CGJMt8hGIVfcnMVYJUHCL4/App-Mobile?node-id=0-1&p=f&t=Q2jgNdjWgKxx7Jxe-0",
    github: "https://github.com/chailafarah/ManagePassaAndroid",
  },
  {
    id: 2,
    title: "ManagePass Application Web",
    description: "Manage Pass est une application sécurisée pour la gestion des mots de passe, permettant aux utilisateurs de stocker et gérer facilement leurs identifiants.",
    techs: ["Angular", "TypeScript", "Html", "Tailwind CSS", "Firebase", "Angular Toastr",],
    thumbnail: "/thumbnails/ManagePassWeb.png",
    github: "https://github.com/chailafarah/ManagePass",
  },
  {
    id: 3,
    title: "Toronto Website - UX/UI Redesign",
    description: "Refonte UX/UI du site de Toronto avec une nouvelle conception moderne et intuitive pour améliorer l'expérience utilisateur et l'accessibilité.",
    techs: ["Figma"],
    thumbnail: "/thumbnails/Toronto-Cupcakes.png",
    figma: "https://www.figma.com/proto/X0JXkOY3uYzdb7YKLHECku/ux-ui?node-id=109-92&t=FTBhCAZkP6DUvnmP-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=109%3A92",
  },
  {
    id: 4,
    title: "Portfolio - UX/UI & Development",
    description: "Conception UX/UI et développement de mon portfolio personnel. Design réalisé sur Figma, puis développé avec Next.js, React et Tailwind CSS pour un style moderne et responsive.",
    techs: ["Figma", "React", "Next.js", "Tailwind CSS", "daisyUI",],
    thumbnail: "/thumbnails/Portfolio.png",
    figma: "https://www.figma.com/community/file/1484138327617950624/chailas",
    github: "https://github.com/chailafarah/Portfolio",
  },
  {
    id: 5,
    title: "Application SuiviBudget",
    description: "SuiviBudget c'est une application web qui vous permet de suivie votre budget.",
    techs: ["Figma", "React", "Next.js", "Tailwind CSS", "daisyUI", "Node.js", "Recharts", "MySQL",],
    thumbnail: "/thumbnails/SuiviBudget.png",
    figma: "https://www.figma.com/community/file/1481791994232134079/suivibudget",
  },
];

export function Projects() {
  return (
    <section className="text-center mt-[80px]">
      <h2 className="text-corn-flower-blue text-4xl font-bold dark:text-white">Projects</h2>
      <p className="text-dim-gray mt-2 mb-8 dark:text-gray-400">Un parcours de création où chaque projet est une aventure, pleine de découvertes <br/>et de développements passionnants.</p>

      <div>
        {projects.map((project, index) => (
          <div key={project.id} className={
            classNames(
              'lg:flex my-6 md:my-24 shadow-sm border border-slate-200 rounded-lg',
              {
                'lg:flex-row-reverse': index % 2 === 0
              }
            )}>
            <div className="md:relative md:-my-8 md:p-2.5 lg:w-7/12 shrink-0">
              <Image
                src={project.thumbnail}
                width={1920} height={1080}
                alt={`Thumbnail de l'application ${project.title}`}
                className="h-full w-full rounded-md md:rounded-lg object-cover"
              />
            </div>

            <div className="p-6 md:p-12">
              <h4 className="mb-2 text-slate-800 text-3xl font-semibold dark:text-white">{project.title}</h4>
              <p className="mb-8 text-slate-600 leading-normal font-light text-sm dark:text-white">{project.description}</p>
              <p className="mb-8 text-corn-flower-blue text-xs dark:text-white">Technologies : {project.techs.join(", ")}</p>
              <div className="gap-3 inline-flex flex-col">
                {project.figma && (
                  <a className="gap-2 inline-flex items-center justify-center rounded-full px-8 py-1 ring-1 ring-gray-950/10 hover:ring-gray-950/20" href={project.figma} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
                    <span>Figma</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>)}
                {project.github && (
                  <a className="gap-2 inline-flex items-center justify-center rounded-full px-8 py-1 ring-1 ring-gray-950/10 hover:ring-gray-950/20" href={project.github} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section >

  );
};
