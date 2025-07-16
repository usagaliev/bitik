import React, { useState } from 'react';
import {transliterateToBitik} from "./utils.ts";
import {BitikCanvas} from "./BitikCanvas";
import tshirtWhite from '../../assets/content/white_tshirt.png'; // путь к PNG с футболкой

export const BitikTranslator: React.FC = () => {
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInput(value);
		setOutput(transliterateToBitik(value));
	};

	return (
		<div
			className="relative min-h-screen bg-brandPurple flex flex-col items-center justify-center text-center px-4"
			style={{ fontFamily: 'monospace', padding: '1rem' }}
		>
			<h2>🔠 Переводчик в битик</h2>
			<input
				type="text"
				placeholder="Введите слово (например: Урмат)"
				value={input}
				onChange={handleChange}
				style={{
					padding: '0.5rem',
					width: '100%',
					fontSize: '1.2rem',
					marginBottom: '1rem',
				}}
			/>
			<div>
				<strong>Битик:</strong>
				<div style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{output}</div>
			</div>
			<BitikCanvas bitikText={output} tshirtImage={tshirtWhite as never} />
		</div>
	);
};
