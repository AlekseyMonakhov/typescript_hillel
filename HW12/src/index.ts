import { CategoriesList, FilmesList, Categorie, Film } from './classes';

const film = new Film('The Shawshank Redemption', 1994, 9.3, []);
const categorie = new Categorie('Drama', [film]);
const categoriesList = new CategoriesList([categorie]);
const filmsList = new FilmesList([film]);

categoriesList.applySearchValue('Drama');
console.log(categoriesList.getByName());

filmsList.applyFiltersValue({ yearFilter: { filterFrom: 1990, filterTo: 2000 } });
console.log(filmsList.getByYear());
