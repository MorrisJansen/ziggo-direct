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
            postcode: '',
            postcodeError: '',
            uniqueConversionId: uuidv4()
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

    },
    computed: {


        // pixelUrl() {
        //     return `https://republish.prijzenpakket.nl/m/6337/9d85475ce4f0/?event=7417&unique_conversion_id=${this.uniqueConversionId}`;

        // }
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
  <!-- <img 
  referrerpolicy="no-referrer-when-downgrade" 
  :src="pixelUrl" 
  style="width: 1px; height: 1px; border: 0px;" 
  alt="tracking-pixel"
/> -->



<div class="container-pagina-1">


    <div class="achtergrond-bedankt ">

        <div class="witte-container-bedankt">

              
            <div class="container-bedankt">
                <div class="bedankt" style="padding-top: 4vw!important;">Bedankt voor je deelname!</div>
                <div class="contact" style="padding-left: 7vw!important; padding-right: 7vw!important;">Je maakt nu kans op een van de drie prijzen. MeerVoordeel neemt zo snel mogelijk contact met je op over een exclusief aanbod. Win jij één van de prijzen? Dan bellen we je om het goede nieuws persoonlijk door te geven.
                </div>
            </div>

             


        </div>



        <div class="container-afbeeldingen-en-prijs-dank desktop" id="container-afbeeldingen-en-prijs-bedankt">
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

.achtergrond-bedankt {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 43vw!important;
}


.bedankt {
    font-size: 2.4vw;
    color: #072249;
    text-align: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    padding-top: 7vw!important;
}

.contact {
    font-size: 1.2vw;
    color: #072249;
    text-align: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    margin-top: 2vw!important;
}


.container-afbeeldingen-en-prijs-dank {
    bottom: 6%!important;
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 50%!important;
    position: relative;
    left: 2%;
    display: flex;
    justify-content: center;
    z-index: 109;
    margin-bottom: 8vw!important;
}






.witte-container-bedankt {
    height: 22vw;
    width: 50vw;
    background-color: white;
    position: relative;
    top: 7vw;
    left: 7vw;
    border-radius: 0.75rem;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    z-index: 999;
}



@media (max-width: 499px) {
    .bedankt {
        font-size: 7vw;
    }

    .contact {
        font-size: 4.2vw;
    }

    .witte-container-bedankt {
        height: 78vw;
        width: 90%;
        margin: 0 auto !important;
        justify-content: center;
        display: flex;
        margin: o auto !important;
        justify-content: center;
        left: 0 !important;
    }

    .achtergrond-bedankt {
        height: 210vw!important;
    }

    .container-prijzen-met-prijzen {
        z-index:    999;
    }

    .container-bedankt {
        display: flex;
        flex-direction: column;
    }
}





</style>