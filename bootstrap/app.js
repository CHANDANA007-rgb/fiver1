window.onscroll = function (e){
    let scroll = window.scrollY;
    // let=int in c,const= variable

    const headerScroll = document.querySelector('.header-scroll');
    if(scroll >300){
        headerScroll.classList.add('active');
    }
    else{
        headerScroll.classList.remove('active');
    }
}