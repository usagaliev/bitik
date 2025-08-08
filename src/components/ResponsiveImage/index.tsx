import clsx from 'clsx';

export const ResponsiveImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
	<img
		src={src}
		alt={alt}
		className={clsx("w-full h-full object-cover rounded-xl", className)}
		loading="lazy"
	/>
);