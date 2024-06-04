
const rGBAToHexA = (rgb) => {
   console.log(rgb)
   return rgb
      .map(number => number.toString(16))
      .map(string => string.length === 1 ? "0" + string : string)
      .join("")
 }

const getRandom = (num) => Math.round(Math.random() * num);

export const getGeometries = (count, height, width) => {
   const circles = Array(count || 5).fill({}).map(() => ({
      type: 'circle',
      x: getRandom(width),
      y: getRandom(height),
      radius: 10 + getRandom(50),
      color: `#${rGBAToHexA([getRandom(255), getRandom(255), getRandom(255)])}`
   }));
   let lines = [];
   for (let i = 0; i < circles.length; i += 1) {
      for (let ii = 0; ii < circles.length; ii += 1) {
         if (i === ii) continue
         const line = {
            fromX: circles[i].x,
            fromY: circles[i].y,
            toX: circles[ii].x,
            toY: circles[ii].y,
            type: 'line',
            color: `#${rGBAToHexA([getRandom(255), getRandom(255), getRandom(255)])}`
         };
         lines.push(line);
      }
   }
   return [...circles, ...lines];
}
