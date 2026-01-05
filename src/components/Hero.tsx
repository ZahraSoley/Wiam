import hero from "@/assets/hero.png";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const Hero = () => {
    const [cookie, setCookie] = useState(false)
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 1.06]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.65, 1],
        [1, 1, 0.85]
    );

    return (
        <section>
            <motion.div
                ref={heroRef}
                style={{ scale, opacity, backgroundImage: `url(${hero})`, }}
                className="relative mt-17 lg:mt-19 bg-cover w-full aspect-video bg-center bg-no-repeat flex items-center">
                {/* overlay */}
                <div className="block absolute inset-0 bg-black/20 lg:bg-black/10 backdrop-blur-[1px] z-0 pointer-events-none" />

                <div className="lg:ml-10 px-4 py-8 md:p-8 lg:p-20 flex flex-col gap-3.5 md:gap-5 lg:gap-8 md:w-1/2 xl:w-2/5 aspect-square z-10">
                    <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground md:text-accent-foreground  drop-shadow-2xl md:-mt-5 mb-8 flex-col flex gap-2 lg:gap-4">
                        <h1>
                            Digitale <span className="">Transformation</span>
                        </h1>
                        <h1>
                            für Engineering & Labor
                        </h1>
                    </div>
                    <p className="md:text-lg lg:text-xl xl:text-2xl font-medium text-background drop-shadow-2xl">
                        Wir helfen Ihnen das Potential Ihrer Daten zu optimieren,
                        um neue Wertschöpfung für Ihre digitale Transformation zu schaffen!
                    </p>
                    <Button variant='custom' className="w-60 py-5 mt-4 lg:mt-0">Unsere Lösungen ansehen</Button>
                </div>
            </motion.div>

            <button onClick={() => setCookie(!cookie)}
                className="hidden lg:block fixed py-3 px-5 text-background bottom-0 translate-y-8 hover:translate-y-0 transition-transform duration-400 ease-out cursor-pointer right-14 rounded-xs bg-[#092f64] font-medium">
                Zustimmung verwalten
            </button>
            
        </section>
    );
};

export default Hero;
