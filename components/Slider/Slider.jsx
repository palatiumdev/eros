"use client"
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const Slider = ({ children }) => {
    const FAST_DURATION = 25;
    const SLOW_DURATION = 30;

    const [duration, setDuration] = useState(FAST_DURATION);
    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "inertia",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "inertia",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [rerender, xTranslation, duration, width]);

    return (
        <div className="py-8 w-[110rem] h-32">
            <motion.div
                className="absolute left-0 flex gap-4"
                style={{ x: xTranslation }}
                ref={ref}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {[...children, ...children].map((slide, index) => (
                    <div key={index} className="mx-8">
                        {slide}
                    </div>
                ))}
            </motion.div>
        </div>
    );

};

export default Slider;

