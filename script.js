// The Horror Ledger — front page behaviours

// Date the edition exactly one hundred years ago to-day.
const editionDate = document.getElementById("edition-date");
if (editionDate) {
    const then = new Date();
    then.setFullYear(then.getFullYear() - 100);
    const formatted = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(then);
    editionDate.textContent = `Arkham, Mass., ${formatted}`;
}

// A faint lamplight follows the reader's hand across the page.
const paper = document.getElementById("paper");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (paper && !reduceMotion.matches) {
    window.addEventListener(
        "pointermove",
        (event) => {
            const rect = paper.getBoundingClientRect();
            paper.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            paper.style.setProperty("--my", `${event.clientY - rect.top}px`);
        },
        { passive: true }
    );
}
