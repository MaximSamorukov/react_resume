
const rGBAToHexA = (rgb) => {
   console.log(rgb)
   return rgb
      .map(number => number.toString(16))
      .map(string => string.length === 1 ? "0" + string : string)
      .join("")
 }

const getRandom = (num) => Math.round(Math.random() * num);

export const getCircles = (count, height, width) => {
   return Array(count || 5).fill({}).map(() => ({
      x: getRandom(width),
      y: getRandom(height),
      radius: 10 + getRandom(50),
      color: `#${rGBAToHexA([getRandom(255), getRandom(255), getRandom(255)])}`
   }))
}
