// disolving navbar
let prevScrollPosition = window.pageYOffset

window.onscroll = function () {
  const currentScrollPosition = window.pageYOffset
  if (prevScrollPosition > currentScrollPosition) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '-4.1em'
  }
  prevScrollPosition = currentScrollPosition
}


