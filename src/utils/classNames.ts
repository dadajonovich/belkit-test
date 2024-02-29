export const classNames = (...classNames: (string | undefined)[]) => {
  return classNames.filter((item) => item !== undefined).join(' ');
};
