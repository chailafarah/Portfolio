"use client";

import Image from 'next/image';
import Obfuscate from 'react-obfuscate';

export function Mailto() {
  return (
    <div className="tooltip" data-tip="Envoyez-moi un petit mot !">
      <Obfuscate
        email="chaimaafaris364@gmail.com"
        headers={{
          subject: 'Petit bonjour !',
        }}>
        <Image className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" src="/logo.svg" alt="Logo" width={100} height={25} />
      </Obfuscate>
    </div>
  )
}