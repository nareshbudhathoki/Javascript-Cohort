const movieRatings = [
  { title: "Inception", ratings: [5, 4, 3] },
  { title: "Avengers", ratings: [4, 5, 3] },
  { title: "The Matrix", ratings: [5, 5, 4] },
  { title: "Titanic", ratings: [3, 4, 2] },
  { title: "Joker", ratings: [5, 4, 4] }
];

const averageRatings = movieRatings.map((movie)=>{
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total/movie.ratings.length;
  return{
    title: movie.title,
    averageRating: Math.round(average)
  }
})

console.log(movieRatings)
console.log(averageRatings);