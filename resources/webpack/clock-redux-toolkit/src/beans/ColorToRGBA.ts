export default ({ r, g, b, a }: IColor) => {
  console.log(r, g, b, a);
  return `rgba( ${r},${g},${b},${a})`;
};
