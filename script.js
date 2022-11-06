const generateImgs = (imgs) => {
	const slide = document.querySelector('[data-slide]')
	imgs.forEach((img) => {
		const li = document.createElement('li')
		const imgTag = document.createElement('img')
		imgTag.setAttribute('src', img)
		li.appendChild(imgTag)
		slide.appendChild(li)
	})

	slide.addEventListener('wheel', (event) => {
		event.deltaY > 0 ? event.target.scrollBy(300, 0) : event.target.scrollBy(-300, 0)
	})
}

const imgs = [
	'https://unsplash.it/1600/400?image=950',
	'https://unsplash.it/1600/400?image=930',
	'https://unsplash.it/1600/400?image=960',
	'https://unsplash.it/1600/400?image=970',
	'https://unsplash.it/1600/400?image=990',
	'https://unsplash.it/1600/400?image=954',
	'https://unsplash.it/1600/400?image=932',
]
window.addEventListener('load', () => generateImgs(imgs))
