<template>
    <div class="overkoepelende-container-home">
      <div class="container-navbar">
        <div class="afbeelding-1-navbar">
          <img src="/public/meervoordeel-nav.svg" alt="meervoordeel">
        </div>
  
        <div class="afbeelding-2-navbar">
          <img src="/public/turstpilot-nav.svg" alt="trustpilot">
        </div>
  
        <div class="afbeelding-3-navbar">
          <img src="/public/ziggo-nav.png" alt="ziggo">
        </div>
      </div>
  
      <div class="container-sectie-1">
        hallo
      </div>
    </div>
  </template>
  
  
  <style>
  * {
    box-sizing: border-box;
    padding: 0!important;
    margin: 0!important;
  }
  
  .overkoepelende-container-home {
    width: 100vw;
    height: auto;
  }
  
  .container-navbar {
    width: 100vw;
    height: 9rem;
    display: flex;
    align-items: center; /* Centreer de afbeeldingen verticaal */
    position: relative; /* Verander naar relative om kinderen goed te positioneren */
    left: 10%;
  }
  
  .afbeelding-1-navbar,
  .afbeelding-2-navbar {
    margin-right: 30px!important; /* Voeg wat ruimte toe tussen de eerste twee afbeeldingen */
  }

  .afbeelding-1-navbar img,
  .afbeelding-2-navbar img,
  .afbeelding-3-navbar img {
      height: 4rem; /* Pas deze waarde aan voor de gewenste hoogte */
      object-fit: contain; /* Zorg ervoor dat de afbeelding proportioneel blijft */
  }
  
  
  .afbeelding-3-navbar {
    position: absolute; /* Plaats de derde afbeelding absoluut ten opzichte van de navbar */
    right: 15%; /* Zorg ervoor dat deze 10% van de breedte van de pagina rechts verschijnt */
  }
  
  
  
  .container-sectie-1 {
    background-color: blue;
    height: auto;
    width: 100%;
  }







  @media (max-width: 700px){
    * {
        display: none;
    }
  }
  </style>
  