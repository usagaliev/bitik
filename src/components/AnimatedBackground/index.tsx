export default function AnimatedBackground({gradientColors}) {
	const style = {
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
