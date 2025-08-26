(function() {
	"use strict";
  
	window.onload = function(){

        // Header Sticky
        const getHeaderId = document.getElementById("navbar");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 10;
                const { scrollTop } = event.target.scrollingElement;
                document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
            });
        }

        // Back to Top JS
        const getId = document.getElementById("backtotop");
        if (getId) {
            const topbutton = document.getElementById("backtotop");
            topbutton.onclick = function (e) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
            window.onscroll = function () {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }

		// Preloader JS
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none';
        }
    };

	// Select all buttons with the class 'like-button' Favorite Button
	document.querySelectorAll('.favorite-button').forEach(button => {
		// Add click event listener to each button
		button.addEventListener('click', () => {
		// Toggle 'liked' class
			button.classList.toggle('favorite-d');
		});
	});

	// Audio Player JS
	const audioPlayers = document.querySelectorAll(".track"); // Select all audio elements
	if (audioPlayers.length > 0) {
		// Loop through all audio elements
		audioPlayers.forEach((audioElement, index) => {
			const playPauseButton = audioElement.closest("button").querySelector(".play-pause");

			function playPause() {
				if (audioElement.paused) {
					// Pause all other audio players
					audioPlayers.forEach((otherAudio, otherIndex) => {
						if (otherIndex !== index) {
							otherAudio.pause();
							otherAudio.closest("button").querySelector(".play-pause").className = "play-pause play";
						}
					});
					audioElement.play();
					playPauseButton.className = "play-pause pause";
				} else {
					audioElement.pause();
					playPauseButton.className = "play-pause play";
				}
			}

			playPauseButton.addEventListener("click", playPause);

			// Reset the play button when the audio ends
			audioElement.addEventListener("ended", function () {
				playPauseButton.className = "play-pause play";
			});
		});
	}

	// Play Button Active JS
	var selector = document.querySelectorAll('.play-button-active');

	selector.forEach(function(item) {
		item.addEventListener('click', function() {
			// Remove the 'active' class from all items
			selector.forEach(function(el) {
				el.classList.remove('active');
			});
			// Add the 'active' class to the clicked item
			this.classList.add('active');
		});
	});

	// Init BS Tooltip
	const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	// Top Music Playlist Slide JS
	var swiper = new Swiper(".top-music-playlist-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev1",
          	prevEl: ".next1",
		},
		pagination: {
			el: ".swiper-pagination1",
			type: "fraction",
		  },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1.5,
			},
			1200: {
				slidesPerView: 1.5,
			},
			1440: {
				slidesPerView: 2,
			},
			1700: {
				slidesPerView: 2,
			},
			1850: {
				slidesPerView: 2.8,
			},
		}
    });

	// Artists Slide JS
	var swiper = new Swiper(".artists-slide", {
        slidesPerView: 1,
        spaceBetween: 12,
		centeredSlides: false,
		preventClicks: true,
		loop: true, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1440: {
				slidesPerView: 3.5,
			},
			1600: {
				slidesPerView: 4.5,
			},
		}
    });

	// Podcasts And More Slide JS
	var swiper = new Swiper(".podcasts-and-more-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: true, 
		centeredSlides: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev2",
          	prevEl: ".next2",
		},
		pagination: {
			el: ".swiper-pagination2",
			type: "fraction",
		  },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2.5,
			},
			1440: {
				slidesPerView: 2.5,
			},
			1700: {
				slidesPerView: 3,
			},
			1850: {
				slidesPerView: 3,
			},
		}
    });

	// Play List Slide JS 
	var swiper = new Swiper(".play-list-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev3",
          	prevEl: ".next3",
		},
		pagination: {
			el: ".swiper-pagination3",
			type: "fraction",
		  },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2.5,
			},
			1200: {
				slidesPerView: 2.5,
			},
			1440: {
				slidesPerView: 3.5,
			},
			1700: {
				slidesPerView: 4,
			},
			1850: {
				slidesPerView: 4.3,
			},
		}
    });

	// Top Playlist Album Slide JS
	var swiper = new Swiper(".top-playlist-album-slide", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev4",
          	prevEl: ".next4",
		},
		pagination: {
			el: ".swiper-pagination4",
			type: "fraction",
		  },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1.5,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
			1700: {
				slidesPerView: 4,
			},
			1850: {
				slidesPerView: 4,
			},
		}
    });

	// Select all buttons
	const getSelectButtonsId = document.getElementById('select-buttons');
	if (getSelectButtonsId) {

		// Select all buttons
		const buttons = document.querySelectorAll("button");

		// Add click event to each button
		buttons.forEach(button => {
			button.addEventListener("click", function() {
				// Remove active class from all buttons
				buttons.forEach(b => b.classList.remove("active"));
				// Add active class to the clicked button
				button.classList.add("active");
				// Save the button's text or ID to localStorage
				localStorage.setItem("activeButton", button.id || button.textContent);
			});
		});

		// On page load, restore the active button from localStorage
		const activeButton = localStorage.getItem("activeButton");
		if (activeButton) {
			buttons.forEach(button => {
				if (button.id === activeButton || button.textContent === activeButton) {
					button.classList.add("active");
				}
			});
		}

	}

	// Top Music Playlist Slide Two JS
	var swiper = new Swiper(".top-music-playlist-slide-two", {
        slidesPerView: 1,
        spaceBetween: 24,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev5",
          	prevEl: ".next5",
		},
		pagination: {
			el: ".swiper-pagination5",
			type: "fraction",
		  },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1.5,
			},
			1200: {
				slidesPerView: 2,
			},
			1440: {
				slidesPerView: 2,
			},
			1700: {
				slidesPerView: 2,
			},
			1850: {
				slidesPerView: 2,
			},
		}
    });

	// Custom Audio Player JS
	const getCustomAudionId = document.getElementById('custom_audio_player');
	if (getCustomAudionId) {

		const audio = document.getElementById("audio");
		const playPauseBtn = document.getElementById("playPauseBtn");
		const progressBar = document.getElementById("progressBar");
		const currentTime = document.getElementById("currentTime");
		const totalTime = document.getElementById("totalTime");
		const muteBtn = document.getElementById("muteBtn");

		// Toggle play/pause
		playPauseBtn.addEventListener("click", () => {
		if (audio.paused) {
			audio.play();
			playPauseBtn.textContent = "⏸";
		} else {
			audio.pause();
			playPauseBtn.textContent = "▶";
		}
		});

		// Update progress bar
		audio.addEventListener("timeupdate", () => {
			progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
			currentTime.textContent = formatTime(audio.currentTime);
		});

		// Seek
		progressBar.addEventListener("input", () => {
			audio.currentTime = (progressBar.value / 100) * audio.duration;
		});

		// Update total time
		audio.addEventListener("loadedmetadata", () => {
			totalTime.textContent = formatTime(audio.duration);
		});

		// Mute/Unmute
		muteBtn.addEventListener("click", () => {
			audio.muted = !audio.muted;
			muteBtn.textContent = audio.muted ? "🔇" : "🔊";
		});

		// Format time helper
		function formatTime(seconds) {
			const mins = Math.floor(seconds / 60);
			const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
			return `${mins}:${secs}`;
		}
	}

	// Days, Hrs, Min, Sec JS 
	const getCountDownId = document.getElementsByClassName('clockdiv');
	if (getCountDownId) {
		document.addEventListener('readystatechange', event => {
			if (event.target.readyState === "complete") {
				var clockdiv = document.getElementsByClassName("clockdiv");
				var countDownDate = new Array();
					for (var i = 0; i < clockdiv.length; i++) {
						countDownDate[i] = new Array();
						countDownDate[i]['el'] = clockdiv[i];
						countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
						countDownDate[i]['days'] = 0;
						countDownDate[i]['hours'] = 0;
						countDownDate[i]['seconds'] = 0;
						countDownDate[i]['minutes'] = 0;
					}
					var countdownfunction = setInterval(function() {
						for (var i = 0; i < countDownDate.length; i++) {
						var now = new Date().getTime();
						var distance = countDownDate[i]['time'] - now;
						countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
						countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);
						if (distance < 0) {
							countDownDate[i]['el'].querySelector('.days').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
							countDownDate[i]['el'].querySelector('.seconds').innerHTML = 0;
						}
						else {
							countDownDate[i]['el'].querySelector('.days').innerHTML = countDownDate[i]['days'];
							countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
							countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
							countDownDate[i]['el'].querySelector('.seconds').innerHTML = countDownDate[i]['seconds'];
						}
					}  
				}, 1000);
			}
		});
	}

	// Upcoming Gigs Slide JS
	var swiper = new Swiper(".upcoming-gigs-slide", {
        slidesPerView: 1,
        spaceBetween: 0,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev6",
          	prevEl: ".next6",
		},
    });

	// Custom Audio Multiple Player JS
	const getCustomAudioMultipleId = document.getElementById('custom_audio_multiple');
	if (getCustomAudioMultipleId) {

		const audio = new Audio();
		const playPauseBtn = document.getElementById('play-pause-btn');
		const prevBtn = document.getElementById('prev-btn');
		const nextBtn = document.getElementById('next-btn');
		const shuffleBtn = document.getElementById('shuffle-btn');
		const loopBtn = document.getElementById('loop-btn');
		const muteBtn = document.getElementById('mute-btn');
		const progressBar = document.getElementById('progress-bar');
		const volumeBar = document.getElementById('volume-bar');
		const currentTimeDisplay = document.getElementById('current-time');
		const durationDisplay = document.getElementById('duration');
		const trackTitle = document.getElementById('track-title');
		const trackArtist = document.getElementById('track-artist');
		const waveAnimation = document.querySelector('.wave-animation');

		let isPlaying = false;
		let isShuffle = false;
		let isLoop = false;
		let isMuted = false;
		let previousVolume = 1;
		let currentTrackIndex = 0;

		// Playlist of songs
		const playlist = [
			{
				title: "Journey Through the Enchanted Forest",
				artist: "Yasuo remix",
				src: "https://cldup.com/qR72ozoaiQ.mp3",
			},
			{
				title: "Sunset Serenade",
				artist: "Emily Davis",
				src: "https://cldup.com/qR72ozoaiQ.mp3",
			},
			{
				title: "Ocean Breeze",
				artist: "Michael Johnson",
				src: "https://cldup.com/qR72ozoaiQ.mp3",
			},
		];

		// Load a track
		function loadTrack(index) {
			const track = playlist[index];
			audio.src = track.src;
			trackTitle.textContent = track.title;
			trackArtist.textContent = track.artist;

			// Update duration display
			audio.addEventListener('loadedmetadata', () => {
				durationDisplay.textContent = formatTime(audio.duration);
			});

			// Enable play button
			playPauseBtn.disabled = false;
		}

		// Play/Pause functionality
		playPauseBtn.addEventListener('click', () => {
			if (isPlaying) {
				audio.pause();
				playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
				pauseWaveAnimation(); // Pause the wave animation
			} else {
				audio.play().then(() => {
					playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';
					startWaveAnimation(); // Start the wave animation
				}).catch((error) => {
					console.error("Playback failed:", error);
				});
			}
			isPlaying = !isPlaying;
		});

		// Next track functionality
		nextBtn.addEventListener('click', () => {
			currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
			loadTrack(currentTrackIndex);
			if (isPlaying) {
				audio.play();
			}
		});

		// Previous track functionality
		prevBtn.addEventListener('click', () => {
			currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
			loadTrack(currentTrackIndex);
			if (isPlaying) {
				audio.play();
			}
		});

		// Shuffle functionality
		shuffleBtn.addEventListener('click', () => {
			isShuffle = !isShuffle;
			shuffleBtn.classList.toggle('active', isShuffle);
			if (isShuffle) {
				shufflePlaylist();
			}
		});

		// Loop functionality
		loopBtn.addEventListener('click', () => {
			isLoop = !isLoop;
			audio.loop = isLoop;
			loopBtn.classList.toggle('active', isLoop);
		});

		// Mute/Unmute functionality
		muteBtn.addEventListener('click', () => {
			if (isMuted) {
				// Unmute
				audio.volume = previousVolume;
				volumeBar.value = previousVolume * 100;
				muteBtn.innerHTML = '<i class="ri-volume-up-line"></i>';
			} else {
				// Mute
				previousVolume = audio.volume;
				audio.volume = 0;
				volumeBar.value = 0;
				muteBtn.innerHTML = '<i class="ri-volume-mute-line"></i>';
			}
			isMuted = !isMuted;
		});

		// Volume control
		volumeBar.addEventListener('input', () => {
			audio.volume = volumeBar.value / 100;
			if (audio.volume === 0) {
				isMuted = true;
				muteBtn.innerHTML = '<i class="ri-volume-mute-line"></i>';
			} else {
				isMuted = false;
				muteBtn.innerHTML = '<i class="ri-volume-up-line"></i>';
			}
		});

		// Update progress bar
		audio.addEventListener('timeupdate', () => {
			const progress = (audio.currentTime / audio.duration) * 100;
			progressBar.value = progress;
			currentTimeDisplay.textContent = formatTime(audio.currentTime);
		});

		// Seek functionality
		progressBar.addEventListener('input', () => {
			const seekTime = (progressBar.value / 100) * audio.duration;
			audio.currentTime = seekTime;
		});

		// Format time to MM:SS
		function formatTime(seconds) {
			const minutes = Math.floor(seconds / 60);
			const secs = Math.floor(seconds % 60);
			return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
		}

		// Shuffle the playlist
		function shufflePlaylist() {
			for (let i = playlist.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[playlist[i], playlist[j]] = [playlist[j], playlist[i]];
			}
			currentTrackIndex = 0;
			loadTrack(currentTrackIndex);
		}

		// Function to start the wave animation
		function startWaveAnimation() {
			waveAnimation.style.animationPlayState = 'running';
			waveAnimation.querySelectorAll('li').forEach(li => {
				li.style.animationPlayState = 'running';
			});
		}

		// Function to pause the wave animation
		function pauseWaveAnimation() {
			waveAnimation.style.animationPlayState = 'paused';
			waveAnimation.querySelectorAll('li').forEach(li => {
				li.style.animationPlayState = 'paused';
			});
		}

		// When the audio ends, pause the wave animation
		audio.addEventListener('ended', () => {
			pauseWaveAnimation();
			playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
			isPlaying = false;
		});

		// Load the first track when the page loads
		loadTrack(currentTrackIndex);
		pauseWaveAnimation(); // Pause the wave animation initially

	}

	// Audio Track Slide JS
	var swiper = new Swiper(".audio-track-slide", {
        slidesPerView: 1,
        spaceBetween: 0,
		centeredSlides: false,
		preventClicks: true,
		loop: false, 
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".prev7",
          	prevEl: ".next7",
		},
		pagination: {
			el: ".swiper-pagination7",
			type: "fraction",
		},
    });

	// ScrollCue JS
    scrollCue.init();
	
	// Hover JS
    try {
        var elements = document.querySelectorAll("[id^='hover-active']");
            elements.forEach(function(element) {
            element.addEventListener("mouseover", function() {
                elements.forEach(function(el) {
                el.classList.remove("active");
                });
                element.classList.add("active");
            });
        });
    } catch (err) {}
	
})();

// For Mobile Navbar JS
const list = document.querySelectorAll('.mobile-menu-list');
function accordion(e) {
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else {
        for(i=0; i < list.length; i++){
            list[i].classList.remove('active');
        }
        this.classList.add('active');
    }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}

try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('farol_rtl', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('farol_rtl') === 'rtl') {
			setTheme('ltr');
		} else {
			setTheme('rtl');
		}
	}
	
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('farol_rtl') === 'rtl') {
			setTheme('rtl');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('ltr');
		document.getElementById('slider').checked = true;
		}
	})();
} catch { }