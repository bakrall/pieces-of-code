const movies = [{ 
	id: 1,
	category_id: 1,
	title: "The Godfather"
}];

const categories = [{
	id: 1,
	name: "Crime"
}];

//get movie with the given id
function fetchMovie(id) {
	return new Promise((resolve, reject) => {
		const movie = movies.find(movie => movie.id === id);
		movie ? resolve(movie) : reject(Error('No movie was found'));
	});
}

//populate info about category
function populateCategory(movie) {
	return new Promise((resolve, reject) => {
		const category = categories.find(category => category.id === movie.category_id)
		if (category) {
			movie.category = category.name;
			resolve(movie);
		}
		reject(Error('No category was found'));
	});
}

fetchMovie(1)
	.then(movie => populateCategory(movie))
	.then(result => console.log(result))
	.catch(reason => console.log(reason));