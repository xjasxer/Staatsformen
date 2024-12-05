  function info1() {
var button = document.getElementById('info1')

document.getElementById('info-header').textContent = button.getAttribute("data-title")
document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
document.getElementById('info').style.display = "block";
document.getElementById('infonavmonarchie').style.display = "block";
document.getElementById('infonavrepublik').style.display = "none";
document.getElementById('info-header-btn').textContent = ""
document.getElementById('infos-1').style.display = "none";
  }
  
function info2() {
    var button = document.getElementById('info2')
  
    document.getElementById('info-header').textContent = button.getAttribute("data-title")
    document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
    document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
    document.getElementById('info').style.display = "block";
    document.getElementById('infonavmonarchie').style.display = "none";
    document.getElementById('infonavrepublik').style.display = "block";
    document.getElementById('info-header-btn').textContent = ""
    document.getElementById('infos-1').style.display = "none";

      }
function info3() {
        var button = document.getElementById('info3')
        
        document.getElementById('info-header').textContent = button.getAttribute("data-title")
        document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
        document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
        document.getElementById('info').style.display = "block";
        document.getElementById('infonavmonarchie').style.display = "none";
        document.getElementById('infonavrepublik').style.display = "none";
        document.getElementById('info-header-btn').textContent = ""
        document.getElementById('infos-1').style.display = "none";
   }


   document.querySelectorAll('.navmonarchiebtn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('info-header-btn').textContent = button.getAttribute("data-title-btn");
        document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung");
        document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2");
        document.getElementById('info').style.display = "block";
    });
});

document.querySelectorAll('.navrepublikbtn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('info-header-btn').textContent = button.getAttribute("data-title-btn");
        document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung");
        document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2");
        document.getElementById('info').style.display = "block";
    });
});

function barrieron() {
  document.getElementById('barrier').style.display="block"
}
function barrieroff() {
  document.getElementById('barrier').style.display="none"
}


function info1open() {
  document.getElementById('infos-1').style.display = "block";
}

function info1back() {
  document.getElementById('infos-1').style.display = "block";
  document.getElementById('info').style.display = "none";
}

  function closeinfo() {
   document.getElementById('info').style.display = "none"
   document.getElementById('infonavmonarchie').style.display = "none";
   document.getElementById('infonavrepublik').style.display = "none";
   document.getElementById('infos-1').style.display = "none";
  }

  function persoOpen() {
    document.getElementById('personalisieren').style.display = "block";
  }
  function persoclose() {
    document.getElementById('personalisieren').style.display = 'none'
  }
  function hilfeopen() {
    document.getElementById('hilfe').style.display = "block";
  }
  function hilfeclose() {
    document.getElementById('hilfe').style.display = 'none'
  }
  function sucheopen() {
    document.getElementById('suche').style.display = "block";
  }
  function sucheclose() {
    document.getElementById('suche').style.display = 'none'
  }
  function impressumopen() {
    document.getElementById('impressum').style.display = "block";
  }
  function impressumclose() {
    document.getElementById('impressum').style.display = 'none'
  }
  
var checkboxes = document.getElementsByClassName("checkbox");
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", checkbox);
}

  

function einstellungenopen() {
  document.getElementById('einstellungen').style.display = 'block'
}
function einstellungenclose() {
  document.getElementById('einstellungen').style.display = 'none'
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

document.getElementById('searchinput').addEventListener('keyup', function() {
  search();
});

function search() {
  const searchQuery = document.getElementById('searchinput').value.trim().toLowerCase();

 
  if (searchQuery === '' || searchQuery.length < 2) {
      document.getElementById('result').innerHTML = '';
      document.getElementById('result').style.overflowY = "hidden";
      return;
  }

  const searchWords = searchQuery.split(/\s+/);  

  const filteredResults = laender.filter(item => {
    return searchWords.every(word => {
      return item.name.toLowerCase().includes(word) || item.form.toLowerCase().includes(word);
    });
  });

  if (filteredResults.length > 0) {
    document.getElementById('result').style.overflowY = "scroll";

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

    document.getElementById('result').innerHTML = resultHTML;

} else {
    document.getElementById('result').innerHTML = `Keine Treffer für "${searchQuery}" gefunden`;
    document.getElementById('result').style.overflowY = "hidden";
}
}
