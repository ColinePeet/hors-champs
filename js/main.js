var swiper = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
    //   slidesPerGroup: 3,
  });

  var swiper2 = new Swiper('.swiper2', {
  //  pagination: {
  //    el: '.swiper-pagination',
  //  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });




  $('.parallax-window1').parallax({imageSrc: 'img/restaurant.jpg'});
  $('.parallax-window2').parallax({imageSrc: 'img/home-header.jpg'});
  $('.parallax-window3').parallax({imageSrc: 'img/bedroom.jpg'});
  $('.parallax-window4').parallax({imageSrc: 'img/grange.jpg'});
  $('.parallax-window5').parallax({imageSrc: 'img/propos.png'});