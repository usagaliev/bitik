import { motion } from "framer-motion";
import {ResponsiveImage} from "../ResponsiveImage";

interface ContentData {
        name?: string;
        story?: string;
        photos?: string[];
        location?: string;
        mediaLink?: string;
}

interface ContentProps {
        data: ContentData;
}

export default function Content({ data }: ContentProps) {
        const { name, story, photos = [], location, mediaLink } = data;

	return (
		<motion.div
			className="max-w-4xl mx-auto px-6 py-12 space-y-10 z-0"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<h1 className="text-4xl font-bold text-center text-gray-900">
				🌍 Мой Мир: {name || "Безымянный"}
			</h1>

			{/* История */}
			{story && (
				<section className="bg-gray-50 p-6 rounded-xl shadow-sm">
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">
						История / Манифест
					</h2>
					<p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{story}</p>
				</section>
			)}

			{/* Галерея Фото */}
			<section>

			{photos?.length > 0 ? (
				<div>
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">Фото / Арт</h2>
					<div className="grid grid-cols-3 gap-4">
						<div className="col-span-2 aspect-[4/3] relative rounded-xl overflow-hidden shadow-md">
							<ResponsiveImage
								src={photos?.[0]}
								alt="Main photo"
							/>
						</div>
						<div className="flex flex-col gap-4">
							{photos?.[1] ? (
								<div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-md">
									<ResponsiveImage
										src={photos[1]}
										alt="Small photo 1"
									/>
								</div>
							) : null}
							{photos?.[2] ? (
								<div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-md">
									<ResponsiveImage
										src={photos[2]}
										alt="Small photo 2"
									/>
								</div>
							) : null}
						</div>
					</div>
				</div>
			) : null}
			</section>


			{/* Местоположение */}
			{location && (
				<section className="bg-gray-50 p-6 rounded-xl shadow-sm">
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">
						Местоположение
					</h2>
					<p className="text-gray-700">{location}</p>
				</section>
			)}

			{/* Музыка / Видео */}
			{mediaLink && (
				<section>
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">Музыка / Видео</h2>
					<div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
						<iframe
							src={mediaLink.replace("watch?v=", "embed/")}
							className="w-full h-full"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="User media"
						/>
					</div>
				</section>
			)}

			{/* Кнопка магазина */}
			<div className="text-center">
				<button className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition">
					Купить такую же футболку
				</button>
			</div>
		</motion.div>
	);
}
