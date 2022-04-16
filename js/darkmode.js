const btn_dark = document.querySelector(".btn-darkmode");
btn_dark.addEventListener ('click', () => {
    document.body.classList.toggle("darkmode")
    
    if( document.body.className=== "darkmode")
    {btn_dark.innerHTML= `<img src="images/sun_icon.png" alt="lightMode-icon" class="icono-modo">
    Light Mode`}
    else {btn_dark.innerHTML= `<img src="images/moon_icon.png" alt="DarkMode-icon" class="icono-modo">
    Dark Mode`}

    })