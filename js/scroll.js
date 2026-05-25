!function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-in').forEach(function (el) {
    var parent = el.parentElement;
    var sibs   = Array.from(parent.querySelectorAll(':scope > .animate-in'));
    var idx    = sibs.indexOf(el);
    if (idx > 0) el.style.transitionDelay = (idx * 0.13) + 's';
    io.observe(el);
  });
}();
