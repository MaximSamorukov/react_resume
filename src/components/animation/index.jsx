import React, { useCallback, useEffect } from 'react';
import { TextStyle, Application, ICanvas, Graphics, Container, Point } from 'pixi.js'
import { getGeometries } from './helpers';

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
                  const geoms = getGeometries(30, clientHeight, clientWidth);
                  const prGeoms = geoms
                     .map((i) => {
                        if (i.type === 'circle') {
                           return new Graphics()
                              .circle(i.x, i.y, i.radius)
                              .fill(i.color);
                        }
                        if (i.type === 'line') {
                           return new Graphics()
                           .moveTo(i.fromX, i.fromY)
                           .lineTo(i.toX, i.toY)
                           .stroke({ width: 4, color: i.color});
                        }
                     });
                  app.stage.addChild(...prGeoms);
                  console.log(app.stage.children)
                  app.ticker.add(({ deltaMS }) => {
                     const angel = 0;
                     const alpha = (2 * Math.PI) / (360 / angel);
                     const sinAlpha = Math.sin(alpha);
                     const cosAlpha = Math.cos(alpha);
                     app.stage.children.forEach((i) => {
                        const newPositionX = cosAlpha * deltaMS * 0.1;
                        const newPositionY = sinAlpha * deltaMS * 0.1;
                        const { x, y } = i.position;
                        const { maxX } = app.stage.getBounds();
                        console.log(app.stage.getBounds());
                        i.position.x += newPositionX;
                        i.position.y += newPositionY;
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
