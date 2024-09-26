<script>
export default {
    data() {
        return {
            gekozenPrijs: ''  // Property om de prijs op te slaan
        };
    },
    mounted() {
        const isSafari = () => {
            const ua = navigator.userAgent;
            const safari = ua.includes('Safari') && !ua.includes('Chrome');
            return safari;
        };

        if (isSafari()) {
            document.body.classList.add('safari');
        }

        // Haal de waarde uit localStorage
        const opgeslagenAntwoord = localStorage.getItem('antwoord1');
        if (opgeslagenAntwoord) {
            this.gekozenPrijs = opgeslagenAntwoord;
        } else {
            console.log('Geen prijs gevonden in localStorage');
        }
    },
    methods: {
        goToNextPage() {
            this.$router.push({ name: 'nextPage' });  // Navigeer naar de volgende pagina
        }
    }
}
</script>



<template>

<div class="overkoepelende-container-pagina-1">
    <a href="/">
        <div class="container-navbar">
            <div class="afbeelding-1-navbar">
              <img src="/public/meervoordeel-nav.svg" alt="meervoordeel">
            </div>
      
            <div class="afbeelding-2-navbar">
              <img src="/public/turstpilot-nav.svg" alt="trustpilot">
            </div>
      
            <div class="afbeelding-3-navbar">
              <img src="/public/ziggo-logo.png" alt="ziggo">
            </div>
        </div>
      </a>



<div class="container-pagina-1">

    <div class="achtergrond-pagina-1">

        <div class="witte-container-pagina-6">

            <div class="container-inhoud-witte-container">

                <div class="gefeliciteerd">
                    Gefeliciteerd!
                </div>

                <div class="jij-maakt-nu-kans">
                    Je gekozen prijs is: <span class="gekozen-prijs">{{ gekozenPrijs }}</span>
                </div>

                <hr class="lijn-10">


                <div class="bereiken">
                    Hoe kunnen wij jou bereiken?
                </div>


                <form class="formulier" action="">
                    <div class="namen-inputs">
                        <div class="input-wrapper-naam">
                            <img src="/public/naam-icoon.svg" alt="naam icoon" class="input-icon-voornaam">
                            <input type="text" placeholder="Voornaam" class="voornaam-input">
                        </div>
                        <div class="input-wrapper-naam">
                            <img src="/public/naam-icoon.svg" alt="naam icoon" class="input-icon-achternaam">
                            <input type="text" placeholder="Achternaam" class="achternaam-input">
                        </div>
                    </div>
                
                    <div class="email-input input-wrapper">
                        <img src="/public/email-icoon.svg" alt="email" class="input-icon">
                        <input type="email" placeholder="Email" class="email-input-field">
                    </div>
                
                    <div class="telefoonnummer-input input-wrapper">
                        <img src="/public/telefoon-icoon.svg" alt="telefoon" class="input-icon">
                        <input type="tel" placeholder="Telefoonnummer" class="telefoonnummer-input-field">
                    </div>
                </form>
                


            <div class="container-button-pagina-6">
                <button @click="goToPage4" class="cta-pagina-6">
                    <span class="cta-text-pagina-6">Bevestig mijn deelname</span>
                    <span class="cta-pijl-pagina-6">&#8594;</span>
                </button>  
            </div>




            <div class="witte-container-footer">
                Met het bevestigen van je deelname ga je er mee akkoord dat MeerVoordeel eenmalig telefonisch contact met je opneemt met een aanbieding voor een all-in abonnement van Ziggo.
            </div>




            </div>
        </div>



        <!-- <div class="container-afbeeldingen-en-prijs-1">
            <svg class="prijzen-prijs-tv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
              <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
              <text x="29" y="20" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
              <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€699,-</text>
            </svg>

            <svg class="prijzen-prijs-bol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                <text x="29" y="20" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
                <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€400,-</text>
              </svg>



            <svg class="prijzen-prijs-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
              <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
              <text x="29" y="20" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
              <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€599,-</text>
            </svg>
  

            <img class="afbeelding-prijzen" src="/public/afbeelding-home-desk.png" alt="">
          </div> -->


    </div>

    <div class="footer-container-6">
        <hr class="lijn-sectie-2">
          <div class="footer-text">
              *Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br> Actievoorwaarden van toepassing.
          </div>
    </div>

</div>














</div>
</template>


<style>

.achtergrond-pagina-1 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 45vw;
}


.witte-container-pagina-6 {
    height: 44vw;
    width: 50vw;
    background-color: white;
    position: relative;
    top: 7vw;
    left: 7vw;
    border-radius: 0.75rem;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    z-index: 2;
}

.container-inhoud-witte-container {
    padding-left: 4vw!important;
    padding-top: 2vw!important;
}

.stap-pagina-1 {
    text-align: left;
    color: #F48C02;
    font-family: "DM Sans";
    font-size: 1.15vw;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}



.vraag-pagina-1 {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.9vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
}

.container-antwoorden-pagina-1 {
    margin-top: 2vw!important;
    text-align: left;
}

.container-antwoord-optie {
    height: 4vw;
    width: 40vw;
    background-color: #f1f1f1;
    margin-bottom: 0.7vw!important;
    border-radius: 35px;
    display: inline-flex;
    align-items: center;
    padding-left: 1vw!important;
}

.container-antwoorden1-2 {
    display: inline-flex;
}

.container-antwoord-optie-2 {
    height: 4vw;
    width: 20vw;
    background-color: #f1f1f1;
    margin-bottom: 0.7vw!important;
    border-radius: 35px;
    display: inline-flex;
    align-items: center;
    padding-left: 1vw!important;
    cursor: pointer; 
}



