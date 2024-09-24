
<script>
export default {
    methods: {
    goToPage1() {
        this.$router.push({ name: 'pagina1' }); // Deze naam moet overeenkomen met de naam in de routerconfiguratie
        console.log('werkt het?');
    }
}}

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




            <!-- <div class="container-afbeelding-home">
                <img src="/public/afbeelding-home-desk.png" alt="">
            </div> -->


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
  
  
  
  .container-sectie-1 {
    
  }

  .achtergrond-sectie-1 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    height: 52rem;
  }

  .inhoud-sectie-1 {
    padding-left: 7%!important;
    height: 35%!important;
  }

  .maak-kans {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 5vw;
    font-style: normal;
    font-weight: 600;
    line-height: 5.92631rem;
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
    margin-top: 10%!important;
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
    background: #F48C02;
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






  .container-afbeelding-home {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 45%!important;
    position: relative;
    bottom: 76%;
}

.container-afbeelding-home img {
    max-width: 100%;
    height: auto;
}







  @media (max-width: 700px){
    * {
        display: none;
    }
  }
  </style>
  