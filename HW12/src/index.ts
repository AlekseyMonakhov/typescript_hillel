import { CategoriesList, FilmesList, Categorie, Film } from './classes';

const film = new Film('The Shawshank Redemption', 1994, 9.3, { oscar: { name: 'oscar', year: 1995 } });
const categorie = new Categorie('Drama', [film]);
const categoriesList = new CategoriesList([categorie]);
const filmsList = new FilmesList([film]);

categoriesList.applySearchValue('Drama');
console.log(categoriesList.getByName());

filmsList.applyFiltersValue({ yearFilter: { filterFrom: 1990, filterTo: 2000 } });
filmsList.applyFiltersValue({ nameFilter: { filter: 'The Shawshank Redemption' } });
filmsList.applyFiltersValue({ ratingFilter: { filterFrom: 9, filterTo: 10 } });
filmsList.applyFiltersValue({ awardsFilter: { values: { name: 'oscar', year: 1995 } } });

console.log(filmsList.getByName());
console.log(filmsList.getByYear());
console.log(filmsList.getByRating());
console.log(filmsList.getByAwards());
