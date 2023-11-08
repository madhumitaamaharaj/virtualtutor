
import { atom , selector } from 'recoil';

export const enrolledStudentsState = atom({
  key: 'enrolledStudentsState',
  default: [],
});

export const coursesState = atom({
  key: 'coursesState',
  default: [],
});
export const courseProgressSelector = selector({
  key: 'courseProgressSelector',
  get: ({ get }) => {
    const courses = get(coursesState);
    return courses.map((course) => course.completed);
  },
  set: ({ set }, newProgress, courseId) => {
    set(coursesState, (courses) =>
      courses.map((course) =>
        course.id === courseId ? { ...course, completed: newProgress } : course
      )
    );
  },
});
