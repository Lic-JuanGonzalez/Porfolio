(function () {
  var T = {
    es: {
      'nav.projects':              'Proyectos',
      'nav.skills':                'Skills',
      'nav.contact':               'Contacto',
      'hero.eyebrow':              'Ciudad de Mendoza, Argentina',
      'hero.tagline':              'Team Leader — Research &amp; Development<br/>Diseño soluciones escalables con Java, Python y arquitecturas distribuidas.',
      'hero.cta':                  'Ver proyectos',
      'hero.cv':                   'Ver CV →',
      'projects.label':            'Trabajo',
      'projects.title':            'Proyectos',
      'project.ggfree.desc':       'Plataforma web completa con gestión de usuarios y contenido. Backend PHP con base de datos relacional MySQL y diseño responsive.',
      'project.neural.desc':       'Red neuronal entrenada desde cero para clasificar puntos en círculos concéntricos, con visualización en tiempo real de la frontera de decisión y curva de loss.',
      'project.todo.desc':         'Gestor de tareas web con autenticación de usuarios, CRUD completo y búsqueda por título. Cada usuario ve solo sus propias tareas.',
      'project.view':              'Ver proyecto →',
      'skills.title':              'Tecnologías',
      'skills.databases':          'Bases de Datos',
      'skills.tools':              'Tools & Proceso',
      'contact.label':             'Hablemos',
      'contact.title':             'Contacto',
      'contact.name':              'Nombre',
      'contact.name.placeholder':  'Tu nombre',
      'contact.email.placeholder': 'tu@email.com',
      'contact.message':           'Mensaje',
      'contact.msg.placeholder':   'Tu mensaje...',
      'contact.send':              'Enviar Mensaje',
      'contact.alt':               'O escríbeme directo a',
      'filter.all':                'Todos',
    },
    en: {
      'nav.projects':              'Projects',
      'nav.skills':                'Skills',
      'nav.contact':               'Contact',
      'hero.eyebrow':              'Mendoza City, Argentina',
      'hero.tagline':              'Team Leader — Research &amp; Development<br/>Building scalable solutions with Java, Python and distributed architectures.',
      'hero.cta':                  'View projects',
      'hero.cv':                   'View CV →',
      'projects.label':            'Work',
      'projects.title':            'Projects',
      'project.ggfree.desc':       'Full web platform with user and content management. PHP backend with MySQL relational database and responsive design.',
      'project.neural.desc':       'Neural network trained from scratch to classify points in concentric circles, with real-time visualization of the decision boundary and loss curve.',
      'project.todo.desc':         'Web task manager with user authentication, full CRUD and title search. Each user sees only their own tasks.',
      'project.view':              'View project →',
      'skills.title':              'Technologies',
      'skills.databases':          'Databases',
      'skills.tools':              'Tools & Process',
      'contact.label':             "Let's talk",
      'contact.title':             'Contact',
      'contact.name':              'Name',
      'contact.name.placeholder':  'Your name',
      'contact.email.placeholder': 'you@email.com',
      'contact.message':           'Message',
      'contact.msg.placeholder':   'Your message...',
      'contact.send':              'Send Message',
      'contact.alt':               'Or reach me directly at',
      'filter.all':                'All',
    }
  };

  var btn  = document.getElementById('lang-toggle');
  var lang = localStorage.getItem('lang') || 'es';

  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    btn.textContent = l === 'es' ? 'EN' : 'ES';

    var t = T[l];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (t[k] !== undefined) el.textContent = t[k];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (t[k] !== undefined) el.innerHTML = t[k];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (t[k] !== undefined) el.placeholder = t[k];
    });

    var firstFilter = document.querySelector('.filter-btn');
    if (firstFilter) firstFilter.textContent = t['filter.all'];
  }

  apply(lang);

  btn.addEventListener('click', function () {
    var next = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', next);
    apply(next);
  });
})();
