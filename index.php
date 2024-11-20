<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Die Staatsformen</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    








<div id="main-nav">
<center>
<h2 style="color:white;">Die Staatsformen</h2 >

<table>
<tr>
<td><img src="src/icons/welt.png" alt="" class="nav-img"></td>
<td><input type="button" value="Karteneinstellungen" class="nav-btn" onclick="einstellungenopen()" ></td>
</tr>


<tr>
<td><img src="src/icons/search.png" alt=""class="nav-img"></td>
<td><input type="button" value="Suchen"class="nav-btn"></td>
</tr>

</tr>
<td><img src="src/icons/info.png" alt=""class="nav-img"></td>
<td><input type="button" value="Informationen"class="nav-btn" onclick="info1open()"></td>
</tr>

<tr>
<td><img src="src/icons/customize.png" alt=""class="nav-img"></td>
<td><input type="button" value="Personalisieren"class="nav-btn"></td>
</tr>

<tr>
<td><img src="src/icons/help.png" alt=""class="nav-img"></td>
<td><input type="button" value="Hilfe"class="nav-btn"></td>
</tr>
</center>

</table>

</div>

  <div class="display" id="infos-1">
  <img src="/src/icons/x.png" alt="close"onclick="closeinfo()">
 <center><h2>Informationen über die Stattsformen</h2>
 <h4>Wählen sie bitte eine Staatsform aus</h4></center>
<center>
<input type="button" value="Monarchie" class="infostyle"
 data-title="Monarchie"
 data-beschreibung="Bitte wählen sie eine Staatsform aus von der sie Informationen erhalten möchten."
 data-beschreibung2=""
 data-content="1"
 id="info1"
 onclick="info1(), einstellungenclose()">

<input type="button" value="Republik" class="infostyle"
data-title="Republik"
  data-beschreibung="Bitte wählen sie eine Staatsform aus von der sie Informationen erhalten möchten."
 data-beschreibung2=""
 id="info2"
 onclick="info2(), einstellungenclose()">

<input type="button" value="Diktatur" class="infostyle"
data-title="Diktatur"
 data-beschreibung="ss"
 data-beschreibung2="ss"
 id="info3"
 onclick="info3(), einstellungenclose()">
</div>


</center>

<!-- Informations Block  -->

<div id="info" class="display">
 <img src="/src/icons/x.png" alt="Close" onclick="closeinfo()"> 
  <h1 class="center"  id="info-header">hh</h1>


<!-- Nav bar in Monarchie  -->


<div id="infonavmonarchie" style="display:none;">
<input type="button" value="Monarchie" 
tabindex="0"
            data-title-btn="Monarchie"
            data-beschreibung="1111"
            data-beschreibung2="1ww1w1w1w"
            class="navmonarchiebtn infostyle">

            <input type="button" value="Föderale Monarchie" 
            tabindex="0"
            data-title-btn="Föderale Monarchie"
            data-beschreibung="2222"
            data-beschreibung2="thzjkddsftgf"
            class="navmonarchiebtn infostyle">

            <input type="button" value="Wahlmonarchie" 
            tabindex="0"
            data-title-btn="Wahlmonarchie"
            data-beschreibung="333"
            data-beschreibung2="fefwfrg"
            class="navmonarchiebtn infostyle">

</div>
<div id="infonavrepublik" style="display:none;">

<input type="button" value="Republik"
tabindex="0" 
            data-title-btn="Republik"
            data-beschreibung="333"
            data-beschreibung2="fefwfrg"
            class="navrepublikbtn infostyle">

<input type="button" 
tabindex="0"
value="Teilautonome Republik" 
            data-title-btn="Teilautonome Republik"
            data-beschreibung="114356"
            data-beschreibung2="hfghfgfgffhgf"
            class="navrepublikbtn infostyle">

            <input type="button" value="Islamische Republik" 
            tabindex="0"
            data-title-btn="Islamische Republik"
            data-beschreibung="trhhhhh"
            data-beschreibung2="su 78635e"
            class="navrepublikbtn infostyle">

            <input type="button" value="Föderale Republik" 
            tabindex="0"
            data-title-btn="Föderale Republik"
            data-beschreibung="333"
            data-beschreibung2="fefwfrg"
            class="navrepublikbtn infostyle">

</div>
<p class="center" id="info-header-btn"></p>

  <p class="center" id="info-beschreibung">z</p>
  <p class="center" id="info-beschreibung2">z</p>
  <input type="button" value="Zurück" onclick="in">
  <p id="copyright">icon:Flaticon.com</p>
</div>

<!-- Informations Block ENDE  -->

<div id="einstellungen" class="display">
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


<div id="nav-karte"style="display:none">






<h2>Karteneinstellungen</h2>

<div id="nav-formen" style="display: block">   
<h4>Staatsformen:</h4>


<input type="radio" id="mo" name="karte" value="1" class="checkbox">   
<label for="1">Monarchie</label><br>

<input type="radio" id="re" name="karte" value="2" class="checkbox">
  <labeol for="2">Republik (alle Formen)</label> <br>
  
  <input type="radio" id="zusatzcb" name="karte" value="3" class="checkbox">
  <label for="3" id="zusatzlabel">Zusatz</label> <br>
<div id="einstellungszusatzdiv">
 <h5 id="einstellungentext" onclick="einstellungenopen(), closeinfo() ">  Weitere Einstellungen </h5>

</div>
 


<script src="js.js"></script>
</body>
</html>