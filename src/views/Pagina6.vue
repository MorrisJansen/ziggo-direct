<script>
import { v4 as uuidv4 } from 'uuid';
import PrivacyModal from './privacyModal.vue';

export default {
  components: {
    PrivacyModal,
  },
  data() {
    return {
      isModalVisible: false,
      modalUrl: '', 
      gekozenPrijs: '',
      voornaam: '',
      achternaam: '',
      email: '',
      telefoonnummer: '',
      errors: {},
      containerHeight: 704,
      successMessage: '', 
      errorMessage: '',
      uniqueConversionId: uuidv4(),
      isChecked: false,
    };
  },

  mounted() {
    const isSafari = () => {
      const ua = navigator.userAgent;
      return ua.includes('Safari') && !ua.includes('Chrome');
    };

    if (isSafari()) {
      document.body.classList.add('safari');
    }

    const gekozenPrijsOptie = this.$store.getters.getGekozenPrijsOptie;
    if (gekozenPrijsOptie) {
      this.gekozenPrijs = gekozenPrijsOptie;
    } else {
      console.log('Geen prijs gevonden in Vuex store');
    }
  },
  watch: {
  isChecked(newValue) {
    if (newValue) {
      this.errors.checkbox = ''; 
      this.errors.voornaam = ''; 
      this.errors.achternaam = '';
      this.errors.telefoonnummer = '';    
    }
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
    triggerTrackingPixel() {
      const pixelUrl = `https://republish.prijzenpakket.nl/m/6337/9d85475ce4f0/?event=7417&unique_conversion_id=${this.uniqueConversionId}`;
      const img = new Image();
      img.src = pixelUrl;
      img.style.width = '1px';
      img.style.height = '1px';
      img.style.border = '0';
      document.body.appendChild(img);
    },

    goToNextPage() {
      this.$router.push({ name: 'Bedankt' });
    },
    
    selectPrice(prijsId, prijsOptie) {
      if (this.$store.getters.getGekozenPrijsId !== prijsId) {
        this.$store.dispatch('updateGekozenPrijsId', prijsId);
        this.$store.dispatch('updateGekozenPrijsOptie', prijsOptie);
      }
    },

    validateVoornaam() {
      const regex = /^[A-Za-z'., -]+$/; 
      if (!this.voornaam.match(regex)) {
        this.errors.voornaam = 'Ongeldige voornaam.';
        return false;
      }
      this.errors.voornaam = '';
      return true;
    },

    validateAchternaam() {
      const regex = /^[A-Za-z'., -]+$/;
      if (!this.achternaam.match(regex)) {
        this.errors.achternaam = 'Ongeldige achternaam.';
        return false;
      }
      this.errors.achternaam = '';
      return true;
    },

    validateTelefoonnummer() {
      let cleanedPhoneNumber = this.telefoonnummer.trim();
  
      cleanedPhoneNumber = cleanedPhoneNumber.replace(/[\s-]/g, '');

      if (cleanedPhoneNumber.startsWith('+31')) {
        cleanedPhoneNumber = cleanedPhoneNumber.replace('+31', '0');
      } else if (cleanedPhoneNumber.startsWith('0031')) {
        cleanedPhoneNumber = cleanedPhoneNumber.replace('0031', '0');
      } else if (cleanedPhoneNumber.startsWith('31')) {
        cleanedPhoneNumber = cleanedPhoneNumber.replace('31', '0');
      } else if (!cleanedPhoneNumber.startsWith('06')) {
        this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
        return false;
      }

      // Tel het aantal cijfers na de conversie
      const digitsOnlyPhoneNumber = cleanedPhoneNumber.replace(/[^0-9]/g, '');

      if (digitsOnlyPhoneNumber.length !== 10) {
        this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
        return false;
      }

      this.errors.telefoonnummer = '';
      return true;
    },

    validateAndFormatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9+\s-]/g, '');
      phoneNumber = phoneNumber.replace(/[\s-]/g, '');

      if (phoneNumber.startsWith('06')) {
        phoneNumber = phoneNumber.replace(/^06/, '+316');
      } else if (phoneNumber.startsWith('+316')) {
        phoneNumber = phoneNumber.slice(0, 12);
      } else if (phoneNumber.startsWith('316')) {
        phoneNumber = phoneNumber.replace(/^316/, '+316');
      } else if (phoneNumber.startsWith('00316')) {
        phoneNumber = phoneNumber.replace(/^00316/, '+316');
      } else {
        return null;
      }

      const dutchRegex = /^\+316\d{8}$/;
      if (!phoneNumber.match(dutchRegex)) {
        return null;
      }

      return phoneNumber;
    },

    async submitForm() {
      this.errors = {};
      this.successMessage = ''; 
      this.errorMessage = '';

      if (!this.isChecked) {
        this.errors.checkbox = 'We hebben je toestemming voor eenmalig telefonisch contact nodig om je deelname aan de winactie compleet te maken!';
        return;
      } else {
        this.errors.checkbox = ''; 
      }

      const isValidVoornaam = this.validateVoornaam();
      const isValidAchternaam = this.validateAchternaam();
      const isValidTelefoonnummer = this.validateTelefoonnummer();

      if (!isValidVoornaam || !isValidAchternaam || !isValidTelefoonnummer) {
        console.error('Validation failed:', this.errors);
        return;
      }

      const firstAnswerId = 5269; 
      const secondAnswerId = this.$store.getters.getSelectedOptie;
      const thirdAnswerId = this.$store.getters.getSelectedProviderId;
      const zip = this.$store.getters.getPostcode;
      const street = this.$store.getters.getStreetName;
      const city = this.$store.getters.getCity;
      const huisnummer =  this.$store.getters.getHuisnummer; 

      console.log('PubId:', this.$store.getters.getPubId);
      console.log('SubId:', this.$store.getters.getSubId);
      
      const pubid = this.$store.getters.getPubId;
      const subid = this.$store.getters.getSubId;

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
        publisher_id: pubid,
        site_subid: subid,
        site_custom_url: 'https://ziggoprijswinnnen.nl',
        site_custom_name: 'MeerVoordeel_Ziggo',
        ip: '123.45.67.89',
        optin_timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
        firstname: this.voornaam,
        lastname: this.achternaam,
        phone_number: formattedPhoneNumber,
        zip: zip,
        street: street,
        city: city,
        housenumber: huisnummer, 
        answers: [firstAnswerId, secondAnswerId, thirdAnswerId,]
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

        if (response.status === 409) {
          this.$router.push('/dankuwel');
          console.log('naar bedankt zonder pixel');   
        } else if (response.status === 400) {
          const responseBody = await response.json();
          console.log('Volledige responseBody:', responseBody);

          if (responseBody.error && responseBody.error.includes('phone_number')) {
            this.errors.telefoonnummer = 'Dit telefoonnummer is al geregistreerd!';
          } else {
            this.errorMessage = 'Er is een fout opgetreden, probeer het later opnieuw.';
          }
          return;
        } else if (response.ok) {
          this.triggerTrackingPixel();
          this.goToNextPage();
        }
      } catch (error) {
        console.error('API-verzoek fout:', error);
        this.errorMessage = 'Er is een fout opgetreden, probeer het later opnieuw.';
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

    <div class="achtergrond-pagina-6"
    :class="{ 'error-langer-maken-achtergrond': errors.achternaam || errors.voornaam  || errors.telefoonnummer}" 

    >

        <div class="witte-container-pagina-6"
        :class="{ 'langer-maken-error': errors.achternaam || errors.voornaam || errors.telefoonnummer,
        'checkbox-foutmelding-wit': errors.checkbox
      
      }" 
        >

            <div class="container-inhoud-witte-container-6 container-inhoud-witte-container">

                    <div class="gefeliciteerd">
                        Gefeliciteerd!
                    </div>

                <span class="pijl-pagina-6" 
                :class="{ 'naar-beneden-pijl': errors.achternaam || errors.voornaam || errors.telefoonnummer}" 
                >
                    <router-link to="/Pagina3">
                      <!-- &#8592; -->
                      <img style="width: 3vw" src="/public/pijl-terug.svg" alt="">

                    </router-link>
                  </span>
                  


                <div class="jij-maakt-nu-kans">
                    Jij maakt nu kans op de: <br><span class="gekozen-prijs">{{ gekozenPrijs }}</span>
                </div>

                <hr class="lijn-10">


                <div class="bereiken">
                    Hoe kunnen wij jou bereiken?
                </div>


                <form class="formulier" @submit.prevent="submitForm">
                    <div class="namen-inputs">
                      <div class="input-wrapper-naam">
                        <img src="/public/naam-icoon.svg" alt="naam icoon" class="input-icon-voornaam">
                        <input type="text" placeholder="Voornaam" class="voornaam-input" v-model="voornaam" @input="validateVoornaam"
                        :class="{ 'error-border': errors.voornaam }" >
                      </div>

                      <div v-if="errors.voornaam" class="error-message-voornaam">
                        {{ errors.voornaam }}
                    </div>

                      <div class="input-wrapper-naam">
                        <img src="/public/naam-icoon.svg" alt="naam icoon" class="input-icon-achternaam">
                        <input type="text" placeholder="Achternaam" class="achternaam-input" v-model="achternaam" @input="validateAchternaam"
                        :class="{ 
                            'error-marge-mobiel-1': errors.voornaam, 
                            'error-border': errors.achternaam 
                          }"                        
                        >
                      </div>

                      <div v-if="errors.achternaam" class="error-message-achternaam">
                        {{ errors.achternaam }}
                    </div>

                    </div>
                  
                    <!-- <div class="email-input input-wrapper desktop">
                      <img src="/public/email-icoon.svg" alt="email" class="input-icon input-icon-email"
                      :style="{ top: (errors.voornaam || errors.achternaam) ? '48%!important' : '40%' }" 
                      >
                      <input type="email" placeholder="E-mailadres" class="email-input-field" v-model="email" @input="validateEmail"
                      :class="{ 
                        'error-marge-mobiel-2': errors.achternaam,
                        'error-border': errors.email
                    
                    }" 
                      :style="{ marginTop: (errors.voornaam || errors.achternaam) ? '1vw!important' : '0' }" 

                      >
                    </div> -->


                    <!-- <div v-if="errors.email" class="error-message-mail"
                    :style="{ marginTop: (errors.voornaam || errors.achternaam) ? '2vw!important' : '0' }" 
                    :class="{ 'geen-fout-naam-mail': !errors.achternaam && !errors.voornaam }">
               

                    
                        {{ errors.email }}
                    </div> -->


                  
                    <div class="telefoonnummer-input input-wrapper desktop">
                      <img src="/public/telefoon-icoon.svg" alt="telefoon" class="input-icon input-icon-telefoon"
                      :style="{ top: (errors.voornaam || errors.achternaam || errors.email) ? '58%!important' : '40%' }" 
                    :class="{ 'error-marge-mobiel-1': errors.email}"                      >
                      <input type="tel" placeholder="Telefoonnummer" class="telefoonnummer-input-field" v-model="telefoonnummer" @input="validateTelefoonnummer"
                      :style="{ marginTop: (errors.voornaam || errors.achternaam || errors.email) ? '1vw!important' : '0' }" 
                      :class="{'error-border': errors.telefoonnummer}"
                      >
                    </div>
                    <div v-if="errors.telefoonnummer" class="error-message-tel"
                    :style="{ marginTop: (errors.voornaam || errors.achternaam) ? '2vw!important' : '0' }" 
                    :class="{ 
                        'geen-fout-naam-tel': !errors.achternaam && !errors.voornaam, 
                        'alleen-tel-fout': !errors.voornaam && !errors.achternaam && errors.telefoonnummer,
                    }">                    
                        {{ errors.telefoonnummer }}
                    </div>
                    
                  

                    <!-- hieronder is voor mobiel -->
                    <div class="namen-inputs mobiel-pagina-6">


                      
                      <!-- <div class="email-input input-wrapper">
                        <img src="/public/email-icoon.svg" alt="email" class="input-icon">
                        <input type="email" placeholder="E-mailadres" class="email-input-field" v-model="email"
                        :class="{ 'error-marge-mobiel-3': errors.email}" 
                        >
                      </div>
                      <div v-if="errors.email" class="error-message-mail-mobiel">
                        {{ errors.email }}
                    </div> -->

                  
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
                <button @click="submitForm" class="cta-pagina-6"
                :class="{'foutmelding-checkbox-cta': errors.checkbox}"
                >
                    <span class="cta-text-pagina-6">Bevestig mijn deelname</span>
                    <span class="cta-pijl-pagina-6">&#8594;</span>
                </button>  
            </div>



            <label>
              <div class="witte-container-footer">
                <input type="checkbox" class="checkbox" id="checkbox" v-model="isChecked">
                <p class="text-check">
                  Ik ga er mee akkoord dat MeerVoordeel eenmalig telefonisch contact met mij opneemt met een exclusieve aanbieding voor een alles-in-1 pakket van Ziggo. 
                  <span style="font-weight: 700">Let op: winnaars worden telefonisch op de hoogte gesteld.</span>
                </p>
              </div>
            </label>
            <div v-if="errors.checkbox" class="checkbox-fout">{{ errors.checkbox }}</div>
            
            



            <div class="container-prijzen-met-prijzen mobiel" id="container-prijzen-met-prijzen">

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
            <svg v-if="gekozenPrijs === 'Playstation 5'" class="ps-bal-prijs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                <text x="29" y="20" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
                <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€599,-</text>
              </svg>
            <img v-if="gekozenPrijs === 'Bol.com cadeaubon'" class="bol-prijs" src="/public/bol-prijs.png" alt="Bol Prijs">
            <svg v-if="gekozenPrijs === 'Bol.com cadeaubon'" class="bol-bal-prijs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                <text x="29" y="20" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
                <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€400,-</text>
              </svg>
              <img v-if='gekozenPrijs === `SAMSUNG 60" TV`' class="tv-prijs" src="/public/tv-prijs.png" alt="TV Prijs">
              <svg v-if='gekozenPrijs === `SAMSUNG 60" TV`' class="tv-bal-prijs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">

                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                <text x="29" y="23" font-family="DM Sans" font-size="8" fill="white" text-anchor="middle">t.w.v.</text>
                <text x="29" y="35" font-family="DM Sans" font-size="12" font-weight="700" fill="white" text-anchor="middle">€699,-</text>
              </svg>
        

              <div class="container-text-dynamische-prijs" id="container-tv-dynamisch-gezel">
                <div class="text-prijs-pagina-6">Jouw gekozen prijs:</div>
                <div class="dynamische-prijs-pagina-6">{{gekozenPrijs}}</div>
            
                <img 
                    v-if="gekozenPrijs === 'Bol.com cadeaubon'" 
                    class="dynamische-pijl-bol" 
                    src="/public/pijl-naar-afbeelding.svg" 
                    alt="Pijl naar Bol.com cadeaubon">
                
                <img 
                    v-if='gekozenPrijs === `SAMSUNG 60" TV`'
                    class="dynamische-pijl-tv" 
                    src="/public/pijl-naar-afbeelding.svg" 
                    alt="Pijl naar Samsung TV">
                
                <img 
                    v-if="gekozenPrijs === 'Playstation 5'" 
                    class="dynamische-pijl-ps" 
                    src="/public/pijl-naar-afbeelding.svg" 
                    alt="Pijl naar Playstation 5">
            </div>
            

        </div>


    </div>

    <div class="footer-container-6">
        <hr class="lijn-sectie-2">
          <div class="footer-text">



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


