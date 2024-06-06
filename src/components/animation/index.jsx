import React, { useCallback, useEffect } from 'react';
import { TextStyle, Application, ICanvas, Graphics, Container, Point, RAD_TO_DEG } from 'pixi.js'
import { getGeometries, getNextAngel } from './helpers';

   export const Animation = (argument) => {
      useEffect(() => {
         const root = document.getElementById('canvasContainer');
         const canvas = document.querySelector("canvas");
         const clientHeight = root?.clientHeight;
         const clientWidth = root?.clientWidth;
            
            if (!canvas) { 
               const app = new Application();
               app.init({ autoStart: true, width: clientWidth, height: clientHeight }).then(() => {
                  root?.appendChild(app.canvas);
                  const geoms = getGeometries(10, clientHeight, clientWidth);
                  const alphaMap = new Map();
                  const prGeoms = geoms
                     .map((i) => {
                        if (i.type === 'circle') {
                           const circ =  new Graphics()
                              .circle(i.x, i.y, i.radius)
                              .fill(i.color);
                           alphaMap.set(circ.uid, i.alpha);
                           return circ;
                        }
                        if (i.type === 'line') {
                           return new Graphics()
                           .moveTo(i.fromX, i.fromY)
                           .lineTo(i.toX, i.toY)
                           .stroke({ width: 4, color: i.color});
                        }
                     });
                  app.stage.addChild(...prGeoms);
                  const canvas = document.querySelector("canvas");
                  const { height, width } = canvas;
                  app.ticker.add(({ deltaMS }) => {
                     app.stage.children.forEach((i) => {
                        const angel = alphaMap.get(i.uid);
                        const alpha = RAD_TO_DEG * angel;
                        const sinAlpha = Math.sin(alpha);
                        const cosAlpha = Math.cos(alpha);
                        const newPositionX = cosAlpha * deltaMS * 0.1;
                        const newPositionY = sinAlpha * deltaMS * 0.1;
                        i.position.x += newPositionX;
                        i.position.y += newPositionY;
                        const { maxX, maxY, minX, minY } = i.getBounds();
                        //const { x, y } = i.getGlobalPosition();
                        if (maxX >= width) {
                           console.log('right', angel)
                           const nextAngel = getNextAngel(angel);
                           alphaMap.set(i.uid, nextAngel);
                        }
                        if (minX <= 0) {
                           console.log('left', angel)
                           const nextAngel = getNextAngel(angel);
                           alphaMap.set(i.uid, nextAngel);
                        }
                        if (maxY >= height) {
                           console.log('bottom', angel)
                           const nextAngel = getNextAngel(angel);
                           alphaMap.set(i.uid, nextAngel);
                        }
                        if (minY <= 0) {
                           console.log('top', angel)
                           const nextAngel = getNextAngel(angel);
                           alphaMap.set(i.uid, nextAngel);
                        }
                        //console.log('stage', canvas.height);
                        return i;
                     });
                  })
               })

            }
            return () => {
               canvas?.remove()
            }

      }, [argument]);
      return (<></>)
}
