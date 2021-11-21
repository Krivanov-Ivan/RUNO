window.addEventListener('load', function Runo() {
    let homes = this.document.querySelectorAll('.home');
    let header = this.document.querySelector('header');
    let linx = this.document.querySelectorAll('.menu-link');
    let info = this.document.querySelectorAll('.info');
    let articles = this.document.querySelectorAll('.picked-articles>.article');
    let img = this.document.querySelectorAll('.article>img');
    let category = this.document.querySelectorAll('.article>.category');
    let firstCategoryY = this.document.querySelectorAll('.category')[0].offsetTop;
    let topics = this.document.querySelector('.articles');
    let topic = this.document.querySelectorAll('.articles>.article');
    let view = this.document.querySelector('.view-all');
    let c = true;

    topics.style.height = `calc(${topic[0].clientHeight}px + 3.125rem)`;
    topics.style.transition = 'height .5s ease';

    window.addEventListener('resize', ()=>{
        topics.style.transition = '';
        if (c) {topics.style.height = `calc(${topic[0].clientHeight}px + 3.125rem)`;;}
        else {
            if (window.innerWidth > 1200) {topics.style.height = `calc(${2*topic[0].clientHeight}px + 3.125rem)`;}
            else {topics.style.height = `calc(${4*topic[0].clientHeight}px + 12.5rem)`;}
        }
    });

    view.addEventListener('click', ()=>{
        topics.style.transition = 'height .5s ease';
        if (c) {
            if (window.innerWidth > 1200) {topics.style.height = `calc(${2*topic[0].clientHeight}px + 3.125rem)`;}
            else {topics.style.height = `calc(${4*topic[0].clientHeight}px + 12.5rem)`;}
            c=false;
        }
        else {topics.style.height = `calc(${topic[0].clientHeight}px + 3.125rem)`; c=true;}
    });


    this.document.addEventListener('scroll', ()=>{
        if (window.scrollY >= firstCategoryY) {
            header.style.backgroundColor = '#495057';
        }
        else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        }
    });

    linx.forEach((link, i) => {
        link.addEventListener('click', ()=>{
            window.scrollTo({
                top: this.document.querySelector(`#_${i}`).offsetTop,
                left: 0,
                behavior: 'smooth'
                });
        });
    });

    ScrollReveal().reveal('.picked-articles>.article', { interval: 200, distance: '50px' });

    homes.forEach(home => {
        home.style.paddingTop = `calc(12.5rem + ${header.clientHeight}px)`;
    });


    if (toString(navigator.userAgent).includes('Mobile')) {
        articles.forEach((article, i) => {
            article.addEventListener('click', ()=>{
                info[i].classList.toggle('info-active');
                img[i].style.filter = 'brightness(50%)';
                category[i].style.opacity = `${abs(parseInt(category[i].style.opacity) - 1)}`;
            });
        });
    }
    else {
        articles.forEach((article, i) => {
            article.addEventListener('mouseenter', ()=>{
                //info[i].style.visibility = 'visible';
                info[i].classList.toggle('info-active');
                img[i].style.filter = 'brightness(50%)';
                category[i].style.opacity = '1';
            });
            article.addEventListener('mouseleave', ()=>{
                info[i].classList.toggle('info-active');
                img[i].style.filter = 'brightness(100%)';
                category[i].style.opacity = '0';

            });
        });
    }
});