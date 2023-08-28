window.scrollTo(0, 0);

document.body.classList.add('no-scroll');
setTimeout(() => {
    document.body.classList.remove('no-scroll');
}, 4500);

