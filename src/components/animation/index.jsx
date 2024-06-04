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
                  const geoms = getGeometries(3, clientHeight, clientWidth);
                  console.log(geoms);
                  const prGeoms = geoms
                     .map((i) => {
                        if (i.type === 'circle') {
                           return new Graphics()
                              .circle(i.x, i.y, i.radius)
                              .fill(i.color);
                        }
                        if (i.type === 'line') {
                           const line = new Graphics()
                           .setStrokeStyle(10, i.color)
                           .moveTo(i.fromX, i.fromY)
                           .lineTo(i.toX, i.toY);
                           line.zIndex = 1000;
                           return line;
                        }
                     });
                  console.log(prGeoms);
                  app.stage.addChild(...prGeoms);
                  console.log(app.stage.children)
                  app.ticker.add((time) => {
                     //console.log(time)
                     // new Point().lineTo()

                  })
               })

            }
            return () => {
               canvas?.remove()
            }

      }, [argument]);
      return (<></>)
}
