import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    theme?: 'dusk' | 'dawn';
    onClick?: () => void;
}

export const GlowCard = ({ children, className = '', theme = 'dawn', onClick }: GlowCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const isDusk = theme === 'dusk';

    // Define gradients based on theme - Increased opacity for Dawn visibility
    const glowGradient = isDusk
        ? `radial-gradient(550px circle at ${mouseX}px ${mouseY}px, rgba(255, 107, 61, 0.15), transparent 80%)`
        : `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(34, 197, 94, 0.4), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), transparent 80%)`;

    return (
        <motion.div
            className={`relative overflow-hidden group ${className}`}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={onClick}
        >
            {/* Interactive Glow Effect */}
            <motion.div
                className="absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{
                    background: useMotionTemplate`${glowGradient}`
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};
