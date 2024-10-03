<script>
export default {
    data() {
        return {
            gekozenPrijs: '',
            postcode: '',
            postcodeError: ''
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

    <div class="achtergrond-bedankt">

        <div class="witte-container-bedankt">

              
            <div class="container-bedankt">
                <div class="bedankt">Bedankt!</div>
                <div class="contact">Wij nemen spoedig contact met u op.</div>
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
                  *Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br> Actievoorwaarden van toepassing.
              </div>
        </div>


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
        height: 40vw;
        width: 90%;
        margin: 0 auto !important;
        justify-content: center;
        display: flex;
        margin: o auto !important;
        justify-content: center;
        left: 0 !important;
    }

    .achtergrond-bedankt {
        height: 161vw!important;
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