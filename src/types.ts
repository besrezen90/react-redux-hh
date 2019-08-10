export interface IUser {
  login: string;
  password: string;
}

export interface IFilter {
  text?: string;
}

// https://api.hh.ru/vacancies?text="frontend"

export interface IVacancy {
  id: string;
  name: string;
  area: {
    id: string;
    name: string;
  };
  salaty?: {
    from?: number;
    to?: number;
    currency?: number;
  };
  employer: {
    id: string;
    name: string;
    logo_urls?: {
      90?: string;
    };
  };
  published_at: string;
  snippet: {
    requirement: string;
    responsibility: string;
  };
}
