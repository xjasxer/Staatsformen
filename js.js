  function info1() {
var button = document.getElementById('info1')

document.getElementById('info-header').textContent = button.getAttribute("data-title")
document.getElementById('info-beschreibung').textContent = button.getAttribute("data-beschreibung")
document.getElementById('info-beschreibung2').textContent = button.getAttribute("data-beschreibung2")
document.getElementById('info').style.display = "block";
document.getElementById('infonavmonarchie').style.display = "block";
document.getElementById('infonavrepublik').style.display = "none";
document.getElementById('info-header-btn').textContent = ""
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




  function closeinfo() {
   document.getElementById('info').style.display = "none"
   document.getElementById('infonavmonarchie').style.display = "none";
   document.getElementById('infonavrepublik').style.display = "none";
  }


var checkboxes = document.getElementsByClassName("checkbox");
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", checkbox);
}


  function checkbox() {
var a = document.getElementById('mo');
var b = document.getElementById('re');
var c = document.getElementById('zusatzcb');
var zusatz = document.querySelector('input[name="optionen"]:checked');

  if (zusatz) {
  var value = zusatz.value;
  closeinfo()
  einstellungenclose();

  if (c.checked && value === "1") {
    document.body.style.color = "red";
  } else {

  }
}
            

if (!a.checked && !b.checked) {
  document.body.style.backgroundImage = "url('/src/img/weltkarte_ipad.jpg')";
  einstellungenclose();
  closeinfo();
  
  
} else {
  einstellungenclose();
  closeinfo()
if (a.checked) {
  document.body.style.backgroundImage = "url('/src/img/monarchie_ipad.png')";
 
}
if (b.checked) {
  document.body.style.backgroundImage = "url('/src/img/republik_ipad.png')";

}
if (a.checked && b.checked) {

}


            

}}

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
document.getElementById('zusatzlabel').textContent = "Teilautonome Republik"

                } else if (result === "2") {
document.getElementById('zusatzlabel').textContent = "Islamische Republik"

                } else if (result === "3") {
document.getElementById('zusatzlabel').textContent = "Föderale Republik"

                }
                else if (result === "4") {
document.getElementById('zusatzlabel').textContent = "Deutschland"

                }
            } else {
document.getElementById('zusatzlabel').textContent = "Zusatz"

}

}