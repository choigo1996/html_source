const video = document.getElementById('video')
console.log(video.paused)
video.removeAttribute('controls')
video.addEventListener('click',() => {
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
})
video.addEventListener('mouseenter', () => {
    if(video.paused){
        video.play()
    }
})
video.addEventListener('mouseleave',()=>{
    if(!video.paused){
        video.pause()
    }
})