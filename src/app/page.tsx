import { Button } from "@/components/button/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-row content-center items-center">
      <div className="flex flex-col gap-12 text-white w-1/2 h-full max-md:justify-center max-md:w-full">
        <h1 className="text-7xl font-semibold">
          Very big large title for the homepage
        </h1>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <Button className="text-base p-8 bg-white text-blue-950 font-bold">
              Button 1
            </Button>
            <Button className="text-base p-8 bg-white text-blue-950 font-bold">
              Button 2
            </Button>
          </div>
          <div className="flex flex-row w-full grayscale">
            <Image src="/brands.png" width={1000} height={100} alt="brands" />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full max-md:hidden items-center justify-center">
        <Image
          className="place-self-center"
          src="/hero.gif"
          alt="gif homepage"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default HomePage;
