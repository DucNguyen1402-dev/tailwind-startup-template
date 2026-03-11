// AOS Init
AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out-cubic",
    offset: 0,
    delay: 100,
  });


const lightbox = GLightbox({
    selector: '.glightbox', 
    touchNavigation: true, 
    loop: true,            
    autoplayVideos: true,   
    width: '900px',         
});