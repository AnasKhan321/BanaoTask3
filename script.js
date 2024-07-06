const screens = document.querySelectorAll('.screen');
let currentScreen = 0;

function scrollToScreen(index) {
    if (index >= 0 && index < screens.length) {
        screens[index].scrollIntoView({ behavior: 'smooth' });
        currentScreen = index;
    }
}

function handleScroll(event) {
    if (event.deltaY > 0) {
        // Scrolling down
        scrollToScreen(currentScreen + 1);
    } else {
        // Scrolling up
        scrollToScreen(currentScreen - 1);
    }
}

window.addEventListener('wheel', handleScroll);