/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const Title = document.getElementsByTagName("h1");
  Title[0].innerText = "NEW TITLE";
  return Title;
};
changeTitle();

/* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */

const addClassToTitle = function () {
  document.getElementsByTagName("h1")[0].classList.add("myHeading");
};
addClassToTitle();

/* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */

const changePcontent = function () {
  const AllPs = document.querySelectorAll("div p");
  AllPs.forEach((onep) => {
    onep.innerText = "lorem ipsum ecc ecc ec eccc eccc eccc";
  });
};

changePcontent();

/* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */

const changeUrls = function () {
  const allModUrls = document.querySelector("div a");
  allModUrls.setAttribute("href", "https://www.google.com");
  return allModUrls;
};
changeUrls();

/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

const addToTheSecond = function () {
  const NewLi = document.createElement("li");
  NewLi.innerText = "4th";
  document.getElementById("secondList").appendChild(NewLi);
};
addToTheSecond();

/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */

const addParagraph = function () {
  const newP = document.createElement("p");
  newP.innerText = "Nuovo paragrafo al primo div";
  document.querySelector("body div").appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

const hideFirstUl = function () {
  document.getElementById("firstList").style.display = "none";
};
hideFirstUl();

/* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */

const paintItGreen = function () {
  const greenUl = document.getElementsByTagName("ul");

  for (let i = 0; i < greenUl.length; i++) {
    greenUl[i].style.backgroundColor = "green";
  }
};
paintItGreen();

/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */

const makeItClickable = function () {
  const clickableTitle = document.getElementsByTagName("h1")[0];

  console.log(clickableTitle.innerText.slice(0, -1));

  clickableTitle.addEventListener("click", function () {
    clickableTitle.innerText = clickableTitle.innerText.slice(0, -1);
  });
};

makeItClickable();

/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */

const revealFooterLink = function () {
  const alertFooter = document.querySelector("footer a");
  alertFooter.addEventListener("click", function () {
    alert(
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"
    );
  });
};
revealFooterLink();

/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */

const generateTable = function () {
  const table = document.createElement("table");
  const tableHeader = document.createElement("th");
  const tableRow = document.createElement("tr");
  document.createElement("tr");
};

/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */

const addRow = function () {};

/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */

const changeColorWithRandom = function () {
  let h2Colored = document.getElementsByTagName("h2")[0];
  let colors = ["red", "blue", "yellow", "green", "purple"];
  h2Colored.addEventListener("click", function () {
    for (let i = 0; i < colors.length; i++) {
      h2Colored = h2Colored.style.color = colors[i];
    }
    return h2Colored;
  });
};
//  DOESNT WORK
// CODICE RANDOMICO
// randomColor = Math.floor(Math.random()*16777215).toString(16);

changeColorWithRandom();

/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */

const deleteVowels = function () {};
