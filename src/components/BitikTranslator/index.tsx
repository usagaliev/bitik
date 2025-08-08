import React, { useState } from 'react';
import {translateToBitik} from "./utils.ts";
import {BitikCanvas} from "./BitikCanvas";
import tshirtWhite from '../../assets/content/white_tshirt.png';
import {Box} from "@chakra-ui/react"; // путь к PNG с футболкой

export const BitikTranslator: React.FC = () => {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInput(value);
		setOutput(translateToBitik(value));
	};

	return (
		<div
			className="relative min-h-screen bg-brandPurple flex flex-col items-center justify-center text-center px-4"
			style={{fontFamily: 'monospace', padding: '1rem'}}
		>
			<div
				style={{
					background: '#fff3cd',
					color: '#856404',
					border: '1px solid #ffeeba',
					borderRadius: '8px',
					padding: '10px 14px',
					marginBottom: '16px',
					fontSize: '14px',
				}}
			>
				⚠️ Это не является официальным переводом. Символы битик подбираются по принципу приближённого соответствия
				с древнетюркскими рунами. Используйте для личных, культурных или творческих целей, а не для научных работ.
			</div>
			<Box>
				<h2>🔠 Переводчик в битик</h2>
				<input
					type="text"
					placeholder="Введите слово"
					value={input}
					onChange={handleChange}
					maxLength={40}
					style={{
						padding: '0.5rem',
						width: '100%',
						fontSize: '1.2rem',
						marginBottom: '1rem',
						border: '1px solid #ccc',
					}}
				/>
                        </Box>
			<div>
				<div style={{fontSize: '2rem', marginTop: '0.5rem'}}>{output}</div>
			</div>
			<BitikCanvas bitikText={output} tshirtImage={tshirtWhite as never}/>
		</div>
	);
};
