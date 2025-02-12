import "./globals.css";
import Image from 'next/image';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-start container mx-auto mt-8">
        <Image src="/Logo.svg" alt="Logo" width={100} height={50} />
          <ul className="list-none flex gap-6 font-sans text-lg text-gray">
            <li>Home</li>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className="flex gap-2">
          <Image src="/icon-github.svg" alt="icon de github"  width={30}
            height={30}/>
          <Image src="/icon-linkdin.svg" alt="icon de linkdin" width={30}
            height={30} />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
