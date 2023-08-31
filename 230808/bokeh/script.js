const app = document.getElementById('app')

const  randomNumber = (min,max) => {
  return (Math.random() * (max-min + 1) + min)
}
const addBokeh = () => {
  const size = randomNumber(50, 120)
  const bokeh = document.createElement('span') 

  bokeh.style.top = `${randomNumber(1,100)}%`
  bokeh.style.left =`${randomNumber(1,100)}%`
  bokeh.style.backgroundColor = `hsl(${randomNumber(0,360)}, ${randomNumber(50,60)}%, 50%)`
  bokeh.style.width = size+'px'
  bokeh.style.height = size+'px'
  bokeh.style.filter = `blur(${randomNumber(0,1)}px)`;
  
  bokeh.style.animationDuration = `${randomNumber(10,30)}s`;
  bokeh.style.animationDelay = `${randomNumber(1,10)}s`;
  bokeh.classList.add('bokeh')
//   bokeh.style.opacity = Math.random(0.5,1);
  app.append(bokeh)
}

for(let i = 0;i < 70; i++){
  addBokeh()  
}