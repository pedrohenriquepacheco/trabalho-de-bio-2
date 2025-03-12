const video = document.getElementById('meuVideo');

if (!video) {
    console.error('Elemento de vídeo não encontrado!');
} else {
    video.addEventListener('ended', function() {
    console.log('Evento ended acionado!');
    setTimeout(function() {
        window.location.href = 'terceiro.html';
    }, 2000);
    });
}