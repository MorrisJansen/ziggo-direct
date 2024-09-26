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
        goToPage1() {
            this.$router.push({ name: 'pagina1' });
        }
    }
}
</script>














<template>
    <div class="overkoepelende-container-home">





        <!-- navbar -->
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
                            Hoe werkt het
                        </div>
    
                        <div class="stap1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="70%" viewBox="0 0 56 56" fill="none">
                                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                                <text x="28" y="36" font-family="Arial" font-size="24" fill="white" text-anchor="middle">1.</text>
                            </svg>
                              <span class="stap-text">Kies jouw prijs</span>                
                        </div>


                        <div class="stap1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="70%" viewBox="0 0 56 56" fill="none">
                                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                                <text x="28" y="36" font-family="Arial" font-size="24" fill="white" text-anchor="middle">2.</text>
                            </svg>                            
                              <span class="stap-text">Beantwoord de vraag</span>                
                        </div>

                        <div class="stap1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="70%" viewBox="0 0 56 56" fill="none">
                                <circle cx="27.9047" cy="27.9047" r="27.9047" fill="#49B7AC"/>
                                <text x="28" y="36" font-family="Arial" font-size="24" fill="white" text-anchor="middle">3.</text>
                            </svg>                            
                              <span class="stap-text">Controleer of jouw postcode in aanmerking komt</span>                
                        </div>


                        <button @click="goToPage1" class="cta-home">
                            <span class="cta-text">Doe nu mee</span>
                            <span class="cta-pijl">&#8594;</span>
                        </button>
                        
                        

                    </div>

                </div>
            </div>



            <div class="container-afbeeldingen-en-prijs">
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
      

                <img class="pijl-naar-afbeelding" src="/public/pijl-naar-afbeelding.svg" alt="">
                <img class="afbeelding-prijzen" src="/public/afbeelding-home-desk.png" alt="">
              </div>

        </div>








        <div class="inhoud-sectie-2">

            <div class="container-meer-over-meer-voordeel">
                <div class="meer-over-meer-voordeel">
                    Meer over MeerVoordeel
                </div>

                <img class="logo-mv" src="/public/meervoordeel-nav.svg" alt="meervoordeel">
                <img class="logo-ziggo" src="/public/ziggo-logo.png" alt="ziggo">


            </div>

            <hr class="lijn-sectie-2">
        </div>
      </div>


      <div class="inhoud-sectie-3">
        <div class="container-text-sectie-3">
            <div class="text-sectie-3">
                MeerVoordeel biedt diverse kortings- en voordeelprogramma's aan, aan consumenten in Nederland. In samenwerking met Ziggo, een van de grootste aanbieders van kabeltelevisie, internet en telefoniediensten in Nederland, biedt MeerVoordeel speciale voordelen en kortingen aan nieuwe Ziggo-klanten.
            </div>
    
            <div class="dikke-text-sectie-3">
                Onder andere door deze samenwerking kunnen wij jou mooie acties zoals deze bieden.
            </div>
        </div>



        <div class="afbeelding-sectie-3">
            <img class="afbeelding-sectie-3-2" src="/public/afbeelding-sectie-3.png" alt="">
        </div>

      </div>


      <div class="footer-container">
      <hr class="lijn-sectie-2">
        <div class="footer-text">
            *Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br> Actievoorwaarden van toepassing.
        </div>
      </div>







    </div>
  </template>
  
  
  <style>
  * {
    box-sizing: border-box;
    padding: 0!important;
    margin: 0!important;
  }

  body {
    display: block;
    font-family: 'DM Sans', sans-serif;
  }
  
  .overkoepelende-container-home {
    width: 100vw;
    height: auto;

  }





  
  .container-navbar {
    width: 100vw;
    height: 9rem;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 10%!important;
    top: 0!important;
}
  
  .afbeelding-1-navbar,
  .afbeelding-2-navbar {
    margin-right: 30px!important;
  }

  .afbeelding-1-navbar img,
  .afbeelding-2-navbar img,
  .afbeelding-3-navbar img {
      height: 4rem;
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
    height: 30vw;
    flex-shrink: 0;
    border-radius: 0.75rem;
    background: #FFF;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    display: flex;
    margin-top: 5%!important;
    margin-left: 7%;
    padding-left: 5%!important;
    padding-top:   4%!important;
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
    margin-bottom: 5%!important;
    position: relative;
    right: 8.7vw;
}



.stap1 {
    display: flex;
    align-content: start;
    margin-top: 0%!important;
    width: 121%;
    height: 4rem!important;
    
}

.stap-text {
    color: #072249;
    font-family: "DM Sans";
    font-size: 1vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-content: center!important;
    justify-content: center;
    padding-top: 1%!important;
    padding-left: 5%!important;
    text-align: start;
}



.cta-home {
    display: inline-flex;
    height: 15%;
    width: 60%;
    align-items: center;
    justify-content: space-evenly;
    flex-shrink: 0;
    border-radius: 2.5rem;
    background-color: #F48C02;
    margin-top: 11%!important;
    margin-left: 50%!important;
    margin-bottom: 10%!important;
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
    right: 98%;
    top: 33vw !important;
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

.container-afbeeldingen-en-prijs {
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 50%!important;
    position: relative;
    bottom: 30%;
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

.logo-mv {
    margin-left: 47vw!important;
}

.logo-ziggo {
    margin-left: 2vw!important;
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
}

.footer-container {
    position: relative;
    top: 15vw;
    padding-bottom: 2vw!important;
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



@media (max-width: 700px){
    * {
        display: none;
    }
  }


























































.safari .cta-home {
    margin-right: 50%!important;
    background-color: red;
}

  </style>
  