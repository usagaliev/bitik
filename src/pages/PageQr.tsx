import { useParams } from "react-router-dom";
import {useState} from "react";
import type {JSX} from "react";
import PassphraseModal from "../components/PassphraseModal";
import Content from "../components/Content";
import {RegularBackground} from "../components/RegularBackground";
import bg from "../assets/content/bg.png";

const mockData = {
	abc123: {
		title: "Футболка #23",
		description: "Секретная футболка с котом",
		requiresPassphrase: true,
	},
	test456: {
		title: "Футболка без защиты",
		description: "Доступ без кода",
		requiresPassphrase: false,
	},
};

export default function QrPage(): JSX.Element | null {
	const { id } = useParams();
	const data = mockData[id as keyof typeof mockData];
	console.log(id, 'id');

	const [modalOpen, setModalOpen] = useState(false);

	if (!data) return <div>Ничего не найдено</div>;

	const gradientColors = {
		brandPurple: '#8362f3',
		brandPink: '#FF6F91',
		brandYellow: '#e79823',
		brandGray: '#DFDFDF',
	}

	const contentData = {
		name: "Урмат",
		story: "Когда мне было 12, я написал свой первый код...",
		photos: [
			bg,
			"/images/side1.jpg",
			"/images/side2.jpg"
		],
		location: "Бишкек, Кыргызстан",
		mediaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
	};

	return (
		<div
			className="relative min-h-screen bg-brandPurple text-white flex flex-col items-center justify-center text-center px-4"
			style={{backgroundColor: gradientColors.brandGray, zIndex: 0}}
		>
			<div style={{fontFamily: 'Rosarium, sans-serif', zIndex: 999}}>
				Привет, Бишкек! Hello, Bishkek!
			</div>
                        {/*<AnimatedBackground gradientColors={gradientColors} />*/}
			<RegularBackground/>

			<h1 className="text-4xl text-white font-bold drop-shadow-lg mb-2">{data.title}</h1>
			<p className="text-lg opacity-90 mb-4">{data.description}</p>

			{data.requiresPassphrase && (
				<PassphraseModal open={modalOpen} onClose={() => setModalOpen(false)}/>
			)}

			<Content data={contentData}/>
		</div>
	);

}
