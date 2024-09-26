<script>
export default {
    mounted() {
        const isSafari = () => {
            const ua = navigator.userAgent;
            const safari = ua.includes('Safari') && !ua.includes('Chrome');
            return safari;
        };

        if (isSafari()) {
            document.body.classList.add('safari');
        } 
    },
    methods: {
        goToPage2() {
            this.$router.push({ name: 'pagina2' });
        },
        selectOption(optionId) {
            const input = document.getElementById(optionId);
            if (input) {
                input.checked = true;
            }
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

        <div class="witte-container-pagina-1">

            <div class="container-inhoud-witte-container">
                <div class="stap-pagina-1">
                    Stap 1 van 3
                </div>

                <div class="vraag-pagina-1">
                    Vertel ons welke prijs je wilt winnen: 
                </div>



            <div class="container-antwoorden-pagina-1">
                <div class="container-antwoord-optie" @click="selectOption('optie-1')">
                    <input class="input-radio" type="radio" id="optie-1" name="antwoord" value="SAMSUNG TV">
                    <label for="optie-1">SAMSUNG 60" TV t.w.v. €699,-</label>
                </div>

                <div class="container-antwoord-optie" @click="selectOption('optie-2')">
                    <input class="input-radio" type="radio" id="optie-2" name="antwoord" value="Playstation 5">
                    <label for="optie-2">Playstation 5 Slim Disk t.w.v. €549</label>
                </div>

                <div class="container-antwoord-optie" @click="selectOption('optie-3')">
                    <input class="input-radio" type="radio" id="optie-3" name="antwoord" value="Bol.com cadeaubon">
                    <label for="optie-3">Bol.com cadeaubon t.w.v. €400,-</label>
                </div>
            </div>




            <button @click="goToPage2" class="cta-pagina-1">
                <span class="cta-text-pagina-1">Ga naar stap 2</span>
                <span class="cta-pijl-pagina-1">&#8594;</span>
            </button>

            </div>
        </div>



        <div class="container-afbeeldingen-en-prijs-1">
            <!-- Prijzen SVG -->
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
          </div>


    </div>

    <center>
        <div class="footer-container-1">
            <hr class="lijn-sectie-2">
              <div class="footer-text-1">
                  *Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br> Actievoorwaarden van toepassing.
              </div>
        </div>
    </center>


</div>














</div>
</template>


<style>

.achtergrond-pagina-1 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 45vw;
}


.witte-container-pagina-1 {
    height: 33vw;
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
    border: 1px solid #F48C02
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

.footer-container-1 {
    position: relative;
    top: 10vw;
    padding-bottom: 2vw!important;
    margin: 0 auto!important;
    width: 100vw; 
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-text-1 {
    margin-top: 2vw!important;
    color: #C1C1C1;
    text-align: center;
    font-family: "DM Sans";
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4vw;
}





</style>