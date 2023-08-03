import styles from "@/app/style";
import { goldBadge, robot } from "@/public/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image
            src={goldBadge}
            alt="goldBadge"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} `}>
            <span className="text-white">#1</span> Product{" "}
            <span className="text-white">of the Day </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            A New Era <br className="sm:block hidden" />
            in
            <span className="text-gradient"> Agriculture.</span>{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With advanced image recognition technology, PlantHealth Pro empowers
          farmers, gardeners, and plant enthusiasts to identify and combat
          diseases affecting their plants with utmost precision and efficiency.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
