<script>
import PrivacyModal from './privacyModal.vue';

export default {
    components: {
        PrivacyModal,
    },
    data() {
        return {
            isModalVisible: false,
            modalUrl: '', 
            postcode: '',
            huisnummer: '',
            postcodeError: '',
            huisnummerError: '',
            gekozenPrijs: '',
            validHouseNumbers: [],
            streetName: '',
            city: '', 
            errorMessage: '',

            postcodeError: null, 
            huisnummerError: null,
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

        const gekozenPrijsOptie = this.$store.getters.getGekozenPrijsOptie;
        if (gekozenPrijsOptie) {
            this.gekozenPrijs = gekozenPrijsOptie;
            console.log(this.gekozenPrijs);
        } else {
            console.log('Geen prijs gevonden in Vuex store');
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

        async fetchStreetByPostcode(postcode) {
    const authKey = 'P6JTU52clKYjZca8';
    const baseUrl = 'https://api.pro6pp.nl/v2';
    const maxResults = 1; // Stel het aantal resultaten in op 1 (of meer als dat nodig is)
    const url = `${baseUrl}/suggest/nl/postalCode?postalCode=${postcode}&authKey=${authKey}&maxResults=${maxResults}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Authentication failed or no results found');
        }

        const data = await response.json();
        
        // Log de hele data object om te controleren wat we ontvangen
        console.log('API response data:', data);

        // Controleer of de data resultaten bevat
        if (data.length > 0) {
            this.streetName = data[0].streetName || ''; // Gebruik de straatnaam uit de response
            this.city = data[0].settlement || ''; // Gebruik de settlement uit de response

            // Log de straatnaam en stad
            console.log("Straatnaam:", this.streetName);
            console.log("Stad:", this.city);

        } else {
            // Geen resultaten gevonden, stel hardcoded waarden in
            this.streetName = 'Postbus'; // Hard-coded straatnaam
            this.city = 'Amsterdam'; // Hard-coded stad
            console.log('Geen resultaten gevonden, hard-coded waarden ingesteld: straatnaam = Postbus, stad = Amsterdam.');
        }
    } catch (error) {
        this.errorMessage = error.message;
        console.error("Error:", this.errorMessage);
    }
},







async fetchValidHouseNumbers() {
    const authKey = 'P6JTU52clKYjZca8';
    const baseUrl = 'https://api.pro6pp.nl/v2/suggest/nl/streetNumber';
    const maxResults = 900;
    const url = `${baseUrl}?postalCode=${encodeURIComponent(this.postcode)}&authKey=${authKey}&maxResults=${maxResults}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Fout bij het ophalen van huisnummers.');
        }

        const data = await response.json();

        // Controleer of er gegevens zijn ontvangen
        if (data.length === 0) {
            this.validHouseNumbers = []; // Geen huisnummers gevonden
            console.log("Geen huisnummers gevonden voor deze postcode.");
            return;
        }

        // Sla de straatnaam en stad op van de eerste item in de response
        this.streetName = data[0].streetName || 'Postbus'; // Zorg ervoor dat je de juiste sleutel gebruikt
        this.city = data[0].settlement || 'Amsterdam'; // Default naar Amsterdam

        // Maak een frequentiekaart om het aantal voorkomen van elk huisnummer te tellen
        const houseNumberCounts = {};
        data.forEach(item => {
            const houseNumber = item.streetNumber.toString().trim();
            if (!houseNumberCounts[houseNumber]) {
                houseNumberCounts[houseNumber] = 0;
            }
            houseNumberCounts[houseNumber]++;
        });

        // Genereer geldige huisnummers met en zonder letters (indien nodig)
        this.validHouseNumbers = [];
        Object.keys(houseNumberCounts).forEach(number => {
            const count = houseNumberCounts[number];
            // Voeg het basishuisnummer (zonder toevoeging) toe aan de lijst van geldige huisnummers
            this.validHouseNumbers.push(number); 

            if (count > 1) {
                // Voeg 'a', 'b', 'c', etc. toe aan duplicaten van huisnummers
                for (let i = 0; i < count; i++) {
                    const suffix = String.fromCharCode(97 + i); // 'a', 'b', 'c', etc.
                    this.validHouseNumbers.push(`${number}${suffix}`);
                }
            }
        });

        console.log("Geldige huisnummers:", this.validHouseNumbers);
        console.log("Straatnaam:", this.streetName);
        console.log("Stad:", this.city);
    } catch (error) {
        console.error('Er is een fout opgetreden bij het ophalen van huisnummers:', error);
        this.postcodeError = 'Er is een fout opgetreden bij het ophalen van huisnummers.';
    }
},


        validatePostcode() {
            this.postcodeError = '';

            if (!this.postcode) {
                this.postcodeError = 'Postcode mag niet leeg zijn.';
                return false;
            }

            const regex = /^(?! )[0-9]{4}[ ]?[A-Za-z]{2}(?<! )$/;

            if (!regex.test(this.postcode)) {
                this.postcodeError = 'Ongeldige postcode.';
                return false;
            }

            // Haal straatnamen op voordat je huisnummers ophaalt
            this.fetchStreetByPostcode(this.postcode).then(() => {
                this.fetchValidHouseNumbers(); // Haal geldige huisnummers op
            });
            return true;
        },

        validateHouseNumber() {
            this.huisnummerError = '';
            if (!this.huisnummer) {
                this.huisnummerError = 'Huisnummer mag niet leeg zijn.';
                return false;
            }

            if (!this.validHouseNumbers.includes(this.huisnummer)) {
                this.huisnummerError = 'Ongeldig adres';
                return false;
            }

            return true;
        },

        handlePostcodeInput() {
            this.validatePostcode();
        },

        handleHuisnummerInput() {
            this.validateHouseNumber();
        },

        handleEnterKey(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.goToPage4();
            }
        },

        goToPage4() {
            if (!this.validatePostcode() || !this.validateHouseNumber()) {
                return;
            }

            this.$store.dispatch('updatePostcode', this.postcode);
            this.$store.dispatch('updateStreetName', this.streetName);
            this.$store.dispatch('updateCity', this.city);
            this.$store.dispatch('updateHouseNumber', this.huisnummer);
            this.$router.push({ name: 'pagina4' });
            console.log('Postcode:', this.postcode, 'Huisnummer:', this.huisnummer);
            console.log('Straatnaam:', this.streetName, 'Stad:', this.city);
        },

        selectOption(optionId) {
            const input = document.getElementById(optionId);
            if (input) {
                input.checked = true;
            }
        }
    },
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

    <div class="achtergrond-pagina-3">

        <div  :class="{ 'error-active': postcodeError,
        'height-24vw': postcodeError || huisnummerError,
        'height-27vw': postcodeError && huisnummerError
        }" 

        :style="(postcodeError && huisnummerError) ? { height: '27vw' } : ''" 

        class="witte-container-pagina-3">
        
            <div class="container-inhoud-witte-container-3">




                            <div class="stap-pagina-1">
                                Stap 3 van 3
                            </div>
                            <!-- <div class="pijl-vorige-1">
                                <a class="vorige-1" href="/Pagina2">
                                    &#8592; vorige
    
                                </a>
    
                            </div> -->
                        <div class="container-pijl-pagina-3">
                            <span class="pijl-pagina-3">
                                <router-link to="/Pagina2">
                                  <!-- &#8592; -->
                                  <img style="max-width: 2vw!important;" src="/public/pijl-terug.svg" alt="">
                                </router-link>
                              </span>
                        </div>


                <div class="vraag-pagina-3">
                    Vul je postcode & huisnummer in, en check of je kans maakt op <span class="gekozen-prijs">{{ gekozenPrijs }}:</span>
                </div>
                








                <div class="input-button-wrapper">
                    <div class="input-button-container">
                        <!-- Postcode input -->

                        <span class="input-container-mobiel mobiel">

                        <input 
                            type="text" 
                            placeholder="Postcode" 
                            class="postcode-input inputs-pagina-3" 
                            id="postcode-input"
                            v-model="postcode" 
                            @input="handlePostcodeInput" 
                            @keydown="handleEnterKey"
                            :class="{ 'error-border': postcodeError,
                            'foutmelding-postcode-trigger': postcodeError

                        }"
                            >
                            
                        
                        <!-- Huisnummer input -->
                        <input 
                            type="text" 
                            placeholder="Huisnr." 
                            class="huisnummer-input inputs-pagina-3" 
                            id="huisnummer-input"
                            v-model="huisnummer" 
                            @input="handleHuisnummerInput" 
                            @keydown="handleEnterKey"
                            :class="{ 'error-border': huisnummerError,
                            'foutmelding-huisnummer-trigger': huisnummerError
                        }"
                            >

                    </span>



                        <input 
                            type="text" 
                            placeholder="Postcode" 
                            class="postcode-input inputs-pagina-3 desktop" 
                            id="postcode-input"
                            v-model="postcode" 
                            @input="handlePostcodeInput" 
                            @keydown="handleEnterKey"
                            :class="{ 'error-border': postcodeError,
                            'foutmelding-postcode-trigger': postcodeError

                        }"
                            >
                            
                        
                        <!-- Huisnummer input -->
                        <input 
                            type="text" 
                            placeholder="Huisnr." 
                            class="huisnummer-input inputs-pagina-3 desktop" 
                            id="huisnummer-input"
                            v-model="huisnummer" 
                            @input="handleHuisnummerInput" 
                            @keydown="handleEnterKey"
                            :class="{ 'error-border': huisnummerError,
                            'foutmelding-huisnummer-trigger': huisnummerError
                        }"
                            >


                        
                        <button @click="goToPage4" class="cta-pagina-3"
                        :id="huisnummerError && postcodeError ? 'foutmelding-2-errors-mobiel' : (huisnummerError ? 'cta-pagina-3-foutmelding-huisnr' : '')"



                        :class="{'cta-pagina-3-foutmelding-huisnr': huisnummerError}"
                        
                        >

                            <span class="cta-text-pagina-3">
                                <span class="desktop">
                                    Check of ik kans maak
                                </span>
                                <span class="mobiel">
                                    Check postcode
                                </span>


                            </span>
                            <span class="cta-pijl-pagina-3">&#8594;</span>
                        </button>
                    </div>
                </div>
      
                <div v-if="postcodeError" id="foutmelding-pagina-3-postcode" class=" foutmelding-pagina-3">{{ postcodeError }}</div>
                <div v-if="huisnummerError" 
                :id="huisnummerError && !postcodeError ? 'alleen-huisnummer-foutmelding' : 'foutmelding-pagina-3-huisnummer'" 
                class="foutmelding-pagina-3-huisnummer foutmelding-pagina-3">
                
                {{ huisnummerError }}</div>

                <div class="container-dynamisch-adres">
                    <div v-if="!postcodeError && !huisnummerError && postcode && huisnummer && streetName && city" class="gegevens-weergave">
                        <p class="dynamisch-adres-los">{{ streetName }}</p>
                        <p class="dynamisch-adres-los">{{ huisnummer }},</p>
                        <p class="dynamisch-adres-los">{{ postcode }}</p>
                        <p class="dynamisch-adres-los">{{ city }}</p>
                    </div>
                </div>
                
                





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