.container-afbeeldingen-en-prijs-1 {
    width: 50vw;
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 50%!important;
    position: relative;
    bottom: 71%;
    display: flex;
    justify-content: center;
    z-index: 1;
    scale: 0.9;
}





.input-radio {
    display: none; 
}

.input-radio:checked + label::before {
    background-color: #F48C02; 
}

.container-antwoord-optie {
    cursor: pointer; 

}

.container-antwoord-optie label {
    position: relative;
    padding-left: 3.5vw!important; 
    font-size: 1.3vw;
    padding-right: 1vw!important;
}



.container-antwoord-optie label::before {
    content: '';
    position: absolute;
    left: 1vw;
    top: 50%;
    transform: translateY(-50%);
    height: 1.2vw;
    width: 1.2vw;
    background-color: white;
    border: 1px solid grey;
    border-radius: 50%;

}

.input-radio[type="radio"] {
    margin-left: 1vw!important;
    margin-right: 1vw!important;
    color: #F48C02!important;
    background-color: #F48C02!important;
}



.cta-pagina-1 {
    display: inline-flex;
    height: 4vw;
    width: 15vw;
    align-items: center;
    justify-content: space-evenly;
    flex-shrink: 0;
    border-radius: 2.5rem;
    background-color: #F48C02;
    margin-top: 1%!important;
    margin-left: 41%!important;
}


.cta-text-pagina-1 {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.cta-pijl-pagina-1 {
    color: white;
    font-size: 1.2vw;
}

.gefeliciteerd {
    color: #F48C02;
    font-family: "DM Sans";
    font-size: 2.6vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
}

.jij-maakt-nu-kans {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.9vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
}


.lijn-10 {
    width: 90%;
    margin-top: 2vw !important;
}

.bereiken {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.75vw;
    font-style: normal;
    font-weight: 400;
    line-height: 126%;
    text-align: left;
    margin-top: 2vw!important;
}



.formulier {
    margin-top: 2vw!important;
}


.voornaam-input,
.achternaam-input {
    padding-left: 2vw!important;
    font-size:  1.2vw;
}


.voornaam-input {
    height: 4vw;
    border-radius: 35px!important;
    margin-bottom: 1vw!important;
}

.achternaam-input {
    border-radius: 35px!important;
    margin-bottom: 1vw!important;

}

.email-input-field {
    padding-left: 2vw!important;
    border-radius: 35px!important;
    font-size:  1.2vw;
    height: 4vw;
    margin-bottom: 1vw!important;

}

.telefoonnummer-input-field {
    padding-left: 2vw!important;
    border-radius: 35px!important;
    font-size:  1.2vw;
    height: 4vw;
    margin-bottom: 1vw!important;
}







.namen-inputs {
    display: flex;
    margin-bottom: 2vw;
}

.namen-inputs input {
    width: 19vw;
    padding: 1vw;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.email-input,
.telefoonnummer-input {
    margin-bottom: 2vw;
}

.email-input-field,
.telefoonnummer-input-field {
    width: 39vw;
    padding: 1vw;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 7vw !important;
}

.namen-inputs,
.email-input,
.telefoonnummer-input-field {
    color: #B5B5B5;
    font-family: "DM Sans";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}





.container-button-pagina-6 {
    margin-left: 13vw!important;
}


.cta-pagina-6 {
    display: inline-flex;
    height: 4vw;
    width: 19vw;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 35px;
    background-color: #F48C02;
    z-index: 2; /* Zorg dat de knop boven de input komt */

}


.cta-text-pagina-6 {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.cta-pijl-pagina-6 {
    color: white;
    font-size: 1.2vw;
}

.witte-container-footer {
    text-align: right;
    padding-right: 8vw!important;
    color: #072249;
    text-align: right;
    font-family: "DM Sans";
    font-size: 0.85vw;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-top: 1vw!important;
}

.footer-container-6 {
    position: relative;
    top: 12vw;
    margin-bottom: 10vw!important;
    width: 100vw;
    padding-bottom: 2vw!important
}























.voornaam-input,
.achternaam-input {
    position: relative;
    right: 1vw;
}


.formulier {
    display: flex;
    flex-direction: column;
}

.input-wrapper {
    position: relative;
    width: 100%;
}

.input-wrapper-naam {
    width:  43.5%!important
}

.input-icon {
    position: absolute;
    left: 1vw; /* Ruimte tussen icoon en de rand van de input */
    top: 40%;
    transform: translateY(-50%);
    width: 1.5vw; /* Grootte van het icoon, pas aan zoals nodig */
    height: auto;
    pointer-events: none; /* Zorgt ervoor dat het icoon niet interactief is */
}

.input-icon-voornaam {
    position: absolute;
    left: 5.5vw;
    top: 43.5%;
    transform: translateY(-50%);
    width: 1.5vw;
    height: auto;
    pointer-events: none;
    z-index: 999;
}

.input-icon-achternaam {
    position: absolute;
    left: 27vw;
    top: 43.5%;
    transform: translateY(-50%);
    width: 1.5vw;
    height: auto;
    pointer-events: none;
    z-index: 999;
}



input[type="text"],
input[type="email"],
input[type="tel"] {
    width: 90%;
    height: 4vw;
    padding: 1vw;
    padding-left: 3.5vw!important; /* Ruimte voor het icoon aan de linkerkant */
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1vw;
}

.namen-inputs {
    display: flex;
    width:  50vw
}



</style>