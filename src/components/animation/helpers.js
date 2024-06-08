import { Graphics } from "pixi.js";

const rGBAToHexA = (rgb) => {

   return rgb
      .map(number => number.toString(16))
      .map(string => string.length === 1 ? "0" + string : string)
      .join("")
 }

export const checkIfOutOfBounds = (geometry, { top, bottom, right, left}) => {
   const { maxX, maxY, minX, minY } = geometry.getBounds();
   const midX = minX + (maxX - minX) / 2;
   const midY = minY + (maxY - minY) / 2;
   if (midY < (top - 50)) {
      return true;
   }
   if (midY > (bottom + 50)) {
      return true;
   }
   if (midX > (right + 50)) {
      return true;
   }
   if (midX < (left - 50)) {
      return true;
   }
   return false
}

const getRandom = (num) => Math.round(Math.random() * num);

export const getCircle = ({ height, width }) => {
   const circle = {
      type: 'circle',
      x: getRandom(width),
      y: getRandom(height),
      alpha: getRandom(360),
      radius: 10 + getRandom(50),
      color: `#${rGBAToHexA([getRandom(255), getRandom(255), getRandom(255)])}`,
   };
   return circle;
}

export const getGraphicsCircle = ({ width, height }) => {
   const newCircleData = getCircle({ width, height });
   const newCircle = new Graphics()
      .circle(newCircleData.x, newCircleData.y, newCircleData.radius)
      .fill(newCircleData.color);
   return { circle: newCircle, circleData: newCircleData };
}

export const getGeometries = (count, height, width) => {
   const circles = Array(count || 5).fill({}).map(() => {
      const circle = getCircle({ height, width });
      return circle;
   });

   let lines = [];
   const map =  new Map();
   for (let i = 0; i < circles.length; i += 1) {
      for (let ii = 0; ii < circles.length; ii += 1) {
         if (i === ii) continue;
         if (map.has(`${i}${ii}`)) continue;

         const line = {
            alpha: getRandom(360),
            speed: getRandom(1),
            fromX: circles[i].x,
            fromY: circles[i].y,
            toX: circles[ii].x,
            toY: circles[ii].y,
            type: 'line',
            color: `#${rGBAToHexA([getRandom(255), getRandom(255), getRandom(255)])}`
         };
         lines.push(line);
         map.set(`${i}${ii}`, `${ii}${i}`);
         map.set(`${ii}${i}`, `${i}${ii}`);
      }
   }
   return [...circles];
}

export const getNextAngel = (angel, side) => {
   const rightAngel = 90;
   if (side === 'right') {
      if (angel === 0 || angel === 360) {
         return 179;
      }
      if (angel >= 270) {
         const firstAngel = 360 - angel;
         const secondAngel = 90 + (rightAngel + firstAngel);
         return secondAngel;
      }
      if (angel <= 90) {
         const secondAngel = 270 - (rightAngel + angel);
         return secondAngel;
      }
   }
   if (side === 'left') {
      if (angel === 180) {
         return 1;
      }
      if (angel > 180) {
         const firstAngel = angel - 180;
         const secondAngel = 270 + 180 - rightAngel - firstAngel;
         return secondAngel;
      }
      if (angel < 180) {
         const firstAngel = 180 - angel;
         const secondAngel = rightAngel + firstAngel - 90;
         return secondAngel;
      }
   }
   if (side === 'top') {
      if (angel === 270) {
         return 91;
      }
      if (angel > 270) {
         const firstAngel = angel - 270;
         const secondAngel = 180 - rightAngel - firstAngel;
         return secondAngel;
      }
      if (angel < 270) {
         const firstAngel = 270 - angel;
         const secondAngel = 180 - (180 - (rightAngel + firstAngel));
         return secondAngel;
      }
   }
   if (side === 'bottom') {
      if (angel === 90) {
         return 271;
      }
      if (angel > 90) {
         const firstAngel = angel - 90;
         const secondAngel = 360 - rightAngel - firstAngel;
         return secondAngel;
      }
      if (angel < 90) {
         const firstAngel = 90 - angel;
         const secondAngel = 180 + rightAngel + firstAngel;
         return secondAngel;
      }
   }
   if (angel > 90) {
      return angel + 90;
   }
   return angel - 90;
}