<script>
export default {
    data() {
        return {
            gekozenPrijs: '',
            voornaam: '',
            achternaam: '',
            email: '',
            telefoonnummer: '',
            errors: {},
            containerHeight: 704,
            successMessage: '', 
            errorMessage: ''
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

        // Haal de gekozen prijs op uit de Vuex store
        const gekozenPrijsOptie = this.$store.getters.getGekozenPrijsOptie;
        if (gekozenPrijsOptie) {
            this.gekozenPrijs = gekozenPrijsOptie;
        } else {
            console.log('Geen prijs gevonden in Vuex store');
        }
    },

    methods: {
        goToNextPage() {
            this.$router.push({ name: 'nextPage' });
        },

        validateVoornaam() {
            const regex = /^[a-zA-Z\s.,'-]{1,}$/;
            if (!this.voornaam.match(regex)) {
                this.errors.voornaam = 'Ongeldige voornaam.';
                return false;
            }
            this.errors.voornaam = '';
            return true;
        },

        validateAchternaam() {
            const regex = /^[a-zA-Z\s.,'-]{1,}$/;
            if (!this.achternaam.match(regex)) {
                this.errors.achternaam = 'Ongeldige achternaam.';
                return false;
            }
            this.errors.achternaam = '';
            return true;
        },

        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|nl|info|biz|co|io|me|tv)$/i;
            const containsApostrophe = /'/;
            if (!this.email.match(regex) || this.email.match(containsApostrophe)) {
                this.errors.email = 'Ongeldig e-mailadres.';
                return false;
            }
            this.errors.email = '';
            return true;
        },

        validateAndFormatPhoneNumber(phoneNumber) {
        // Verwijder alle niet-numerieke tekens behalve het plusteken
        phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');

        // Controleer of het nummer met 06 begint
        if (phoneNumber.startsWith('06')) {
            // Vervang 06 door +316 en zorg ervoor dat alleen de laatste 8 cijfers blijven
            phoneNumber = phoneNumber.replace(/^06/, '+316');
        } else if (phoneNumber.startsWith('+316')) {
            // Als het nummer al in het juiste formaat is, gebruik het zoals het is
            phoneNumber = phoneNumber.slice(0, 12);  // Zorg ervoor dat we alleen 12 tekens (+316 + 8 cijfers) behouden
        } else {
            // Ongeldig telefoonnummer
            return null;
        }

        // Controleer of het nummer nu precies +316 en 8 cijfers bevat
        const dutchRegex = /^\+316\d{8}$/;
        if (!phoneNumber.match(dutchRegex)) {
            return null;
        }

        return phoneNumber;
    },

    validateTelefoonnummer() {
        const formattedPhoneNumber = this.validateAndFormatPhoneNumber(this.telefoonnummer);
        if (!formattedPhoneNumber) {
            this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
            return false;
        }
        this.telefoonnummer = formattedPhoneNumber;  // Sla het geformatteerde nummer op
        this.errors.telefoonnummer = '';
        return true;
    },

        async submitForm() {
            this.errors = {};
            this.successMessage = ''; 
            this.errorMessage = '';

            const isValidVoornaam = this.validateVoornaam();
            const isValidAchternaam = this.validateAchternaam();
            const isValidEmail = this.validateEmail();
            const isValidTelefoonnummer = this.validateTelefoonnummer();

            if (!isValidVoornaam || !isValidAchternaam || !isValidEmail || !isValidTelefoonnummer) {
                console.error('Validation failed:', this.errors);
                return;
            }

            const firstAnswerId = 5269; 
            const secondAnswerId = this.$store.getters.getGekozenPrijsId;
            const thirdAnswerId = this.$store.getters.getSelectedProviderId;
            const zip = this.$store.getters.getPostcode;
            if (!secondAnswerId || !thirdAnswerId || !zip) {
                console.error('Onvoldoende gegevens om te verwerken. tweede antwoord:', secondAnswerId, 'derde antwoord:', thirdAnswerId, 'postcode:', zip);
                return;
            }

            const formattedPhoneNumber = this.validateAndFormatPhoneNumber(this.telefoonnummer);
            if (!formattedPhoneNumber) {
                this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
                console.error('Ongeldig telefoonnummer:', this.telefoonnummer);
                return;
            }

            const data = {
                language: 'nl_NL',
                publisher_id: 'morris de publisher :)',
                site_custom_url: 'https://ziggoprijswinnnen.nl',
                site_custom_name: 'ziggo prijs winnen',
                ip: '123.45.67.89',
                optin_timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
                firstname: this.voornaam,
                lastname: this.achternaam,
                email: this.email,
                phone_number: formattedPhoneNumber,
                zip: zip,
                answers: [firstAnswerId, secondAnswerId, thirdAnswerId]
            };

            console.log('Geformatteerd telefoonnummer:', formattedPhoneNumber);
            console.log('Data verstuurd naar API:', JSON.stringify(data, null, 2));

            try {
                const response = await fetch('https://leadgen.republish.nl/api/sponsors/2410/leads', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + btoa('199:b41c7c41c8d595fbd66dea6a4f70836fbc5e3afe'),
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(data),
                });

                console.log('API respons status:', response.status);

                if (response.status === 201) {
                    console.log('Succesvol ingediend!');
                    this.$router.push('/Bedankt');
                } else {
                    const responseBody = await response.json();
                    console.error('Fout bij indienen:', responseBody);
                    this.$router.push('/bedankt');
                }
            } catch (error) {
                console.error('Er is een fout opgetreden bij het versturen van het formulier:', error);
                this.errorMessage = 'Netwerk- of serverfout: ' + error.message;
            }
        }
    }
};
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

    <div class="achtergrond-pagina-6">

        <div class="witte-container-pagina-6"
        :class="{ 'langer-maken-error': errors.achternaam || errors.voornaam || errors.email || errors.telefoonnummer}" 
        >

            <div class="container-inhoud-witte-container">

                <div class="gefeliciteerd">
                    Gefeliciteerd!
                </div>

                <div class="jij-maakt-nu-kans">
                    Je gekozen prijs is een: <span class="gekozen-prijs">{{ gekozenPrijs }}</span>
                </div>

                <hr class="lijn-10">


                <div class="bereiken">
                    Hoe kunnen wij jou bereiken?
                </div>


                <form class="formulier" @submit.prevent="submitForm">
                    <div class="namen-inputs">
                      <div class="input-wrapper-naam">
                        <img src="/public/naam-icoon.svg" alt="naam icoon" class="input-icon-voornaam">
                        <input type="text" placeholder="Voornaam" class="voornaam-input" v-model="voornaam">
                      </div>

                      <div v-if="errors.voornaam" class="error-message-voornaam">
                        {{ errors.voornaam }}
                    </div>

                      <div class="input-wrapper-naam">
                        <img src="/public/naam-icoon.svg" alt="naam icoon" class="input-icon-achternaam">
                        <input type="text" placeholder="Achternaam" class="achternaam-input" v-model="achternaam"
                        :class="{ 'error-marge-mobiel-1': errors.voornaam}" 
                        >
                      </div>

                      <div v-if="errors.achternaam" class="error-message-achternaam">
                        {{ errors.achternaam }}
                    </div>

                    </div>
                  
                    <div class="email-input input-wrapper desktop">
                      <img src="/public/email-icoon.svg" alt="email" class="input-icon input-icon-email"
                      :style="{ top: (errors.voornaam || errors.achternaam) ? '48%!important' : '40%' }" 
                      >
                      <input type="email" placeholder="Email" class="email-input-field" v-model="email"
                      :class="{ 'error-marge-mobiel-2': errors.achternaam}" 
                      :style="{ marginTop: (errors.voornaam || errors.achternaam) ? '1vw!important' : '0' }" 

                      >
                    </div>
                    <div v-if="errors.email" class="error-message-mail"
                    :style="{ marginTop: (errors.voornaam || errors.achternaam) ? '2vw!important' : '0' }" 
                    >
                        {{ errors.email }}
                    </div>
                  
                    <div class="telefoonnummer-input input-wrapper desktop">
                      <img src="/public/telefoon-icoon.svg" alt="telefoon" class="input-icon input-icon-telefoon"
                      :style="{ top: (errors.voornaam || errors.achternaam || errors.email) ? '58%!important' : '40%' }" 
                      >
                      <input type="tel" placeholder="Telefoonnummer" class="telefoonnummer-input-field" v-model="telefoonnummer"
                      :style="{ marginTop: (errors.voornaam || errors.achternaam || errors.email) ? '2vw!important' : '0' }" 
                      :class="{ 'error-marge-mobiel-1': errors.email}" 

                      >
                    </div>
                    <div v-if="errors.telefoonnummer" class="error-message-tel"
                    :style="{ marginTop: (errors.voornaam || errors.achternaam) ? '2vw!important' : '0' }" 
                    >
                        {{ errors.telefoonnummer }}
                    </div>
                    
                  

                    <!-- hieronder is voor mobiel -->
                    <div class="namen-inputs mobiel-pagina-6">
                      <div class="email-input input-wrapper">
                        <img src="/public/email-icoon.svg" alt="email" class="input-icon">
                        <input type="email" placeholder="Email" class="email-input-field" v-model="email"
                        :class="{ 'error-marge-mobiel-3': errors.email}" 
                        >
                      </div>
                      <div v-if="errors.email" class="error-message-mail-mobiel">
                        {{ errors.email }}
                    </div>

                  
                      <div class="telefoonnummer-input input-wrapper">
                        <img src="/public/telefoon-icoon.svg" alt="telefoon" class="input-icon input-icon-telefoon">
                        <input type="tel" placeholder="Telefoonnummer" class="telefoonnummer-input-field" v-model="telefoonnummer"
                        :class="{ 'error-marge-mobiel-3': errors.telefoonnummer}" 
                        >
                      </div>
                      <div v-if="errors.telefoonnummer" class="error-message-tel-mobiel">
                        {{ errors.telefoonnummer }}
                    </div>



                    </div>
                  </form>



                  
                  
                


            <div class="container-button-pagina-6">
                <button @click="submitForm" class="cta-pagina-6">
                    <span class="cta-text-pagina-6">Bevestig mijn deelname</span>
                    <span class="cta-pijl-pagina-6">&#8594;</span>
                </button>  
            </div>




            <div class="witte-container-footer">
                Met het bevestigen van je deelname ga je er mee akkoord dat MeerVoordeel éenmalig telefonisch contact met je opneemt met een aanbieding voor een all-in abonnement van Ziggo.
            </div>


            <div class="container-prijzen-met-prijzen mobiel">

                <div class="container-afbeeldingen-en-prijs-mobiel-6 mobiel">
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
        </div>




        <div class="container-dynamische-prijs-afbeelding">
            <img v-if="gekozenPrijs === 'Playstation 5'" class="ps-prijs" src="/public/ps-prijs.png" alt="PlayStation Prijs">
            <img v-if="gekozenPrijs === 'Bol.com cadeaubon'" class="bol-prijs" src="/public/bol-prijs.png" alt="Bol Prijs">
            <img v-if="gekozenPrijs === 'SAMSUNG TV'" class="tv-prijs" src="/public/tv-prijs.png" alt="TV Prijs">
        

            <div class="container-text-dynamische-prijs">
                <div class="text-prijs-pagina-6">Jouw gekozen prijs:</div>
                <div class="dynamische-prijs-pagina-6">{{gekozenPrijs}}</div>
            </div>

        </div>


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

