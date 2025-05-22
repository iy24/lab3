const images = document.querySelectorAll('figure img');
const overlay = document.querySelector('aside');
const overlayImg = overlay.querySelector('img');

images.forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    });
});

function closeOverlay() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';

}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeOverlay();
});
overlayImg.addEventListener('click', (event) => {
    if (event.target === overlayImg) closeOverlay();
});