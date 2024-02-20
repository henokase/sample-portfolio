const headH1 = document.getElementById("headerH1");
const headBtn = document.getElementById("headerBtn");
const aboutH1 = document.getElementById('aboutH1');
const aboutImg = document.getElementById('aboutImg');
const aboutContent = document.getElementById('aboutContent');

firstAnimation();
function firstAnimation() {
    headH1.classList.add('opacity-1');
    headBtn.classList.add('opacity-1');

    headH1.classList.remove('opacity-0', 'sm:-translate-x-24', 'max-sm:translate-y-12');
    headBtn.classList.remove('opacity-0', 'sm:-translate-x-24', 'max-sm:translate-y-12');
}

secondAnimation();
function secondAnimation() {
    const h1 = aboutH1.getBoundingClientRect();
    if(h1.top < window.innerHeight && h1.bottom >= 0){
        aboutH1.classList.add('opacity-1');
        aboutImg.classList.add('opacity-1');
        aboutContent.classList.add('opacity-1', 'left-0');

        aboutH1.classList.remove('opacity-0');
        aboutImg.classList.remove('opacity-0', 'translate-y-16');
        aboutContent.classList.remove('opacity-0', '-left-36', 'max-md:translate-y-16');

    }
}

document.addEventListener('scroll', secondAnimation);


function backToTop() {
    window.scrollTo({
       top: 0,
       behavior: 'smooth' 
    });
}
