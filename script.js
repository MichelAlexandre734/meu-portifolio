
/* ==========================
   EFEITO DIGITAÇÃO
========================== */

const texto =
"FULL STACK DEVELOPER • PYTHON • REACT • JAVASCRIPT • C";

const typing =
document.getElementById("typing");

let index = 0;

function escrever() {

    if(index < texto.length){

        typing.innerHTML += texto.charAt(index);

        index++;

        setTimeout(escrever, 80);
    }
}

escrever();


/* ==========================
   MENU MOBILE
========================== */

const menuToggle =
document.querySelector(".menu-toggle");

const menu =
document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});


document
.querySelectorAll(".menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* ==========================
   SCROLL REVEAL
========================== */

const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 120;

        if(top < visible){

            section.classList.add("active");
        }

    });
}

window.addEventListener(
"scroll",
revealSections
);

revealSections();


/* ==========================
   CONTADORES ANIMADOS
========================== */

const counters =
document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target =
        +counter.dataset.target;

        const updateCounter = () => {

            const current =
            +counter.innerText;

            const increment =
            target / 120;

            if(current < target){

                counter.innerText =
                Math.ceil(
                current + increment
                );

                setTimeout(
                updateCounter,
                15
                );

            }else{

                counter.innerText =
                target;
            }
        };

        updateCounter();

    });

};

let countersStarted = false;

window.addEventListener("scroll", () => {

    const stats =
    document.querySelector(".stats");

    if(!stats) return;

    const position =
    stats.getBoundingClientRect().top;

    if(position < window.innerHeight &&
       !countersStarted){

        startCounters();

        countersStarted = true;
    }

});


/* ==========================
   PARALLAX HERO
========================== */

window.addEventListener(
"mousemove",
(e)=>{

const image =
document.querySelector(".hero-image img");

if(!image) return;

const x =
(window.innerWidth / 2 - e.pageX)
 / 50;

const y =
(window.innerHeight / 2 - e.pageY)
 / 50;

image.style.transform =
`translate(${x}px, ${y}px)`;

});


/* ==========================
   TILT 3D NOS CARDS
========================== */

const cards =
document.querySelectorAll(".project");

cards.forEach(card => {

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width) - 0.5) * 20;

const rotateX =
((y / rect.height) - 0.5) * -20;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
`
perspective(1000px)
rotateX(0)
rotateY(0)
translateY(0)
`;

});

});


/* ==========================
   BARRAS DE HABILIDADES
========================== */

const progressBars =
document.querySelectorAll(".progress div");

function animateSkills(){

    progressBars.forEach(bar => {

        const width =
        bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition =
            "2s ease";

            bar.style.width =
            width;

        },300);

    });

}

let skillsAnimated = false;

window.addEventListener(
"scroll",
()=>{

const skills =
document.querySelector("#skills");

if(!skills) return;

const pos =
skills.getBoundingClientRect().top;

if(
pos < window.innerHeight &&
!skillsAnimated
){

animateSkills();

skillsAnimated = true;

}

});


/* ==========================
   FORMULÁRIO
========================== */

const formulario =
document.getElementById(
"formulario"
);

if(formulario){

formulario.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
" Mensagem enviada com sucesso!"
);

formulario.reset();

});

}


/* ==========================
   MATRIX EFFECT
========================== */

const canvas =
document.getElementById(
"matrix"
);

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const letters =
"01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

const chars =
letters.split("");

const fontSize = 14;

const columns =
canvas.width / fontSize;

const drops = [];

for(let i = 0;
i < columns;
i++){

drops[i] = 1;

}

function drawMatrix(){

ctx.fillStyle =
"rgba(5,8,22,0.08)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle =
"#00ff88";

ctx.font =
fontSize + "px monospace";

for(
let i = 0;
i < drops.length;
i++
){

const text =
chars[
Math.floor(
Math.random() *
chars.length
)
];

ctx.fillText(
text,
i * fontSize,
drops[i] * fontSize
);

if(
drops[i] * fontSize >
canvas.height &&
Math.random() > 0.975
){

drops[i] = 0;

}

drops[i]++;

}

}

setInterval(
drawMatrix,
35
);


/* ==========================
   RESIZE
========================== */

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

});



/* ==========================
   CURSOR GLOW
========================== */

const cursor =
document.createElement("div");

cursor.style.width = "20px";
cursor.style.height = "20px";

cursor.style.border =
"2px solid #00ff88";

cursor.style.borderRadius =
"50%";

cursor.style.position =
"fixed";

cursor.style.pointerEvents =
"none";

cursor.style.zIndex =
"99999";

cursor.style.boxShadow =
"0 0 15px #00ff88";

document.body.appendChild(
cursor
);

window.addEventListener(
"mousemove",
e=>{

cursor.style.left =
e.clientX - 10 + "px";

cursor.style.top =
e.clientY - 10 + "px";

});


/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener(
"load",
()=>{

const loader =
document.createElement("div");

loader.style.position =
"fixed";

loader.style.inset = "0";

loader.style.background =
"#050816";

loader.style.display =
"flex";

loader.style.alignItems =
"center";

loader.style.justifyContent =
"center";

loader.style.color =
"#00ff88";

loader.style.fontSize =
"2rem";

loader.style.zIndex =
"999999";

loader.innerHTML =
"INITIALIZING SYSTEM...";

document.body.appendChild(
loader
);

setTimeout(()=>{

loader.style.transition =
"1s";

loader.style.opacity =
"0";

setTimeout(()=>{

loader.remove();

},1000);

},1200);

});

