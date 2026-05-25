!function () {
  var canvas = document.getElementById('bg-canvas');
  var ctx    = canvas.getContext('2d');
  var W, H;

  var blobs = [
    { x:.15, y:.25, r:.32, ox:0.0, oy:1.3, sp:.000250, cr:201, cg: 90, cb:30 },
    { x:.75, y:.55, r:.28, ox:2.1, oy:0.7, sp:.000180, cr:160, cg: 60, cb:30 },
    { x:.50, y:.80, r:.22, ox:4.0, oy:2.5, sp:.000320, cr:232, cg:155, cb:55 },
    { x:.88, y:.15, r:.20, ox:1.5, oy:5.0, sp:.000150, cr:180, cg: 88, cb:38 },
    { x:.05, y:.70, r:.18, ox:3.3, oy:0.4, sp:.000280, cr:210, cg:115, cb:48 },
  ];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    blobs.forEach(function (b) {
      var bx = (b.x + 0.09 * Math.sin(t * b.sp + b.ox)) * W;
      var by = (b.y + 0.07 * Math.cos(t * b.sp + b.oy)) * H;
      var br =  b.r * Math.min(W, H);

      var g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
      var c = 'rgba(' + b.cr + ',' + b.cg + ',' + b.cb + ',';
      g.addColorStop(0,   c + '0.32)');
      g.addColorStop(0.5, c + '0.10)');
      g.addColorStop(1,   c + '0)');

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(bx, by, br, 0, 6.2832);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  requestAnimationFrame(draw);
}();
