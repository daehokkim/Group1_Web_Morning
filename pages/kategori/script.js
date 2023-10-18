// Inisiasi variabel carousel 1
let carouselExampleControls1 = new bootstrap.Carousel(document.getElementById('carouselExampleControls1'));
//  Inisiasi variabel small screen carousel 1
let carouselExampleControlsSmallScreen1 = new bootstrap.Carousel(document.getElementById('carouselExampleControlsSmallScreen1'));
// Inisiasi variabel carousel 2
let carouselExampleControls2 = new bootstrap.Carousel(document.getElementById('carouselExampleControls2'));
//  Inisiasi variabel small screen carousel 2
let carouselExampleControlsSmallScreen2 = new bootstrap.Carousel(document.getElementById('carouselExampleControlsSmallScreen2'));
// inisiasi variabel carousel 3
let carouselExampleControls3 = new bootstrap.Carousel(document.getElementById('carouselExampleControls3'));
// inisiasi variabel small screen carousel 3
let carouselExampleControlsSmallScreen3 = new bootstrap.Carousel(document.getElementById('carouselExampleControlsSmallScreen3'));


// Function untuk slide previous di small screen carousel
function slideToPrev(carouselIndex) {
    if (carouselIndex === 1) {
        carouselExampleControlsSmallScreen1.prev();
    } else if (carouselIndex === 2) {
        carouselExampleControlsSmallScreen2.prev();
    }else{
        carouselExampleControlsSmallScreen3.prev();
    }
}

// Function untuk slide next di small screen carousel
function slideToNext(carouselIndex) {
    if (carouselIndex === 1) {
        carouselExampleControlsSmallScreen1.next();
    } else if (carouselIndex === 2) {
        carouselExampleControlsSmallScreen2.next();
    }else{
        carouselExampleControlsSmallScreen3.next();
    }
}