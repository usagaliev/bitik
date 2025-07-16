import {useState} from "react";

interface Props {
	open: boolean;
	onClose: () => void;
}

export default function PassphraseModal({ open, onClose }: Props) {
	const [code, setCode] = useState("");

	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
				<h2 className="text-xl font-semibold mb-4">Введите кодовое слово</h2>
				<input
					type="text"
					value={code}
					onChange={(e) => setCode(e.target.value)}
					className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
					placeholder="например: flower32"
				/>
				<button
					onClick={() => {
						if (code === "flower32") {
							alert("Успешно!");
							onClose();
						} else {
							alert("Неверное слово.");
						}
					}}
					className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
				>
					Проверить
				</button>
			</div>
		</div>
	);
}

