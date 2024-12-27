document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 100) {
      header.style.top = "-7px";
  } else {
      header.style.top = "0";
  }
});