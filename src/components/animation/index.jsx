import React, { useCallback, useEffect } from 'react';
import { TextStyle, Application, ICanvas, Graphics, Container, Point, RAD_TO_DEG, DEG_TO_RAD, Bounds } from 'pixi.js'
import { checkIfOutOfBounds, getCircle, getGeometries, getGraphicsCircle, getNextAngel } from './helpers';

const objectsCount = 20;
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
                  const geoms = getGeometries(objectsCount, clientHeight, clientWidth);
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
                        const { maxX, maxY, minX, minY } = i.getBounds();
                        const isOutOfField = checkIfOutOfBounds(i, { top: 0, bottom: height, right: width, left: 0});
                        if (isOutOfField) {
                           alphaMap.delete(i.uid);
                           i.destroy();
                           const { circle, circleData } = getGraphicsCircle({ width: clientWidth, height: clientHeight });
                           alphaMap.set(circle.uid, circleData.alpha);
                           app.stage.addChild(circle);
                           return;
                        }
                        try {
                           if (maxX >= width || minX >= width) {
                              //console.log('right', angel)
                              const nextAngel = getNextAngel(angel, 'right');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           if (minX <= 0 || maxX <= 0) {
                              //console.log('left', angel)
                              const nextAngel = getNextAngel(angel, 'left');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           if (maxY >= height || minY >= height) {
                              //console.log('bottom', angel)
                              const nextAngel = getNextAngel(angel, 'bottom');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           if (minY <= 0 || maxY <= 0) {
                              //console.log('top', angel)
                              const nextAngel = getNextAngel(angel, 'top');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           throw new Error();
                        } catch (_) {
                           const newAngel = alphaMap.get(i.uid);
                           const alpha = DEG_TO_RAD * newAngel;
                           const sinAlpha = Math.sin(alpha);
                           const cosAlpha = Math.cos(alpha);
                           const newPositionX = cosAlpha * deltaMS * 0.1;
                           const newPositionY = sinAlpha * deltaMS * 0.1;
                           i.position.x += newPositionX;
                           i.position.y += newPositionY;
                           return i;

                        }
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
