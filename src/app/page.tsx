import { Button } from "@/components/button/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-row gap-5 content-center items-center justify-center">
      <div className="flex flex-col gap-12 text-white w-1/2 h-full max-md:justify-center">
        <h1 className="text-8xl font-semibold">Welcome to the Blog</h1>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also
        </p>
        <div className="flex flex-row gap-4">
          <Button className="text-base p-5 bg-white text-blue-950 font-bold">
            Button 1
          </Button>
          <Button className="text-base p-5 bg-white text-blue-950 font-bold">
            Button 2
          </Button>
        </div>
      </div>

      <div className="w-1/2 h-full max-md:hidden place-items-center">
        <Image src="/hero.gif" alt="gif homepage" width={500} height={500} />
      </div>
    </div>
  );
};

export default HomePage;
