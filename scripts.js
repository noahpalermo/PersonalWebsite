function openPopup() {
    const popup = document.getElementById('contactPopup');
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.classList.add('active');
        popup.querySelector('.popup-content').focus(); // Maintain accessibility
    }, 10); // Small delay to ensure display: flex is applied before transition
}

function closePopup() {
    const popup = document.getElementById('contactPopup');
    popup.classList.remove('active');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Match transition duration (0.3s)
}

document.getElementById('contactPopup').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});