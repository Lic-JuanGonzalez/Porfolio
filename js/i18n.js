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
      'project.reservation.desc':  'Plataforma SaaS multi-tenant para gestión de reservas (hoteles, clínicas, gimnasios y más). Clean Architecture + DDD + CQRS, procesamiento asíncrono con Celery/Redis y monitoreo con Prometheus y Grafana.',
      'project.inventory.desc':    'Sistema empresarial multi-sucursal para gestión de inventario distribuido. Autenticación JWT con roles, transferencias entre sucursales con flujo de aprobación y auditoría completa de operaciones.',
      'project.marketplace.desc':  'Marketplace donde clientes contratan profesionales y dejan reseñas. Flujo de contratación con máquina de estados, ratings auto-calculados y consola de pruebas admin.',
      'project.final':             'Proyecto Final',
      'project.paymentchain.desc': 'Proyecto final del curso de Microservicios: sistema de pagos bancario con Spring Cloud. API Gateway con autenticación OAuth2/Keycloak, service discovery (Eureka), configuración centralizada y monitoreo, orquestando microservicios de clientes, productos y transacciones.',
      'project.todo.desc':         'Gestor de tareas web con autenticación de usuarios, CRUD completo y búsqueda por título. Cada usuario ve solo sus propias tareas.',
      'project.view':              'Ver proyecto →',
      'skills.title':              'Tecnologías',
      'skills.microservices':      'Microservicios',
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
      'project.reservation.desc':  'Multi-tenant SaaS platform for reservation management (hotels, clinics, gyms and more). Clean Architecture + DDD + CQRS, async processing with Celery/Redis, and monitoring with Prometheus and Grafana.',
      'project.inventory.desc':    'Multi-branch enterprise system for distributed inventory management. JWT authentication with roles, inter-branch transfers with approval workflow, and full operation audit trail.',
      'project.marketplace.desc':  'Marketplace where clients hire professionals and leave reviews. State-machine-enforced hire flow, auto-computed ratings, and an admin test console.',
      'project.final':             'Final Project',
      'project.paymentchain.desc': 'Final project for the Microservices course: a banking payments system built with Spring Cloud. OAuth2/Keycloak-secured API Gateway, service discovery (Eureka), centralized configuration and monitoring, orchestrating customer, product and transaction microservices.',
      'project.todo.desc':         'Web task manager with user authentication, full CRUD and title search. Each user sees only their own tasks.',
      'project.view':              'View project →',
      'skills.title':              'Technologies',
      'skills.microservices':      'Microservices',
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
