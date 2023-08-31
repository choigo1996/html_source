const app = document.getElementById('app')

const  getRandom = (min,max) => {
  return (Math.random() * (max-min) + 1)
}
const addBokeh = () => {
  const size = getRandom(10, 150)
  const bokeh = document.createElement('span')
  bokeh.classList.add('bokeh')
  bokeh.style.top = getRandom(1,window.innerHeight)+'px'
  bokeh.style.left = getRandom(1,window.innerWidth)+'px'
  bokeh.style.backgroundColor = `hsl(50, ${getRandom(50,100)}%, ${getRandom(50,80)}%)`
  bokeh.style.width = size+'px'
  bokeh.style.height = size+'px'
  bokeh.style.filter = `blur(${getRandom(10,30)}px)`;
  bokeh.style.opacity = getRandom(0,0.5)
  app.append(bokeh)
}

for(let i = 0;i < 50; i++){
  addBokeh()  
}