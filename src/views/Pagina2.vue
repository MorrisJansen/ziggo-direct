<script>
import PrivacyModal from './privacyModal.vue'; // Zorg ervoor dat de naam correct is



export default {
    components: {
        PrivacyModal, // Zorg ervoor dat de naam hier overeenkomt
    },
    data() {
        return {
            isModalVisible: false, // Geeft aan of de modal zichtbaar is
            modalUrl: '', // De dynamische URL voor de modal inhoud
            foutmelding: false,
            lokaleGeselecteerdeProvider: null,
            options: {
                'optie-1': { id: 5272, name: 'Odido' },
                'optie-2': { id: 5278, name: 'Ziggo' },
                'optie-3': { id: 5275, name: 'KPN' },
                'optie-4': { id: 5281, name: 'Anders' }
            }
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

        // Check if there's a stored selection and apply it
        if (this.geselecteerdeProviderId) {
            this.lokaleGeselecteerdeProvider = Object.keys(this.options).find(
                key => this.options[key].id === this.geselecteerdeProviderId
            );
            this.$nextTick(() => {
                const input = document.getElementById(this.lokaleGeselecteerdeProvider);
                if (input) {
                    input.checked = true;
                }
            });
        }
    },
    methods: {
        openPrivacyPolicy() {
            this.modalUrl = 'https://leadgen.republish.nl/api/content/privacy-meervoordeel'; // URL voor privacyverklaring
            this.isModalVisible = true; // Maak de modal zichtbaar
            console.log('Opening privacy policy modal');
        },
        openActievoorwaarden() {
            this.modalUrl = 'https://leadgen.republish.nl/api/content/actievoorwaarden-meervoordeel'; // URL voor actievoorwaarden
            this.isModalVisible = true; // Maak de modal zichtbaar
            console.log('Opening actievoorwaarden modal');
        },
        closeModal() {
            this.isModalVisible = false; // Sluit de modal
        },
        
        goToPage3() {
            if (!this.lokaleGeselecteerdeProvider) {
                this.foutmelding = true;
                return;
            }

            const optionDetails = this.options[this.lokaleGeselecteerdeProvider];
            if (optionDetails) {
                this.$store.dispatch('updateSelectedProviderId', optionDetails.id);
                this.$store.dispatch('updateSelectedProviderName', optionDetails.name);

                console.log('Geselecteerde ID:', optionDetails.id);
                console.log('Geselecteerde naam:', optionDetails.name);

                this.$router.push({ name: 'pagina3' });
            }
        },
        selectOption(optionId) {
            const input = document.getElementById(optionId);
            if (input) {
                input.checked = true;
                this.lokaleGeselecteerdeProvider = optionId;
                this.foutmelding = false;
            }
        }
    },
    computed: {
        geselecteerdeProviderId() {
            return this.$store.getters.getSelectedProviderId;
        },
        geselecteerdeProviderNaam() {
            return this.$store.getters.getSelectedProviderName;
        }
    }
};
</script>





<template>
    <div class="overkoepelende-container-pagina-1">
        <a href="/">
            <div class="container-navbar">
                <div class="afbeelding-1-navbar">
                  <img src="/public/MV.svg" alt="meervoordeel">
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
            <div class="achtergrond-pagina-2">
                <div class="witte-container-pagina-2">
                <div class="container-inhoud-witte-container-2" id="container-inhoud-witte-container-2">



                        <!-- <div class="container-stap-zoveel-en-pijl"> -->
                            <div class="stap-pagina-1">
                                Stap 2 van 3
                            </div>
                            <!-- <div class="pijl-vorige-1">
                                <a class="vorige-1" href="/Pagina1">
                                    &#8592; vorige
    
                                </a>
    
                            </div>
                        </div> -->


                        <span class="pijl-pagina-2">
                            <router-link to="/Pagina1">
                              <!-- &#8592; -->
                              <img src="/public/pijl-terug.svg" alt="">

                            </router-link>
                          </span>


                        <div class="vraag-pagina-1">Wat is jouw huidige provider?</div>
                        <div class="container-antwoorden-pagina-1">
                            <div class="container-antwoorden1-2">
                                <div id="container-antwoord-optie-2" class="container-antwoord-optie-2 stap2-optie1" @click="selectOption('optie-1')">
                                    <input class="input-radio-2" type="radio" id="optie-1" name="antwoord" value="Odido">
                                    <label class="optie-1-2" for="optie-1">Odido</label>
                                </div>
                                <div id="container-antwoord-optie-2" class="container-antwoord-optie-2" @click="selectOption('optie-2')">
                                    <input class="input-radio-2" type="radio" id="optie-2" name="antwoord" value="Ziggo">
                                    <label class="optie-2-2" for="optie-2">Ziggo</label>
                                </div>
                            </div>
                            <div class="container-antwoorden1-2">
                                <div id="container-antwoord-optie-2" class="container-antwoord-optie-2 stap2-optie1" @click="selectOption('optie-3')">
                                    <input class="input-radio-2" type="radio" id="optie-3" name="antwoord" value="KPN">
                                    <label class="optie-3-2" for="optie-3">KPN</label>
                                </div>
                                <div id="container-antwoord-optie-2" class="container-antwoord-optie-2" @click="selectOption('optie-4')">
                                    <input class="input-radio-2" type="radio" id="optie-4" name="antwoord" value="Anders">
                                    <label class="optie-4-2" for="optie-4">Anders</label>
                                </div>
                            </div>
                        </div>
                        <button @click="goToPage3" class="cta-pagina-2">
                            <span class="cta-text-pagina-2">Ga naar de laatste stap</span>
                            <span class="cta-pijl-pagina-2">&#8594;</span>
                        </button>

                        <div v-if="foutmelding" class="foutmelding-pagina-2">
                            Selecteer alstublieft een antwoord.
                        </div>


                    </div>
                </div>






                <div class="container-afbeeldingen-en-prijs-2 desktop" style="position: relative; bottom: 10vvw!important;">
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







            <div class="footer-container-2">
                <hr class="lijn-sectie-2">
                <div class="footer-text-2">



               *Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 december 2024.<br> 
                <span id="footer-link-underline">
                    <a href="" class="footer-link" @click.prevent="openActievoorwaarden">Actievoorwaarden</a>
    
                </span>
                van toepassing.
               <br> Lees onze
    
               <span>
                <a class="footer-link" id="footer-link-underline" @click.prevent="openPrivacyPolicy">Privacyverklaring</a>
              </span>
                          voor meer informatie over hoe wij met uw gegevens omgaan. 
            </div>
            </div>
            <PrivacyModal
            :isVisible="isModalVisible"
            :url="modalUrl"
            @close="closeModal"
          />




        </div>
    </div>
    </template>
    
   
    


<style>

label:hover {
    cursor: pointer;

}

.achtergrond-pagina-2 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 45vw;
}


