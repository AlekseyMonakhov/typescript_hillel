export interface IAward {
  name: string;
  year: number;
}

export interface IFilm {
  name: string;
  year: number;
  rating: number;
  awards: IAward[];
}

export interface ICategorie {
  name: string;
  films: IFilm[];
}

export interface IMatchFilter {
  filter: string;
}

export interface IRangeFilter {
  filterFrom: number;
  filterTo: number;
}

export interface IAwardsFilter {
  values: IAward;
}

export interface IBaseFilterState {
  nameFilter?: IMatchFilter;
}

export interface IFilmFilterState extends IBaseFilterState {
  yearFilter?: IRangeFilter;
  ratingFilter?: IRangeFilter;
  awardsFilter?: IAwardsFilter;
}
