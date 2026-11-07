const toast=document.getElementById('toast');let toastTimer;function message(t){toast.textContent=t;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}function heart(x,y){const h=document.createElement('span');h.className='float';h.textContent=['♡','♥','✿','🌷'][Math.floor(Math.random()*4)];h.style.left=x+'px';h.style.top=y+'px';h.style.setProperty('--x',(Math.random()*150-75)+'px');document.body.appendChild(h);setTimeout(()=>h.remove(),1900)}function burst(n=16){for(let i=0;i<n;i++)setTimeout(()=>heart(innerWidth*(.15+Math.random()*.7),innerHeight*(.55+Math.random()*.35)),i*55)}
const speech=document.getElementById('speech'),balloons=document.getElementById('balloons'),hint=document.getElementById('sceneHint'),continueBtn=document.getElementById('continueBtn'),boy=document.getElementById('boy');const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function revealGreeting(){
  hint.textContent='A little friend is on his way...';
  speech.textContent='Hmm... I have something important to tell you!';
  if(reduced){
    boy.style.display='none';
    setTimeout(()=>{speech.classList.add('show');hint.textContent='A little birthday wish, just for you...';},250);
    setTimeout(()=>{speech.textContent="It's your birthday!!! 🥳";balloons.classList.add('show');},2150);
    setTimeout(()=>{speech.classList.remove('show');continueBtn.disabled=false;},2600);
    return;
  }
  setTimeout(()=>boy.classList.add('journey'),650);
  setTimeout(()=>{
    boy.classList.add('waiting');
    speech.classList.add('show');
    hint.textContent='He has remembered something...';
  },650+2550);
  setTimeout(()=>{
    speech.textContent="It's your birthday!!! 🥳";
    hint.textContent='A little birthday wish, floating just for you...';
  },650+3950);
  setTimeout(()=>{
    boy.classList.remove('waiting');
    speech.classList.remove('show');
  },650+4050);
  // Balloons pop up while he is still walking; he fades away only during the final 1.5 seconds.
  setTimeout(()=>balloons.classList.add('show'),650+5000);
  setTimeout(()=>{
    continueBtn.disabled=false;
    continueBtn.textContent='open your birthday surprise ♡';
  },650+9000);
}
if(reduced){setTimeout(revealGreeting,250)}else setTimeout(revealGreeting,500);

continueBtn.addEventListener('click',()=>{if(continueBtn.disabled)return;const birthday=document.getElementById('birthday');birthday.classList.add('revealed');setTimeout(()=>birthday.scrollIntoView({behavior:'smooth',block:'center'}),120);setTimeout(()=>message('Happy Birthday, my love! 🌷💗'),450)});
document.getElementById('surprise').addEventListener('click',()=>{message('surprise, birthday girl! you are loved more than all the flowers in the world 🌷');burst(22)});document.getElementById('blow').addEventListener('click',()=>{const f=document.getElementById('flame'),btn=document.getElementById('blow');if(f.classList.contains('out')){f.classList.remove('out');document.getElementById('wish').textContent='The candle is glowing again—make another wish! ♡';btn.setAttribute('aria-label','Blow out the candle');message('A little more birthday magic! ✨');return}f.classList.add('out');document.getElementById('wish').textContent='Wish made! I hope every beautiful thing finds you. ♡';btn.setAttribute('aria-label','Relight the candle');message('🎉 wish sent to the universe!');burst(18)});document.getElementById('flame').addEventListener('click',()=>document.getElementById('blow').click());document.getElementById('openLetter').addEventListener('click',()=>{const l=document.getElementById('letter'),open=l.classList.toggle('show');l.setAttribute('aria-hidden',String(!open));document.getElementById('openLetter').textContent=open?'close your letter ♡':'open your letter ♡';if(open)l.scrollIntoView({behavior:'smooth',block:'center'})});document.getElementById('heart').addEventListener('click',e=>{message('sending you a million hugs and kisses 💗');const r=e.currentTarget.getBoundingClientRect();for(let i=0;i<15;i++)setTimeout(()=>heart(r.left+r.width/2,r.top),i*50);document.getElementById('heartText').textContent='a thousand little kisses for you ♡'});document.querySelectorAll('.photo').forEach(p=>p.addEventListener('click',()=>message(p.querySelector('b').textContent+' — one of my forever favorites ♡')));
