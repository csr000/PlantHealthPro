import { stats } from "../constants";
import styles from "@/app/style";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1, bounce: 0.5 },
      });
    } else {
      animation.start({ y: "100px", opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <motion.div
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20  mt-20`}
      animate={animation}
      ref={ref}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default Stats;
