document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.dropdown a');
    const products = document.querySelectorAll('.product');

    menuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');

            products.forEach(product => {
                if (category === 'all') {
                    product.style.display = 'block';
                } else if (product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
    const ourStoryLink = document.querySelector('a[href="#about-us"]');
    
    if (ourStoryLink) {
        ourStoryLink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.querySelector('#about-us');
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    if (!window.location.pathname.includes('index.html') && window.location.hash === '#about-us') {
        window.location.href = 'index.html#about-us';
    }
    
});
