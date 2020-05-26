/* Copyirght (c) 2020 - Benjamin Dupont */

// Initialiser le conteneur d'images
$('#images-container').slick({
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow">&lt;</button>',
    nextArrow: '<button class="slide-arrow next-arrow">&gt;</button>',
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
});

const header = document.getElementById("header-menu");
const logo = document.getElementById("logo-menu");

const HEADER_INITIAL_SIZE = "10em";
const LOGO_INITIAL_HEIGHT = "500px";

const HEADER_COLLAPSED_HEIGHT = "7em";
const LOGO_COLLAPSED_HEIGHT = "425px";

const initSize = header.clientHeight;

/**
 * Updates the height of the header menu from the scrolling position
 */
function updateHeaderFromScroll() {
    const bodyScroll = document.scrollingElement.scrollTop;

    if (header.style.display === 'none') return;

    if (bodyScroll > initSize / 2) {
        header.style.height = HEADER_COLLAPSED_HEIGHT;
        logo.style.height = LOGO_COLLAPSED_HEIGHT;
    } else if (bodyScroll < initSize / 2) {
        header.style.height = HEADER_INITIAL_SIZE;
        logo.style.height = LOGO_INITIAL_HEIGHT;
    }
}

document.addEventListener('scroll', updateHeaderFromScroll);

const headerDropdownLinks = document.getElementById("links-container");
const headerDropdownCollapseButton = document.getElementById("button-collapse");
const headerDropdownExpandButton = document.getElementById("button-expand");

/**
 * Toggles the visibility of the header dropdown menu
 */
function toggleHeaderDropdown() {
    if (headerDropdownLinks.classList.contains("collapsed")) {
        $('#links-container').slideDown(200);
        headerDropdownLinks.classList.remove("collapsed");
        headerDropdownLinks.classList.add("expanded");
        headerDropdownCollapseButton.style.display = 'block';
        headerDropdownExpandButton.style.display   = 'none';
    } else {
        $('#links-container').slideUp(200);
        headerDropdownLinks.classList.remove("expanded");
        headerDropdownLinks.classList.add("collapsed");
        headerDropdownCollapseButton.style.display = 'none';
        headerDropdownExpandButton.style.display = 'block';
    }
}

document.addEventListener('load', toggleHeaderDropdown);
headerDropdownCollapseButton.addEventListener('click', toggleHeaderDropdown);
headerDropdownExpandButton.addEventListener('click', toggleHeaderDropdown);
