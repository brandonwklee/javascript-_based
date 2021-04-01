var changeMode = document.getElementById('changeMode');
var settings = document.getElementById('settings');
var links = document.getElementsByTagName('button');
var about = document.getElementById('about');
var shop = document.getElementById('shop');
var home = document.getElementById('title')
var changeMode = document.getElementById('changeMode');

about.addEventListener('click', openAbout);
home.addEventListener('click', openMainPage);
shop.addEventListener('click', openShop);
changeMode.addEventListener('click', changeBackground);

function openAbout() {
    window.open("C:\\Users\\Brandon\\Documents\\frontend_projects\\websites\\brando_website\\about.html", "_self");
}

function openShop() { 
    window.open("C:\\Users\\Brandon\\Documents\\frontend_projects\\websites\\brando_website\\shop\\home.html", "_self");
}

function openMainPage() { 
    window.open("C:\\Users\\Brandon\\Documents\\frontend_projects\\websites\\brando_website\\website.html", "_self");
}

function changeBackground() { 
    if (body.className !== 'toggled' && settings.className !== 'toggled' && shop.className !== 'toogled' && title.className !== 'toogled' 
    && about.className !== 'toogled' && changeMode.className !== 'toggled') { 
        body.className = 'toggled';
        settings.className = 'toggled';
        shop.className = 'toggled';
        title.className = 'toggled';
        about.className = 'toggled';
        changeMode.className = 'toggled';
        if (changeMode.firstChild.data == 'DARKMODE') { 
            changeMode.firstChild.data = 'LIGHTMODE';
        }
    }
    else { 
        body.className = '';
        settings.className = '';
        shop.className = '';
        title.className = '';
        about.className = '';
        changeMode.className = '';
        changeMode.firstChild.data = 'DARKMODE';
    }
}