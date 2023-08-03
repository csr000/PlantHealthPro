import { feedback } from "../constants";
import styles from "@/app/style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w  -[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center md:flex-row flex-col relative z-[1]">
      <h2 className="font-poppins font-semibold mt-10 xs:text-[48px] text-[35px] text-white xs:leading-[76.8px] leading-[66.8px]">
        Public Sentiments About Our App
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
