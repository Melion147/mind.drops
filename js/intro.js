window.onload = function(){ 
    this.setStatusBarColor();
    this.localColorCheck();
}
// COLORS
const orange = '#F39C12'
const violet = '#802d59'
const blue = '#16278c'
const green = '#254922'
const red = '#bb5233'

function setStatusBarColor(){
    let LSC = localStorage.Pcolor;
    const metas = document.querySelectorAll('meta')
            // metas[2].setAttribute('content',LSC)
    
    document.querySelector('head').innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="${LSC}">

        
    <title>mind.drops</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="style/main.css">
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <link rel="stylesheet" href="style/intro.css">
    <link rel="manifest" href="manifest.json">
    <!-- IOS Support -->
    <link rel="apple-touch-icon" href="icons/icon-96x96.png">
    `
}

function localColorCheck() {
    let LSC = localStorage.Pcolor;
    const initBtns = document.querySelectorAll('.init-btn');
    if (LSC == orange) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-orange')
        })
    } else if (LSC == violet) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-violet')
        })
    } else if (LSC == blue) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-blue')
        })
    } else if (LSC == green) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-green')
        })
    } else if (LSC == red) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-red')
        })
    }


    document.documentElement.style.setProperty('--main-bg-color', LSC);

}

let counter = 0;
document.querySelector('.fa-chevron-right').addEventListener('click', async() => {
    new Audio('../audio/water.mp3').play()
    if (counter === 0) {
        document.querySelector('.container h1').classList.add('none');
        document.querySelector('.container h2').innerHTML =
            `Our <span>mind</span> is active, very
    active: our thoughts jump
    from the <span>past</span>, tumble in
    the present and chase the
    <span>future</span>. Our <span>minds</span> have
    forgotten to stand  <span>still</span>.`
        document.querySelector('.container h2').classList.add('h22')
        counter++;
        document.querySelectorAll('span').forEach(curr => {
            setTimeout(() => {
                curr.classList.add('spanAni')
            }, 550);


        });
    } else if (counter === 1) {
        document.querySelector('.container h2').innerHTML =
            `Thoughts are very
            <span>powerful</span>, shape
            our <span>reality</span> and
            have an enormous
            impact on our
            <span>well-being</span>.`
        document.querySelector('.container h2').classList.remove('h22');

        document.querySelector('.container h2').classList.add('h23');
        counter++;
        document.querySelectorAll('span').forEach(curr => {
            setTimeout(() => {
                curr.classList.add('spanAni')
            }, 550);

        });
    } else if (counter === 2) {
        document.querySelector('.container h2').innerHTML =
            `So why not planting
            <span>positive</span> seeds in
            your inner<span> garden</span>
            via an easy to
            incorporate <span>routine</span>
            in your <span>daily life</span>?`
        document.querySelector('.container h2').classList.remove('h23');

        document.querySelector('.container h2').classList.add('h24');
        counter++;
        document.querySelectorAll('span').forEach(curr => {
            setTimeout(() => {
                curr.classList.add('spanAni')
            }, 550);

        });
    } else if (counter === 3) {
        document.querySelector('.container h2').innerHTML =
            `<span>mind.drops</span> can help
            you to cultivate
            <span>positive</span> thoughts
            through repeating
            selected
            <span>affirmations</span>, or
            work with your own
            through a digital
            <span>mala necklace</span>.`
        document.querySelector('.container h2').classList.remove('h24');

        document.querySelector('.container h2').classList.add('h25');
        counter++;
        document.querySelectorAll('span').forEach(curr => {
            setTimeout(() => {
                curr.classList.add('spanAni')
            }, 550);

        });
    } else if (counter === 4) {
        document.querySelector('.container h2').innerHTML =
            `Push your own <span>pause</span>
            button today and
            see how it will
            <span>affect</span> your play
            button of <span>tomorrow</span>.`
        document.querySelector('.container h2').classList.remove('h25');

        document.querySelector('.container h2').classList.add('h26');
        counter++;
        document.querySelectorAll('span').forEach(curr => {
            setTimeout(() => {
                curr.classList.add('spanAni')
            }, 550);

        });
    } else if (counter === 5) {
        localStorage.setItem('First', 'false')
        location.href = 'index.html';
    }

})