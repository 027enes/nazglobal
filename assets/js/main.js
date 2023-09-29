var swiper = new Swiper(".hFairs", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000, // Geçiş süresi
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".pMadeni", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000, // Geçiş süresi
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});


var swiper = new Swiper(".hSlider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".hSector", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".hNews", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});






let section_counter = document.querySelector('#h-exports');
let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;

        let speed = 100;
        counters.forEach((counter, index) => {
            function UpdateCounter() {
                const targetNumber = +counter.dataset.target;
                const initialNumber = +counter.innerText;
                const incPerCount = targetNumber / speed;
                if (initialNumber < targetNumber) {
                    counter.innerText = Math.ceil(initialNumber + incPerCount);
                    setTimeout(UpdateCounter, 40);
                }
            }
            UpdateCounter();

            if (counter.parentElement.style.animation) {
                counter.parentElement.style.animation = '';
            } else {
                counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
                    index / counters.length + 0.5
                }s`;
            }
        });
        observer.unobserve(section_counter);
    },
    {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
    }
);

CounterObserver.observe(section_counter);