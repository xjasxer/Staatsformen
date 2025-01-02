/* Funktion*/
  function info1() {
var button = document.getElementById('info1'); /* setzt eine variable auf das object welche durch id gefundne wird */
document.getElementById('info-header').textContent = button.getAttribute("data-title");  /*  Setzt den inhalt eines HTML objektes auf den Inhalt welcher vom Attribut eines HTML objects abgefragt wird */
document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung"); /*  Setzt den inhalt eines HTML objektes auf den Inhalt welcher vom Attribut eines HTML objects abgefragt wird */
document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2"); /*  Setzt den inhalt eines HTML objektes auf den Inhalt welcher vom Attribut eines HTML objects abgefragt wird */
document.getElementById('info').style.display = "block"; /* setzt den Style eines Objectes welches mit id festgelegt wird auf sichtbar */
document.getElementById('infonavmonarchie').style.display = "block";/* setzt den Style eines Objectes welches mit id festgelegt wird auf sichtbar */
document.getElementById('infonavrepublik').style.display = "none";/* setzt den Style eines Objectes welches mit id festgelegt wird auf unsichtbar */
document.getElementById('info-header-btn').textContent = "";   /* setzt den Inhalt eines HTML objectes auf nichts */
document.getElementById('infos-1').style.display = "none"; /* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
  }
  /* Funktion / siehe Kommentierung oben*/
function info2() {
    var button = document.getElementById('info2')
    document.getElementById('info-header').textContent = button.getAttribute("data-title");
    document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung");
    document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2");
    document.getElementById('info').style.display = "block";
    document.getElementById('infonavmonarchie').style.display = "none";
    document.getElementById('infonavrepublik').style.display = "block";
    document.getElementById('info-header-btn').textContent = "";
    document.getElementById('infos-1').style.display = "none";
      }
  /* Funktion / siehe Kommentierung oben*/
function info3() {
        var button = document.getElementById('info3')
        document.getElementById('info-header').textContent = button.getAttribute("data-title"); 
        document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung");
        document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2") ;
        document.getElementById('info').style.display = "block";
        document.getElementById('infonavmonarchie').style.display = "none";
        document.getElementById('infonavrepublik').style.display = "none";
        document.getElementById('info-header-btn').textContent = "";
        document.getElementById('infos-1').style.display = "none";
   }
   /* Eventlistener auf alle Elemente mit der Klasse navmonarchiebtn */
   document.querySelectorAll('.navmonarchiebtn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('info-header-btn').textContent = button.getAttribute("data-title-btn");   /*  Setzt den inhalt eines HTML objektes auf den Inhalt welcher vom Attribut eines HTML objects abgefragt wird */
        document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung");   /*  Setzt den inhalt eines HTML objektes auf den Inhalt welcher vom Attribut eines HTML objects abgefragt wird */
        document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2");   /*  Setzt den inhalt eines HTML objektes auf den Inhalt welcher vom Attribut eines HTML objects abgefragt wird */
        document.getElementById('info').style.display = "block";  /* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
    });
});
   /* Eventlistener auf alle Elemente mit der Klasse navrepublikbtn */
   /* siehe Kommentierung oben */
document.querySelectorAll('.navrepublikbtn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('info-header-btn').textContent = button.getAttribute("data-title-btn");
        document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung");
        document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2");
        document.getElementById('info').style.display = "block";
    });
});
/* Funktion um den hintergund grau werden zu lassen */
function barrieron() {
  document.getElementById('barrier').style.display="block";  /* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
}
/* Funktion um den hintergund normal werden zu lassen */
function barrieroff() {
  document.getElementById('barrier').style.display="none";  /* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
}
/* Funktion zum öffnen der Info Startseite  */
function info1open() {
  document.getElementById('infos-1').style.display = "block";/* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
}
 /* Funktion zum zuück gehen auf die Info Startseite */
function info1back() {
  document.getElementById('infos-1').style.display = "block";/* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
  document.getElementById('info').style.display = "none";/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
}
  function closeinfo() {
   document.getElementById('info').style.display = "none"; /* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
   document.getElementById('infonavmonarchie').style.display = "none";/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
   document.getElementById('infonavrepublik').style.display = "none";/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
   document.getElementById('infos-1').style.display = "none";/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
  }
  /* Funktion zum öffnen der Seite Personalisieren */
  function persoOpen() {
    document.getElementById('personalisieren').style.display = "block"; /* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
  }
  /* Funktion zum schliessen der Seite Personalisieren */
  function persoclose() {
    document.getElementById('personalisieren').style.display = 'none';/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
  }
  /* Funktion zum öffnen der Hilfe Seite*/
  function hilfeopen() {
    document.getElementById('hilfe').style.display = "block";/* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
  }
   /* Funktion zum schliessen der Seite Hilfe */
  function hilfeclose() {
    document.getElementById('hilfe').style.display = 'none'; /* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
  }
  /* Funktion zum öffnen der Such Seite */
  function sucheopen() {
    document.getElementById('suche').style.display = "block";/* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
  }
   /* Funktion zum schliessen der Seite Suchen  */
  function sucheclose() {
    document.getElementById('suche').style.display = 'none';/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
  }
  /* Funktion zum öffnen der Impressum Seite */
  function impressumopen() {
    document.getElementById('impressum').style.display = "block";/* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
  }
   /* Funktion zum schliessen der Seite Impressum */
  function impressumclose() {
    document.getElementById('impressum').style.display = 'none';/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
  }
  /* Funktion zum öffnen der Einstellungs Seite */
  function einstellungenopen() {
    document.getElementById('einstellungen').style.display = 'block';/* setzt den Style eined Objectes welches mit id festgelegt wird auf sichtbar */
  }
   /* Funktion zum schliessen der Seite Einstellungen */
  function einstellungenclose() {
    document.getElementById('einstellungen').style.display = 'none';/* setzt den Style eined Objectes welches mit id festgelegt wird auf unsichtbar */
  }


var checkboxes = document.getElementsByClassName("checkbox");
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", checkbox);
}

  



function update() {
  let selectedOption = document.querySelector('input[name="optionen"]:checked');
            
            if (selectedOption) {
                let result = selectedOption.value;

                if (result === "1") {


                } else if (result === "2") {


                } else if (result === "3") {


                }
                else if (result === "4") {


                }
            } else {
}
   /* JS Variable */
}
const laender = [
  { name: 'Abchasien', form: 'Republik', einwohner: "242.862 (2011)" },
  { name: 'Afghanistan', form: 'Islamische Republik', einwohner: null },
  { name: 'Ägypten', form: 'Republik', einwohner: null },
  { name: 'Albanien', form: 'Republik', einwohner: null },
  { name: 'Algerien', form: 'Republik', einwohner: null },
  { name: 'Andorra', form: 'Monarchie (Fürstentum)', einwohner: null },
  { name: 'Angola', form: 'Republik', einwohner: null },
  { name: 'Antigua und Barbuda', form: 'Monarchie (Commonwealth Realm)', einwohner: null },
  { name: 'Äquatorialguinea', form: 'Republik', einwohner: null },
  { name: 'Argentinien', form: 'Föderale Republik', einwohner: null },
  { name: 'Armenien', form: 'Republik', einwohner: null },
  { name: 'Arzach/Bergkarabach', form: 'Republik', einwohner: null },
  { name: 'Aserbaidschan', form: 'Republik', einwohner: null },
  { name: 'Äthiopien', form: 'Föderale Republik', einwohner: null },
  { name: 'Australien', form: 'Föderale Monarchie (Commonwealth Realm)', einwohner: null },
  { name: 'Bahamas', form: 'Monarchie (Commonwealth Realm)', einwohner: null },
  { name: 'Bahrain', form: 'Monarchie (Königreich)', einwohner: null },
  { name: 'Bangladesch', form: 'Republik', einwohner: null },
  { name: 'Barbados', form: 'Republik', einwohner: null }
];
   /*  Eventlistener auf Tastatur im Such Feld*/
document.getElementById('searchinput').addEventListener('keyup', function() {
  search();
});
   /* Funktion */
function search() {
  const searchQuery = document.getElementById('searchinput').value.trim().toLowerCase();   /* setzt das Geschriebene auf kleinbuchstaben */
  /* if abfrage / wenn nichts dort steht oder das Wort weniger als 2 Buchstaben hat */
  if (searchQuery === '' || searchQuery.length < 2) {
      document.getElementById('result').innerHTML = '';   /* setzt den DIV Content der Ergebnisse auf nichts  */
      document.getElementById('result').style.overflowY = "hidden";   /*  versteckt die Scroll bar */
      return;
  }

  const searchWords = searchQuery.split(/\s+/);    /* spaltet die eingabe in einzelnde Wörter */

  const filteredResults = laender.filter(item => { 
    return searchWords.every(word => {
      return item.name.toLowerCase().includes(word) || item.form.toLowerCase().includes(word);
    });
  });   /* überprüft ob das Wort in der Variable mit Namen oder der Form übereinstimmt und speichert das Ertgebnis in einer Variable */

  if (filteredResults.length > 0) {   /* Sobald das Ergebnis mehr als 0 Buchtsaben hat folgt dieser Code */
    document.getElementById('result').style.overflowY = "scroll";   /* Scroll Bar wird Sichtbar */
  /*  Folgender Code wird in einer Variable gespeichert*/
    let resultHTML = `
        <table border="1" style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Form</th>
                    <th>Einwohner</th>
                </tr>
            </thead>
            <tbody>
    `;
  /* Für jedes gefundenes Element wird dieser Code wiederhohlt */
    filteredResults.forEach(item => {
        resultHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.form}</td>
                <td>${item.einwohner}</td>
            </tr>
        `;
    });
    resultHTML += `
            </tbody>
        </table>
    `;

    document.getElementById('result').innerHTML = resultHTML;   /* setzt den obrigen Code als HTML Code in den DIV */

} else {
    /*  Sonst */
    document.getElementById('result').innerHTML = `Keine Treffer für "${searchQuery}" gefunden`;   /* Text wird in Div eingesetzt */ 
    document.getElementById('result').style.overflowY = "hidden";   /* versteckt die Scroll Bar */
}
}
var checkbox1 = document.getElementById('pers1')
checkbox1.addEventListener('change', () => {
  if (checkbox1.checked) {
  document.cookie = "pers1=true; max-age=604800; path=/"
  } else {
      document.cookie = "pers1=false; max-age=604800; path=/"
  }
});
document.addEventListener('DOMContentLoaded', () => {

});