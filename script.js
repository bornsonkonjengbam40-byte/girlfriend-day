// ================= ELEMENTS =================

const envelope = document.getElementById("envelope");
const envelopeSection = document.getElementById("envelopeSection");
const card = document.getElementById("card");
const typing = document.getElementById("typing");
const hearts = document.getElementById("hearts");

// ================= LETTER =================

const message = `Dear Abemma ❤️,

Happy Girlfriend's Day.

Every day with you feels like a beautiful dream come true.

You are my happiness,
my peace,
and the most beautiful part of my life.

Thank you for always being by my side,
for believing in me,
and for making even the ordinary days feel special.

Whenever I smile,
there's always a little reason connected to you.

I may not always find the perfect words,
but I hope you always know how deeply I love you.

Thank you for being my best friend,
my favorite person,
and the love of my life.

Happy Girlfriend's Day, My Love.

Forever Yours ❤️

Bornson ❤️`;

// ================= OPEN ENVELOPE =================

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeSection.style.opacity = "0";

    }, 900);

    setTimeout(() => {

        envelopeSection.style.display = "none";

        card.classList.remove("hidden");

        typeWriter();

    }, 1700);

});

// ================= TYPEWRITER =================

function typeWriter(){

    let i = 0;

    typing.innerHTML = "";

    function type(){

        if(i < message.length){

            typing.innerHTML += message.charAt(i);

            i++;

            setTimeout(type,30);

        }

    }

    type();

}

// ================= FLOATING HEARTS =================

const emojis = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💞"
];

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (16 + Math.random()*20) + "px";

    heart.style.animationDuration =
        (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);
