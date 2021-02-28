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


// changing words 

const jobs = ["Front-end developer", "UI/UX Designer", "Student"];
const wordChanger = document.getElementById("change-words");

function jobDisplayer() {
  let i = 0;
  return function(jobs) {
    let interval = setInterval(() => {
      if (i < jobs.length) {
        wordChanger.textContent = jobs[i];
        i++;
      } else {
        clearInterval(interval);
        i = 0;
     }
    }, 1000);
  }
}

let displayjobs = jobDisplayer();
displayjobs(jobs);


