
import { atom } from 'recoil';

export const enrolledStudentsState = atom({
  key: 'enrolledStudentsState',
  default: [],
});

export const coursesState = atom({
  key: 'coursesState',
  default: [],
});
export const courseCompletionState = atom({
  key: 'courseCompletionState',
  default: {}, 
});
