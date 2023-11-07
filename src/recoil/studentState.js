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
