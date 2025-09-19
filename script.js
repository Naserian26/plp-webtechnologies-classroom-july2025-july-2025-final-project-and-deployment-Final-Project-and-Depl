// Movie data with image links - REPLACE THESE WITH YOUR OWN IMAGE URLs
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: "PG-13",
        duration: "2h 28m",
        genre: "sci-fi",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2919271/5944675/MOVEB46211__19379.1679590452.jpg?c=2", // REPLACE WITH YOUR IMAGE URL
        trailerId: "YoHD9XEInc0"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        rating: "PG-13",
        duration: "2h 32m",
        genre: "action",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg", // REPLACE WITH YOUR IMAGE URL
        trailerId: "EXeTwQWrcwY"
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        rating: "PG-13",
        duration: "2h 49m",
        genre: "sci-fi",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg", // REPLACE WITH YOUR IMAGE URL
        trailerId: "zSWdZVtXT7E"
    },
    {
        id: 4,
        title: "The Hangover",
        year: 2009,
        rating: "R",
        duration: "1h 40m",
        genre: "comedy",
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXQnLp2LD_Mia4zmthSg2hz1w_s7VTwBd9Q&s", // 

    },
    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        rating: "PG-13",
        duration: "2h 22m",
        genre: "drama",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7SxSVQm2tAycmpxdsnccD760VSX-O-6ipA&s", // REPLACE WITH YOUR IMAGE URL
        trailerId: "bLvqoHBptjg"
    },
    {
        id: 6,
        title: "The Matrix",
        year: 1999,
        rating: "R",
        duration: "2h 16m",
        genre: "sci-fi",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHO69ZhSPdGkDqfSBEJ0zOUvPNLSkasPP6Yw&s", // REPLACE WITH YOUR IMAGE URL
        trailerId: "vKQi3bBA1y8"
    },
    {
        id: 7,
        title: "Pulp Fiction",
        year: 1994,
        rating: "R",
        duration: "2h 34m",
        genre: "drama",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg", // REPLACE WITH YOUR IMAGE URL
        trailerId: "s7EdQ4FqbhY"
    },
    {
        id: 8,
        title: "Superbad",
        year: 2007,
        rating: "R",
        duration: "1h 53m",
        genre: "comedy",
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_yBexoyJF7NsOBq0TkuBc57RAsbAJT6mkA&s", // REPLACE WITH YOUR IMAGE URL
        trailerId: "09N2a0d3xQs"
    }
];

// Movie App Class
class MovieApp {
    constructor() {
        this.currentFilter = 'all';
        this.filteredMovies = [...movies];
        this.init();
    }

    init() {
        this.renderMovies();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchMovies(e.target.value);
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Modal close
        document.querySelector('.close-btn').addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal on outside click
        document.getElementById('movieModal').addEventListener('click', (e) => {
            if (e.target.id === 'movieModal') {
                this.closeModal();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    renderMovies() {
        const moviesGrid = document.getElementById('moviesGrid');
        moviesGrid.innerHTML = '';

        this.filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <div class="poster-wrapper">
                    <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" 
                         onerror="this.src='https://picsum.photos/seed/fallback/300/450.jpg'">
                    <div class="poster-overlay">
                        <h3 class="poster-title">${movie.title}</h3>
                        <p class="poster-year">${movie.year}</p>
                    </div>
                    <span class="poster-badge">${movie.rating}</span>
                    <i class="fas fa-play play-icon"></i>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-year">${movie.year} • ${movie.genre}</p>
                </div>
            `;
            
            movieCard.addEventListener('click', () => {
                this.openModal(movie);
            });
            
            moviesGrid.appendChild(movieCard);
        });
    }

    searchMovies(query) {
        if (!query) {
            this.filteredMovies = [...movies];
        } else {
            this.filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(query.toLowerCase()) ||
                movie.genre.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.renderMovies();
    }

    setFilter(genre) {
        this.currentFilter = genre;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${genre}"]`).classList.add('active');
        
        // Filter movies
        if (genre === 'all') {
            this.filteredMovies = [...movies];
        } else {
            this.filteredMovies = movies.filter(movie => movie.genre === genre);
        }
        
        this.renderMovies();
    }

    openModal(movie) {
        const modal = document.getElementById('movieModal');
        const trailerFrame = document.getElementById('trailerFrame');
        
        // Set movie details
        document.getElementById('modalTitle').textContent = movie.title;
        document.getElementById('modalYear').textContent = movie.year;
        document.getElementById('modalRating').textContent = movie.rating;
        document.getElementById('modalDuration').textContent = movie.duration;
        document.getElementById('modalDescription').textContent = movie.description;
        document.getElementById('modalGenre').textContent = movie.genre.toUpperCase();
        
        // Set trailer
        trailerFrame.src = `https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=1`;
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('movieModal');
        const trailerFrame = document.getElementById('trailerFrame');
        
        // Stop video
        trailerFrame.src = '';
        
        // Hide modal
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize the app
const movieApp = new MovieApp();