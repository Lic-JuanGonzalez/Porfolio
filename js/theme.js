(function () {
  var btn  = document.getElementById('theme-toggle');
  var sun  = document.getElementById('icon-sun');
  var moon = document.getElementById('icon-moon');
  var html = document.documentElement;

  function apply(theme) {
    html.setAttribute('data-theme', theme);
    sun.style.display  = theme === 'light' ? 'none' : '';
    moon.style.display = theme === 'light' ? ''     : 'none';
  }

  apply(localStorage.getItem('theme') || 'dark');

  btn.addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();
