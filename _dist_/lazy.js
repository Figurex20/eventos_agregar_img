const isIntersecting = (entry) => {
	return entry.isIntersecting;
};

const loadImage = (entry) => {
	const container = entry.target;
	const image = container.querySelector('img');
	const url = image.dataset.src;

	image.src = url;

	loadedImages++;
	printLog();

	observer.unobserve(container);
};

const observer = new IntersectionObserver((allElements) => {
	allElements.filter(isIntersecting).map(loadImage);
});

export const registerImage = (imagen) => {
	observer.observe(imagen);
};
