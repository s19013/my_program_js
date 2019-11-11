'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        // const results = ["大吉","中吉","小吉","凶"];

        // btn.textContent = results[Math.floor(Math.random() * results.length)];
        const n = Math.random();
        if (n < 0.05) 
        {
            btn.textContent = "大吉";
        }
        else if (n < 0.2) 
        {
            btn.textContent = "中吉";
        }
        else 
        {
            btn.textContent = "小吉";
        }
    });
}