'use strict';

{
  const words = ['apple','sky','blue','middle','set','cannibalism','mother-fucker','father-hunt'];
  let word;
  let loc;
  let score;
  let miss;
  const timelimit = 30 * 1000;
  let starttime;
  let isplaying = false;

  const target = document.getElementById('target');
  const scorelabel = document.getElementById('score');
  const misslabel = document.getElementById('miss');
  const timerlabel = document.getElementById('timer');

  function updatetarget()
  {
    let placeholder = '';
    for (let i = 0; i < loc; i++)
    {
      placeholder +='_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  function updatetimer()
  {
    const timeleft = starttime + timelimit - Date.now();
    timerlabel.textContent = (timeleft / 1000).toFixed(2);
    const timeoutid = setTimeout(() => {
      updatetimer();
    },10);

    if (timeleft < 0)
    {
      isplaying = false;
      clearTimeout(timeoutid);
      timerlabel.textContent = '0.00';
      setTimeout(() => {
        showresult();
      },100);
      target.textContent = 'click to replay';
    }
  }
  function showresult()
  {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`);
  }

  window.addEventListener('click', () =>
  {
    if (isplaying === true)
    {
      return;
    }
    isplaying = true;
    loc = 0;
    score = 0;
    miss = 0;
    scorelabel.textContent = score;
    misslabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];
    target.textContent = word;
    starttime = Date.now();
    updatetimer();
  });

  window.addEventListener('keydown', e =>
   {
    if (isplaying !== true)
    {
      return;
    }
    if (e.key === word[loc])
    {
      loc++;
      if (loc === word.length)
      {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      updatetarget();
      score++;
      scorelabel.textContent = score;
    }
    else
    {
      miss++;
      misslabel.textContent= miss;
    }
  });
}
