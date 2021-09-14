const images = [
    'img/pic (1).jpg',
    'img/pic (2).jpg',
    'img/pic (3).jpg',
    'img/pic (4).jpg',
    'img/pic (5).jpg',
    'img/pic (6).jpg',
    'img/pic (7).jpg'
];

let imageIndex = 0;
const image = document.getElementById('slider-img');

setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    image.setAttribute('src', imgUrl);
    imageIndex++;
}, 1500)