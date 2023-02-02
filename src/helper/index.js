export const generate_random_MD5 = () => {
	let result = '';
	const characters = '0123456789abcdef';

	for (let i = 0; i < 32; i++) {
		result += characters.charAt(Math.floor(Math.random() * 16));
	}

	return result;
};
