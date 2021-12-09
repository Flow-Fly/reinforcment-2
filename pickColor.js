const pickColor = () => {
	return `rgb(${random()},${random()},${random()})`;
};

let random = () => {
	return Math.floor(Math.random() * 255);
};

export default pickColor;
