const navScroll = document.getElementById('nav')

window.onscroll = function () {
  if (window.pageYOffset > 60) {
    navScroll.style.background = '#000000'
  } else {
    navScroll.style.background = 'transparent'
  }
}
