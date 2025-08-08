import type { CSSProperties } from 'react';

interface GradientColors {
        brandPurple: string;
        brandPink: string;
        brandYellow: string;
}

interface AnimatedBackgroundProps {
        gradientColors: GradientColors;
}

export default function AnimatedBackground({gradientColors}: AnimatedBackgroundProps) {
        const style: CSSProperties = {
                backgroundImage: `linear-gradient(to bottom right, ${gradientColors.brandPurple}, ${gradientColors.brandPink}, ${gradientColors.brandYellow})`,
                backgroundSize: '200% 200%',
                animation: 'gradientMove 8s ease infinite',
                position: 'fixed',
                inset: 0,
                zIndex: -10,
        };
        return (
                <div style={style} />
        );
}
