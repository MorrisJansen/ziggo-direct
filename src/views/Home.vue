<script>
export default {
    mounted() {
        // Functie om te detecteren of de browser Safari is
        const isSafari = () => {
            const ua = navigator.userAgent;
            const safari = ua.includes('Safari') && !ua.includes('Chrome');
            console.log('Is Safari detected?', safari);
            return safari;
        };

        if (isSafari()) {
            document.body.classList.add('safari');
            console.log('Safari class added to body'); 
        } else {
            console.log('Not Safari');
        }
    },
    methods: {
        goToPage1() {
            this.$router.push({ name: 'page1' });
        }
    }
}
</script>














<template>
    <div class="overkoepelende-container-home">





        <!-- navbar -->
      <div class="container-navbar">
        <div class="afbeelding-1-navbar">
          <img src="/public/meervoordeel-nav.svg" alt="meervoordeel">
        </div>
  
        <div class="afbeelding-2-navbar">
          <img src="/public/turstpilot-nav.svg" alt="trustpilot">
        </div>
  
        <div class="afbeelding-3-navbar">
          <img src="/public/ziggo-nav.png" alt="ziggo">
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




            <div class="container-afbeelding-home">
                <img class="pijl-naar-afbeelding" src="/public/pijl-naar-afbeelding.svg" alt="">
                <img class="afbeelding-prijzen" src="/public/afbeelding-home-desk.png" alt="">
            </div>


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
    height: 50rem;
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



.pijl-naar-afbeelding {
    position: relative;
    top: -800px;
    right: -65px;
    width: 7vw;
    z-index: 1;
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










/* Basis styling voor 1920px en groter */
.pijl-naar-afbeelding {
    position: relative;
    transform: translate(65px, -800px) scale(1);
    width: 7vw;
    z-index: 1;
    transition: transform 0.3s ease;
}

.container-afbeelding-home {
    width: 50vw;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 45%!important;
    position: relative;
    bottom: 13%;
    transition: transform 0.3s ease;
}

.container-afbeelding-home img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    transform: scale(1);
    transition: transform 0.3s ease;
}



/* Media queries voor schermen kleiner dan 1920px */
@media (max-width: 1740px) {
    .pijl-naar-afbeelding {
        transform: translate(26px, -20px) scale(0.85)!important;
        width: 6vw;
    }

    .container-afbeelding-home {
        width: 55vw;
        margin-left: 40%!important;
        bottom: 12%;
    }

    .container-afbeelding-home img {
        transform: translate(20px, -66px) scale(0.85);
    }
}

@media (max-width: 1620px) {
    .pijl-naar-afbeelding {
        transform: translate(65px, -42px) scale(0.8)!important;
        width: 5vw;
    }
}


@media (max-width: 1520px) {
    .pijl-naar-afbeelding {
        transform: translate(75px, -52px) scale(0.75)!important;
        width: 5vw;
    }

    .achtergrond-sectie-1 {
        height: 42rem;
    }
}

@media (max-width: 1470px) {
    .pijl-naar-afbeelding {
        transform: translate(75px, -10px) scale(0.75)!important;
    }

    .afbeelding-prijzen {
        transform: translate(20px, -100px) scale(0.85)!important;

    }

}


@media (max-width: 1340px) {
    .pijl-naar-afbeelding {
        transform: translate(66px, 38px) scale(0.75)!important;

    }
}

@media (max-width: 1240px) {
    .pijl-naar-afbeelding {
        transform: translate(66px, 95px) scale(0.75)!important;

    }
}

@media (max-width: 1200px) {
    .pijl-naar-afbeelding {
        transform: translate(50px, 145px) scale(0.75)!important;

    }
    .achtergrond-sectie-1 {
        height: 34rem;
    }
}


@media (max-width: 1150px) {
    .pijl-naar-afbeelding {
        transform: translate(55px, 110px) scale(0.75)!important;

    }
}

@media (max-width: 1100px) {
    .pijl-naar-afbeelding {
        transform: translate(40px, 136px) scale(0.75)!important;

    }
}

@media (max-width: 1040px) {
    .pijl-naar-afbeelding {
        transform: translate(40px, 159px) scale(0.75)!important;

    }
}


@media (max-width: 980px) {
    .pijl-naar-afbeelding {
        transform: translate(40px, 187px) scale(0.75)!important;

    }
    .achtergrond-sectie-1 {
        height: 27rem;
    }
}


@media (max-width: 920px) {
    .pijl-naar-afbeelding {
        transform: translate(40px, 215px) scale(0.75)!important;

    }
}


@media (max-width: 870px) {
    .pijl-naar-afbeelding {
        transform: translate(30px, 245px) scale(0.75)!important;

    }
}


@media (max-width: 790px) {
    .pijl-naar-afbeelding {
        transform: translate(25px, 285px) scale(0.75)!important;

    }

    .achtergrond-sectie-1 {
        height: 22rem;
    }
}


@media (max-width: 720px) {
    .pijl-naar-afbeelding {
        transform: translate(20px, 300px) scale(0.75)!important;

    }
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
  