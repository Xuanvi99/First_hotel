$(document).ready(function () {
  var a = window.location.href;
  var b = a.indexOf('?');
  var c = a.slice(b + 1, a.length);
  var array_name = [
    'PHÒNG DELUXE TWIN',
    'PHÒNG DELUXE DOUBLE',
    'PHÒNG SUITE BALCONY',
    'PHÒNG GIA ĐÌNH',
  ];
  var array_price = [
    'VNĐ 800.000/Đêm',
    'VNĐ 1.000.000/Đêm',
    'VNĐ 1.250.000/Đêm',
    'VNĐ 1.500.000/Đêm',
  ];
  var room_name = [
    'room_deluxe1',
    'room_deluxe2',
    'room_suite',
    'room_giadinh',
  ];
  var img_twin = [
    'deluxe_twin/PX_03500.jpg',
    'deluxe_twin/Deluxe-twin-(2).jpg',
    'deluxe_twin/Deluxe-twin-(4).jpg',
    'deluxe_twin/Suite-balcony-(10).jpg',
    'deluxe_twin/PX_03530.jpg',
  ];
  var img_deluxe = [
    'Deluxe-double/602---Deluxe-double-(1).jpg',
    'Deluxe-double/602---Deluxe-double-(2).jpg',
    'Deluxe-double/602---Deluxe-double-(3).jpg',
    'Deluxe-double/601---Suite-balcony-(9).jpg',
    'Deluxe-double/601---Suite-balcony-(10).jpg',
  ];
  var img_suite = [
    'suite/Suite-balcony-(1).jpg',
    'suite/Suite-balcony-(2).jpg',
    'suite/Suite-balcony-(3).jpg',
    'suite/Suite-balcony-(4).jpg',
    'suite/Suite-balcony-(5).jpg',
  ];
  var img_family = [
    'family/Family-(1).jpg',
    'family/Family-(2).jpg',
    'family/Family-(4).jpg',
    'family/Family-(5).jpg',
    'family/Family-(6).jpg',
  ];
  var room = document.getElementsByClassName('room_box');
  var info_room = document.getElementsByClassName('list_info_room');
  var slide = document.getElementsByClassName('baner_slideshow');
  var img_all = [img_twin, img_deluxe, img_suite, img_family];
  for (var i = 0; i < room_name.length; i++) {
    if (room_name[i] === c) {
      room[i].style.display = 'none';
      $('.name_room').html(array_name[i]);
      $('.subtitle').html(array_price[i]);
      info_room[i].style.display = 'flex';
      img_silde(
        img_all[i][0],
        img_all[i][1],
        img_all[i][2],
        img_all[i][3],
        img_all[i][4]
      );
    }
  }
});

function img_silde(a, b, c, d, e) {
  $('.baner_slideshow').html(
    '<div class="mySlides active_img"> <img src = "./img/info_room/' +
      a +
      '"></div> <div class = "mySlides" ><img src = "./img/info_room/' +
      b +
      '"></div><div class = "mySlides" ><img src = "./img/info_room/' +
      c +
      '"></div> <div class = "mySlides" ><img src = "./img/info_room/' +
      d +
      '"></div> <div class = "mySlides" ><img src = "./img/info_room/' +
      e +
      '"> </div> <div class = "mySlides_btn" style = "text-align:center" ><span class = "dot active" onclick = "currentSlide(1)"></span><span class = "dot " onclick = "currentSlide(2)"></span> <span class = "dot " onclick = "currentSlide(3)"></span> <span class = "dot " onclick = "currentSlide(4)"></span><span class = "dot " onclick = "currentSlide(5)"></span></div>'
  );
  var slideIndex = 1;
  showSlides(slideIndex);
}

var dem;

function currentSlide(n) {
  showSlides((slideIndex = n));
  dem = n;
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active_img');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }
  slides[slideIndex - 1].classList.add('active_img');
  dots[slideIndex - 1].className += ' active';
}
setInterval(function () {
  var stt = document.getElementsByClassName('mySlides');
  if (dem == null || dem > stt.length) {
    dem = 1;
  }
  currentSlide(dem);
  dem++;
}, 5000);
