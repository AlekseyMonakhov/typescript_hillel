import { IAward, IBaseFilterState, ICategorie, IFilm, IFilmFilterState } from './types';

export class Film implements IFilm {
  constructor(
    public name: string,
    public year: number,
    public rating: number,
    public awards: { [name: string]: IAward }
  ) {}
}

export class Categorie implements ICategorie {
  constructor(
    public name: string,
    public films: IFilm[]
  ) {}
}

abstract class IList<T extends IFilm | ICategorie> {
  constructor(
    public items: T[],
    protected filterState: T extends IFilm ? IFilmFilterState : IBaseFilterState
  ) {}

  abstract getByName(): T | undefined;
}

export class CategoriesList extends IList<ICategorie> {
  constructor(items: ICategorie[], filterState: IBaseFilterState = {}) {
    super(items, filterState);
  }

  applySearchValue(value: string): void {
    this.filterState.nameFilter = { filter: value };
  }

  getByName(): ICategorie | undefined {
    const { nameFilter } = this.filterState;

    if (nameFilter) {
      return this.items.find(categorie => categorie.name === nameFilter.filter);
    }

    return;
  }
}

export class FilmesList extends IList<IFilm> {
  constructor(items: IFilm[], filterState: IFilmFilterState = {}) {
    super(items, filterState);
  }

  applyFiltersValue(value: IFilmFilterState): void {
    Object.assign(this.filterState, value);
  }

  getByName(): IFilm | undefined {
    const { nameFilter } = this.filterState;

    if (nameFilter) {
      return this.items.find(film => film.name === nameFilter.filter);
    }

    return;
  }

  getByYear(): IFilm[] | undefined {
    const { yearFilter } = this.filterState;

    if (yearFilter) {
      return this.items.filter(film => film.year >= yearFilter.filterFrom && film.year <= yearFilter.filterTo);
    }

    return;
  }

  getByRating(): IFilm[] | undefined {
    const { ratingFilter } = this.filterState;

    if (ratingFilter) {
      return this.items.filter(film => film.rating >= ratingFilter.filterFrom && film.rating <= ratingFilter.filterTo);
    }

    return;
  }

  getByAwards(): IFilm[] | undefined {
    const { awardsFilter } = this.filterState;

    if (awardsFilter) {
      return this.items.filter(
        film =>
          film.awards[awardsFilter.values.name].name === awardsFilter.values.name &&
          film.awards[awardsFilter.values.name].year === awardsFilter.values.year
      );
    }

    return;
  }
}
