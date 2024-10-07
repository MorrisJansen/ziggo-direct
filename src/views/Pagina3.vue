<script>
export default {
    data() {
        return {
            postcode: '',
            postcodeError: '',
            gekozenPrijs: '' // Voeg dit toe om de prijs op te slaan
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

        this.postcode = this.$store.getters.getPostcode;

        const gekozenPrijsOptie = this.$store.getters.getGekozenPrijsOptie;
        if (gekozenPrijsOptie) {
            this.gekozenPrijs = gekozenPrijsOptie;
            console.log(this.gekozenPrijs)
        } else {
            console.log('Geen prijs gevonden in Vuex store');
        }
    },
    computed: {
        // Dit blijft ongewijzigd als je een reactive getter voor de prijs wilt
        gekozenPrijsOptie() {
            return this.$store.getters.getGekozenPrijsOptie;
        }
    },
    methods: {
        handleEnterKey(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Voorkom standaard gedrag
                this.goToPage4(); // Roep de functie aan
            }
        },
        goToPage4() {
            this.postcodeError = '';

            if (!this.postcode) {
                this.postcodeError = 'Postcode mag niet leeg zijn.';
                return;
            }

            const regex = /^(?! )[0-9]{4}[ ]?[A-Za-z]{2}(?<! )$/;

            if (!regex.test(this.postcode)) {
                this.postcodeError = 'Voer een geldige postcode in (bijvoorbeeld 1234 AB).';
                return;
            }

            // Sla de postcode op in Vuex
            this.$store.dispatch('updatePostcode', this.postcode);

            this.$router.push({ name: 'pagina4' });
            console.log(this.postcode);
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

        <div :class="{ 'error-active': postcodeError }" class="witte-container-pagina-3">
        
            <div class="container-inhoud-witte-container-3">




                            <div class="stap-pagina-1">
                                Stap 3 van 3
                            </div>
                            <!-- <div class="pijl-vorige-1">
                                <a class="vorige-1" href="/Pagina2">
                                    &#8592; vorige
    
                                </a>
    
                            </div> -->

                            <span class="pijl-pagina-3">
                                <router-link to="/Pagina2">
                                  &#8592;
                                </router-link>
                              </span>

                <div class="vraag-pagina-3">
                    Vul je postcode in en check of je kans maakt op een <span class="gekozen-prijs">{{ gekozenPrijsOptie }}:</span>
                </div>
                








                <div class="input-button-wrapper">
                    <div class="input-button-container">
                        <input type="postcode" placeholder="Voer je postcode in" class="postcode-input" v-model="postcode" @keydown="handleEnterKey"
                        >
                        <button @click="goToPage4" class="cta-pagina-3">
                            <span class="cta-text-pagina-3">Check postcode</span>
                            <span class="cta-pijl-pagina-3">&#8594;</span>
                        </button>
                    </div>
                </div>


                <div v-if="postcodeError" class="foutmelding-pagina-3">{{ postcodeError }}</div>



                
                

            </div>
        </div>



        <div class="container-afbeeldingen-en-prijs-3 desktop">
            <svg class="prijzen-prijs-tv-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
              <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
              <text x="29" y="23" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
              <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€699,-</text>
            </svg>

            <svg class="prijzen-prijs-bol-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                <text x="29" y="20" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
                <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€400,-</text>
            </svg>



            <svg class="prijzen-prijs-ps-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
              <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
              <text x="29" y="20" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
              <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€599,-</text>
            </svg>
  

            <!-- <img class="afbeelding-prijzen" src="/public/afbeelding-home-desk.png" alt=""> -->
             <img class="afbeelding-prijzen-1" src="/public/samen.png" alt="">
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
    border-radius: 0.75vw;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    z-index: 2;
}

.container-inhoud-witte-container-3 {
    padding-left: 4vw!important;
    padding-top: 3.5vw!important;
}

.stap-pagina-1 {
    text-align: left;
    color: #F48C02;
    font-family: "DM Sans";
    font-size: 1.15vw;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    position: static!important;
}



.vraag-pagina-3 {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.9vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
    width: 80%;
    margin-bottom: -2%;
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
    border-radius: 35vw;
    display: inline-flex;
    align-items: center;
    padding-left: 1vw!important;
    cursor: pointer; 
}


.container-afbeeldingen-en-prijs-3 {
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 50%!important;
    position: relative;
    bottom: 5%;
    left: 2%;
    display: flex;
    justify-content: center;
    z-index: 1;
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
    width: 24vw;
    margin-right: -5vw;
    padding: 0.5vw;
    border: none;
    border-radius: 35vw 0 0 35vw;
    height: 4vw;
    font-size: 1.1vw;
    padding-left: 2vw!important;
    background-color: #f1f1f1;
    color: black;
    z-index: 1;
    font-family: 'DM Sans', sans-serif;
}




.cta-pagina-3 {
    display: inline-flex;
    height: 4vw;
    width: 19vw;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 35vw;
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

.pijl-pagina-3 {
    position: absolute;
    font-size: 2.8vw;
    color: black;
    top: 80.5%;
    right: 86%;
}

.pijl-pagina-3:hover {
    color: #F48C02;
}



.input-button-wrapper {
    background-color: #f1f1f1;
    border-radius: 35vw;
    padding-right: 0; 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4vw;
    width: 37vw;
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
    border-radius: 35vw 0 0 35vw;
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
    border-radius: 35vw;
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


.foutmelding-pagina-3 {
    text-align: left;
    color: red;
    font-size: 1.2vw;
    font-weight: 700;
    position: relative;
    top: 1vw!important;
    left: 5vw;
}





@media (max-width: 499px) {
    .achtergrond-pagina-3 {
        height: 245vw!important;
        width: 100%!important;
    }


    .container-inhoud-witte-container-3 {
        padding: 7vw!important
    }


    .pijl-pagina-3 {
        display: none;
    }


    .witte-container-pagina-3 {
        height: 89vw;
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
        font-size: 6vw;
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
        height: 15vw !important;
        background-color: #F1F1F1;
        border-radius: 35vw!important;
        width: 100%!important;
        font-size: 5.5vw;
        padding-left: 10vw!important;
        color: black;
    }

    .cta-pagina-3 {
        width: 100%;
        height: 15vw;
        margin-top: 3vw!important;
    }


    .cta-text-pagina-3 {
        font-size: 5.5vw;
    }

    .cta-pijl-pagina-3 {
        font-size: 5.5vw;
    }

    .foutmelding-pagina-3 {
        position: relative;
        top: 31vw !important;
        z-index: 9999;
        font-size: 4vw;
        left: 0vw;
    }

    .witte-container-pagina-3.error-active {
        height: 94vw;
    }



}








</style>