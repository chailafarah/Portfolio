import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex items-center justify-between text-blue text-xl font-bold mt-[150px] leading-[1.20] font-poppins"><div>Bonjour👋,
      <p>Je suis</p>
      <p className="bg-text-gradient bg-clip-text text-transparent">Chaimaa Faris</p>
      développeuse full-stack</div><Image src="bannerimage.svg" alt="bannerimage" width={349} height={349}></Image></div>
  );
}
