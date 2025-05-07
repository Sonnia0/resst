async function getPopularMoviesPreview() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=52d8300abb3a3ebf03bb6dee769f6880');
  const data = await res.json();
  const movies = data.results;

  const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
  trendingPreviewMoviesContainer.innerHTML = ''; // Limpiar

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute(
      'src',
      movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : 'https://via.placeholder.com/150x220?text=No+Image'
    );

    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}

async function getCategoriesPreview() {
  const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=52d8300abb3a3ebf03bb6dee769f6880');
  const data = await res.json();
  const categories = data.genres;

  const categoriesPreviewContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
  categoriesPreviewContainer.innerHTML = ''; // Limpiar

  categories.forEach(category => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'category' + category.id);
    const categoryText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryText);
    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewContainer.appendChild(categoryContainer);
  });
}

// Llamadas iniciales
getPopularMoviesPreview();
getCategoriesPreview();
