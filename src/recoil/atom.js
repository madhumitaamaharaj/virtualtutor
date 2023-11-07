import { atom } from 'recoil';

export const searchFilterState = atom({
  key: 'searchFilterState',
  default: '',
});

export const categoryState = atom({
  key: 'categoryState',
  default: 'All',
});
export const syllabusOpenState = atom({
  key: 'syllabusOpenState',
  default: false,
});