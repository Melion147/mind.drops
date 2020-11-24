window.onload = function() {
    let LSC = localStorage.Pcolor;
    if (LSC == '#F39C12') {
        document.documentElement.style.setProperty('--bckg-src', "url('../img/bck-nav-orange.png')");
    } else if (LSC == '#802d59') {
        document.documentElement.style.setProperty('--bckg-src', "url('../img/bck-nav-violet.png')");
    } else if (LSC == '#16278c') {
        document.documentElement.style.setProperty('--bckg-src', "url('../img/bck-nav-blue.png')");
    } else if (LSC == '#254922') {
        document.documentElement.style.setProperty('--bckg-src', "url('../img/bck-nav-green.png')");
    } else if (LSC == '#bb5233') {
        document.documentElement.style.setProperty('--bckg-src', "url('../img/bck-nav-red.png')");
    }
}


document.querySelectorAll('.fa-chevron-left').forEach((curr) => {
    curr.addEventListener('click', () => location.href = 'index.html')
})