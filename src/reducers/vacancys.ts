import { Action } from "redux";
import { IVacancy } from "../types";

const fakeVacancy: IVacancy = {
  id: "14e2866b-d5bf-40d1-97dc-3aaad7933ba3",
  name: "Инженер",
  area: {
    id: "fc2d5a48-f0db-432e-8928-24475b7c3ddb",
    name: "Питер"
  },
  salary: {
    from: 20000,
    to: 30000,
    currency: "RUR"
  },
  employer: {
    id: "4040312",
    name: "Affiliate Control",

    logo_urls: {
      90: "https://hhcdn.ru/employer-logo/3020020.png"
    }
  },
  published_at: "2019-08-09T13:33:36+0300",
  snippet: {
    requirement:
      "Уверенные знания VanillaJS / VueJS / Vuex. Отличные знания HTML5 и CSS3. Умение работать с асинхронным кодом. Знать, что такое...",
    responsibility:
      "Мы ищем опытного (middle/senior) человека для работы над <highlighttext>frontend</highlighttext>-частью большой партнерской сети, ориентированной на беттинг. Вам предстоит заниматься..."
  }
};

const initialState: Array<IVacancy> = [fakeVacancy];

export function vacancys(vacancys = initialState, action: Action & { vacancys: Array<IVacancy> }) {
  switch (action.type) {
    default:
      return vacancys;
  }
}
