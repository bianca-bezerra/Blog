import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-row w-full h-full justify-between">
      <div className="relative">
        <Image src="/about.png" alt="about image" height={600} width={600} />
      </div>
      <p>exemplificando texto</p>
    </div>
  );
};

export default AboutPage;
