$(window).load(function () {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function () {

    new WOW().init();


    const navLinks = document.querySelectorAll('.nav-item')
    const menuToggle = document.getElementById('navbarText')
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
          const bsCollapse = new bootstrap.Collapse(menuToggle)
          bsCollapse.toggle()
        })
    })

    

    $(".about-slider").owlCarousel({
        singleItem: true,
        pagination: true,
        autoPlay: 5000,
    });

    if ($('#countdown_dashboard').length) {
      $year = $('#countdown_dashboard').data('year');
      $month = $('#countdown_dashboard').data('month');
      $day = $('#countdown_dashboard').data('day');
      $('#countdown_dashboard').countDown({
          targetDate: {
              'day': $day,
              'month': $month,
              'year': $year,
              'hour': 23,
              'min': 59,
              'sec': 59,
          },
          omitWeeks: true
      });
    }
});
