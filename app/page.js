"use client";
import {
  AppStore,
  CTA,
  Features,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "@/components";
import styles from "./style";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden lg:px-20">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Features />
          <AppStore />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
