import { registerImage } from './lazy.js';

const appNod = document.querySelector('#app');
const addButton = document.querySelector('#add');
const cleanButton = document.querySelector('#clean');

const newNumber = () => {
	const number = Math.floor(Math.random() * (122 - 1)) + 1;
	return number;
};

const createImagen = () => {
	const container = document.createElement('div');
	container.className = 'p-4';

	const imagen = document.createElement('img');
	imagen.className = 'mx-auto';
	imagen.width = '320';
	imagen.dataset.src = `https://randomfox.ca/images/${newNumber()}.jpg`;

	const imageWrapper = document.createElement('div');
	imageWrapper.className = 'bg-gray-300';
	imageWrapper.style.minHeight = '100px';
	imageWrapper.style.display = 'inline-block';

	imageWrapper.append(imagen);
	container.append(imageWrapper);

	appendedImages++;
	printLog();

	return container;
};

const addNewImagen = () => {
	const newImage = createImagen();
	appNod.append(newImage);
	registerImage(newImage);
};
addButton.addEventListener('click', addNewImagen);

const cleanImages = () => {
	[...appNod.childNodes].map((child) => {
		child.remove();
	});
	appendedImages = 0;
	loadedImages = 0;
};
cleanButton.addEventListener('click', cleanImages);
