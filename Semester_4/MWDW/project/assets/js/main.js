$(document).ready(function() {
    // Hero Section Slider
    let currentSlide = 0;
    const slides = [
        {
            image: 'assets/images/hero1.jpg',
            title: 'Summer Collection 2024',
            description: 'Discover the latest trends in summer fashion'
        },
        {
            image: 'assets/images/hero2.jpg',
            title: 'Spring Essentials',
            description: 'Refresh your wardrobe with spring styles'
        },
        {
            image: 'assets/images/hero3.jpg',
            title: 'Accessories Collection',
            description: 'Complete your look with our latest accessories'
        }
    ];

    function updateSlide() {
        const slide = slides[currentSlide];
        $('.slide img').fadeOut(400, function() {
            $(this).attr('src', slide.image).fadeIn(400);
        });
        $('.slide-content h1').fadeOut(400, function() {
            $(this).text(slide.title).fadeIn(400);
        });
        $('.slide-content p').fadeOut(400, function() {
            $(this).text(slide.description).fadeIn(400);
        });
    }

    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 5000);

    // Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = $('<button>', {
        class: 'mobile-menu-btn',
        html: '<i class="fas fa-bars"></i>'
    }).insertBefore('.main-nav');

    mobileMenuBtn.click(function() {
        $('.main-nav').toggleClass('active');
    });

    // Search Functionality
    $('.search-bar button').click(function() {
        const searchQuery = $('.search-bar input').val().toLowerCase();
        // Add your search logic here
        console.log('Searching for:', searchQuery);
    });

    // Dynamic Product Loading
    const products = [
        {
            image: 'assets/images/product1.jpg',
            title: 'Summer Dress',
            price: '$59.99',
            description: 'Elegant summer dress perfect for any occasion'
        },
        // Add more products as needed
    ];

    function loadProducts() {
        const productGrid = $('.product-grid');
        products.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">${product.price}</p>
                    <p>${product.description}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            productGrid.append(productCard);
        });
    }

    loadProducts();

    // Smooth Scrolling for Navigation Links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });
});