.checkbox-fout {
  color: red;
  text-align: left;
  padding-left: 2.8vw!important;
  padding-right: 4.9vw!important;
  font-family: "DM Sans";
  font-size: 0.85vw;
}

.safari .checkbox-fout {
  margin-left: 1vw!important;
}

#error-border {
    border: 1px solid red;
}


.mobiel-pagina-6 {
    display: none!important;
}


.achtergrond-pagina-6 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 45vw;
}



.witte-container-pagina-6 {
    height: 47vw;
    width: 50vw;
    background-color: white;
    position: relative;
    top: 7vw;
    left: 7vw;
    border-radius: 3.75vw;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    z-index: 2;
}


.container-inhoud-witte-container {
    padding-right: 0!important;
}




.container-gefeliciteerd-terug {
    display: inline-flex;
}

.pijl-vorige-6 {
    position: relative;
    left: 10vw;
    border: 1px solid #F48C02;
    padding: 10px!important;
    border-radius: 35vw;
    color: #F48C02;
    font-weight: 700;
    height: 10%;
    top: 1vw ;
}

.pijl-vorige-6:hover {
    cursor: pointer;
    color: #F48C02;
    transition: 0.3s ease-in-out;
    background-color: #f1f1f1;
}

.vorige-1 {
    text-decoration: none;
    color: #F48C02;
}

