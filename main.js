$(document).ready(function () {

      $('.slider').slick({
          dots: true,
          speed: 400,
          slidesToShow: 4,
          slidesToScroll: 4,
          

          responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
            ]

      });
  });


    // $(document).ready(function () {

    //   let position = 0;
    //   const slidesToShow = 4;
    //   const slidesToScrol = 4;
    //   const coutSlides = 16;



    //   const container = $('.slider-container');
    //   const track = $('.slider-track');
    //   const iteam = $('.slider-iteams');

    //   const btNext = $('.btn-next');
    //   const btPred = $('.btn-pred');

    //   const itemWidth = container.width() / slidesToShow;
    //   const movePosition = slidesToScrol * itemWidth;

    //   const lastPosition = itemWidth * (coutSlides - slidesToShow);
    //   console.log(lastPosition)

    //   iteam.each(function (index, item) {
    //     $(item).css({
    //       minWidth: itemWidth,
    //     });
    //   });

    //   btNext.click(function () {
    //     if (position == -lastPosition) {
    //       position = 0;
    //     } else {
    //       position -= movePosition;
    //     }
    //     console.log(position);
    //     setPosition();

    //   });

    //   btPred.click(function () {
    //     console.log('pred');
    //     if (position == 0) {
    //       position = -lastPosition;
    //     } else {
    //       position += movePosition;
    //     }
    //     console.log(position);
    //     setPosition();

    //   });

    //   const setPosition = () => {
    //     track.css({
    //       transform: `translateX(${position}px)`,
    //     });
    //   }


    // });