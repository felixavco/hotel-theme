$(document).ready(() => {

  /*====Activates the menu button in mobil view==== */
  const btnMenu = $('.btn-menu').click(() => {
    btnMenu.toggleClass('change')
    $('.social-media').toggleClass('social-show')
    $('.menu-item').toggleClass('bounceInLeft')
    $('.header-bottom > nav').toggleClass('show-nav')
  })

  /*====Add background color when page is scrolled in large screens between 990px  and 1300px ==== */
  if(window.innerWidth > 990 && window.innerWidth < 1300){
    $(window).scroll(() => {
      if($(window).scrollTop() > 100 ) {
        $('#header').addClass('header-scroll')
      } else  {
        $('#header').removeClass('header-scroll')
      }
    })
  }

  /*====Animates Header in extra large screens +1300px ==== */
  if(window.innerWidth > 1300){
    $(window).scroll(() => {
      if($(window).scrollTop() > 100 ) {
        $('#header').addClass('header-xl-scroll')
      } else  {
        $('#header').removeClass('header-xl-scroll')
      }
    })
  }
  
})