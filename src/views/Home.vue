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
        };
    },
    mounted() {
        // Controleer of de gebruiker Safari gebruikt
        const isSafari = () => {
            const ua = navigator.userAgent;
            const safari = ua.includes('Safari') && !ua.includes('Chrome');
            return safari;
        };

        if (isSafari()) {
            document.body.classList.add('safari');
        }

        // Haal query parameters op voor subid en pubid
        const queryParams = new URLSearchParams(window.location.search);
        const subid = queryParams.get('subid');
        const pubid = queryParams.get('pubid');

        // Update Vuex store met subid en pubid indien aanwezig
        if (subid) {
            this.$store.dispatch('updateSubId', subid);
            console.log('subid:', subid);
        }
        if (pubid) {
            this.$store.dispatch('updatePubId', pubid);
            console.log('pubid:', pubid);
        }
    },
    methods: {
        openPrivacyPolicy() {
            this.modalUrl = 'https://leadgen.republish.nl/api/content/privacy-meervoordeel'; // URL voor privacyverklaring
            this.isModalVisible = true; // Maak de modal zichtbaar
        },
        openActievoorwaarden() {
            this.modalUrl = 'https://leadgen.republish.nl/api/content/actievoorwaarden-meervoordeel'; // URL voor actievoorwaarden
            this.isModalVisible = true; // Maak de modal zichtbaar
        },
        closeModal() {
            this.isModalVisible = false; // Sluit de modal
        },
        // Functie om naar de volgende pagina te navigeren
        goToPage1() {
            this.$router.push('pagina1'); // Zorg ervoor dat de route naar de volgende pagina hier klopt
        },
    },
};
</script>











<template>
    <div class="overkoepelende-container-home">





        <!-- navbar -->
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
  



      <!-- sectie1 -->
      <div class="container-sectie-1">
        <div class="achtergrond-sectie-1">


            <div class="inhoud-sectie-1">
                    <div class="maak-kans">
                        Maak kans op <br> 1 van de 3 prijzen!
                    </div>


                <div class="container-stappenplan">
                    <div class="container-inhoud-stappenplan">
                        <div class="hoe-werkt-het">
                            Hoe werkt het?
                        </div>
    
                        <div class="stap1">
                            <svg class="stap1-svg" xmlns="http://www.w3.org/2000/svg" width="10%" height="90%" viewBox="0 0 56 56" fill="none">
                                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                                <text x="28" y="36" font-family="DM sans" font-weight="700" font-size="24" fill="white" text-anchor="middle">1.</text>
                            </svg>
                              <span class="stap-text">Kies jouw prijs</span>                
                        </div>


                        <div class="stap1">
                            <svg class="stap1-svg" xmlns="http://www.w3.org/2000/svg" width="10%" height="90%" viewBox="0 0 56 56" fill="none">
                                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                                <text x="28" y="36" font-family="DM sans" font-weight="700" font-size="24" fill="white" text-anchor="middle">2.</text>
                            </svg>                            
                              <span class="stap-text">Beantwoord de vraag</span>                
                        </div>

                        <div class="stap1">
                            <svg class="stap1-svg" xmlns="http://www.w3.org/2000/svg" width="10%" height="90%" viewBox="0 0 56 56" fill="none">
                                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                                <text x="28" y="36" font-family="DM sans" font-weight="700" font-size="24" fill="white" text-anchor="middle">3.</text>
                            </svg>                            
                              <span class="stap-text" id="stap-text">Controleer of jouw postcode <br class="mobiel"> in aanmerking komt</span>                
                        </div>


                        <button @click="goToPage1" class="cta-home" id="cta-home">
                            <span class="cta-text">Doe nu mee</span>
                            <span class="cta-pijl">&#8594;</span>
                        </button>
                        
                        

                    </div>

                </div>
            </div>


            <!-- dit is voor desktop -->
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

              <div class="container-afbeeldingen-en-prijs-mobiel-home mobiel">
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








        <div class="inhoud-sectie-2">

            <div class="container-meer-over-meer-voordeel">
                <div class="meer-over-meer-voordeel">
                    Over MeerVoordeel
                </div>

            <div class="container-logos-sectie-3-mobiel">
                <img class="logo-mv" src="/public/MV.svg" alt="meervoordeel">
                <img class="logo-ziggo" src="/public/ziggo-logo.png" alt="ziggo">
            </div>

            <div class="container-logos">
                <img class="logo-mv desktop" src="/public/MV.svg" alt="meervoordeel">
                <img class="logo-ziggo desktop" src="/public/ziggo-logo.png" alt="ziggo">
            </div>



            </div>

            <hr class="lijn-sectie-2" id="lijn-sectie-2">
        </div>
      </div>


      <div class="inhoud-sectie-3">
        <div class="container-text-sectie-3">
            <div class="text-sectie-3">
                MeerVoordeel is een onafhankelijke onderneming en is altijd op zoek naar de beste deals voor jou als consument! MeerVoordeel voldoet aan de keurmerk-code en is een gecertificeerd lid van Webshop Keurmerk. MeerVoordeel is een handelsnaam van Direct Business en staat geregistreerd onder KvK nummer 6311709.            </div>

            <div class="dikke-text-sectie-3">
                Altijd een unieke deal 
            </div>
            <div class="text-sectie-3-deel-2n text-sectie-3">
                Wij zijn altijd op zoek naar de beste deals voor jou als consument. Dit kan bijvoorbeeld een extra korting zijn maar ook voordelen als cashbacks, cadeaubonnen of andere mooie cadeaus. Zo kan je er zeker van zijn, dat je via MeerVoordeel.nl de beste aanbiedingen van onze partners krijgt aangeboden.            
            </div>

        </div>




        <div class="afbeelding-sectie-3">
            <img class="afbeelding-sectie-3-2" src="/public/afbeelding-sectie-3.png" alt="">
            <img class="afbeelding-sectie-3-mobiel" src="/public/afbeelding-sectie-3-mobiel.png" alt="">
        </div>

      </div>


      <div class="footer-container">
        <div class="container-lijn-footer">
            <hr class="lijn-2-footer-mobiel" id="lijn-2-footer-mobiel">

        </div>
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
  </template>
  
  
  <style>


  .footer-link {
    color: #c1c1c1;
    text-decoration: none;
  }

  #footer-link-underline  {
    text-decoration: underline;
  }

  #footer-link-underline:hover {
    cursor: pointer;
  }

  .footer-link:hover {
    color: #C1C1C1;
  }


  .container-logos {
    width: 25vw;
    display: flex;
    position: relative;
    top: 31vw;
    left: 5vw;
    z-index: 99;
  }

  html {
    background-color: white!important;
  }




  button, input, textarea {
    outline: none!important;
}

