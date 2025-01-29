
// Fonction pour charger une nouvelle vidéo
function loadVideo(videoSrc) {
    const videoElement = document.getElementById('mainVideo');
    videoElement.src = videoSrc;  // Change la source de la vidéo
    videoElement.load();  // Recharge la vidéo
    videoElement.play();  // Démarre la lecture de la vidéo

    // Supprime la classe 'active' de tous les liens
    document.querySelectorAll('.titles-container a').forEach(link => {
        link.classList.remove('active');
    });

    // Ajoute la classe 'active' au lien correspondant
    const activeLink = document.querySelector(.titles-container a[data-video="${videoSrc}"]);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Ajout des événements de clic aux liens
document.querySelectorAll('.titles-container a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // Empêche le comportement par défaut (rechargement de la page)
        const videoSrc = link.getAttribute('data-video');  // Récupère la source de la vidéo
        loadVideo(videoSrc);  // Charge et joue la vidéo correspondante
    });
});

// Random bouton //
document.getElementById('randomButton').addEventListener('click', function() {
    // Liste des vidéos possibles
    const videos = [
        'assets/loop1.mp4',
        'assets/loop2.mp4',
        'assets/flower-3-loop.mp4',
        'assets/flower-4-loop.mp4',
        'assets/LOOP_7.mp4',
        'assets/loop6.mp4',
        'assets/loop-test-mov.mp4',
        'assets/loop6.mp4',
        'assets/loop-8.mp4',
        'assets/bloom-10.mp4',
        'assets/bloom-11.mp4',
        'assets/ia-flower-loop.mp4',
        'assets/mini-loop2.mp4',
        'assets/loop-12.mp4',
        'assets/mini-zoom-3.mp4',
    ];

    // Choisir une vidéo aléatoire de la liste
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    // Charger la vidéo aléatoire
    loadVideo(randomVideo);
});




//Fonction pour mettre à jour la date et l'heure

/*function updateDateTime() {
    const dateContainer = document.getElementById('date-container');
    const timeContainer = document.getElementById('time-container');

    const now = new Date();

    // Obtenir la date au format "JJ/MM/AAAA"
    const date = now.toLocaleDateString('fr-FR');

    // Obtenir l'heure au format "HH:MM:SS"
    const time = now.toLocaleTimeString('fr-FR');

    // Mettre à jour les éléments HTML
    dateContainer.textContent = `📅 ${date}`;
    timeContainer.textContent = `⏰ ${time}`;

}

// Mettre à jour la date et l'heure toutes les secondes
setInterval(updateDateTime, 1000);

// Appeler immédiatement pour ne pas attendre 1 seconde
updateDateTime(); */
