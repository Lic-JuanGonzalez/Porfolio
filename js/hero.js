!function () {
  var el   = document.querySelector('.hero-name');
  var text = el.textContent;
  el.innerHTML = '';
  var delay = 0.42;

  text.split('').forEach(function (ch) {
    if (ch === ' ') {
      el.appendChild(document.createTextNode(' '));
    } else {
      var s = document.createElement('span');
      s.className = 'hero-letter';
      s.textContent = ch;
      s.style.animationDelay = delay + 's';
      el.appendChild(s);
      delay += 0.055;
    }
  });
}();