.mobiel-pagina-6 {
    display: none!important;
}


.achtergrond-pagina-6 {
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
    margin-left: 17.5vw!important;
}


.cta-pagina-6 {
    display: inline-flex;
    height: 4vw;
    width: 19vw;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 35px;
    background-color: #F48C02;
    z-index: 2; 

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
    padding-right: 5vw!important;
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
    left: 1vw;
    top: 40%;
    transform: translateY(-50%);
    width: 1.5vw;
    height: auto;
    pointer-events: none; 
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
    padding-left: 3.5vw!important;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1vw;
    background: #f1f1f1;
    color: black;
}

.namen-inputs {
    display: flex;
    width:  50vw
}




.container-dynamische-prijs-afbeelding {
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 55% !important;
    position: relative;
    bottom: 70%;
    left: 2%;
    display: flex;
    justify-content: center;
    z-index: 1;
}

.ps-prijs {
    position: absolute;
    width: 40vw;
    bottom: -30vw;
    left: 2vw;
}

.tv-prijs {
    scale: 0.8;
    position: relative;
    top: 8vw;
}

.bol-prijs {
    position: relative;
    top: 9vw;


}



.container-text-dynamische-prijs {
    position: absolute;
    top: 25%;
    left: 5%;
    text-align: start;
}

