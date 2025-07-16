export const bitikMap: Record<string, string> = {
	а: '𐰀',
	б: '𐰉', // или выбранный из таблицы
	в: '𐰘',
	г: '𐰍',
	д: '𐰓',
	е: '𐰅',
	ё: '𐰅',
	ж: '𐰐',
	з: '𐰔',
	и: '𐰃',
	й: '𐰃',
	к: '𐰚',
	л: '𐰠',
	м: '𐰢',
	н: '𐰤',
	ң: '𐰧',
	о: '𐰆',
	ө: '𐰇',
	п: '𐰯',
	р: '𐰼',
	с: '𐰽',
	т: '𐱅',
	у: '𐰇',
	ү: '𐰇',
	ф: '𐰪',
	х: '𐰴',
	ц: '𐱁',
	ч: '𐰲',
	ш: '𐱂',
	ы: '𐰃',
	э: '𐰃',
	ю: '𐰇𐰆',
	я: '𐰀𐰃',
	// спец. пары
	'рт': '𐰴𐱅',
	'лт': '𐰠𐱅',
	'нт': '𐰤𐱅',
	'нч': '𐰤𐰲',
};


// transliterateToCyrillic.ts
const latinToCyrillicMap: Record<string, string> = {
	a: 'а',
	b: 'б',
	v: 'в',
	g: 'г',
	d: 'д',
	e: 'е',
	ë: 'ё',
	yo: 'ё',
	zh: 'ж',
	z: 'з',
	i: 'и',
	j: 'й',
	k: 'к',
	l: 'л',
	m: 'м',
	n: 'н',
	ng: 'ң',
	o: 'о',
	ö: 'ө',
	p: 'п',
	r: 'р',
	s: 'с',
	t: 'т',
	u: 'у',
	ü: 'ү',
	f: 'ф',
	h: 'х',
	ch: 'ч',
	sh: 'ш',
	y: 'ы',
	é: 'э',
	yu: 'ю',
	ya: 'я',
};

export const transliterateToCyrillic = (text: string): string => {
	const result = [];
	const lowerText = text.toLowerCase();

	for (let i = 0; i < lowerText.length; ) {
		// Пары букв — сначала проверяем двухсимвольные
		const twoChar = lowerText.slice(i, i + 2);
		const oneChar = lowerText[i];

		if (latinToCyrillicMap[twoChar]) {
			result.push(latinToCyrillicMap[twoChar]);
			i += 2;
		} else if (latinToCyrillicMap[oneChar]) {
			result.push(latinToCyrillicMap[oneChar]);
			i += 1;
		} else {
			result.push(oneChar);
			i += 1;
		}
	}

	return result.join('');
};


export const translateToBitik = (text: string): string => {
	const cyrillic = transliterateToCyrillic(text);
	const result: string[] = [];

	for (let i = 0; i < cyrillic.length; ) {
		const twoChar = cyrillic.slice(i, i + 2);
		const oneChar = cyrillic[i];

		if (bitikMap[twoChar]) {
			result.push(bitikMap[twoChar]);
			i += 2;
		} else if (bitikMap[oneChar]) {
			result.push(bitikMap[oneChar]);
			i += 1;
		} else {
			result.push(oneChar);
			i += 1;
		}
	}

	return result.join('');
};