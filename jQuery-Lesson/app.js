// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function() {
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// })


/* 上から下にスライド */
// $(function(){
//   $('.box1').slideDown();
// });

/* 下から上にスライド */
// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

// $(function(){
//   $('.box1').slideDown(1000, function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '400px'
//     }).slideUp(2000);
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});