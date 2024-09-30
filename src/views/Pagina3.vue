<script>
export default {
    data() {
        return {
            gekozenPrijs: '',
            postcode: '',
            postcodeError: ''
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

        const opgeslagenAntwoord = localStorage.getItem('antwoord1');
        if (opgeslagenAntwoord) {
            this.gekozenPrijs = opgeslagenAntwoord;
        }
    },
    methods: {
        goToPage4() {
            this.postcodeError = ''

            if (!this.postcode) {
                this.postcodeError = 'Postcode mag niet leeg zijn.';
                return;
            }

            
            const regex = /^(?! )[0-9]{4}[ ]?[A-Za-z]{2}(?<! )$/;

            
            if (!regex.test(this.postcode)) {
                this.postcodeError = 'Voer een geldige postcode in (bijvoorbeeld 1234 AB).';
                return;
            }

            this.$router.push({ name: 'pagina4' });
            console.log(this.postcode)
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

    <div class="achtergrond-pagina-3">

        <div class="witte-container-pagina-3">

            <div class="container-inhoud-witte-container">
                <div class="stap-pagina-1">
                    Stap 3 van 3
                </div>

                <div class="vraag-pagina-3">
                    Vul je postcode in en check of je kans maakt op <span class="gekozen-prijs">{{ gekozenPrijs }}:</span>
                </div>
                








                <div class="input-button-wrapper">
                    <div class="input-button-container">
                        <input type="postcode" placeholder="Voer je postcode in" class="postcode-input" v-model="postcode">
                        <button @click="goToPage4" class="cta-pagina-3">
                            <span class="cta-text-pagina-3">Check mijn postcode</span>
                            <span class="cta-pijl-pagina-3">&#8594;</span>
                        </button>
                    </div>
                </div>


                <div v-if="postcodeError" class="foutmelding">{{ postcodeError }}</div>



                
                

            </div>
        </div>



        <div class="container-afbeeldingen-en-prijs desktop">
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
  

            <img class="pijl-naar-afbeelding" src="/public/pijl-naar-afbeelding.svg" alt="">
            <img class="afbeelding-prijzen" src="/public/afbeelding-home-desk.png" alt="">
          </div>



          <!-- dit is voor mobiel -->
        <div class="container-prijzen-met-prijzen">

          <div class="container-afbeeldingen-en-prijs-mobiel mobiel">
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
  

            <img class="afbeelding-prijzen-mobiel" src="/public/afbeeldingen-samen-mobiel.png" alt="">
          </div>

        </div>








    </div>

        <div class="footer-container-1">
            <hr class="lijn-sectie-2">
              <div class="footer-text-1">
                  *Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br> Actievoorwaarden van toepassing.
              </div>
        </div>


</div>














</div>
</template>


<style>

.achtergrond-pagina-3 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 45vw;
}


.witte-container-pagina-3 {
    height: 22vw;
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



.vraag-pagina-3 {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.9vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
    width: 80%
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


.afbeelding-prijzen-pagina-3 {
    z-index: 1;
    position: absolute;
    right: 14%;
    top: 13vw;
}

.prijzen-prijs-tv-pagina-3 {
    z-index: 99 !important;
    position: absolute;
    right: 34%;
    top: 12vw !important;
    width: 15%;
    transform: rotate(8deg);
}


.prijzen-prijs-ps-pagina-3 {
    z-index: 99 !important;
    position: absolute;
    right: 14%;
    top: 50vw !important;
    width: 15%;
    transform: rotate(8deg);

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



.input-button-container {
    display: flex;
    align-items: center; 
}

.postcode-input {
    width: 24vw; /* Groter dan de knop zodat het deels overlapt */
    margin-right: -5vw; /* Zorg ervoor dat het over de knop heen valt */
    padding: 0.5vw;
    border: none;
    border-radius: 35px 0 0 35px; /* Maak de linkerzijde afgerond */
    height: 4vw;
    font-size: 1.1vw;
    padding-left: 2vw!important;
    background-color: #f1f1f1;
    z-index: 1; /* Zorg dat de input bovenop komt */
}




.cta-pagina-3 {
    display: inline-flex;
    height: 4vw;
    width: 19vw;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 35px;
    background-color: #F48C02;
    z-index: 2; /* Zorg dat de knop boven de input komt */

}


.cta-text-pagina-3 {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.cta-pijl-pagina-3 {
    color: white;
    font-size: 1.2vw;
}



.input-button-wrapper {
    background-color: #f1f1f1;
    border-radius: 35px;
    padding-right: 0; 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4vw;
    width: 43vw;
    margin-top: 3vw!important;
}

.input-button-container {
    display: flex;
    align-items: center;
    width: 100%;
}

.postcode-input {
    height: 4vw !important;
    padding: 0.5vw;
    border: none;
    border-radius: 35px 0 0 35px;
    height: 100%;
    font-size: 1.1vw;
    padding-left: 2vw !important;
    background-color: transparent;
    z-index: 1;
}

.postcode-input:focus {
    outline: none;
    border-color: transparent; 
}


.cta-pagina-3 {
    display: inline-flex;
    height: 100%;
    width: 19vw;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 35px;
    background-color: #F48C02;
    z-index: 2;
    height: 4vw;
}

.cta-text-pagina-3 {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.cta-pijl-pagina-3 {
    color: white;
    font-size: 1.2vw;
}

.gekozen-prijs {
    color: #F48C02;
    font-family: "DM Sans";
    font-size: 1.9vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
}


@media (max-width: 500px) {
    .achtergrond-pagina-3 {
        height: 245vw!important;
        width: 100%!important;
    }





    .witte-container-pagina-3 {
        height: 95vw;
        width: 90%;
        margin: 0 auto !important;
        justify-content: center;
        display: flex;
        margin: o auto !important;
        justify-content: center;
        left: 0!important;
    }

    .vraag-pagina-3 {
        width: 101%
    }

    .vraag-pagina-3,
    .gekozen-prijs {
        font-size: 7vw;
    }
    
    .input-button-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: transparent;
    }

    .input-button-container {
        flex-direction: column;
    }

    .postcode-input {
        height: 20vw !important;
        background-color: #F1F1F1;
        border-radius: 35px!important;
        width: 100%!important;
        font-size: 5.5vw;
        padding-left: 10vw!important;
    }

    .cta-pagina-3 {
        width: 100%;
        height: 20vw;
        margin-top: 3vw!important;
    }


    .cta-text-pagina-3 {
        font-size: 5.5vw;
    }

    .cta-pijl-pagina-3 {
        font-size: 5.5vw;
    }


}








</style>