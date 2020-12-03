function stars(){
    let count = 1500;
    let i = 0;
    while(i < count){
      let scene = document.querySelector('.scene')
      let star = document.createElement('i');
      let x = Math.floor(Math.random() * window.innerWidth)
      let y = Math.floor(Math.random() * window.innerHeight)
      let size = Math.random() * 2

      let duration = Math.random() * 10;


      star.style.left = x+'px'
      star.style.top = y+'px'
      star.style.width = size+'px'
      star.style.height = size+'px'

      star.style.animationDuration = 2 + duration+'s'
      star.style.animationDelay = duration+'s'


      scene.appendChild(star)
      i++
    }
}

stars();


function toogleScene(){
  const change = document.querySelector('.scene ')
  
  const musicDay = '/surf.mp4'
  const musicNight = 'https://raw.githubusercontent.com/diegoeis/tableless-static-images/master/2010/12/LouisArmstrongAllHisStars-StruttinWithSomeBarbecue.mp3'

  
  change.classList.toggle('active')
  


  change.querySelector('audio').src = musicDay

  
}


