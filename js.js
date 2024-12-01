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
  { name: 'Deutschland', form: 'xx', einwohner: 1000 },
  { name: 'Frankreich', form: 'yy', einwohner: 700 },
  { name: 'Italien', form: 'zz', einwohner: 600 }
];

document.getElementById('searchinput').addEventListener('keyup', function() {
  search();
});

function search() {
  const searchQuery = document.getElementById('searchinput').value.trim().toLowerCase();

 
  if (searchQuery === '' || searchQuery.length < 2) {
      document.getElementById('result').innerHTML = '';
      return;
  }

  const searchWords = searchQuery.split(/\s+/);  

  const filteredResults = laender.filter(item => {
    return searchWords.every(word => {
      return item.name.toLowerCase().includes(word) || item.form.toLowerCase().includes(word);
    });
  });

  if (filteredResults.length > 0) {
      let resultHTML = '<ul>';
      filteredResults.forEach(item => {
          resultHTML += `<li>${item.name} - ${item.form} - ${item.einwohner}</li>`;
      });
      resultHTML += '</ul>';
      document.getElementById('result').innerHTML = resultHTML;
  } else {
      document.getElementById('result').innerHTML = `Keine Treffer für "${searchQuery}" gefunden`;
  }
}