.text-prijs-pagina-6 {
    color: #FFF;
    font-family: "DM Sans";
    font-size:  1.7vw;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
}

.dynamische-prijs-pagina-6 {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}


.error-message {
    display: none;
}

.error-message-voornaam {
    position: absolute;
    top: 48.5%;
    left: 15%;
    color: red;
    font-weight: 700;
    font-size: 1vw
}

.error-message-achternaam {
    position: absolute;
    top: 48.5%;
    left: 59%;
    color: red;
    font-weight: 700;
    font-size: 1vw
}

.error-message-mail {
    position: absolute;
    top: 59%;
    left: 15%;
    color: red;
    font-weight: 700;
    font-size: 1vw;
    z-index: 999
}

.error-message-tel {
    position: absolute;
    top: 76%;
    left: 15%;
    color: red;
    font-weight: 700;
    font-size: 1vw;
}


.container-afbeeldingen-en-prijs-mobiel-6 {
    height: 100%;
    object-fit: contain;
    position: relative;
    bottom: 30%;
    display: flex;
    justify-content: center;
}



@media (max-width: 499px) {

    .error-message-voornaam {
        font-size: 4vw!important;
        z-index: 999;
        top: 0vw;
        left: -5vw;
        position: relative;
    }


    .error-marge-mobiel-1 {
        margin-top: 0vw!important
        }

    .error-marge-mobiel-2 {
        margin-top: 2.5vw!important
        }

    .error-message-achternaam {
        font-size: 4vw;
        z-index: 999;
        position: relative;
        left: -3vw;
        top: -1vw;
    }

    .error-message-mail {
        position: relative;
        bottom: -25vw;
        display: none;
    }

    .error-message-mail-mobiel {
        font-size: 4vw;
        font-weight: 700;
        color: red;
        position: relative;
        right: 4vw;
    }

    .error-message-tel {
        display: none;
    }

    .error-message-tel-mobiel {
        font-size: 4vw;
        font-weight: 700;
        color: red;
        position: relative;
        right: 4vw;
    }



    .error-message-mail {
        font-size: 4vw;
    }


    .error-message-tel {
        font-size: 4vw;
    }





    .container-dynamische-prijs-afbeelding {
        display: none;
    }

    .mobiel-pagina-6 {
        display: block!important;
    }

    .namen-inputs {
        gap: 2vw;
    }


    .witte-container-pagina-6 {
    width: 90%;
    height: 202vw;
    left: 0;
    margin: 0 auto!important
    }


    .gefeliciteerd,
    .jij-maakt-nu-kans {
        font-size: 7vw;
    }

    .bereiken {
        font-size: 5vw;    
    }

    .namen-inputs {
        flex-direction: column;
        width: 100%!important;
    }

    .input-wrapper-naam,
    .input-wrapper {
        width: 100%!important;
        position: relative;
    }
    input[type="text"], input[type="email"], input[type="tel"] {
        width: 98%!important;
        height: 20vw!important;
        font-size: 5.5vw;
        padding-left: 13vw!important;
    }

    .input-icon,
    .input-icon-achternaam,
    .input-icon-voornaam {
        scale: 3.5;
    }

    .input-icon-voornaam {
        bottom: -1vw;
        position: relative;
        left: 7.9vw;
        }

    .input-icon-achternaam {
        position: relative;
        left: 8vw;
        top: 1vw;
    }

    .input-icon:first-child {
        position: relative;
        top: 13vw;
        left: -32vw;
        }
    
    .input-icon-telefoon {
        position: relative;
        top: 14vw!important;
    }

    .container-button-pagina-6 {
        margin-left: 0!important;
        margin-top: 2vw!important;
    }

    .cta-pagina-6 {
        width: 99%;
        height: 20vw;
    }

    .cta-pijl-pagina-6,
    .cta-text-pagina-6 {
        font-size: 4.5vw;
    }

    .witte-container-footer {
        font-size: 4.1vw;
        margin-top: 3vw!important;
        text-align: start;
    }

    .footer-container-6 {
        background-color: white;
        width: 100%;
    }

    .footer-text {
        width: 80%!important;
        margin: 0 auto!important;
    }


    .achtergrond-pagina-6 {
        height: 335vw!important;
        width: 100%!important;
    }

    .lijn-sectie-2 {
        margin-top: 0!important;
        margin-bottom: 2vw!important;
    }

    .langer-maken-error {
        height: 215vw!important;
    }



    .container-afbeeldingen-en-prijs-mobiel-6 {
        margin-top: -20vw!important;
    }

}






</style>