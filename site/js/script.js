const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

let menu = document.querySelector(".nav__item");

let bol = true;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    if (bol) {
        popup.appendChild(menu);
        bol = false;
    }
}

const navlinks = Array.from(menu.children);

navlinks.forEach((nav) => {
    nav.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

let links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active');
    })
})


let filterBtn = document.querySelectorAll('.filter-btn');

filterBtn.forEach(filter => {
    filter.addEventListener('click', () => {
        filterBtn.forEach(item => item.classList.remove('active'));
        filter.classList.add('active');
        if (filter.textContent === "PHP"){
            document.getElementById("js").style.display = "none";
            document.getElementById("php").style.display = "block";
        } else if (filter.textContent === "all" || filter.textContent === "все"){
            document.getElementById("js").style.display = "block";
            document.getElementById("php").style.display = "block";
        } else {
            document.getElementById("php").style.display = "none";
            document.getElementById("js").style.display = "block";
        }
    })

})
const changeru = document.querySelectorAll('.changelangru');
const changeen = document.querySelectorAll('.changelangen');
let lang = document.querySelector('.language');
let bool = false;

lang.onclick = function () {
    bool = langchange(bool);
}

function langchange(bool){
    if (!bool){
        const enlang = document.querySelector('.lang');
        lang.removeChild(enlang);

        const rulang = document.createElement('p');
        rulang.textContent = 'Ru';
        rulang.classList.add("lang");
        rulang.setAttribute('id', 'ru');

        lang.appendChild(rulang);

        changeen.forEach(en => {
            en.style.display = "none";
        })
        changeru.forEach(ru => {
            ru.style.display = "block";
        })
        bool = true;
    }
    else{
        const rulang = document.querySelector('.lang');
        lang.removeChild(rulang);

        const enlang = document.createElement('p');
        enlang.textContent = 'En';
        enlang.classList.add("lang");
        enlang.setAttribute('id', 'en');

        lang.appendChild(enlang);

        changeen.forEach(en => {
            en.style.display = "block";
        })
        changeru.forEach(ru => {
            ru.style.display = "none";
        })
        bool = false;
    }
    menu = document.querySelector(".nav__item").cloneNode(1);
    return bool;
}