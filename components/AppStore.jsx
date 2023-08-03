/* eslint-disable react/no-unescaped-entities */
import styles from "@/app/style";
import { apple, iphone13, google } from "@/public/assets";
import Image from "next/image";

const AppStore = () => (
  <section id="product" className="flex items-center">
    <div className="w-full lg:w-1/2">
      <h2 className={styles.heading2}>Precision at Your Fingertips</h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]  mt-5">
        Gone are the days of uncertainty and guesswork when it comes to plant
        care. PlantHealth Pro equips farmers, gardeners, and enthusiasts with a
        precise and reliable system to diagnose plant diseases with utmost
        accuracy. The platform's robust database, built upon years of plant
        health research, enables it to recognize an extensive array of diseases
        and abnormalities across various plant species. Whether it's fungal
        infections, nutrient deficiencies, or pest infestations, PlantHealth
        Pro's technology leaves no stone unturned in identifying potential
        threats to plant health.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="apple"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full green__gradient" />
      {/* gradient end */}
    </div>

    <div className="hidden w-1/2 lg:block">
      <div className="absolute w-1/2 h-[500px] blue__gradient" />
      <Image
        src={iphone13}
        alt="iphone13"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>
  </section>
);

export default AppStore;
