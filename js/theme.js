// Alternância simples de tema claro/escuro (desafio extra)
(function () {
  var btn = document.getElementById('btn-tema');
  if (!btn) return;
  try {
    var salvo = localStorage.getItem('tema-portfolio');
    if (salvo === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}

  btn.addEventListener('click', function () {
    var atual = document.documentElement.getAttribute('data-theme');
    var proximo = atual === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', proximo);
    try {
      localStorage.setItem('tema-portfolio', proximo);
    } catch (e) {}
  });
})();
