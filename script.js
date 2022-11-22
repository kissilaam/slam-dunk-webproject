let imgIndex = 0
getImage()

function getImage() {
	let charImg = document.getElementsByClassName('character-img')
	for (let i = 0; i < charImg.length; i++) {
		charImg[i].style.display = 'none'
	}
	imgIndex++
	if (imgIndex > charImg.length) imgIndex = 1
	charImg[imgIndex - 1].style.display = 'block'
	setTimeout(getImage, 3000)
}
