$(document).ready(function() {
    // Exibir o modal ao carregar a página
    $('#customModal').modal('show');

    // Iniciar temporizador de 5 segundos
    var countdown = 3;
    var countdownInterval = setInterval(function() {
        countdown--;
        $('#countdown').text(countdown);

        // Verificar se o temporizador chegou a zero
        if (countdown <= 0) {
            // Fechar o modal
            $('#customModal').modal('hide');
            // Limpar o intervalo do temporizador
            clearInterval(countdownInterval);
        }
    }, 1000); // Atualizar a cada 1 segundo
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });