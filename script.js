const participants = [
    { name: "Keven Abraham", image: "img/keven.jpg" },
    { name: "Hitalo Jacome", image: "img/hitalo.jpg" },
    // { name: "Letícia Astorga", image: "img/leticia.jpg" },
    { name: "Maria Eduarda", image: "img/duda.jpeg" },
    { name: "Murilo Santana", image: "img/murilo.jpg" }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startPresentation() {
    shuffle(participants);
    const participantsDiv = document.getElementById("participants");
    participantsDiv.innerHTML = "";

    participants.forEach((participant, index) => {
        const participantDiv = document.createElement("div");
        participantDiv.classList.add("participant");

        const img = document.createElement("img");
        img.src = participant.image;
        participantDiv.appendChild(img);

        const p = document.createElement("p");
        p.textContent = `${index + 1}° - ${participant.name}`;
        participantDiv.appendChild(p);

        participantsDiv.appendChild(participantDiv);
    });

    participantsDiv.style.display = "flex";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("refreshButton").style.display = "block"; // Exibe o botão de recarregar
}

function reload() {
    location.reload(); // Recarrega a página
}