@media (min-width: 500px) {
    #huisnummer-input {
        width: 30%!important;
        padding-left: 2vw!important;
    }

    #postcode-input {
        width: 45%!important;
        padding-left: 2vw!important;
    }
}

@media (max-width: 499px) {
    #huisnummer-input {
        width: 100%!important;
        padding-left: 4vw!important;
        border-radius: 35vw!important;
    }

    #postcode-input {
        width: 100%!important;
        padding-left: 4vw!important;
    }
}


.height-27vw {
    height: 27vw!important;
}

@media (min-width: 500px) {
    .height-24vw {
        height: 25vw!important;
    }
    
}


.container-dynamisch-adres {
    display: flex!important;
    position: absolute;
}

.dynamisch-adres-los {
    color: #072249;
    font-size: 1vw;
    font-family: "DM Sans";
    padding-right: 0.2vw!important;
}

.gegevens-weergave {
    display: flex;
    margin-top: 0.5vw!important;
}




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
    border-radius: 3.75vw;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    z-index: 2;
}

.container-inhoud-witte-container-3 {
    padding-left: 4vw!important;
    padding-top: 3.5vw!important;
    height: 100%;
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
    width: 92%;
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





.postcode-input {
    width: 40%!important;
}




.inputs-pagina-3 {
    border-radius: 35vw;
    width: 30%!important;
}

.error-border {
    border: 1px solid red!important;
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
    z-index: 2;

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
    top: 80%;
}

.container-pijl-pagina-3 {
    width: auto;
    max-width: 1vw!important;
}

.pijl-pagina-3:hover {
    color: #F48C02;
}



.input-button-wrapper {
    background-color: transparent;
    border-radius: 35vw;
    padding-right: 0; 
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4vw;
    width: 42vw;
    margin-top: 2.2vw!important;
}

.input-button-container {
    display: flex;
    align-items: center; 
    border-radius: 35vw;
    gap: 1vw;
    width: 100%;

}

.cta-pagina-3 {
    padding-left: 0.5vw!important;
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
    width: 30vw;
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
    left: 0vw;
}






@media (max-width: 499px) {


    #cta-pagina-3-foutmelding-huisnr {
        margin-top: 4vw!important;
    }

    .inputs-pagina-3 {
        padding-left: 25vw!important;
    }

    #postcode-input {
        padding-left: 7vw!important;
    }

    #huisnummer-input {
        padding-left: 6vw!important;
    }


    .dynamisch-adres-los {
        position: relative;
        top: 59.5vw;
        font-size: 4vw;
        padding-right: 2vw !important;
    }

    .height-27vw {
        height: 105vw!important;
    }

    .foutmelding-postcode-trigger {
        margin-bottom: 8vw!important;
    }

    .foutmelding-huisnummer-trigger {
        margin-bottom: 5vw!important;
    }

    #foutmelding-pagina-3-postcode {
        text-align: left;
        color: red;
        font-size: 4vw;
        font-weight: 700;
        position: relative;
        top: 17vw!important;
        left: 0vw;
    }
    
    #foutmelding-pagina-3-huisnummer {
        text-align: left;
        color: red;
        font-size: 4vw;
        font-weight: 700;
        position: relative;
        top: 16.5vw!important;
        left: 0vw;
    }

    #alleen-huisnummer-foutmelding {
        top: 17.5vw!important;
    }




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
        height: 100vw;
        width: 90%;
        margin: 0 auto !important;
        justify-content: center;
        display: flex;
        margin: o auto !important;
        justify-content: center;
        left: 0!important;
    }

    .vraag-pagina-3 {
        width: 101%;
        padding-bottom: 4vw;
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

    .input-container-mobiel {
        display: inline-flex!important;
        gap: 1vw!important;
    }


    #postcode-input {
        width: 170%!important;
    }

    .postcode-input {
        width: 70%!important;
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
        margin-top: 9vw!important;
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
        height: 105vw;
    }

    .gegevens-weergave {
        display: flex;
        margin-top: -41.5vw!important;
    }


    #foutmelding-2-errors-mobiel {
        margin-top: 6vw!important;
    }
    
    .desktop {
        display: none!important;
    }

}








</style>