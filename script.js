const shareBtn = document.getElementById('share');
const socials = document.getElementById('socials');

shareBtn.addEventListener('click', () => {
    socials.classList.toggle('show');
    shareBtn.classList.toggle('active');
});