.vorige-1:hover {
    color: #F48C02;
}


.gefeliciteerd {
    color: #F48C02;
    font-family: "DM Sans";
    font-size: 2.6vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
    position: static;
    right: 12vw;
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
    border-radius: 35vw!important;
    margin-bottom: 1vw!important;
}

.achternaam-input {
    border-radius: 35vw!important;
    margin-bottom: 1vw!important;

}

.email-input-field {
    padding-left: 2vw!important;
    border-radius: 35vw!important;
    font-size:  1.2vw;
    height: 4vw;
    margin-bottom: 1vw!important;

}

.telefoonnummer-input-field {
    padding-left: 2vw!important;
    border-radius: 35vw!important;
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
    border-radius: 5vw;
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
    border-radius: 5vw;
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
    width: 20vw;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 35vw;
    background-color: #F48C02;
    z-index: 2; 
    margin-right: 1vw!important;
    position: relative;
    top: 8vw;

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

.pijl-pagina-6 {
    position: absolute;
    font-size: 2.8vw;
    color: black;
    top: 78.5%;
    right: 87%;
}

.pijl-pagina-6:hover {
    color: #F48C02;
}

.witte-container-footer {
  text-align: left;
  padding-right: 5vw!important;
  color: #072249;
  font-family: "DM Sans";
  font-size: 0.85vw;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: -3vw!important;
  padding-left: 3vw;
  display: flex;
  align-items: flex-start; /* Aligns items at the top */
  margin-left: 4px!important;
}

.safari .witte-container-footer {
  margin-left: 8px!important;
}

input[type="checkbox"] { 
  filter: invert(70%) hue-rotate(30deg) brightness(1.4); 
  width: 1.5vw;

}

.checkbox {
margin-right: 2vw!important;
scale: 1.5;
max-width: 1.5vw;
margin-top: 1%!important; /* Remove margin to align at the top */
}

.text-check {
margin-top: 0; /* Ensure the text is aligned with the checkbox */
}


input[type="checkbox"] {
  accent-color: white!important; 
}



.footer-container-6 {
    position: relative;
    top: 12vw;
    margin-bottom: 10vw!important;
    width: 100vw;
    padding-bottom: 2vw!important
}












.naar-beneden-pijl {
    top: 79.5%!important;
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
    width:  43.5%!important;
    margin-right: -1.5vw!important
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
    left: 5.2vw;
    top: 45.5%;
    transform: translateY(-50%);
    width: 1.5vw;
    height: auto;
    pointer-events: none;
    z-index: 999;
}

.input-icon-achternaam {
    position: absolute;
    left: 26.5vw;
    top: 45.5%;
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
    border: none;
    border-radius: 5vw;
    font-size: 1.1vw;
    background: #f1f1f1;
    color: black;
    font-family: 'DM Sans', sans-serif;
}

.namen-inputs {
    display: flex;
    width:  51.7vw
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

.ps-bal-prijs {
    position: absolute;
    width: 10vw;
    left: 14vw;
    top: 5vw
}

.tv-prijs {
    scale: 0.8;
    position: absolute;
    top: 1vw;
    width: 47vw;
    right: 2vw;
}

.tv-bal-prijs {
    position: absolute;
    width: 10vw;
    left: 21vw;
}

.bol-prijs {
    position: relative;
    top: 9vw;
    width: 35vw;
    right: 5vw;
    margin-top: -4vw!important;
}

.bol-bal-prijs {
    position: absolute;
    width: 10vw;
    right: 10vw;
    top: 5vw;
}


.container-text-dynamische-prijs {
    position: absolute;
    top: 5%;
    left: 5%;
    text-align: start;
}

#container-tv-dynamisch-gezel {
    position: absolute!important;
    top: -4vw!important;
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


.dynamische-pijl-bol {
    position: relative;
    bottom: -2vw;
    left: 0vw;
    width: 6vw;
    z-index: 9999;
}

.dynamische-pijl-tv {
    position: relative;
    bottom: -1.5vw;
    left: 0vw;
    width: 6vw;
}

.dynamische-pijl-ps {
    position: relative;
    top: 2vw;
    left: 1vw;
    width: 7vw;
    transform: rotate(-15deg);
}

.error-message {
    display: none;
}

.error-message-voornaam {
    position: absolute;
    top: 50.5%;
 /*   left: 15%; */
    color: red;
    font-weight: 700;
    font-size: 1vw
}

.error-message-achternaam {
    position: absolute;
    top: 50.5%;
    left: 50.5%;
    color: red;
    font-weight: 700;
    font-size: 1vw
}

.error-message-mail {
    position: absolute;
    top:    58.5%;
     /* left: 15%; */
    color: red;
    font-weight: 700;
    font-size: 1vw;
    z-index: 999
}

.error-message-tel {
    position: absolute;
    top: 59%;
     /* left: 15%; */
     color: red;
    font-weight: 700;
    font-size: 1vw;
}
/*
dit is voor als er geen fouten zijn met de namen
*/

.geen-fout-naam-mail {
    top: 61%;
}

.geen-fout-naam-tel {
    top: 74%;
}

.alleen-tel-fout {
    top: 61%;
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

    .lijn-10 {
        margin-top: 2.4vw !important;
    }

    .container-inhoud-witte-container-6 {
        padding-top: 5vw!important;
        padding-bottom: 5vw!important;
        padding-left: 5vw!important;
        padding-right: 5vw!important;
        
    }

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

    .prijzen-prijs-bol {
        width: 12.5%!important;
    }


    .prijzen-prijs-ps {
        width: 14%!important;
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
      height: 230vw;
      left: 0;
      margin: 0 auto!important
    }

    .checkbox-foutmelding-wit {
      height: 271vw;
    }

    .checkbox-fout {
      text-align: left;
      padding-left: 19.8vw !important;
      padding-right: 8.9vw !important;
      font-size: 4.1vw;
    }

    .foutmelding-checkbox-cta {
      top: 113vw!important;
    }


   input[type=checkbox] {
        accent-color: white !important; /* Accent kleur voor compatibiliteit */
        filter: invert(40%) hue-rotate(30deg) brightness(1.4); /* Huidige filter */
        width: 1.5vw; /* Zorg dat het de juiste breedte heeft */
        height: 1.5vw; /* Maak het vierkant door dezelfde hoogte te gebruiken */
        border-radius: 0 !important; /* Zorg dat de hoeken vierkant zijn */
        -webkit-appearance: none; /* Verwijder standaard Webkit-styling */
        appearance: none; /* Verwijder standaard checkbox-styling */
        background-color: white; /* Maak de checkbox wit als standaard */
        transition: background-color 0.3s ease; /* Voeg een overgang toe */
        top: -13vw!important;
    }

    /* Styling wanneer de checkbox is aangevinkt */
    input[type=checkbox]:checked {
      filter: invert(70%) hue-rotate(30deg) brightness(1.4);
       content: \2713;

    }

    input[type=checkbox]::after {
      content: \2713;
      font-size: 1.8vw;
      filter: invert(70%) hue-rotate(30deg) brightness(1.4);
      position: relative;
      bottom: 1.3px;

    }

    .safari input[type=checkbox] {
      scale:  4!important;
      top: -13vw!important;
    }



input[type="checkbox"]:checked::after {
  content: '\2713'; /* Unicode voor het vinkje */
  display: block; /* Vinkje tonen als de checkbox is aangevinkt */
}

    /* Algemene styling voor de checkbox container */
    .checkbox {
        position: relative;
        bottom: 15vw;
        left: 3vw;
        scale: 3;
        margin-right: 2vw !important;
        margin-top: 1% !important;
        border-radius: 0 !important; /* Zorg dat het vierkant blijft */
    }

    .witte-container-footer {
        font-size: 4.1vw;
        margin-top: 3vw !important;
        text-align: start;
        padding-left: 5vw!important;
    }

    


    .safari .checkbox {
      position: relative!important;
      top: 0!important;
    }

    .gefeliciteerd,
    .jij-maakt-nu-kans {
        font-size: 7vw;
    }

    .bereiken {
        font-size: 5.8vw;    
        margin-top: 2.4vw!important;
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
        width: 98.1%!important;
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
        top: 73vw;
        
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

    .text-check {
      width: 50vw;
      margin-left: 11vw !important;
      margin-top: -16vw !important;
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
        height: 365vw!important;
        width: 100%!important;
    }

    .lijn-sectie-2 {
        margin-top: 0!important;
        margin-bottom: 2vw!important;
    }

    .langer-maken-error {
        height: 250vw!important;
    }

    .error-langer-maken-achtergrond {
        height: 363vw!important;
    }



    .container-afbeeldingen-en-prijs-mobiel-6 {
        margin-top: -10vw!important;
    }

    .gekozen-prijs {
        height: 50px!important;
    }

    #container-prijzen-met-prijzen {
        margin-top: 56vw!important;
    }

    .pijl-pagina-6 {
        display: none;
    }

}






</style>