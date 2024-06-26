import React, { useCallback, useEffect } from 'react';
import { TextStyle, Application, ICanvas, Graphics, Container, Point, RAD_TO_DEG, DEG_TO_RAD, Bounds } from 'pixi.js'
import { checkIfOutOfBounds, getCircle, getGeometries, getGraphicsCircle, getNextAngel } from './helpers';

const objectsCount = 20;
   export const Animation = () => {
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
                  const velocityMap = new Map();
                  const circlesMap = new Map();
                  const prGeoms = geoms
                  .map((i) => {
                        if (i.type === 'circle') {
                           const circ =  new Graphics()
                              .circle(i.x, i.y, i.radius)
                              .fill(i.color);
                           alphaMap.set(circ.uid, i.alpha);
                           velocityMap.set(circ.uid, i.velocity);
                           circlesMap.set(circ.uid, i);
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
                        const midX = minX + (maxX - minX) / 2;
                        const midY = minY + (maxY - minY) / 2;
                        const isOutOfField = checkIfOutOfBounds(i, { top: 0, bottom: height, right: width, left: 0});
                        if (isOutOfField) {
                           alphaMap.delete(i.uid);
                           velocityMap.delete(i.uid);
                           circlesMap.delete(i.uid);
                           i.destroy();
                           const { circle, circleData } = getGraphicsCircle({ width: clientWidth, height: clientHeight });
                           alphaMap.set(circle.uid, circleData.alpha);
                           velocityMap.set(circle.uid, circleData.velocity);
                           circlesMap.set(circle.uid, circleData);
                           app.stage.addChild(circle);
                           return;
                        }
                        let deltaX = 0;
                        let deltaY = 0;
                        const radius = circlesMap.get(i.uid).radius;
                        const rightBound = width - radius;
                        const leftBound = 0 + radius;
                        const topBound = 0 + radius;
                        const bottomBound = height - radius;
                        try {
                           if (midX >= rightBound) {
                              deltaX = rightBound - midX;
                              const nextAngel = getNextAngel(angel, 'right');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           if (midX <= leftBound) {
                              deltaX = leftBound - midX;
                              const nextAngel = getNextAngel(angel, 'left');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           if (midY >= bottomBound) {
                              deltaY = bottomBound - midY;
                              const nextAngel = getNextAngel(angel, 'bottom');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           if (midY <= topBound) {
                              deltaY = topBound - midY;
                              const nextAngel = getNextAngel(angel, 'top');
                              alphaMap.set(i.uid, nextAngel);
                              throw new Error();
                           }
                           throw new Error();
                        } catch (_) {
                           const newAngel = alphaMap.get(i.uid);
                           const velocity = velocityMap.get(i.uid);
                           const alpha = DEG_TO_RAD * newAngel;
                           const sinAlpha = Math.sin(alpha);
                           const cosAlpha = Math.cos(alpha);
                           const newPositionX = cosAlpha * deltaMS * velocity;
                           const newPositionY = sinAlpha * deltaMS * velocity;
                           i.position.x += newPositionX + deltaX;
                           i.position.y += newPositionY + deltaY;
                           return i;

                        }
                     });
                  })
               })

            }
            return () => {
               canvas?.remove()
            }

      }, []);
      return (<></>)
}
