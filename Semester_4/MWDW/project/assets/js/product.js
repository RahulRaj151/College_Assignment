$(document).ready(function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Sample product data (in real application, this would come from a database)
    const productData = {
        id: 1,
        name: "Summer Floral Dress",
        price: 89.99,
        description: "Beautiful floral summer dress perfect for any occasion",
        sizes: ["XS", "S", "M", "L"],
        images: [
            "https://example.com/dress1.jpg",
            "https://example.com/dress1-2.jpg",
            "https://example.com/dress1-3.jpg"
        ],
        details: {
            material: "100% Cotton",
            care: "Machine wash cold",
            features: ["Adjustable straps", "Side pockets", "Lined"]
        },
        shipping: "Free shipping on orders over $50"
    };

    // Populate product details
    function loadProductDetails() {
        $('#product-name').text(productData.name);
        $('#product-price').text(`$${productData.price}`);
        $('#product-description').text(productData.description);
        $('#main-product-image').attr('src', productData.images[0]);

        // Load thumbnail gallery
        const thumbnailGallery = $('.thumbnail-gallery');
        productData.images.forEach((image, index) => {
            const thumbnail = $(`
                <div class="thumbnail${index === 0 ? ' active' : ''}">
                    <img src="${image}" alt="Product view ${index + 1}">
                </div>
            `);
            thumbnailGallery.append(thumbnail);
        });

        // Load size options
        const sizeOptions = $('#size-options');
        productData.sizes.forEach(size => {
            const sizeButton = $(`
                <button class="size-option">${size}</button>
            `);
            sizeOptions.append(sizeButton);
        });

        // Load tab content
        loadTabContent();
    }

    // Tab functionality
    function loadTabContent() {
        const tabContent = {
            description: productData.description,
            details: `
                <h4>Material</h4>
                <p>${productData.details.material}</p>
                <h4>Care Instructions</h4>
                <p>${productData.details.care}</p>
                <h4>Features</h4>
                <ul>
                    ${productData.details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `,
            shipping: `
                <p>${productData.shipping}</p>
                <p>Estimated delivery: 3-5 business days</p>
            `
        };

        // Set initial tab content
        $('.tab-content').html(tabContent.description);

        // Tab switching
        $('.tab-header').click(function() {
            $('.tab-header').removeClass('active');
            $(this).addClass('active');
            const tab = $(this).data('tab');
            $('.tab-content').html(tabContent[tab]);
        });
    }

    // Quantity controls
    $('#increase-quantity').click(function() {
        const input = $('#quantity');
        input.val(parseInt(input.val()) + 1);
    });

    $('#decrease-quantity').click(function() {
        const input = $('#quantity');
        const value = parseInt(input.val());
        if (value > 1) {
            input.val(value - 1);
        }
    });

    // Thumbnail gallery functionality
    $(document).on('click', '.thumbnail', function() {
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
        const newImage = $(this).find('img').attr('src');
        $('#main-product-image').attr('src', newImage);
    });

    // Add to cart functionality
    $('.add-to-cart-btn').click(function() {
        const selectedSize = $('.size-option.selected').text();
        const quantity = $('#quantity').val();
        
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }

        // Add to cart logic here
        alert(`Added ${quantity} ${productData.name}(s) - Size: ${selectedSize} to cart`);
    });

    // Size selection
    $(document).on('click', '.size-option', function() {
        $('.size-option').removeClass('selected');
        $(this).addClass('selected');
    });

    // Initialize product details
    loadProductDetails();
});