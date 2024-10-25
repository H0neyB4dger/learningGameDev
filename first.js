'use strict'

const canvas = document.querySelector('#canvasId')
const c = canvas.getContext('2d')
const x = [40, 70, 100, 130, 160, 190]


c.strokeText('Zigzag', 10, 10)
let y = 80
c.moveTo(10, 80)
for (let i = 0; i < x.length; i++) {
  if (y > 40) {
    y = 40
  }
  else {
    y = 80
  }
  c.lineTo(x[i], y)
}
c.stroke()
