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
    data() {
        return {
            gekozenPrijsId: null,
            foutmelding: false,
            opties: {
                'optie-1': { id: 5284, name: 'SAMSUNG TV' },
                'optie-2': { id: 5287, name: 'Playstation 5' },
                'optie-3': { id: 5290, name: 'Bol.com cadeaubon' }
            }
        };
    },
    methods: {
        gaNaarPagina2() {
            if (!this.gekozenPrijsId) {
                this.foutmelding = true;
                return;
            }

            const selectedOption = this.opties[this.gekozenPrijsId];
            if (selectedOption) {
                // Sla de gekozen prijs op in Vuex store
                this.$store.dispatch('updateGekozenPrijsId', selectedOption.id);
                this.$store.dispatch('updateGekozenPrijsOptie', selectedOption.name);
                console.log('Geselecteerde prijs ID:', selectedOption.id);
                console.log('Geselecteerde prijs naam:', selectedOption.name);
            }

            // Navigeer naar pagina2
            this.$router.push({ name: 'pagina2' });
        },
        selecteerOptie(optionId) {
            const input = document.getElementById(optionId);
            if (input) {
                input.checked = true;
                this.gekozenPrijsId = optionId;
                this.foutmelding = false;
            }
        }
    },
    computed: {
        // Haal de gekozen prijs uit de Vuex store
        gekozenPrijsId() {
            return this.$store.getters.getGekozenPrijsId;
        },
        gekozenPrijsOptie() {
            return this.$store.getters.getGekozenPrijsOptie;
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
        <div class="achtergrond-pagina-1">
            <div class="witte-container-pagina-1">
                <div class="container-inhoud-witte-container" id="container-inhoud-witte-container">

                    <!-- <div class="container-stap-zoveel-en-pijl"> -->
                        <div class="stap-pagina-1">
                            Stap 1 van 3
                        </div>
                        <!-- <div class="pijl-vorige-1">
                            <a class="vorige-1" href="/">
                                &#8592; vorige

                            </a>

                        </div>
                    </div> -->


                    <div class="vraag-pagina-1">
                        Vertel ons welke prijs je wilt winnen: 
                    </div>

                    <div class="container-antwoorden-pagina-1">
                        <div id="container-antwoord-optie-id" class="container-antwoord-optie" @click="selecteerOptie('optie-1', 'SAMSUNG TV')">
                            <input class="input-radio" type="radio" id="optie-1" name="antwoord" value="SAMSUNG TV">
                            <label class="" for="optie-1"><span class="input-padding-1">SAMSUNG 60" TV t.w.v. <span class="input-padding-1">€699,-</span></span></label>
                        </div>

                        <div id="container-antwoord-optie-id" class="container-antwoord-optie" @click="selecteerOptie('optie-2', 'Playstation 5')">
                            <input class="input-radio" type="radio" id="optie-2" name="antwoord" value="Playstation 5">
                            <label class="" for="optie-2"><span class="input-padding-1">Playstation 5 Slim Disk <span class="input-padding-1"> t.w.v.  €599,-</span></span></label>
                        </div>

                        <div id="container-antwoord-optie-id" class="container-antwoord-optie" @click="selecteerOptie('optie-3', 'Bol.com cadeaubon')">
                            <input class="input-radio" type="radio" id="optie-3" name="antwoord" value="Bol.com cadeaubon">
                            <label class="" for="optie-3"><span class="input-padding-1">Bol.com cadeaubon <span class="input-padding-1">  t.w.v. €400,-</span></span></label>
                        </div>
                    </div>
                <span class="flex">
                    <button @click="gaNaarPagina2" class="cta-pagina-1" id="cta-pagina-1">
                        <span class="cta-text-pagina-1">Ga naar stap 2</span>
                        <span class="cta-pijl-pagina-1">&#8594;</span>
                    </button>
                </span>


                    <div v-if="foutmelding" class="foutmelding-1">
                        Selecteer alstublieft een antwoord.
                    </div>

                </div>
            </div>

            <!-- dit is voor desktop -->
            <div class="container-afbeeldingen-en-prijs-1 desktop">
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





.container-stap-zoveel-en-pijl {
    display: inline-flex;
    gap: 10vw;
}

.stap-pagina-1 {
    position: relative;
    right: 12.5vw!important;
}

.pijl-vorige-1 {
    position: relative;
    left: 10vw;
    border: 1px solid #F48C02;
    padding: 10px!important;
    border-radius: 35px;
    color: #F48C02;
    font-weight: 700;
}

.pijl-vorige-1:hover {
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



.achtergrond-pagina-1 {
    background: linear-gradient(90deg, #072148 0%, #40A59F 100%);
    width: 100vw;
    height: 43vw!important;
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
    z-index: 995!important;
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
    cursor: pointer; 
    color: black;
}





.container-afbeeldingen-en-prijs-1 {
    width: 50vw; /* of een andere waarde afhankelijk van je ontwerp */
    max-width: 50vw;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 28%;
    z-index: 1;
    left: 2%!important;
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

.container-afbeeldingen-en-prijs-1 {
    max-width: 50%;
    height: auto;
    object-fit: contain;
    margin-left: 50%!important;
    position: relative;
    bottom: 30%;
    display: flex;
    justify-content: center;
    z-index: 109;
}

.afbeelding-prijzen-1 {
    position: absolute;
    width: 40vw;
    bottom: -26.5vw;
    left: 2vw;
}

.prijzen-prijs-tv-1,
.prijzen-prijs-bol-1,
.prijzen-prijs-ps-1 {
    z-index: 99999;
    position: absolute;
    width: 15%;
}

.prijzen-prijs-tv-1 {
    bottom: 9.5vw;
    right: 17vw;
    transform: rotate(7deg);
}



.prijzen-prijs-bol-1 {
    left: 5vw;
    top: 5.5vw;

}

.prijzen-prijs-ps-1 {
    right: 10vw;
    top: 19vw;

}









.input-radio {
    display: none; 
}

.input-radio:checked + label::before {
    background-color: #F48C02; 
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
    margin-top: 0%!important;
    margin-left: 41%!important;
    position: relative;
    bottom: -4vw!important;
}

@media (max-width: 700px) and (min-width: 600px) {
    .cta-pagina-1 {
        bottom: -2vw!important;
    }
}


@media (max-width: 600px) and (min-width: 499px) {
    .cta-pagina-1 {
        bottom: 0.5vw!important;
    }
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






.foutmelding {
    text-align: left;
    color: red;
    font-size: 1.2vw;
    font-weight: 700;
    top: 4vw!important;
}

.foutmelding-1 {
    text-align: left;
    color: red;
    font-size: 1.2vw;
    font-weight: 700;
    position: relative;
    top: 1vw;
}



@media (max-width: 499px) {

    
    .achtergrond-pagina-1 {
        height: 285vw!important;
        width: 100%!important;
    }

    .witte-container-pagina-1 {
        display: block;
        align-items: center;
        justify-content: center;
        position: relative!important;
        margin: 0 auto!important;
        left: 0!important;
        width: 90%!important;
        height: 130vw!important;

    }

    .container-inhoud-witte-container {
        padding-left: 6vw!important;
        padding-top: 5vw!important;
    }

    .stap-pagina-1 {
        font-size: 4vw!important;
    }

    .vraag-pagina-1 {
        font-size: 7vw!important;
    }

    .container-antwoorden-pagina-1 {
        display: flex;
        flex-direction: column;
        gap: 3vw;
    }

    .container-antwoord-optie {
        width:  100%!important;
        height: 20vw!important;
        
    }




    .input-radio:checked + label::before {
        background-color: #F48C02; 
        border: 0.4px solid #F48C02!important;
    }


    #container-antwoord-optie-id {
        margin-bottom: 2vw!important;
    }



    .container-antwoord-optie label {
        font-size: 5vw!important;
        padding-left: 11vw!important;
        line-height: 100%;
    }

    
    .input-padding-1 {
        height: 100%;
        margin-left: 11vw!important;
        font-size: 5vw;
        line-height: 100%!important;
        color: black;
    }
    


    .container-antwoord-optie label::before {
        scale: 3.5;
        border: 0.1px solid grey!important;
        margin-left: 5vw!important;
        top: 66%!important;
    }


    .text-optie-pagina-1 {
        left: 11vw!important;
    }

    .flex {
        width: 107%;
        display: flex;
        align-items: center;
    }



    #cta-pagina-1 {
        margin-left: 0!important;
        height: 15vw!important;
        margin-top: 0!important;
    }

    .cta-pagina-1 {
        display: flex;
        justify-content: center;
        width: 93%!important
    }


    .cta-text-pagina-1,
    .cta-pijl-pagina-1 {
        font-size:  5vw!important;
    }


    .container-afbeeldingen-en-prijs-mobiel {
        margin-top: -30vw!important;
    }


    .footer-text-1 {
        font-size: 3vw!important ;
        line-height: 120%!important;
    }

    .footer-container-1 {
        background-color: white;
        padding-bottom: 10vw!important;
        position: relative;
        top: 0;
        padding: 5vw!important;
    }


    .foutmelding {
        text-align: left;
        color: red;
        font-size: 4.5vw;
        font-weight: 700;
        width: 105%;
    }


    .prijzen-prijs-tv {
            width: 13%!important;
            left: 70vw;
    }

    .foutmelding-1 {
        font-size: 4vw;
        top: 5vw;
        left: 1vw;
    }

}




</style>