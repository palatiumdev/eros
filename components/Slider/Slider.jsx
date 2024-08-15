"use client"
import { motion } from 'framer-motion';

const Slider = ({ children }) => {

    const duplicatedSlides = [...children, ...children];
    //change this value for the distance between the children
    const containerLength = children.length * 20;

    return (
        <div style={{ width: `${containerLength}rem` }}>
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{
                        x: ['-100%', '0%'],
                        transition: {
                            ease: 'linear',
                            duration: 40,
                            repeat: Infinity,
                        }
                    }}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / children.length}%` }}>
                            <div className="flex flex-col items-center justify-center h-full text-6xl">
                                {slide}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Slider;
