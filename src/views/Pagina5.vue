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
        
        setTimeout(() => {
            this.goToPage6();
        }, 1500);
    },
    methods: {
        goToPage6() {
            this.$router.push({ name: 'pagina6' });
        },
        selectOption(optionId) {
            const input = document.getElementById(optionId);
            if (input) {
                input.checked = true;
            }
        }
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


<div class="container-pagina-1">

    <div class="achtergrond-pagina-4">

        <div class="witte-container-pagina-4">

            <div class="container-inhoud-witte-container-pagina-5">


                <div class="jouw-postcode-pagina-5">
                    Jouw postcode is goedgekeurd!
                </div>

                <img class="afbeelding-circle" src="/public/tick-circle.svg" alt="">


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

    <div class="footer-container-2">
        <hr class="lijn-sectie-2-pagina-5">
          <div class="footer-text" id="pagina-5">
              *Meervoordeel.nl is een officiële partner van Ziggo. Deelname mogelijk tot en met 31 juli 2024.<br> Actievoorwaarden van toepassing.
          </div>
    </div>

</div>














</div>
</template>


<style>

.achtergrond-pagina-1 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 45vw;
}


.witte-container-pagina-1 {
    height: 33vw;
    width: 50vw;
    background-color: white;
    position: relative;
    top: 7vw;
    left: 7vw;
    border-radius: 0.75rem;
    box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
    z-index: 2;
}

.container-inhoud-witte-container {
    padding-left: 4vw!important;
    padding-top: 2vw!important;
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
    border-radius: 35px;
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
    border-radius: 35px;
    display: inline-flex;
    align-items: center;
    padding-left: 1vw!important;
    cursor: pointer; 
}








.input-radio {
    display: none; 
}

.input-radio:checked + label::before {
    background-color: #F48C02; 
}

.container-antwoord-optie {
    cursor: pointer; 

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



.cta-pagina-1 {
    display: inline-flex;
    height: 4vw;
    width: 15vw;
    align-items: center;
    justify-content: space-evenly;
    flex-shrink: 0;
    border-radius: 2.5rem;
    background-color: #F48C02;
    margin-top: 1%!important;
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


.jouw-postcode-pagina-5 {
    color: #072249;
    text-align: center;
    font-family: "DM Sans";
    font-size: 1.9vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
}

.container-inhoud-witte-container-pagina-5 {
    padding: 5vw 5vw!important;
}

.afbeelding-circle {
    margin-top: 2vw!important;
    width: 7vw!important
}

.lijn-sectie-2-pagina-5 {
    width: 85vw;
    margin: 0 auto!important;
    opacity: 0.3;
    margin-top: 2vw!important;
}


@media (max-width: 499px) {
    .jouw-postcode-pagina-5 {
        padding: 2vw!important;
        font-size: 7vw
    }

    .afbeelding-circle {
        width: 32vw!important;
        margin-top: 10vw!important;
    }

    .lijn-sectie-2-pagina-5 {
        margin-top: 7vw!important;
    }

    #pagina-5 {
        width: 80%!important;
    }
}



</style>