import Link from "next/link";
import Image from 'next/image';

export function Header() {
  return (
    <header className="container px-4 py-8 mx-auto">
      <Link href="/">
        <Image className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" src="/logo.svg" alt="Logo" width={100} height={50} />
      </Link>
    </header>
  )
}