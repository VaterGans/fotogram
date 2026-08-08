const dialogRef = document.getElementById('crazy-animals');
let currentIndex = 0;
const body = document.getElementsByTagName("body");

function openDialog(id, event) {
    currentIndex = parseInt(id);
    console.log(currentIndex);
    updateDialog();
    event.stopPropagation();
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function stayOpen(event) {
    event.stopPropagation();
}

const pictures = [
    "crazyAnimal01.png",
    "crazyAnimal02.png",
    "crazyAnimal03.png",
    "crazyAnimal04.png",
    "crazyAnimal05.png",
    "crazyAnimal06.png",
    "crazyAnimal07.png",
    "crazyAnimal08.png",
    "crazyAnimal09.png",
    "crazyAnimal10.png",
    "crazyAnimal11.png",
    "crazyAnimal12.png"
];

const alt = [
    "Eulenbär — Ein Mischwesen aus Eule und Bär, mit Eulengesicht und Bärenkörper, das neugierig in die Kamera blickt.",
    "Schlangenechse — Eine Kreuzung aus Schlange und Echse, mit langem schuppigem Körper und echsenartigen Beinen, die sich über einen Felsen windet.",
    "Löwhorn — Ein Löwe mit einem einzelnen, kräftigen Horn auf der Stirn, der majestätisch im Gehäge wie in der Savanne steht.",
    "Pfaumingo — Ein Mix aus Pfau und Flamingo, mit langen rosa Beinen und einem farbenprächtigen Pfauenschweif, der elegant am Wasser steht.",
    "Zebraff — Ein Affenkop, welcher einen Affenkörper und ein Zebrakörper hat, aber donnoch geschickt auf einem Baum kletternd die Zoobesuchenden im Hintergrund beeindruckt.",
    "Flughorntiger — Ein Tiger mit Flügeln und einem geschwungenen Horn, der in einer dynamischen Flugpose auf einem dicken Ast posiert.",
    "Schnabelbiber — Ein Biber mit Entenschnabel, der am Ufer eines Flusses sitzt und ein Stück Holz hält.",
    "Elestrauß — Ein Elefant mit dem langen Hals und den Federn eines Straußes, der im Gehege wie über eine weite Ebene schreitet.",
    "Eisgurubär — Ein Eisbär mit den markanten Beinen eines Kängurus, der beinahe meditativ im Schnee sitzt.",
    "Gepaffe — Ein Gepard mit Geraffenkörper, wodurch es die Blätter eines Baumes in großer Höhe erreicht und frisst.",
    "Löger — Ein Löwe mit Tigerstreifen, der kraftvoll auf einem Felsen steht und in die Ferne blickt.",
    "Affofant — Ein Elefant mit dem Gesicht eines Affen, der gediegen durch die Gräser streift."
];

const title = [
    "Eulenbär",
    "Schlangenechse",
    "Löwhorn",
    "Pfaumingo",
    "Zebraff",
    "Flughorntiger",
    "Schnabelbiber",
    "Elestrauß",
    "Eisgurubär",
    "Gepaffe",
    "Löger",
    "Affofant"
];

function init() {
    const pic = document.getElementById("canvas");
    for (let i = 0; i < pictures.length; i++) {
        pic.innerHTML += `<div id='${i}' class='thumbnail' tabindex='0' onclick='openDialog(this.id, event)' aria-haspopup='dialog' aria-controls='crazy-animals'><img src='img/${pictures[i]}' alt='${alt[i]}'></div>`;
    }
}

function showTitle() {
    const currentTitle = document.getElementById("foto-title");
    currentTitle.innerHTML = title[currentIndex];
}

function showCurrentPicture() {
    const currentPicture = document.getElementById("foto");
    console.log(currentIndex);
    currentPicture.src = `img/${pictures[currentIndex]}`;
    currentPicture.alt = `${alt[currentIndex]};
    event.stopPropagation();`
}

function currentPicNumber() {
    const currentNumber = document.getElementById("current");
    currentNumber.innerHTML = currentIndex + 1;
    return currentNumber;
}

function maxPicNumber() {
    const maxPic = document.getElementById("total");
    maxPic.innerHTML = pictures.length;
}

function showNextFoto() {
    if (currentIndex == pictures.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateDialog();
}

function showPreviousFoto() {
    if (currentIndex == 0) {
        currentIndex = pictures.length - 1;
    } else {
        currentIndex--;
    }
    updateDialog();
}

function updateDialog() {
    showCurrentPicture();
    showTitle();
    currentPicNumber();
    maxPicNumber();
}





/*  onkeydown='if(event.key === "Enter" && document.activeElement === this) openDialog(this.id, event)' */






























/* Lösung:
    const currentFoto = document.getElementById("foto");
    const currentTitle = document.getElementById("foto-title");
    const currentIndex = parseInt(document.getElementById("current").textContent);
    const totalFotos = parseInt(document.getElementById("total").textContent); 
    (this.id)*/