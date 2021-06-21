function menu_rp(n) {
  var a = document.getElementsByClassName('menu_menu-nav')[0];
  if (n == 1) {
    a.classList.add('menu_rp_in');
    a.classList.remove('menu_rp_out');
    document.getElementsByClassName('fa-times')[0].style.display = 'block';
    document.getElementsByClassName('fa-bars')[0].style.display = 'none';
  } else {
    a.classList.remove('menu_rp_in');
    a.classList.add('menu_rp_out');
    document.getElementsByClassName('fa-bars')[0].style.display = 'block';
    document.getElementsByClassName('fa-times')[0].style.display = 'none';
  }
}
function toast_dp() {
  document.getElementsByClassName('overlay_form')[0].style.display = 'block';
}
function myFunction(event) {
  var a = event.target.classList.value;
  if (a == 'overlay_form') {
    document.getElementsByClassName('overlay_form')[0].style.display = 'none';
  }
  if (a == 'img_show') {
    document.getElementsByClassName('img_show')[0].style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
}