body {
    overflow-x: hidden;
}


  * {
    box-sizing: border-box;
    padding: 0!important;
    margin: 0!important;
  }

  button:hover {
    border: none;
  }

  button:focus {
    border: none
  }

  body {
    display: block;
    font-family: 'DM Sans', sans-serif;
  }
  

  .mobiel {
    display: none;
  }



  .overkoepelende-container-home {
    width: 100vw;
    height: auto;

  }



  .container-sectie-1,
  .inhoud-sectie-2,
  .inhoud-sectie-3,
  .footer-container {
    background-color: white;
  }
  
  



  
  .container-navbar {
    width: 100vw;
    height: 7vw;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 10%!important;
    top: 0!important;
    background-color: white
}
  
  .afbeelding-1-navbar,
  .afbeelding-2-navbar {
    margin-right: 30px!important;
  }

  .afbeelding-1-navbar img,
  .afbeelding-2-navbar img,
  .afbeelding-3-navbar img {
      height: 4vw;
      object-fit: contain;
  }
  
  
  .afbeelding-3-navbar {
    position: absolute;
    right: 15%;
  }
  
  
  


  .achtergrond-sectie-1 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    height: 45vw;
  }

  .inhoud-sectie-1 {
    padding-left: 7%!important;
    height: 35%!important;
  }




  .maak-kans {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 4.3vw;
    font-style: normal;
    font-weight: 600;
    line-height: 5vw;
    display: flex;
    padding-top: 3%!important;
    text-align: left;
  }


.container-stappenplan {
    width: 40%;
    height: 31vw;
    flex-shrink: 0;
    border-radius:  0.75vw;
    background: #FFF;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    display: flex;
    margin-top: 5%!important;
    margin-left: 7%;
    padding-left:   6.5%!important;
    padding-right: 6.5%!important;
    padding-top:   4.7%!important;
}

