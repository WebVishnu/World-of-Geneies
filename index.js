function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
window.addEventListener('scroll', function() {
    let header = $('#navbar-bg')
    header.toggleClass("active", window.scrollY > 0)
})
window.addEventListener('scroll', function() {
        let header = $('#navbar-bg')
        header.toggleClass("active", window.scrollY > 0)
    })
    // ===========================
    // LOADING SCREEN
    // ===========================

window.onload = function loading() {
        $('#loading-screen').fadeOut('slow')
    }
    // ===========================
    // FAQs
    // ===========================
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));