.witte-container-pagina-2 {
    height: 27vw;
    width: 50vw;
    background-color: white;
    position: relative;
    top: 7vw;
    left: 7vw;
    border-radius: 0.75vw;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    z-index: 992;
}

.container-inhoud-witte-container-2 {
    padding-left: 4vw!important;
    padding-top: 3vw!important;
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
    border-radius: 35vw;
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
    border-radius: 35vw;
    display: inline-flex;
    align-items: center;
    padding-left: 1vw!important;
    cursor: pointer; 
}



.container-afbeeldingen-en-prijs-2 {
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 50%!important;
    position: relative;
    bottom: 17%;
    left: 2%;
    display: flex;
    justify-content: center;
    z-index: 109;
    margin-bottom: 8vw!important;
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

.optie-1-2,
.optie-2-2,
.optie-3-2,
.optie-4-2 {
    font-size: 1.2vw!important;
    color: black;
}



.input-radio-2 {
    appearance: none;
    width: 1.2vw;
    height: 1.2vw;
    border-radius: 50%;
    border: 1px solid grey;
    background-color: transparent!important;
    cursor: pointer;
    position: relative;
}

.input-radio-2:checked {
    border: 1px solid #F48C02;
}

.input-radio-2:checked::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.6vw;
    height: 0.6vw;
    border-radius: 50%;
    background-color: #F48C02;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.input-radio-2:checked::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1.2vw;
    height: 1.2vw;
    border-radius: 50%;
    background-color: transparent;
    transform: translate(-50%, -50%);
    z-index: 0;
}

.input-radio-2::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.8vw;
    height: 0.8vw;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
}

