function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
}

function selectOption(option) {
    document.getElementById("dropdownButton").innerText = option;
    toggleDropdown();
}

window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton') && !event.target.closest('#dropdownMenu')) {
        document.getElementById("dropdownMenu").classList.add("hidden");
    }
};

const navbar = document.querySelector("nav");

let lastScrollTop = 0;
function handleNavbarScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        navbar.classList.add("shadow-md", "navbar-bg");
        navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("shadow-md", "navbar-bg");
    }

    if (scrollTop > lastScrollTop) {
        navbar.style.transform = "translateY(-150%)";
    } else {
        navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
}


function toggleFullscreen() {
    const card = document.getElementById("fullscreenCard");
    const extraContent = document.getElementById("extraContent");
    const extraContent2 = document.getElementById("extraContent-2");

    card.classList.toggle("fixed");
    card.classList.toggle("top-0");
    card.classList.toggle("left-0");
    card.classList.toggle("z-50");
    card.classList.toggle("w-screen");
    card.classList.toggle("h-screen");
    card.classList.toggle("p-10");
    card.classList.toggle("rounded-none");
    card.classList.toggle("overflow-y-auto");

    if (card.classList.contains("fixed")) {
        extraContent.classList.remove("hidden");
        extraContent2.classList.remove("hidden");
    } else {
        extraContent.classList.add("hidden");
        extraContent2.classList.add("hidden");
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("scale-y-100");
}


window.addEventListener("scroll", handleNavbarScroll);
