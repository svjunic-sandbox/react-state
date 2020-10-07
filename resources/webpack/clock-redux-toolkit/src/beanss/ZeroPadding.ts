/**
 * 0詰めフォーマット
 * @param  {Number} num  number or string
 * @param  {Number} n  number of characters
 * @return {String} (In an error, 'false' is returned. )
 */

export interface IZeroPadding {
  num: string | number;
  minimamDisit: number;
}

export default ({ num, minimamDisit }: IZeroPadding) => {
  let result;
  switch (typeof num) {
    case 'string':
      result = num;
      break;
    case 'number':
      result = num.toString();
      break;
    default:
      return false;
  }
  while (result.length < minimamDisit) {
    result = '0' + result;
  }
  return result;
};