.container-inhoud-stappenplan {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hoe-werkt-het {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.8vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    height: 50px;
    text-align: start;
    margin-bottom: 6%!important;
    position: relative;
    right: 8.5vw;
}



.stap1 {
    display: flex;
    align-content: start;
    margin-top: 0%!important;
    width: 121%;
    height: 3.7vw!important;
    
}

.stap-text {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-content: center !important;
    justify-content: center;
    padding-top: 2% !important;
    padding-left: 5% !important;
    margin-right: -3vw!important;
    text-align: start;
}




#stap-text {
    padding-top: 0.5%!important
}


.cta-home {
    display: inline-flex;
    height: 15%;
    width: 55%;
    align-items: center;
    justify-content: space-evenly;
    flex-shrink: 0;
    border-radius: 35vw;
    background-color: #F48C02;
    margin-top: 11%!important;
    margin-left: 57%!important;
    margin-bottom: 10%!important;
}

.cta-home:hover {
    cursor: pointer!important;
}

#cta-home:hover {
    cursor: pointer;
}

.cta-text {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.cta-pijl {
    color: white;
    font-size: 1.2vw;
}



.container-afbeeldingen-en-prijs {
    width: 50vw; /* of een andere waarde afhankelijk van je ontwerp */
    max-width: 50vw;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 28%;
    z-index: 1;
}




.container-afbeeldingen-en-prijs {
    width: 50vw;
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 50%!important;
    position: relative;
    bottom: 30%;
    display: flex;
    justify-content: center;
}

.afbeelding-prijzen {
    width: 100%;
    height: auto;
    max-width: 50vw;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
}




.container-afbeelding-home {
    width: 50vw;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 45%!important;
    position: relative;
    bottom: 13%
}


.container-afbeelding-home img {
    max-width: 100%;
    height: auto;
}

.afbeelding-prijzen {
    z-index: 1;
    position: absolute;
    right: 6%;
    top: 5vw;
}

.pijl-naar-afbeelding {
    position: absolute;
    width: 7vw;
    height: auto;
    z-index: 1;
    right: 97%;
    top: 5vw;
  }


.prijzen-prijs-tv {
    z-index: 99 !important;
    position: absolute;
    right: 26%;
    top: 4vw!important;
    width: 15%;
    transform: rotate(8deg);
}

.prijzen-prijs-bol {
    z-index: 99 !important;
    position: absolute;
    right: 50%;
    top: 30.8vw !important;
    width: 15%;
    transform: rotate(-8deg);
}

.prijzen-prijs-ps {
    z-index: 99 !important;
    position: absolute;
    right: 33%;
    top: 35vw !important;
    width: 15%;
    transform: rotate(8deg);
}




.overkoepelende-container-home {
    width: 100vw;
    height: auto;
  }


.afbeeldingen-prijzen{
    width: 100%;
    max-width: 50%!important;
    height: auto;
    object-fit: contain;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
}




.inhoud-sectie-2 {
    height: 19vw;
    width: 100vw;
    position: relative;
    top: 20vw;
}


.container-meer-over-meer-voordeel {
    padding-left: 10%!important;
    display: flex;
    height: 3vw;
    text-align: left;
}


.meer-over-meer-voordeel {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.7vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
}

.safari .logo-mv {
    margin-right: 2vw!important;
    margin-left: 45vw!important;
}

.logo-mv {
    margin-left: 47vw!important;
    margin-right: 3vw!important;
}

.logo-ziggo {
    margin-left: -1vw!important;
    width: 20%;
}

.lijn-sectie-2 {
    width: 85vw;
    margin: 0 auto!important;
    opacity: 0.3;
    margin-top: 2vw!important;
}

.inhoud-sectie-3 {
    position: relative;
    top: 8vw;
    margin-left: 10%!important;
    display: flex;
}



.text-sectie-3 {
    width: 35vw;
    position: relative;
    top: 2vw;
    text-align: left;
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.1vw;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2vw; 
}

.dikke-text-sectie-3 {
    width: 35vw;
    margin-top: 1.5vw!important;
    font-weight: 700;
    position: relative;
    top: 2vw;
    text-align: left;
    color: #072249;
    font-family: "DM Sans";
    font-size: 1.1vw;
    font-style: normal;
    line-height: 2.2vw;
    
}


.afbeelding-sectie-3-2 {
    width: 33vw;
    position: relative;
    left: 14.6vw;
    top: 2.4vw;
}

.footer-container {
    position: relative;
    top: 15vw;
    padding-bottom: 2vw!important;
    background-color: white;
}

.footer-text {
    margin-top: 2vw!important;
    color: #C1C1C1;
    text-align: center;
    font-family: "DM Sans";
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4vw;
}

.lijn-2-footer-mobiel {
    width: 85vw;
    margin: 0 auto!important;
    opacity: 0.3;
}


/*
@media (max-width: 600px){
    * {
        display: none;
    }
  } 
    
    @media (max-width: 800px) and (min-width: 499px) {
    #cta-home {
        margin-left: 20%!important;
    }
}
  \
  */






@media (min-width: 500px) {
    .afbeelding-prijzen-mobiel {
        display: none;
      }
      .afbeelding-sectie-3-mobiel {
        display: none;
      }

      .container-logos-sectie-3-mobiel {
        display: none;
      }

}




@media (max-width: 499px) {

    body {
        background-color: white!important;
    }

    .desktop {
        display: none!important;
    }

    .container-navbar {
        height: 20vw;
        display: flex;
        justify-content: space-evenly;
        padding: 0 !important;
        margin: 0 !important;
        background-color: white;
    }

    .afbeelding-1-navbar,
    .afbeelding-2-navbar,
    .afbeelding-3-navbar {
        padding: 0 !important;
        margin: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        position: static!important;
        height: 20vw!important;
    }

    .afbeelding-1-navbar img,
    .afbeelding-2-navbar img,
    .afbeelding-3-navbar img {
        height: 12vw!important;
        padding:    1vw 0 !important;

    }


    .afbeelding-2-navbar {
        order: 2; /* Zet afbeelding 2 als laatste */
    }

    .afbeelding-3-navbar {
        order: 1; /* Zet afbeelding 3 in de plaats van afbeelding 2 */
    }


    .achtergrond-sectie-1 {
        height: 256vw;
    }


    .inhoud-sectie-1 {
        padding: 0% 5%!important
    }

    .maak-kans {
        color: #FFF;
        font-family: "DM Sans";
        font-size: 9vw;
        font-style: normal;
        font-weight: 600;
        line-height: 9vw;
        display: flex;
        justify-content: center;
        padding-top: 5% !important;
        text-align: center;
        width: 90vw;
    } 

    .container-stappenplan {
        width: 100%!important;
        height: auto;
        display: flex;
        justify-content: center;
        padding: 0!important;
        margin-top: 10!important;
    }

    .container-inhoud-stappenplan {
        width: 100%!important
    }

    .hoe-werkt-het {
        color: #072249;
        font-family: "DM Sans";
        font-size: 1.5625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        text-align: start;
        margin-top: 10%!important;    
        margin-bottom: 0!important;
    }





    .stap1 {
        width: 100%!important;
        padding: 0 9%!important;
        margin-bottom: 2%!important;
        display: flex;
        align-items: center;
        height: 16vw!important;
    }
    
    .stap1-svg {
        width: 40px!important;
        height: 40px!important;
        flex-shrink: 0;
    }
    
    .stap-text {
        font-size: 4vw;
        white-space: nowrap;
        padding-left: 4vw!important;
    }
    
    .mobiel {
        display: flex;
    }

    .cta-home {
        width: 80%;
        margin-left: 0!important
    }

    .cta-text {
        font-size: 5.5vw
    }

    .cta-pijl {
        font-size: 6vw
    }
    

    .container-prijzen-met-prijzen {
        margin-top: 47vw !important;
        position: relative; 
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
    }
    


    .container-afbeeldingen-en-prijs-mobiel {
        height: 100%;
        object-fit: contain;
        position: relative;
        bottom: 30%;
        display: flex;
        justify-content: center;
    }

    .container-afbeeldingen-en-prijs-mobiel-home {
        height: 100%;
        object-fit: contain;
        position: relative;
        bottom: 30%!important;
        display: flex;
        justify-content: center;
    }


    

    .afbeelding-prijzen-mobiel {
        width: 90vw;
        scale: 0.9;
        position: relative;
        bottom: 7vw;
    }




    .prijzen-prijs-bol {
        position: absolute;
        top: 69vw !important;
        right: 50vw;
        z-index: 100 !important;
        scale: 2;
    }

    .prijzen-prijs-ps {
        position: absolute;
        top: 87vw !important;
        right: 13vw;
        z-index: 100 !important;
        scale: 1.7;
        transform: rotate(-8deg);
    }

    .prijzen-prijs-tv {
        left: 76vw;
        top: 15vw !important;
        z-index: 100 !important;
        scale: 1.7;

    }

    .pijl-naar-afbeelding {
        display: none;
    }

    .afbeelding-prijzen {
        display: none;
    }


    .container-meer-over-meer-voordeel {
        flex-direction: column;
        padding: 0!important;
    }

    .meer-over-meer-voordeel {
        display: flex;
        width: 100%;
        justify-content: start;
        font-size: 6vw;
        padding-left: 7vw!important;
    }

    #lijn-sectie-2 {
        margin-top: 10vw!important;
    }


    .inhoud-sectie-3 {
        display: flex;
        flex-direction: column;
        width: 100vw;
        margin: 0!important;
        justify-content: center!important;
        padding: 0 7%!important
    }

    .text-sectie-3 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 5vw;
        width: 100%;
        line-height: 150%;
        margin-top: 10%!important;
        text-align: start;
    }

    .dikke-text-sectie-3 {
        width: 100%!important;
        display: flex;
        justify-content: center;
        font-size: 5vw;
        line-height: 150%;
        text-align: start;
        font-weight: 700;
        margin-top: 10%!important;
        display: flex;
        width: 100%;
        justify-content: start;
        font-size: 6vw;

    
    }

    .afbeelding-sectie-3 {
        width: 100%;
    }

    .afbeelding-sectie-3-2 {
        display: none;
    }

    .afbeelding-sectie-3-mobiel {
        margin-top: 10%!important;
    }


    .logo-mv,
    .logo-ziggo {
        width: 25%;
        display: flex;
        margin: 0!important;
        padding: 0!important;
        height: 50%;
        object-fit: contain;
        
    }

    .container-logos-sectie-3-mobiel {
        display: inline-flex;
        width: 100vw !important;
        position: relative;
        top: 316vw;
        z-index: 90000;
        justify-content: center;
        padding-bottom: 20vw!important;
    }
    


    .footer-container {
        margin-top: 22vw!important;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .container-lijn-footer {
        padding-bottom: 5vw !important;
        padding-top: 15vw !important;
        }
    
    #lijn-2-footer-mobiel {
        margin-bottom: 5vw!important;
        margin-top: 5vw!important;
        width: 85vw;
        margin: 0 auto!important;
        opacity: 0.3;
        margin-top: 2vw!important;
        height: 1px!important;
    }



    
    .footer-text {
        font-size: 3vw;
        line-height: 170%;
        width: 70%;
        text-align: center;
        padding-bottom: 5vw!important;
    }
    
    .safari .logo-mv {
        margin-left: 0!important;
    }


}

