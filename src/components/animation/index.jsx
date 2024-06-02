import React, { useCallback, useEffect } from 'react';
import { Stage, Text, createRoot } from '@pixi/react';
import { TextStyle, Application, ICanvas, Graphics, Container } from 'pixi.js'
import { getCircles } from './helpers';

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
                  const circles = getCircles(40, clientHeight, clientWidth);
                  console.log(circles)
                  const prCircles = circles
                     .map((i) => {
                        return new Graphics()
                           .circle(i.x, i.y, i.radius)
                           .fill(i.color);
                     });
                  app.stage.addChild(...prCircles);
                  //app.ticker.add((time) => {
                  //   // console.log(circle.position.y, clientHeight);
                  //   if (circle.position.x > (clientWidth || 0)) {
                  //      circle.position.x -= time.deltaTime;
                  //   } else {
                  //      circle.position.x += time.deltaTime;
                  //   }
                  //   if (circle.position.y > (clientHeight || 0)) {
                  //      circle.position.y -= time.deltaTime;
                  //   } else {
                  //      circle.position.y += time.deltaTime;
                  //   }
                  //})
               })

            }
            return () => {
               canvas?.remove()
            }

      }, []);
      return (<></>)
}
