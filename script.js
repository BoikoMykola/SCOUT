const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
    const navigate = document.getElementById("navigate");
    document.body.classList.toggle("lock")
    navigate.classList.toggle("active");
    menuIcon.classList.toggle("active")
});


// MENU HIDDEN
let previous = 0;
window.addEventListener("scroll", function () {
    const menu = document.getElementsByClassName("header-container");
    if (pageYOffset > 670 && pageYOffset < previous) {
        document.getElementById("logo").src = "image/SKOUT2.png";
        menu[0].id = "headerContainerFixed";
    } else {
        document.getElementById("logo").src = "image/SKOUT.png";
        menu[0].removeAttribute("id");
    }
    previous = pageYOffset;
});


$(document).ready(function () {

    //  GLOSSARY
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 30000,
        adaptiveHeight: true,
        appendDots: $('.list')
    });

    //  PLANS
    $('.plans').slick({
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 30000,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 4,
                    autoplay: false,
                    centerMode: false,
                    variableWidth: false,
                    infinite: false
                }
            }
        ],
        mobileFirst: true
    });

    //  PARTNERS
    $('.partners-big').slick({
        arrows: false,
        fade: true,
        asNavFor: ".partners"
    });
    $('.partners').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: ".partners-big",
        focusOnSelect: true
    });
});

// what-is block animation
let animItems = document.querySelectorAll(".anim-items");
if(animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("anim-active");
            } else {
                if (!animItem.classList.contains("anim-no-hide")) {
                    animItem.classList.remove("anim-active");
                }   
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}