// ================= ELEMENTS =================

const envelope = document.getElementById("envelope");
const envelopeSection = document.getElementById("envelopeSection");
const card = document.getElementById("card");
const typing = document.getElementById("typing");
const hearts = document.getElementById("hearts");

// ================= LETTER =================

const letter = `Dear Abemma ❤️,

Happy Girlfriend's Day.

Every day with you feels like a beautiful dream come true.

You are my happiness,
my strength,
and the most precious part of my life.

Thank you for loving me,
supporting me,
and always making me smile.

No matter what happens in life,
I promise to always cherish every moment with you.

Thank you for being the most beautiful chapter of my life.

I hope this little surprise reminds you
how deeply you are loved.

Happy Girlfriend's Day once again. ❤️

Forever Yours,

❤️ Dada ❤️`;

// ================= ENVELOPE OPEN =================

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeSection.style.opacity = "0";

    }, 1000);

    setTimeout(() => {

        envelopeSection.style.display = "none";

        card.classList.remove("hidden");

        typeLetter();

    }, 1800);

});

// ================= TYPEWRITER =================

function typeLetter() {

    typing.innerHTML = "";

    let i = 0;

    function type() {

        if (i < letter.length) {

            typing.innerHTML += letter.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

}

// ================= FLOATING HEARTS =================

const heartList = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "💓",
    "💞"
];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML =
        heartList[Math.floor(Math.random() * heartList.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 450);