/*

@media (min-width: 500px) and (max-width: 501px) {
    .container-logos-sectie-3-mobiel {
        top: 210vw!important;
    }

    .achtergrond-sectie-1 {
        height: 220vw!important;
    }

    .afbeelding-prijzen-mobiel {
        z-index: 99!important;
        position: relative!important;
        top: 107vw!important;
        right: 27vw!important;
    }


    .prijzen-prijs-tv {
        left: 25vw!important;
        top: 110vw !important;
        z-index: 100 !important;
        scale: 3.5!important;
    }


    .prijzen-prijs-bol {
        left: -2vw!important;
        top: 140vw !important;
        z-index: 100 !important;
        scale: 2.7!important;
    }

    .prijzen-prijs-ps {
        left: 25vw!important;
        top: 110vw !important;
        z-index: 100 !important;
        scale: 3.5!important;
    }
}



*/




















































.safari .cta-home {
    margin-right: 0%!important;
}



.safari .container-logos {
    display: inline-flex;
    width: 25%;
    position: absolute;
    left: 34%;
}

.safari .logo-ziggo {
    width: 20%;
}

.safari .logo-mv {
    width: 30%
}

@media (max-width: 499px) {
    .safari .cta-home {
        margin-right: 0!important;
    }
}

  </style>
  