.stap2-optie1 {
    margin-right: 2vw!important;
}




.pijl-pagina-2 {
    position: absolute;
    font-size: 2.8vw;
    color: black;
    top: 76.5%;
    right: 84%;
}

.pijl-pagina-2:hover {
    color: #F48C02;
}



.cta-pagina-1 {
    display: inline-flex;
    height: 4vw;
    width: 15vw;
    align-items: center;
    justify-content: space-evenly;
    flex-shrink: 0;
    border-radius: 35vw;
    background-color: #F48C02;
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

.input-radio-2 {
    margin-left: 1vw !important;
    margin-right: 1vw !important;
    display: block;
    width: 1.2vw;
    height: 1.2vw;
}


.cta-pagina-2 {
    display: inline-flex;
    height: 4vw;
    width: 20vw;
    align-items: center;
    justify-content: space-evenly;
    flex-shrink: 0;
    border-radius: 35vw;
    background-color: #F48C02;
    margin-top: 1%!important;
    margin-left: 40%!important;
    position: relative;
    top: 1vw;
}


.cta-text-pagina-2 {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.cta-pijl-pagina-2 {
    color: white;
    font-size: 1.2vw;
}


.footer-container-2 {
    position: relative;
    top: 10vw;
    padding-bottom: 2vw!important;
    margin: 0 auto!important;
    width: 100vw; 
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-text-2 {
    margin-top: 2vw!important;
    color: #C1C1C1;
    text-align: center;
    font-family: "DM Sans";
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4vw;
}

.foutmelding-pagina-2 {
    position: relative;
    bottom: 4.5vw;
    right: 14.5vw;
    color: red;
    font-weight: 700;
    font-size: 1vw;
}


@media (max-width: 499px) {




    .input-radio-2:checked::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 2vw;
        height: 2vw;
        border-radius: 50%;
        background-color: #F48C02;
        transform: translate(-50%, -50%);
    }

    .input-radio-2::before {
        background-color: transparent!important;
    }

    .input-radio-2:checked::after {
        border: 1px solid #F48C02;
    }
    


    .achtergrond-pagina-2 {
        background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
        width: 100vw;
        height: 290vw;
    }

    .pijl-pagina-1 {
        display: none;
    }


    .container-antwoorden1-2 {
        display: flex;
        flex-direction: column;
    }
    
    .witte-container-pagina-2 {
        display: block;
        align-items: center;
        justify-content: center;
        position: relative!important;
        margin: 0 auto!important;
        left: 0!important;
        width: 90%!important;
        height: 160vw!important;
    }
    



    #container-inhoud-witte-container-2 {
        padding-left: 7vw!important;
        padding-top: 6vw!important;
        padding-right: 7vw!important;
        padding-right: 6vw!important;

    }

    .container-antwoorden-pagina-1 {
        gap: 0!important;
    }

    .container-antwoord-optie-2 {
        height: 20vw!important;
        width: 100%!important;
        margin-bottom: 2.5vw!important;
    }

    #container-antwoord-optie-2 {
        margin-bottom: 2.5vw!important;
    }

    .optie-1-2,
    .optie-2-2,
    .optie-3-2,
    .optie-4-2 {
        font-size: 5.5vw!important;
        color: black;
        margin-left: 4vw!important;
    }

    .input-radio-2 {
        width: 5vw!important;
        height: 5vw!important;
        margin-left: 4vw!important;
    }

    .cta-pagina-2 {
        margin-left: 0!important;
        width: 100%;
        height: 20vw;
        top: 0!important;
    }

    .cta-text-pagina-2,
    .cta-pijl-pagina-2 {
        font-size: 4.5vw;
    }

/*
    .input-radio-2:checked {
        background-color: #F48C02!important;
        fill: #F48C02;
        border: 1px solid #F48C02;
    }

*/


    .footer-container-2 {
        background-color: white;
        position: relative;
        top: 0;
        padding-bottom: 5vw!important;
    }

    .footer-text-2 {
        font-size: 2.5vw;
        line-height: 170%;

    }

    .foutmelding-pagina-2 {
        position: static;
        text-align: left;
        font-size: 4vw;
        margin-bottom: 1vw!important;
        margin-top: 1.5vw !important;
    }


    .pijl-pagina-2 {
        display: none;
    }
    


}



</style>