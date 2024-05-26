export const getStyle = (state, index, mobile) => {
  if (mobile) {
    return ({
      gridRow: 1,
      gridColumn: state ? index + 2 : index + 2
   });
  }
  return ({
    gridRow: state ? 2 : 1,
    gridColumn: state ? index + 3 : index + 2
 });
}