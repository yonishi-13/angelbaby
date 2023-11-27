document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "I just wanna live in this moment forever",
        "Cause I'm afraid that living couldn't get any better",
        "Started giving up on the word forever",
        "Until you gave up heaven so we could be together",
        "You're my angel, angel baby",
        " Angel, you're my angel baby",
        "Baby, you're my angel, angel baby"
        

    ];

    const delay = 33; 
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    displayLyrics();
});

