function initializeCarousel(carouselId, prevBtnId, nextBtnId) {
    const slides = document.getElementById(carouselId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    let currentIndex = 0;
    const slideCount = slides.children.length;

    // Get the parent container to resize based on the image
    const carouselContainer = slides.parentElement.parentElement;

    // Function to adjust carousel height based on current slide
    function adjustCarouselHeight() {
        const currentSlide = slides.children[currentIndex];
        const img = currentSlide.querySelector('img');
        if (img.complete) {
            carouselContainer.style.height = img.offsetHeight + 1 + 'px';
            carouselContainer.style.width = img.offsetWidth + 1 + 'px';
            carouselContainer.style.transition = 'height 0.5s, width 0.5s';
        } else {
            // If the image is still loading, adjust height once it finishes loading
            img.onload = () => {
                carouselContainer.style.height = img.offsetHeight + 1 + 'px';
                carouselContainer.style.width = img.offsetWidth + 1 + 'px';
                carouselContainer.style.transition = 'height 0.5s, width 0.5s';
            };
        }
    }

    // Call adjustCarouselHeight initially and after every slide change
    adjustCarouselHeight();

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        adjustCarouselHeight();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        adjustCarouselHeight();
    });
}

initializeCarousel('carouselSlides1', 'prevBtn1', 'nextBtn1');
initializeCarousel('carouselSlides2', 'prevBtn2', 'nextBtn2');
initializeCarousel('carouselSlides3', 'prevBtn3', 'nextBtn3');