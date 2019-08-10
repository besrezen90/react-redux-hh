export interface IUser {
  login: string;
  password: string;
}

export interface IFilter {
  text?: string;
}

export interface IPagination {
  pages?: number;
  per_page: number;
  page: number;
}

export interface IApiResponse {
  items: Array<IVacancy>;
  pages: number;
  per_page: number;
  page: number;
}

export interface IArea {
  id: string;
  name: string;
}

export interface ISalary {
  from?: number;
  to?: number;
  currency?: "RUR" | "EUR" | "USD";
}

export interface IEmployer {
  id: string;
  name: string;
  logo_urls?: {
    90?: string;
  };
}

export interface ISnippet {
  requirement: string;
  responsibility: string;
}

export interface IVacancy {
  id: string;
  name: string;
  area: IArea;
  salary?: ISalary;
  employer: IEmployer;
  published_at: string;
  snippet: ISnippet;
}
