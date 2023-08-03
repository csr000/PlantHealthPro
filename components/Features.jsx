import { leaveMagnifier } from "@/public/assets";
import styles from "@/app/style";
import Button from "./Button";
import Image from "next/image";

const Features = () => (
  <section id="features" className="flex items-center mb-20 lg:mb-36">
    <div className="hidden w-1/2 mr-10 lg:block">
      <Image
        src={leaveMagnifier}
        alt="leaveMagnifier"
        className="w-[100%] h-[100%]"
      />
    </div>

    <div className="w-full mt-10 lg:w-1/2">
      <h2 className={styles.heading2}>
        Revolutionizing Plant Health Management
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Time is of the essence when it comes to combatting plant diseases.
        PlantHealth Pro streamlines the process of diagnosis and intervention,
        maximizing efficiency and minimizing the risk of extensive damage to
        crops or gardens. By eliminating the need for laborious manual
        inspections, PlantHealth Pro allows users to act swiftly, providing a
        significant advantage in containing diseases before they spread.
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Features;
