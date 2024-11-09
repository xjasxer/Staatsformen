<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Die Staatsformen</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<div id="nav-infos">
  
<h4>Informationen über die Stattsformen</h4>

<input type="button" value="Monarchie"
 data-title="Monarchie"
 data-beschreibung="8u"
 data-beschreibung2="2222"
 data-content="1"
 id="info1"
 onclick="info1(), einstellungenclose()">

<input type="button" value="Republik"
data-title="Republik"
 data-beschreibung="dww uhuh"
 data-beschreibung2="duhduhu"
 id="info2"
 onclick="info2(), einstellungenclose()">

<input type="button" value="Diktatur"
data-title="Diktatur"
 data-beschreibung="sssstts"
 data-beschreibung2="huhuhuhuhu"
 id="info3"
 onclick="info3(), einstellungenclose()">

</div>

<!-- Informations Block  -->

<div id="info">
 <img src="/src/icons/x.png" alt="Close" onclick="closeinfo()"> 
  <h1 class="center"  id="info-header">hh</h1>
  <p class="center" id="info-header-btn"></p>

<!-- Nav bar in Monarchie  -->
 <form method="post" id="form-infonav" >
    <input type="hidden" name="speichernavart" value="" id="speichernavart">
    <input type="button" id="submitBtn" >
</form>



<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['speichernavart'])) {
        $content = $_POST['speichernavart'];

        if ($content === '1') {
            echo '
            <input type="button" value="1" 
            data-title-btn="1"
            data-beschreibung="1111"
            data-beschreibung2="1ww1w1w1w"
            onclick="checknavmonarchie()"
            class="navmonarchiebtn">

            <input type="button" value="2" 
            data-title-btn="2"
            data-beschreibung="2222"
            data-beschreibung2="thzjkddsftgf"
            onclick="checknavmonarchie()"
            class="navmonarchiebtn">

            <input type="button" value="3" 
            data-title-btn="3"
            data-beschreibung="333"
            data-beschreibung2="fefwfrg"
            onclick="checknavmonarchie()"
            class="navmonarchiebtn">';
        }
    }
}
?>



  <p class="center" id="info-beschreibung">z</p>
  <p class="center" id="info-beschreibung2">z</p>
  <p id="copyright">icon:Flaticon.com</p>
</div>

<!-- Informations Block ENDE  -->

<div id="einstellungen">
  <img src="/src/icons/x.png" alt="close"onclick="einstellungenclose()">
<h1 class="center" >Einstellungen</h1>
<h3 class="center">Stellen sie hier ein was bei "Zusatz" angezeigt werden soll</h3>

<div id="einstellungenradio">
<label>
    <input type="radio" name="optionen" value="1" id="radio" > Teilautonome Republik
</label><br>

<label>
    <input type="radio" name="optionen" value="2" id="radio"> Islamische Republik
</label><br>

<label>
    <input type="radio" name="optionen" value="3" id="radio"> 	Föderale Republik
</label><br>

<label>
    <input type="radio" name="optionen" value="4" id="radio"> Deutschland
</label><br>
</div>

<input type="button" value="aktuallisieren" onclick="update(), einstellungenclose() ,checkbox() " id="einstellungsbtn" class="button-19">

</div>


<div id="nav-karte">

<h2>Karteneinstellungen</h2>

<div id="nav-formen" >   
<h4>Staatsformen:</h4>


<input type="radio" id="mo" name="karte" value="1" class="checkbox">   
<label for="1">Monarchie</label><br>

<input type="radio" id="re" name="karte" value="2" class="checkbox">
  <labeol for="2">Republik (alle Formen)</label> <br>
  
  <input type="radio" id="zusatzcb" name="karte" value="3" class="checkbox">
  <label for="3" id="zusatzlabel">Zusatz</label> <br>
<div id="einstellungszusatzdiv">
 <h5 id="einstellungentext" onclick="einstellungenopen(), closeinfo() ">  Weitere Einstellungen </h5>
 <img src="/src/icons/frage.png" alt="">
</div>
 
<script src="js.js"></script>
</body>
</html>