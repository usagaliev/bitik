import React, { useRef, useEffect, useState } from 'react';
import {
	Box,
	Button,
	Flex,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Input,
	Text,
} from '@chakra-ui/react';
import {useWindowWidth} from "@/hooks/useWindowWidth.tsx";

interface BitikCanvasProps {
	bitikText: string;
	tshirtImage: string;
}

export const BitikCanvas: React.FC<BitikCanvasProps> = ({ bitikText, tshirtImage }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [textPos, setTextPos] = useState({ x: 250, y: 215 });
	const [isDragging, setIsDragging] = useState(false);
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [fontSize, setFontSize] = useState(40);
	const [textColor, setTextColor] = useState('#000000');
	const imgRef = useRef<HTMLImageElement | null>(null);
	const { width } = useWindowWidth();

	useEffect(() => {
		setFontSize(width > 560 ? 40 : 20);
		setTextPos({
			x: width > 560 ? 250 : 150,
			y: width > 560 ? 215 : 115,
		});
	}, [width]);

	const collectData = () => ({
		bitikText,
		fontSize,
		textColor,
		textPos,
		tshirtImage,
	});

	const handleDownload = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const link = document.createElement('a');
		link.download = 'bitik-tshirt.png';
		link.href = canvas.toDataURL('image/png');
		link.click();
	};

	const draw = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		canvas.width = width > 560 ? 500 : 300;
		canvas.height = width > 560 ? 500 : 300;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const img = imgRef.current;
		if (img) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		ctx.font = `bold ${fontSize}px "Segoe UI Symbol", serif`;
		ctx.fillStyle = textColor;
		ctx.textAlign = 'center';
		ctx.fillText(bitikText, textPos.x, textPos.y);

		collectData(); // could be sent to backend later
	};

	useEffect(() => {
		const img = new Image();
		img.src = tshirtImage;
		img.onload = () => {
			imgRef.current = img;
			draw();
		};
	}, [tshirtImage]);

	useEffect(() => {
		draw();
	}, [textPos, fontSize, textColor]);

	const getEventCoords = (e: React.MouseEvent | React.TouchEvent) => {
		const rect = canvasRef.current?.getBoundingClientRect();
		if (!rect) return { x: 0, y: 0 };
		if ('touches' in e) {
			const touch = e.touches[0];
			return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
		}
		return { x: e.clientX - rect.left, y: e.clientY - rect.top };
	};

	const startDrag = (x: number, y: number) => {
		const textWidth = 200;
		const textHeight = fontSize;
		if (
			x >= textPos.x - textWidth / 2 &&
			x <= textPos.x + textWidth / 2 &&
			y >= textPos.y - textHeight &&
			y <= textPos.y
		) {
			setIsDragging(true);
			setOffset({ x: x - textPos.x, y: y - textPos.y });
		}
	};

	const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
		e.preventDefault();
		const { x, y } = getEventCoords(e);
		startDrag(x, y);
	};

	const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
		if (!isDragging) return;
		e.preventDefault();
		const { x, y } = getEventCoords(e);
		setTextPos({ x: x - offset.x, y: y - offset.y });
	};

	const handleEnd = () => setIsDragging(false);

	return (
		<Box>
			<Flex
				mt={4}
				gap={4}
				flexWrap="wrap"
				align="center"
				justify="flex-start"
			>
				<Flex direction="column" align="flex-start">
					<Text fontSize="sm" fontWeight="medium">
						Цвет текста:
					</Text>
					<Input
						type="color"
						value={textColor}
						onChange={(e) => setTextColor(e.target.value)}
						width="3rem"
						padding="0"
						border="none"
						bg="transparent"
						className='text-base'
					/>
				</Flex>

				<Flex direction="column" minW="200px">
					<Text fontSize="sm" fontWeight="medium">
						Размер текста: {fontSize}px
					</Text>
					<Slider
						aria-label="font-size-slider"
						min={10}
						max={100}
						step={1}
						value={fontSize}
						onChange={(val) => setFontSize(val)}
					>
						<SliderTrack>
							<SliderFilledTrack />
						</SliderTrack>
						<SliderThumb />
					</Slider>
				</Flex>

				<Button onClick={draw}>🖨 Нанести битик</Button>
				<Button onClick={handleDownload} colorScheme="blue">
					📥 Скачать
				</Button>
			</Flex>

			<Box
				mt={4}
				border="1px solid #ccc"
				w="100%"
				h="auto"
				overflow="hidden"
				backgroundColor='#f9f9f9'
				align="center"
				justify="center"
			>
				<canvas
					ref={canvasRef}
					style={{
						touchAction: 'none',
						cursor: isDragging ? 'grabbing' : 'grab',
					}}
					onMouseDown={handleStart}
					onMouseMove={handleMove}
					onMouseUp={handleEnd}
					onMouseLeave={handleEnd}
					onTouchStart={handleStart}
					onTouchMove={handleMove}
					onTouchEnd={handleEnd}
				/>
			</Box>
		</Box>
	);
};
