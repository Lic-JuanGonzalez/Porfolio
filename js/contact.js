!function () {
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name  = document.getElementById('f-name').value.trim();
    var email = document.getElementById('f-email').value.trim();
    var msg   = document.getElementById('f-msg').value.trim();
    if (!name || !email || !msg) return;
    var subject = encodeURIComponent('Contacto desde portfolio — ' + name);
    var body    = encodeURIComponent(
      'Nombre: ' + name + '\nEmail: ' + email + '\n\n' + msg
    );
    window.location.href =
      'mailto:juaniiiii1025@gmail.com?subject=' + subject + '&body=' + body;
  });
}();
