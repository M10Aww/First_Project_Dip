document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
    const videoModal = document.querySelector('.video-modal');
    const videoPlayer = document.getElementById('video-player');
    const closeButton = document.querySelector('.close-button');
  
    playButtons.forEach(button => {
      button.addEventListener('click', function() {
        const videoSrc = button.getAttribute('data-video');
        videoPlayer.src = videoSrc;
        videoModal.style.display = 'block';
      });
    });
  
    closeButton.addEventListener('click', function() {
      videoPlayer.pause();
      videoModal.style.display = 'none';
      videoPlayer.src = '';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === videoModal) {
        videoPlayer.pause();
        videoModal.style.display = 'none';
        videoPlayer.src = '';
      }
    });
  });
 
  $(document).ready(function() {
    const episodes = [
      { title: "The Road Trick - серия 1", src: "/assets/ds.mp4" },
      { title: "The Road Trick - серия 2", src: "/assets/ds2.mp4" },
      { title: "The Road Trick - серия 3", src: "/assets/ds3.mp4" }
      
    ];

    let currentEpisodeIndex = 0;

    function playNextEpisode() {
      currentEpisodeIndex++;
      if (currentEpisodeIndex >= episodes.length) {
        currentEpisodeIndex = 0;
      }
      updateVideo();
    }

    function playPreviousEpisode() {
      currentEpisodeIndex--;
      if (currentEpisodeIndex < 0) {
        currentEpisodeIndex = episodes.length - 1;
      }
      updateVideo();
    }

    function updateVideo() {
      const currentEpisode = episodes[currentEpisodeIndex];
      $('#episodeTitle').text(currentEpisode.title);
      $('#videoPlayer').attr('src', currentEpisode.src);
    }

    $('#prevButton').click(playPreviousEpisode);
    $('#nextButton').click(playNextEpisode);

    // Запуск воспроизведения первой серии при загрузке страницы
    updateVideo();
  });