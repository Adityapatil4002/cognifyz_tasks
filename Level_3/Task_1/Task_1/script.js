const thumbnails = document.querySelectorAll('.thumbnail');
const overlay = document.getElementById('overlay');
const enlargedImage = document.getElementById('enlargedImage');
const caption = document.getElementById('image-caption');
let currentImageIndex = 0;

const images = [
    { src: './auto-2179220_1280.jpg', caption: 'Vehicles' },
    { src: './house-409451_1280.jpg', caption: 'Real Estate' },
    { src: './nature-7720825_1280.jpg', caption: 'Nature' },
    { src: './ural-owl-8418249_1280.jpg', caption: 'Birds' },
    { src: './watch-7433126_1280.jpg', caption: 'Luxury Watches' },
    { src: './wolf-8089783_1280.jpg', caption: 'Animals' }
];

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        currentImageIndex = index;
        showImage(currentImageIndex);
    });
});

function showImage(index) {
    enlargedImage.src = images[index].src;
    caption.textContent = images[index].caption;
    overlay.style.display = 'flex';
}

function closeImage() {
    overlay.style.display = 'none';
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    showImage(currentImageIndex);
}
