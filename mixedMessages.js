// Random show to watch generator

//creating lists of platforms, genres, and film styles
let platforms = ['Netflix', 'Hulu','Disney+', 
        'YoutubeTV', 'HBOMax', 'Discovery+',
        'Amazon Prime', 'AppleTV'];
let genres = ['Comedy', 'Drama', 'Thriller',
            'Documentary', 'Science-Fiction',
            'Action', 'Fantasy', 'Rom Com',
            'Reality', 'Western', 'Mystery',
            'Anime', 'Police Procedural','Game show' ];
let styles = ['TV Show', 'Big Budget Movie', 'Indie Movie', 'Old movie', 
            'New movie', 'Old show', 'New Show'];

 // Creating function to randomly select from the lists of platforms, genres, and styles.
function randomShow () {
    let platform = platforms[Math.floor(Math.random() * platforms.length)];
    let genre = genres[Math.floor(Math.random() * genres.length)];
    let style = styles[Math.floor(Math.random() * styles.length)];
    console.log(`Let's watch a ${genre} ${style} on ${platform}`);
};

randomShow();