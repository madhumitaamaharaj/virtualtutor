import { atom, selector } from 'recoil';

export const enrolledStudentsState = atom({
  key: 'enrolledStudentsState',
  default: [],
});

export const enrolledStudentsSelector = selector({
  key: 'enrolledStudentsSelector',
  get: ({ get }) => {
    return get(enrolledStudentsState);
  },
});
export const coursesState = atom({
  key: 'coursesState',
  default: [],
});

export const coursesSelector = selector({
  key: 'coursesSelector',
  get: ({ get }) => {
    return get(coursesState);
  },
});