 
  AFRAME.registerComponent('cursor-listener', {
    init: function () {
      //console.log("cursor-listener hinzugefügt zu", this.el);  // Debugging
        this.el.addEventListener('click', () => {
            const zielRaum = this.el.getAttribute("data-ziel");
            //console.log("Geklickter Pfeil, neuer Raum:", zielRaum);//Consolelog apäter entfernen
            ladeRaum(zielRaum);
        });
    }
});


let aktuelleEtage = "draussen";
  
  
  //Raumdatenbank
  
  const  
    raeume = {
    haupteingang: {
      bild: 'assets/bilder/haupteingang.jpg',
      rotation: "0 -97 0",
      etage: 'draussen',
      pfeile:[
        {ziel:'treppe01', position: '0.2 0 -4.5', rotation:'0 0 0'},
        {ziel: 'n11', position: '5 0 0', rotation: '0 0 0'}
      ],
      grundrissPosKlein: "-2.15 1.2",
      grundrissPosGross: "0 0"
    },
    haupteingang_2: {
      bild: 'assets/bilder/haupteingang.jpg',
      rotation: "0 83 0",
      etage: 'draussen',
      pfeile:[
        {ziel:'treppe01', position: '-0.2 0 4.5', rotation:'0 180 0'},
        {ziel: 'n11', position: '-5 0 0', rotation: '0 180 0'}
      ],
      grundrissPosKlein: "-2.15 1.2"
    },

    treppe01: {
      bild: 'assets/bilder/treppe01.jpg', 
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'haupteingang', position: '0 -1 5', rotation: '0 180 0'},
        { ziel: 'treppeK', position: '2.5 -1 -3', rotation: '0 0 0'},
        { ziel: 'treppeE1', position: '-2.8 -1 -3', rotation: '0 0 0'}
      ],
      grundrissPosKlein: "-1.87 1.02"
    },
    treppe01_2: {
      bild: 'assets/bilder/treppe01.jpg', 
      rotation: "0 40 0",
      etage: '1',
      pfeile: [
        { ziel: 'haupteingang', position: '0 -1 -5', rotation: '0 0 0'},
        { ziel: 'treppeK', position: '-2.5 -1 3', rotation: '0 180 0'},
        { ziel: 'treppeE1', position: '2.8 -1 3', rotation: '0 180 0'}
      ],      
      grundrissPosKlein: "-1.87 1.02"
    },


    //Keller
  
    treppeK: {
      bild: 'assets/bilder/keller/treppeK.jpg',
      rotation: "0 -48 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '3.5 -1 -2.5', rotation: '0 -90 0'},
        { ziel: 'K4', position: '-3.5 -1 -2.5', rotation: '0 90 0'},
        { ziel: 'treppe01', position: '0 -1 5', rotation: '0 180 0'}
      ],
      grundrissPosKlein: "-1.87 1.02"
    },
    treppeK_2: {
      bild: 'assets/bilder/keller/treppeK.jpg',
      rotation: "0 132 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '-3.5 -1 2', rotation: '0 90 0'},
        { ziel: 'K4', position: '3.5 -1 2', rotation: '0 -90 0'},
        { ziel: 'treppe01', position: '-1 -1 -5', rotation: '0 0 0'}
      ],
      grundrissPosKlein: "-1.87 1.02"
    },

    K2: {
      bild: 'assets/bilder/keller/K2.jpg',
      rotation: "0 25 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '0.3 -0.5 -5', rotation: '0 -2 0'},
        { ziel: 'treppeK', position: '0.3 -1 6', rotation: '0 180 0'},
        { ziel: 'r011', position: '1.5 -1 3.5', rotation: '0 -210 0'},
        { ziel: 'r007', position: '-0.8 -1 -5', rotation: '0 -40 0'}
      ],
      grundrissPosKlein: "-1.7 1.19"
    },
    K2_2: {
      bild: 'assets/bilder/keller/K2.jpg',
      rotation: "0 210 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '0 -1 6', rotation: '0 -180 0'},
        { ziel: 'treppeK', position: '-0.6 -0.5 -5', rotation: '0 -2 0'},
        { ziel: 'r011', position: '-2.5 -1 -2.5', rotation: '0 90 0'},
        { ziel: 'r007', position: '1.4 -1 5.2', rotation: '0 -205 0'}
      ],
      grundrissPosKlein: "-1.7 1.19"
    },
    
    r007: {
      bild: 'assets/bilder/keller/007.jpg',
      rotation: "0 130 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '2.5 -1 -6', rotation: '0 -20 0'},
      ],
      grundrissPosKlein: "-1.65 1.38"
    },

    r011: {
      bild: 'assets/bilder/keller/011.jpg',
      rotation: "0 20 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '-1.6 -1 3.8', rotation: '0 170 0'},
      ],
      grundrissPosKlein: "-1.68 1"
    },

    K1: {
      bild: 'assets/bilder/keller/K1.jpg',
      rotation: "0 -20 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '2 -1 5', rotation: '0 180 0'},
        { ziel: 'r008', position: '-6 -1 0.5', rotation: '0 90 0'},
        { ziel: 'r009', position: '2 -2 -3.5', rotation: '0 0 0'},
        { ziel: 'r010', position: '5 -1 -1', rotation: '0 -90 0'}
      ],
      grundrissPosKlein: "-1.55 1.19"
    },
    K1_2: {                                       
      bild: 'assets/bilder/keller/K1.jpg',
      rotation: "0 -20 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '2 -1 5', rotation: '0 180 0'},
        { ziel: 'r008', position: '-6 -1 0.5', rotation: '0 90 0'},
        { ziel: 'r009', position: '2 -2 -3.5', rotation: '0 0 0'},
        { ziel: 'r010', position: '5 -1 -1', rotation: '0 -90 0'}
      ],
      grundrissPosKlein: "-1.55 1.19"
    },


    r008: {
      bild: 'assets/bilder/keller/008.jpg',
      rotation: "0 -33 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '6.7 -1 6.5', rotation: '0 -90 0'}, //3.5 -1 2.5
        { ziel: 'r009', position: '4.5 -1 -6', rotation: '0 25 0'},
      ],
      grundrissPosKlein: "-1.5 1.3"
    },

    r009: {
      bild: 'assets/bilder/keller/009_1.jpg',
      rotation: "0 135 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '-6 -2 2.5', rotation: '0 130 0'},
        { ziel: 'r008', position: '4 -1 0.7', rotation: '0 -70 0'},
        { ziel: 'r010', position: '-7 -1 3', rotation: '0 106 0'},
      ],
      grundrissPosKlein: "-1.5 1.22"
    },

    r010: {
      bild: 'assets/bilder/keller/010.jpg',
      rotation: "0 155 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '-2.5 -1 6.7', rotation: '0 210 0'},
        { ziel: 'r009', position: '-3.4 -1 -6.2', rotation: '0 -20 0'},
      ],
      grundrissPosKlein: "-1.5 1"
    },

    K4: {
      bild: 'assets/bilder/keller/K4.jpg',
      rotation: "0 -115 0",
      etage: '0',
      pfeile: [
        { ziel: 'treppeK', position: '-0.1 -1 5', rotation: '0 180 0'},
        { ziel: 'r005', position: '1.7 -1 4', rotation: '0 155 0'},
        { ziel: 'K5', position: '0.1 -1 -5', rotation: '0 0 0'},
      ],
      grundrissPosKlein: "-1.93 1.19"
    },
    K4_2: {
      bild: 'assets/bilder/keller/K4.jpg',
      rotation: "0 65 0",
      etage: '0',
      pfeile: [
        { ziel: 'treppeK', position: '0.1 -1 -5', rotation: '0 0 0'},
        { ziel: 'r005', position: '-1.7 -1 -4', rotation: '0 -25 0'},
        { ziel: 'K5', position: '-0.1 -1 5', rotation: '0 180 0'},
      ],
      grundrissPosKlein: "-1.93 1.19"
    },

    r005: {
      bild: 'assets/bilder/keller/005.jpg',
      rotation: "0 -1 0",
      etage: '0',
      pfeile: [
        { ziel: 'K4', position: '6 -1 -3.8', rotation: '0 -91 0'},//6 -1 -4.3
      ],
      grundrissPosKlein: "-1.93 1.38"
    },

    K5: {
      bild: 'assets/bilder/keller/K5.jpg',
      rotation: "0 -115 0",
      etage: '0',
      pfeile: [
        { ziel: 'K4', position: '-0.1 -1 5', rotation: '0 180 0'},
        { ziel: 'r004', position: '1.4 -1 3', rotation: '0 155 0'},
        { ziel: 'K6', position: '0.1 -1 -5', rotation: '0 -1 0'},
      ],
      grundrissPosKlein: "-2 1.19"
    },
    K5_2: {
      bild: 'assets/bilder/keller/K5.jpg',
      rotation: "0 65 0",
      etage: '0',
      pfeile: [
        { ziel: 'K4', position: '0.1 -1 -5', rotation: '0 0 0'},
        { ziel: 'r004', position: '-1.4 -1 -2.7', rotation: '0 -25 0'},
        { ziel: 'K6', position: '0 -1 5', rotation: '0 179 0'},
      ]
    },

    r004: {
      bild: 'assets/bilder/keller/004.jpg',
      rotation: "0 -56 0",
      etage: '0',
      pfeile: [
        { ziel: 'K5', position: '4.8 -1 -2.7', rotation: '0 -90 0'},
      ],
      grundrissPosKlein: "-2.1 1.38"
    },
  
    K6: {
      bild: 'assets/bilder/keller/K6.jpg',
      rotation: "0 -43 0",
      etage: '0',
      pfeile: [
        { ziel: 'K5', position: '-0.1 -1 5', rotation: '0 180 0'},
        { ziel: 'K7', position: '0.1 -1 -5', rotation: '0 2 0'},
      ]
    },
    K6_2: {
      bild: 'assets/bilder/keller/K6.jpg',
      rotation: "0 137 0",
      etage: '0',
      pfeile: [
        { ziel: 'K5', position: '0.1 -1 -5', rotation: '0 0 0'},
        { ziel: 'K7', position: '-0.1 -1 5', rotation: '0 -178 0'},
      ]
    },

    K7: {
      bild: 'assets/bilder/keller/K7.jpg',
      rotation: "0 40 0",
      etage: '0',
      pfeile: [
        { ziel: 'r021', position: '-2.3 -1 -3.5', rotation: '0 90 0'},
        { ziel: 'r001', position: '2 -1 -0.25', rotation: '0 -90 0'},
        { ziel: 'K6', position: '0.25 -1 5', rotation: '0 180 0'},
        { ziel: 'treppchenE1', position: '-3 -1 1.6', rotation: '0 92 0'},
      ]
    },
    K7_2: {
      bild: 'assets/bilder/keller/K7.jpg',
      rotation: "0 -140 0",
      etage: '0',
      pfeile: [
        { ziel: 'r021', position: '2.3 -1 3.5', rotation: '0 -90 0'},
        { ziel: 'r001', position: '-2 -1 0.25', rotation: '0 90 0'},
        { ziel: 'K6', position: '-0.25 -1 -5', rotation: '0 0 0'},
        { ziel: 'treppchenE1', position: '3 -1 -1.6', rotation: '0 -88 0'},
      ]
    },

    r001: {
      bild: 'assets/bilder/keller/001.jpg',
      rotation: "0 -65 0",
      etage: '0',
      pfeile: [
        { ziel: 'K7', position: '1 -1 1.3', rotation: '0 223 0'},
      ]
    },

    r021: {
      bild: 'assets/bilder/keller/021.jpg',
      rotation: "0 -65 0",
      etage: '0',
      pfeile: [
        { ziel: 'K7', position: '1 -1 1.3', rotation: '0 223 0'},
      ]
    },
  
  //1.Etage
    treppeE1: {
      bild: 'assets/bilder/1etage/treppeE1.jpg',
      rotation: "0 212 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppe01', position: '2.3 -1 -3.5', rotation: '0 -2 0'},
        { ziel: 'treppe12', position: '-2.7 -1 -3.7', rotation: '0 -2 0'},
        { ziel: 'E11_2', position: '-6 -1 -0.65', rotation: '0 88 0'},
        { ziel: 'E13', position: '6 -1 -0.5', rotation: '0  -88 0'}
      ]
    },

    E11_2: {
      bild: 'assets/bilder/1etage/E11.jpg',
      rotation: "0 58 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '0 -1 3.2', rotation: '0 180 0'},
        { ziel: 'r108', position: '1.2 -1 5.6', rotation: '0 153 0'},
        { ziel: 'r106', position: '-5 -1 -0.6', rotation: '0 90 0'},
        { ziel: 'r105', position: '-1.3 -1 6.8', rotation: '0 207 0'},
        { ziel: 'r109', position: '1.2 -1 11.5', rotation: '0 155 0'}
      ]
    },
    E11: {
      bild: 'assets/bilder/1etage/E11.jpg',
      rotation: "0 -120 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '0 -1 -3.2', rotation: '0 0 0'},
        { ziel: 'r108', position: '-1.3 -1 -5.2', rotation: '0 -27 0'},
        { ziel: 'r106', position: '5 -1 0.3', rotation: '0 -90 0'},
        { ziel: 'r105', position: '1 -1 -6.8', rotation: '0 27 0'},
        { ziel: 'r109', position: '-1.5 -1 -11.5', rotation: '0 -25 0'}
      ]
    },

    r105: {
      bild: 'assets/bilder/1etage/105.jpg',
      rotation: "0 160 0",
      etage: '1',
      pfeile: [
        { ziel: 'E11', position: '3.3 -1 -5', rotation: '0 21 0'} 
      ]
    },

    r106: {
      bild: 'assets/bilder/1etage/106.jpg',
      rotation: "0 -120 0",
      etage: '1',
      pfeile: [
        { ziel: 'E11', position: '0 -1 5.7', rotation: '0 152 0'} 
      ]
    },

    r108: {
      bild: 'assets/bilder/1etage/108h.jpg',
      rotation: "0 192 0",
      etage: '1',
      pfeile: [
        { ziel: 'E11_2', position: '0 -1 6', rotation: '0 205 0'} 
      ]
    },

    r109: {
      bild: 'assets/bilder/1etage/109.jpg',
      rotation: "0 22 0",
      etage: '1',
      pfeile: [
        { ziel: 'E11_2', position: '-1 -1 3', rotation: '0 180 0'} 
      ]
    },

    E13_2: {
      bild: 'assets/bilder/1etage/E13.jpg',
      rotation: "0 -35 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '0.2 -1 -3.8', rotation: '0 -2.6 0'},
        { ziel: 'r104', position: '-1 -1 -2.7', rotation: '0 -35 0'},
        { ziel: 'r103', position: '-1.6 -1 5.3', rotation: '0 202 0'}
      ]
    },
    E13: {
      bild: 'assets/bilder/1etage/E13.jpg',
      rotation: "0 147 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '-0.2 -1 3.8', rotation: '0 177.4 0'},
        { ziel: 'r104', position: '1 -1 2.7', rotation: '0 145 0'},
        { ziel: 'r103', position: '1.6 -1 -5.3', rotation: '0 22 0'}
      ]
    },

    r104: {
      bild: 'assets/bilder/1etage/104.jpg',
      rotation: "0 -71 0",
      etage: '1',
      pfeile: [
        { ziel: 'E13', position: '3 -1 7.5', rotation: '0 160 0'} 
      ]
    },

    r103: {
      bild: 'assets/bilder/1etage/103.jpg',
      rotation: "0 -9 0",
      etage: '1',
      pfeile: [
        { ziel: 'E13', position: '4.3 -1 -3.3', rotation: '0 20 0'} 
      ]
    },

    E14: {
      bild: 'assets/bilder/1etage/E14.jpg',
      rotation: "0 -20 0",
      etage: '1',
      pfeile: [
        { ziel: 'E15', position: '0.2 -1 -3.8', rotation: '0 -2.6 0'},
        { ziel: 'E13_2', position: '-0.2 -1 3.8', rotation: '0 177.4 0'}
      ]
    },
    E14_2: {
      bild: 'assets/bilder/1etage/E14.jpg',
      rotation: "0 160 0",
      etage: '1',
      pfeile: [
        { ziel: 'E13_2', position: '0.2 -1 -3.8', rotation: '0 -3.6 0'},
        { ziel: 'E15', position: '-0.2 -1 3.8', rotation: '0 178 0'}
      ]
    },

    E15: {
      bild: 'assets/bilder/1etage/E15.jpg',
      rotation: "0 -90 0",
      etage: '1',
      pfeile: [
        { ziel: 'E14_2', position: '-0.2 -1 3.8', rotation: '0 177.4 0'},
        { ziel: 'r102', position: '2 -1 3.8', rotation: '0 -93 0'}, 
        { ziel: 'E16', position: '0.2 -1 -3.8', rotation: '0 -2.6 0'}
      ]
    },
    E15_2: {
      bild: 'assets/bilder/1etage/E15.jpg',
      rotation: "0 90 0",
      etage: '1',
      pfeile: [
        { ziel: 'E16', position: '-0.2 -1 3.8', rotation: '0 177.4 0'},
        { ziel: 'r102', position: '-1 -1 -4.3', rotation: '0 -27 0'}, 
        { ziel: 'E14_2', position: '0.2 -1 -3.8', rotation: '0 -2.6 0'}
      ]
    },

    r102: {
      bild: 'assets/bilder/1etage/102.jpg',
      rotation: "0 97 0",
      etage: '1',
      pfeile: [
        { ziel: 'E15', position: '3.2 -1 -3.3', rotation: '0 20 0'} 
      ]
    },

    E16: {
      bild: 'assets/bilder/1etage/E16.jpg',
      rotation: "0 140 0",
      etage: '1',
      pfeile: [
        { ziel: 'E15_2', position: '-0.2 -1 3.8', rotation: '0 180 0'},
        { ziel: 'treppchenE1', position: '-2 -1 3.8', rotation: '0 204 0'},
        { ziel: 'r101', position: '1.2 -1 3', rotation: '0 -204 0'},
        { ziel: 'r117', position: '-1.6 -1 -2.2', rotation: '0 -23 0'}
      ]
    },
    E16_2: {
      bild: 'assets/bilder/1etage/E16.jpg',
      rotation: "0 -40 0",
      etage: '1',
      pfeile: [
        { ziel: 'E15_2', position: '0.2 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'treppchenE1', position: '2 -1 -3.8', rotation: '0 24 0'},
        { ziel: 'r101', position: '-1.2 -1 -3', rotation: '0 -24 0'},
        { ziel: 'r117', position: '1.6 -1 2.2', rotation: '0 157 0'}
      ]
    },

    r101: {
      bild: 'assets/bilder/1etage/101.jpg',
      rotation: "0 60 0",
      etage: '1',
      pfeile: [
        { ziel: 'E16', position: '4 -1 -6.7', rotation: '0 20 0'} 
      ]
    },

    r117: {
      bild: 'assets/bilder/1etage/117.jpg',
      rotation: "0 88 0",
      etage: '1',
      pfeile: [
        { ziel: 'E16_2', position: '3.5 -1 -7', rotation: '0 0 0'} 
      ]
    },

    treppchenE1: {
      bild: 'assets/bilder/1etage/treppchenE1.jpg',
      rotation: "0 -60 0",
      etage: '1',
      pfeile: [
        { ziel: 'E16_2', position: '1.2 -1 2', rotation: '0 180 0'},
        { ziel: 'treppchenE2', position: '-1.5 -1 -1.3', rotation: '0 0 0'}, 
        { ziel: 'K7', position: '1.5 -1 -1.3', rotation: '0 0 0'}
      ]
    },
  
  //2. Etage

    treppe12: {
      bild: 'assets/bilder/treppe12.jpg',
      rotation: "0 -148 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppeE1', position: '2.5 -1 -3', rotation: '0 2 0'},
        { ziel: 'treppeE2', position: '-2.9 -1 -3', rotation: '0 0 0'}        
      ]
    },

    treppeE2: {
      bild: 'assets/bilder/2etage/treppeE2.jpg',
      rotation: "0 132 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppe23', position: '-2.7 -1 -2.8', rotation: '0 0 0'},
        { ziel: 'treppe12', position: '2.5 -1 -2.9', rotation: '0 0 0'},
        { ziel: 'E22', position: '6 -1 -0.1', rotation: '0 -90 0'},
        { ziel: 'r210h', position: '0 0 0', rotation: '0 90 0'},
        { ziel: 'r208', position: '0 0 0', rotation: '0 90 0'},
        { ziel: 'r207', position: '0 0 0', rotation: '0 90 0'}        
      ]
    },
    
    r207: {
      bild: 'assets/bilder/2etage/207.jpg',
      rotation: "0 65 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppeE2', position: '4 -1 -5.5', rotation: '0 17 0'} 
      ]
    },

    r208: {
      bild: 'assets/bilder/2etage/208.jpg',
      rotation: "0 -120 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppeE2', position: '0 -1 7.5', rotation: '0 152 0'} 
      ]
    },

    r210h: {
      bild: 'assets/bilder/2etage/210h.jpg',
      rotation: "0 74 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppeE2', position: '0 -1 5', rotation: '0 -157.5 0'},
        { ziel: 'r210', position: '0 -1 -3.8', rotation: '0 0 0'} 
      ]
    },

    r210: {
      bild: 'assets/bilder/2etage/210.jpg',
      rotation: "0 38 0",
      etage: '2',
      pfeile: [
        { ziel: 'r210h', position: '0 -1 3.8', rotation: '0 178 0'} 
      ]
    },

    E22: {
      bild: 'assets/bilder/2etage/E22.jpg',
      rotation: "0 49 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23', position: '0.2 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'treppeE2', position: '0.3 -1 3.8', rotation: '0 180 0'},
        { ziel: 'r204', position: '2.5 -1 1', rotation: '0 -90 0'},
        { ziel: 'r212', position: '-1 -1 3.5', rotation: '0 -155 0'},
        { ziel: 'r213', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E22_2: {
      bild: 'assets/bilder/2etage/E22.jpg',
      rotation: "0 -131 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23', position: '-0.2 -1 3.8', rotation: '0 180 0'},
        { ziel: 'treppeE2', position: '-0.3 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'r204', position: '-2.5 -1 -1', rotation: '0 90 0'},
        { ziel: 'r212', position: '1 -1 -3.5', rotation: '0 25 0'},
        { ziel: 'r213', position: '2 1 4', rotation: '0 -90 0'}
      ]
    },

    r204: {
      bild: 'assets/bilder/2etage/204.jpg',
      rotation: "0 -36 0",
      etage: '2',
      pfeile: [
        { ziel: 'E22', position: '-0.2 -1 1.5', rotation: '0 180 0'} 
      ]
    },

    r212: {
      bild: 'assets/bilder/2etage/212.jpg',
      rotation: "0 -35 0",
      etage: '2',
      pfeile: [
        { ziel: 'E22', position: '-0.6 -1 1.6', rotation: '0 162 0'} 
      ]
    },

    r213: {
      bild: 'assets/bilder/2etage/213.jpg',
      rotation: "0 -118 0",
      etage: '2',
      pfeile: [
        { ziel: 'E22', position: '0 -1 2.3', rotation: '0 180 0'} 
      ]
    },

    E23: {
      bild: 'assets/bilder/2etage/E23.jpg',
      rotation: "0 10 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24', position: '0.3 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'E22_2', position: '-0.2 -1 3.8', rotation: '0 175 0'},
        { ziel: 'r203', position: '2 -1 -4.5', rotation: '0 23 0'}
      ]
    },
    E23_2: {
      bild: 'assets/bilder/2etage/E23.jpg',
      rotation: "0 -165 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24', position: '0.1 -1 3.8', rotation: '0 183 0'},
        { ziel: 'E22_2', position: '-0.2 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'r203', position: '-1.5 -1 4.5', rotation: '0 -155 0'}
      ]
    },

    r203: {//bild nicht da
      bild: 'assets/bilder/2etage/203.jpg',
      rotation: "0 172 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23', position: '5.5 -1 1.8', rotation: '0 -90 0'} 
      ]
    },

    E24: {
      bild: 'assets/bilder/2etage/E24.jpg',
      rotation: "0 80 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23_2', position: '-0.2 -1 3.8', rotation: '0 182 0'},
        { ziel: 'E25', position: '-0.3 -1 -3.8', rotation: '0 2 0'},
        { ziel: 'r202', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E24_2: {
      bild: 'assets/bilder/2etage/E24.jpg',
      rotation: "0 -103 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23_2', position: '0.2 -1 -3.8', rotation: '0 -2 0'},
        { ziel: 'E25', position: '0.3 -1 3.8', rotation: '0 -178 0'},
        { ziel: 'r202', position: '-1 -1 3.3', rotation: '0 -155 0'}
      ]
    },

    r202: {
      bild: 'assets/bilder/2etage/202.jpg',
      rotation: "0 173 0",
      pfeile: [
        { ziel: 'E24', position: '5.7 -1 1.8', rotation: '0 -89 0'} 
      ]
    },

    E25: {
      bild: 'assets/bilder/2etage/E25.jpg',
      rotation: "0 87 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24_2', position: '0.2 -1 3.3', rotation: '0 180 0'},
        { ziel: 'treppchenE2', position: '-3.1 -1 0.4', rotation: '0 90 0'},
        { ziel: 'r201', position: '2.5 -1 0', rotation: '0 -90 0'},
        { ziel: 'r220', position: '-2.4 -1 -3.3', rotation: '0 88.5 0'},
        { ziel: 'r221', position: '0 -1 -5', rotation: '0 0 0'}
      ]
    },
    E25_2: {
      bild: 'assets/bilder/2etage/E25.jpg',
      rotation: "0 -91.55 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24_2', position: '-0.2 -1 -3.3', rotation: '0 0 0'},
        { ziel: 'treppchenE2', position: '3.1 -1 -0.4', rotation: '0 -90 0'},
        { ziel: 'r201', position: '-2.5 -1 0', rotation: '0 90 0'},
        { ziel: 'r220', position: '2.4 -1 3.3', rotation: '0 -91.5 0'},
        { ziel: 'r221', position: '0 -1 5', rotation: '0 180 0'}
      ]
    },

    r201: {
      bild: 'assets/bilder/2etage/201.jpg',
      rotation: "0 -128 0",
      etage: '2',
      pfeile: [
        { ziel: 'E25', position: '3 -1 -4.7', rotation: '0 24 0'} 
      ]
    },

    r220: {
      bild: 'assets/bilder/2etage/220.jpg',
      rotation: "0 -15 0",
      etage: '2',
      pfeile: [
        { ziel: 'E25_2', position: '5.5 -1 0', rotation: '0 -120 0'} 
      ]
    },

    r221: {
      bild: 'assets/bilder/2etage/221.jpg',
      rotation: "0 -162 0",
      etage: '2',
      pfeile: [
        { ziel: 'E25', position: '-0.2 -1 3.7', rotation: '0 180 0'} 
      ]
    },

    treppchenE2: {
      bild: 'assets/bilder/2etage/treppchenE2.jpg',
      rotation: "0 18 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppchenE1', position: '1.7 -1 -1.4', rotation: '0 0 0'},
        { ziel: 'treppchenE3_2', position: '-1.6 -1 -0.8', rotation: '0 0 0'}, 
        { ziel: 'E25_2', position: '1.7 -1 1.9', rotation: '0 180 0'}       
      ]
    },

    //3. Etage

    treppe23: {
      bild: 'assets/bilder/treppe23.jpg',
      rotation: "0 -92 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppeE2', position: '2.5 -1 -2.5', rotation: '0 0 0'},
        { ziel: 'treppeE3', position: '-2.6 -1 -2.5', rotation: '0 0 0'}       
      ]
    },

    treppeE3: {
      bild: 'assets/bilder/3etage/treppeE3.jpg',
      rotation: "0 -79 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppe23', position: '2.4 -1 -2.5', rotation: '0 0 0'},
        { ziel: 'E31', position: '-5 -1 -0.3', rotation: '0 89 0'},
        { ziel: 'E32', position: '5 -1 -0.4', rotation: '0 -89 0'}        
      ]
    },

    E31: {
      bild: 'assets/bilder/3etage/E31.jpg',
      rotation: "0 84 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppeE3', position: '1 -1 3.8', rotation: '0 180 0'},
        { ziel: 'r308', position: '2.6 -1 -2.9', rotation: '0 -90 0'},
        { ziel: 'Aula_2', position: '0.2 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'r306', position: '-2.3 -1 -1.3', rotation: '0 88 0'}
      ]
    },

    Aula_2: {
      bild: 'assets/bilder/3etage/Aula_2.jpg',
      rotation: "0 30 0",
      etage: '3',
      pfeile: [
        { ziel: 'E31', position: '8 -1 -2.5', rotation: '0 -89 0'},
        { ziel: 'Aula_1', position: '0.05 -1 3.8', rotation: '0 -182 0'}
      ]
    },

    Aula_1: {
      bild: 'assets/bilder/3etage/Aula_1.jpg',
      rotation: "0 88 0",
      etage: '3',
      pfeile: [
        { ziel: 'Aula_2', position: '0.15 -1 -3.8', rotation: '0 0.2 0'}
      ]
    },

    r308: {
      bild: 'assets/bilder/3etage/308.jpg',
      rotation: "0 66 0",
      etage: '3',
      pfeile: [
        { ziel: 'E31', position: '6 -1 3', rotation: '0 -90 0'}
      ]
    },

    r306: {
      bild: 'assets/bilder/3etage/306.jpg',
      rotation: "0 119 0",
      etage: '3',
      pfeile: [
        { ziel: 'E31', position: '4.7 -1 -3', rotation: '0 -90 0'}
      ]
    },

    E33: {
      bild: 'assets/bilder/3etage/E33.jpg',
      rotation: "0 75 0",
      etage: '3',
      pfeile: [
        { ziel: 'E34', position: '1 -1 -3.8', rotation: '0 -5 0'},
        { ziel: 'treppeE3', position: '0 -1 3.8', rotation: '0 174 0'},
        { ziel: 'r304', position: '3.5 -1 -4', rotation: '0 -94 0'},        
        { ziel: 'r309', position: '-1.6 -1 -0.9', rotation: '0 84 0'}
      ]
    },
    E33_2: {
      bild: 'assets/bilder/3etage/E33.jpg',
      rotation: "0 -98 0",
      etage: '3',
      pfeile: [
        { ziel: 'E34', position: '-0.5 -1 3.8', rotation: '0 180 0'},
        { ziel: 'treppeE3', position: '-0.3 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'r304', position: '-3 -1 4.5', rotation: '0 90 0'},        
        { ziel: 'r309', position: '1.6 -1 0.9', rotation: '0 -96 0'}
      ]
    },


    r304: {
      bild: 'assets/bilder/3etage/304.jpg',
      rotation: "0 83 0",
      etage: '3',
      pfeile: [
        { ziel: 'E33', position: '5 -1 5', rotation: '0 -95 0'}
      ]
    },

    E34: {
      bild: 'assets/bilder/3etage/E34.jpg',
      rotation: "0 -90 0",
      etage: '3',
      pfeile: [
        { ziel: 'E35', position: '-0.3 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'E33_2', position: '0 -1 3.8', rotation: '0 180 0'},
        { ziel: 'r303', position: '1.5 -1 9', rotation: '0 -203 0'},        
        { ziel: 'r310', position: '-2.4 -1 1.2', rotation: '0 90 0'}
      ]
    },

    E34_2: {
      bild: 'assets/bilder/3etage/E34.jpg',
      rotation: "0 90 0",
      etage: '3',
      pfeile: [
        { ziel: 'E35', position: '0.3 -1 3.8', rotation: '0 180 0'},
        { ziel: 'E33_2', position: '0 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'r303', position: '-1.5 -1 -9', rotation: '0 -23 0'},        
        { ziel: 'r310', position: '2.4 -1 -1.2', rotation: '0 -90 0'}
      ]
    },

    r303: {
      bild: 'assets/bilder/3etage/303.jpg',
      rotation: "0 -130 0",
      etage: '3',
      pfeile: [
        { ziel: 'E34', position: '4.2 -1 -4.5', rotation: '0 -90 0'}
      ]
    },

    r309: {
      bild: 'assets/bilder/3etage/309.jpg',
      rotation: "0 -170 0",
      etage: '3',
      pfeile: [
        { ziel: 'E34', position: '5.5 -1 -1.3', rotation: '0 -90 0'}
      ]
    },

    E35: {
      bild: 'assets/bilder/3etage/E35.jpg',
      rotation: "0 -91 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '-0.3 -1 -3.8', rotation: '0 1 0'},
        { ziel: 'E34_2', position: '0 -1 3.8', rotation: '0 182 0'}
      ]
    },
    E35_2: {
      bild: 'assets/bilder/3etage/E35.jpg',
      rotation: "0 86.5 0",
        etage: '3',
      pfeile: [
        { ziel: 'E36', position: '0.3 -1 3.8', rotation: '0 -179 0'},
        { ziel: 'E34_2', position: '0.3 -1 -3.8', rotation: '0 0 0'}
      ]
    },

    E36: {
      bild: 'assets/bilder/3etage/E36.jpg',
      rotation: "0 -50 0",
      etage: '3',
      pfeile: [
        { ziel: 'E35_2', position: '2.5 -1 2.2', rotation: '0 -152 0'},
        { ziel: 'treppchenE3', position: '-3 -1 -1.9', rotation: '0 110 0'},
        { ziel: 'r301_1', position: '-0.3 -1 -4.5', rotation: '0 50 0'},        
        { ziel: 'r315_2', position: '-2.7 -1 -4.2', rotation: '0 61 0'}
      ]
    },

    treppchenE3: {
      bild: 'assets/bilder/3etage/treppchenE3.jpg',
      rotation: "0 40 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '-0.2 -1 2.5', rotation: '0 180 0'},
        { ziel: 'treppchenE2', position: '0 -1 -1', rotation: '0 0 0'},
        { ziel: 'r301_1', position: '0.6 -1 7', rotation: '0 180 0'}
      ]
    },
    treppchenE3_2: {
      bild: 'assets/bilder/3etage/treppchenE3.jpg',
      rotation: "0 -141.5 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '0.2 -1 -2.5', rotation: '0 0 0'},
        { ziel: 'treppchenE2', position: '0.1 -1 1', rotation: '0 180 0'},
        { ziel: 'r301_1', position: '-0.5 -1 -7', rotation: '0 -0.5 0'}
      ]
    },

    r301_1: {
      bild: 'assets/bilder/3etage/301_1.jpg',
      rotation: "0 -106 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '0.3 -1 5.5', rotation: '0 181 0'},
        { ziel: 'r301_2', position: '-3.8 -1 -1', rotation: '0 90 0'},
      ]
    },

    r301_2: {
      bild: 'assets/bilder/3etage/301_2.jpg',
      rotation: "0 -80 0",
      etage: '3',
      pfeile: [
        { ziel: 'r301_1', position: '1.3 -1 3.8', rotation: '0 183 0'}
      ]
    },

    r315_2: {
      bild: 'assets/bilder/3etage/315h.jpg',
      rotation: "0 -21 0",
      etage: '3',
      pfeile: [
        
        { ziel: 'r315_1', position: '1.5 -1 3.8', rotation: '0 180 0'}
      ]
    },

    r315_1: {
      bild: 'assets/bilder/3etage/315.jpg',
      rotation: "0 180 0",
      etage: '3',
      pfeile: [
        { ziel: 'r315_2', position: '0 -1 -3.8', rotation: '0 0 0'},
      { ziel: 'E36', position: '-1 -1 3.3', rotation: '0 105 0'},
      ]
    },

    //neubau

    n11: {
      bild: 'assets/bilder/neubau/fluru1.jpg',
      rotation: "0 -116 0",
      pfeile: [
        { ziel: 'r12', position: '3 -1 -8', rotation: '0 0 0'},
        { ziel: 'r13', position: '-2 -1 -8', rotation: '0 0 0'},
        { ziel: 'r14', position: '5 -1 -2.56', rotation: '0 -88 0'},
        { ziel: 'n11_2', position: '-3 -1 -6.5', rotation: '0 -24 0'},
        {ziel: 'haupteingang', position: '-3 -1 8', rotation: '0 -160 0'}
      ]
    },
    n11_2: {
      bild: 'assets/bilder/neubau/fluru1.jpg',
      rotation: "0 64 0",
      pfeile: [
        { ziel: 'r12', position: '-3 -1 8', rotation: '0 180 0'},
        { ziel: 'r13', position: '2 -1 8', rotation: '0 180 0'},
        { ziel: 'r14', position: '-5 -1 2.56', rotation: '0 92 0'},
        { ziel: 'n11_2', position: '3 -1 6.5', rotation: '0 156 0'},
        {ziel: 'haupteingang', position: '3 -1 -8', rotation: '0 20 0'}
      ]
    },

    n12: {
      bild: 'assets/bilder/neubau/fluru2.jpg',
      rotation: "0 -158.5 0",
      pfeile: [
        { ziel: 'n21', position: '1.23 -1 -5.5', rotation: '0 0 0'},
        { ziel: 'n11_2', position: '-1.2 -1 4', rotation: '0 183 0'}
      ]
    },
    n12_2: {
      bild: 'assets/bilder/neubau/fluru2.jpg',
      rotation: "0 21.5 0",
      pfeile: [
        { ziel: 'n21', position: '-1.23 -1 5.5', rotation: '0 180 0'},
        { ziel: 'n11_2', position: '1.2 -1 -4', rotation: '0 3 0'}
      ]
    },

    n21: {
      bild: 'assets/bilder/neubau/fluro1.jpg',
      rotation: "0 90 0",
      pfeile: [
        { ziel: 'n12', position: '1.3 -1 6', rotation: '0 180 0'},
        { ziel: 'n22', position: '6 -1 -2', rotation: '0 -91 0'},
        { ziel: 'r21', position: '-1.8 -1 6.2', rotation: '0 -155 0'},
        { ziel: 'r22', position: '-3 -1 0.7', rotation: '0 92 0'},
        { ziel: 'r23', position: '-1.6 -1 -6.4', rotation: '0 -24 0'},
        { ziel: 'r24', position: '5 -1 -7', rotation: '0 0 0'},
        { ziel: 'r25', position: '6.9 -1 0.5', rotation: '0 -64 0'}
      ]
    },
    n21_2: {
      bild: 'assets/bilder/neubau/fluro1.jpg',
      rotation: "0 -90 0",
      pfeile: [
        { ziel: 'n12', position: '-1.3 -1 -6', rotation: '0 0 0'},
        { ziel: 'n22', position: '-6 -1 2', rotation: '0 89 0'},
        { ziel: 'r21', position: '1.8 -1 -6.2', rotation: '0 25 0'},
        { ziel: 'r22', position: '3 -1 -0.7', rotation: '0 -88 0'},
        { ziel: 'r23', position: '1.6 -1 6.4', rotation: '0 156 0'},
        { ziel: 'r24', position: '-5 -1 7', rotation: '0 180 0'},
        { ziel: 'r25', position: '-6.9 -1 -0.5', rotation: '0 116 0'}
      ]
    },
    
    n22: {
      bild: 'assets/bilder/neubau/fluro2.jpg',
      rotation: "0 94 0",
      pfeile: [
        { ziel: 'n21_2', position: '0 -1 3.8', rotation: '0 180 0'},
        { ziel: 'r25', position: '2.2 -1 5.5', rotation: '0 155 0'},
        { ziel: 'r24', position: '-3 -1 6.5', rotation: '0 -155 0'},
        { ziel: 'haupteingang', position: '1.5 -1 -6.5', rotation: '0 0 0'} 
      ]
    },
    n22_2: {
      bild: 'assets/bilder/neubau/fluro2.jpg',
      rotation: "0 -86 0",
      pfeile: [
        { ziel: 'n21_2', position: '0 -1 -3.8', rotation: '0 0 0'},
        { ziel: 'r25', position: '-2.2 -1 -5.5', rotation: '0 -25 0'},
        { ziel: 'r24', position: '3 -1 -6.5', rotation: '0 25 0'},
        { ziel: 'haupteingang', position: '-1.5 -1 6.5', rotation: '0 180 0'},  
      ]
    },

    r12: {
      bild: 'assets/bilder/neubau/1.2.jpg',
      rotation: "0 -122 0",
      pfeile: [
        { ziel: 'n12', position: '0.5 -1 7', rotation: '1 -153 0'}
      ]
    },

    r13: {
      bild: 'assets/bilder/neubau/1.3.jpg',
      rotation: "0 -5 0",
      pfeile: [
        { ziel: 'n12', position: '5.5 -1 -6', rotation: '0 -40 0'}
      ]
    },

    r14: {
      bild: 'assets/bilder/neubau/1.4.jpg',
      rotation: "0 135 0",
      pfeile: [
        { ziel: 'n11', position: '-2 -1 -4', rotation: '0 -25 0'}
      ]
    },

    r21_1: {
      bild: 'assets/bilder/neubau/2.1.1.jpg',
      rotation: "0 94 0",
      pfeile: [
        { ziel: 'r21_2', position: '-0.45 -2 5', rotation: '0 176 0'},
        { ziel: 'n21_2', position: '8 -1 -3', rotation: '0 -90 0'},
        { ziel: 'r22_2', position: '5 -1 -4.5', rotation: '0 0 0'}
      ]
    },
    r21_2: {
      bild: 'assets/bilder/neubau/2.1.2.jpg',
      rotation: "0 33 0",
      pfeile: [
        { ziel: 'r21_1', position: '0.1 -2 4.2', rotation: '0 176 0'}
      ]
    },

    r22: {
      bild: 'assets/bilder/neubau/2.2.jpg',
      rotation: "0 158 0",
      pfeile: [
        { ziel: 'r21_1', position: '-3 -1 1.1', rotation: '0 93 0'},
        { ziel: 'r23', position: '3.7 -1 0.9', rotation: '0 -89 0'},
        { ziel: 'n21_2', position: '-0.7 -1 3.4', rotation: '0 184 0'}
      ]
    },
    r22_2: {
      bild: 'assets/bilder/neubau/2.2.jpg',
      rotation: "0 248 0",
      pfeile: [
        { ziel: 'r21_1', position: '1.2 -1 2.8', rotation: '0 183 0'},
        { ziel: 'r23', position: '1 -1 -3.5', rotation: '0 1 0'},
        { ziel: 'n21_2', position: '3.2 -1 0.7', rotation: '0 275 0'}
      ]
    },
    r22_3: {
      bild: 'assets/bilder/neubau/2.2.jpg',
      rotation: "0 64 0",
      pfeile: [
        { ziel: 'r21_1', position: '-0.9 -1 -2.8', rotation: '0 -1 0'},
        { ziel: 'r23', position: '-1 -1 3.5', rotation: '0 177 0'},
        { ziel: 'n21_2', position: '-3.2 -1 -0.7', rotation: '0 91 0'}
      ]
    },

    r23: {
      bild: 'assets/bilder/neubau/2.3.jpg',
      rotation: "0 -67 0",
      pfeile: [
        { ziel: 'n21_2', position: '0 -1 0', rotation: '0 0 0'},
        { ziel: 'r22_3', position: '0 -1 0', rotation: '0 0 0'},
        { ziel: 'n21', position: '0 -1 0', rotation: '0 0 0'}
      ]
    },

    r24: {
      bild: 'assets/bilder/neubau/2.4.jpg',
      rotation: "0 -88 0",
      pfeile: [
        { ziel: 'n22', position: '-6 -1 0.2', rotation: '0 89 0'}
      ]
    },

    r25: {
      bild: 'assets/bilder/neubau/2.5.jpg',
      rotation: "0 -128 0",
      pfeile: [
        { ziel: 'n22', position: '2.5 -1 6.5', rotation: '0 -150 0'}
      ]
    }
  
  };

//Etagen zu den entsprechenden Grundrissbildern
    const Grundriss = {
      'draussen': 'assets/bilder/grundrissdraussen.png',
      '0': 'assets/bilder/grundriss0.png',
      '1': 'assets/bilder/grundriss1.png',
      '2': 'assets/bilder/grundriss2.png',
      '3': 'assets/bilder/grundriss3.png',
      'neubau1': 'assets/bilder/grundrissneubau1.png',
      'neubau2': 'assets/bilder/grundrissneubau2.png'
    };
 

function oeffneGrundriss() {
  const container = document.getElementById("grundriss-container"); 
  container.setAttribute("visible", true);  
  document.querySelector("#punktGross").setAttribute("visible", true);
}

 
function schliesseGrundriss() {
  const container = document.getElementById("grundriss-container");
  container.setAttribute("visible", false);
  document.querySelector("#punktGross").setAttribute("visible", false);

  // Hotspot-Container entfernen (sofern vorhanden)
  let hotspotContainer = document.getElementById("hotspot-container");
  if (hotspotContainer) {
    hotspotContainer.parentNode.removeChild(hotspotContainer);
  }
}

// Wechselt Grundriss zur gewählten Etage
function wechsleEtage(etage) {
  console.log("wechsleEtage aufgerufen mit Etage:", etage);
  const grundrissBild = document.getElementById("grundriss-bild");
  
  if (!grundrissBild) {
    console.error("Grundriss-Bild nicht gefunden!");
    return;}
  grundrissBild.setAttribute("src", Grundriss[etage]);

  const punktGross = document.getElementById("punktGross");
  
  // Nur wenn die ausgewählte Etage der aktuellen Etage entspricht, anzeigen:
  if (aktuelleEtage === etage) {
    punktGross.setAttribute("visible", true);
  } else {
    punktGross.setAttribute("visible", false);
  }

  // Neue klickbare Flächen für gewählte Etage laden
  ladeKlickbareZonen(etage);
}

//alle raume zuordnen
const raumHotspots = {
  draussen: [
    { raum: "haupteingang", position: "-0.4 -0.95 0.05", size: "0.5 0.14" },
    { raum: "treppe01", position: "-0.4 -0.7 0.05", size: "0.9 0.35" },
    { raum: "n11", position: "-0.05 -1.15 0.05", size: "0.32 0.3" }
  ],
  1: [
    { raum: "r101", position: "-0.83 -0.7 0.05", size: "0.23 0.29" },
    { raum: "r102", position: "-0.6 -0.7 0.05", size: "0.23 0.29"  },
    { raum: "r103", position: "-0.35 -0.7 0.05", size: "0.25 0.29"  },
    { raum: "r104", position: "-0.05 -0.7 0.05", size: "0.27 0.29"  },
    { raum: "r105", position: "0.49 -0.7 0.05", size: "0.29 0.29"  },
    { raum: "r106", position: "0.8 -0.7 0.05", size: "0.26 0.29" },
    { raum: "r108", position: "0.78 -1.32 0.05", size: "0.34 0.3" },
    { raum: "r109", position: "0.45 -1.32 0.05", size: "0.26 0.3" },
    { raum: "r117", position: "-0.85 -1.32 0.05", size: "0.23 0.3" },
    { raum: "treppeE1", position: "0.2 -1.27 0.05", size: "0.25 0.4" },
    { raum: "treppchenE1", position: "-0.65 -1.32 0.05", size: "0.12 0.3" }
  ],
  2: [
    { raum: "r201", position: "-0.83 -0.7 0.05", size: "0.26 0.29" },
    { raum: "r202", position: "-0.52 -0.7 0.05", size: "0.26 0.29" },
    { raum: "r203", position: "-0.25 -0.7 0.05", size: "0.26 0.29" },
    { raum: "r204", position: "0.12 -0.7 0.05", size: "0.4 0.29" },
    { raum: "r207", position: "0.5 -0.7 0.05", size: "0.3 0.29" },
    { raum: "r208", position: "0.8 -0.7 0.05", size: "0.27 0.29" },
    { raum: "r210", position: "0.79 -1.32 0.05", size: "0.34 0.3" },
    { raum: "r212", position: "-0.05 -1.32 0.05", size: "0.23 0.3" },
    { raum: "r220", position: "-0.83 -1.32 0.05", size: "0.25 0.3" },
    { raum: "r221", position: "-0.88 -1 0.05", size: "0.15 0.29" },
    { raum: "treppeE2", position: "0.2 -1.29 0.05", size: "0.25 0.4" },
    { raum: "treppchenE2", position: "-0.65 -1.32 0.05", size: "0.12 0.3" }
  ],
  3: [
    { raum: "r301", position: "-0.84 -0.7 0.05", size: "0.22 0.29" },
    { raum: "r302", position: "-0.61 -0.7 0.05", size: "0.23 0.29" },
    { raum: "r303", position: "-0.35 -0.7 0.05", size: "0.27 0.29" },
    { raum: "r304", position: "-0.05 -0.7 0.05", size: "0.26 0.29" },
    { raum: "r306", position: "0.5 -0.7 0.05", size: "0.3 0.29" },
    { raum: "r308", position: "0.5 -1.32 0.05", size: "0.29 0.3" },
    { raum: "r309", position: "-0.05 -1.32 0.05", size: "0.27 0.3" },
    { raum: "r310", position: "-0.3 -1.32 0.05", size: "0.21 0.3" },
    { raum: "r315", position: "-0.84 -1.32 0.05", size: "0.23 0.29" },
    { raum: "Aula_1", position: "0.82 -1 0.05", size: "0.28 0.9" },
    { raum: "treppeE3", position: "0.2 -1.29 0.05", size: "0.24 0.4" },
    { raum: "treppchenE3", position: "-0.66 -1.32 0.05", size: "0.12 0.3" }
  ],
  0: [
    { raum: "r001", position: "-0.82 -0.7 0.05", size: "0.26 0.29" },
    { raum: "r004", position: "-0.25 -0.7 0.05", size: "0.27 0.29" },
    { raum: "r005", position: "0.04 -0.7 0.05", size: "0.27 0.29" },
    { raum: "r007", position: "0.5 -0.7 0.05", size: "0.28 0.29" },
    { raum: "r008", position: "0.8 -0.7 0.05", size: "0.28 0.29" },
    { raum: "r009", position: "0.85 -1 0.05", size: "0.2 0.28" },
    { raum: "r010", position: "0.79 -1.31 0.05", size: "0.35 0.31" },
    { raum: "r011", position: "0.46 -1.31 0.05", size: "0.27 0.31" },
    { raum: "r021", position: "-0.84 -1.31 0.05", size: "0.22 0.31" },
    { raum: "treppeK", position: "0.2 -1.27 0.05", size: "0.22 0.4" },
    { raum: "treppchenK", position: "-0.65 -1.31 0.05", size: "0.14 0.31" }
  ],
  neubau1: [
    { raum: "n11", position: "0.1 -1.19 0.05", size: "0.32 0.58" },
    { raum: "n12", position: "-0.4 -0.95 0.05", size: "0.5 0.11" },
    { raum: "r12", position: "-0.21 -0.71 0.05", size: "0.48 0.35" },
    { raum: "r13", position: "0.32 -0.71 0.05", size: "0.54 0.35" },
    { raum: "r14", position: "0.45 -1.19 0.05", size: "0.34 0.58" }
  ],
  neubau2: [
    { raum: "n21", position: "0.1 -1.19 0.05", size: "0.32 0.58" },
    { raum: "r21", position: "-0.21 -0.71 0.05", size: "0.48 0.35" },
    { raum: "r22", position: "0.32 -0.71 0.05", size: "0.54 0.35" },
    { raum: "r23", position: "0.32 -0.71 0.05", size: "0.54 0.35"  },
    { raum: "r24", position: "0.45 -1.19 0.05", size: "0.34 0.58" },
    { raum: "r25", position: "0.45 -1.19 0.05", size: "0.34 0.58" }
  ]
};


function ladeKlickbareZonen(etage) {
  // Container für Hotspots holen oder erstellen
  let hotspotContainer = document.getElementById("hotspot-container");
  if (!hotspotContainer) {
    hotspotContainer = document.createElement("a-entity");
    hotspotContainer.setAttribute("id", "hotspot-container");
    document.getElementById("grundriss-container").appendChild(hotspotContainer);
  }

  // Vorherige Hotspots entfernen
  while (hotspotContainer.firstChild) {
    hotspotContainer.removeChild(hotspotContainer.firstChild);
  }

  // Hotspots der gewählten Etage laden
  const hotspots = raumHotspots[etage] || [];
  hotspots.forEach((spot) => {
    const hotspot = document.createElement("a-plane");

    hotspot.setAttribute("position", spot.position);
    hotspot.setAttribute("width", spot.size.split(" ")[0]);
    hotspot.setAttribute("height", spot.size.split(" ")[1]);
    hotspot.setAttribute("material", "opacity: 0; color: yellow; transparent: true;");//opacity 0.2
    hotspot.setAttribute("class", "clickable");

    // Bei Klick wird der Raum geladen
    hotspot.addEventListener("click", () => {
      ladeRaum(spot.raum);  // Wechsel zum Raum
      schliesseGrundriss(); // Grundriss schließen
    });

    hotspotContainer.appendChild(hotspot);
  });
}


  function ladeGrundriss(etage) {
    const GrundrissImage = document.getElementById('Grundriss');

    if (Grundriss[etage]) {
      console.log("Wechsel zu Etage:", Grundriss[etage]);
      GrundrissImage.setAttribute('src', Grundriss[etage]);
    } else {
      console.error("Kein Grundriss für Etage", etage, "gefunden!");
    }
  }
  

  function ladeRaum(raum) {
    console.log("Wechsel Raum:", raeume[raum]);
    aktuelleEtage = raeume[raum].etage;

    //vorherige Pfeile entfernt 
    document.querySelectorAll('.pfeil').forEach((el) => el.remove());
       
    // Setze die Rotation zuerst
    const camera = document.querySelector('a-camera');
    const sky = document.querySelector('a-sky');
    sky.setAttribute('rotation', raeume[raum].rotation || "0 0 0");

    camera.removeAttribute('look-controls');    //lookcontrol aus, damit Rotation nicht überschrieben wird
    camera.setAttribute('rotation', raeume[raum].rotation);  
     setTimeout(() => {
      camera.setAttribute('look-controls', 'enabled: true');
    }, 50);


    sky.setAttribute('src', raeume[raum].bild);
    console.log("Bild geladen:", raeume[raum].bild);

    // Aktualisiere den Grundriss
    if (raeume[raum].etage) {
      ladeGrundriss(raeume[raum].etage);
    }
        
      
    // Neue Pfeile hinzufügen
    raeume[raum].pfeile.forEach((pfeil) => {
      // Pfeil (Dreieck) 
      const pfeilEl = document.createElement('a-entity');
      pfeilEl.setAttribute('geometry', 'primitive: triangle; vertexA: 0 -0.1 0; vertexB: -0.5 0 1; vertexC: 0.5 0 1');
      pfeilEl.setAttribute('material', 'color: white');
      pfeilEl.setAttribute('position', pfeil.position); 
      pfeilEl.setAttribute('rotation', pfeil.rotation);
      pfeilEl.setAttribute("data-ziel", pfeil.ziel);
      pfeilEl.setAttribute("class", "pfeil"); // Klasse sicher setzen

      //Interaktive Pfeile
      pfeilEl.setAttribute("cursor-listener", ""); 

      // Elemente zur Szene hinzufügen
      const scene = document.querySelector('a-scene');
      scene.appendChild(pfeilEl);
    });

    // Roter Punkt aktualisieren
    updatePunktPositions(raum);
  
  }

  // Hilfsfunktion zum Bewegen des Punktes
function bewegePunkt(punktId, position) {
  let punkt = document.querySelector(punktId);
  if (punkt && position) {
      let [x, y] = position.split(" ").map(Number);
      // Z-Wert beibehalten, indem wir die aktuelle Position holen
      let aktuellePosition = punkt.getAttribute("position"); // Gibt ein Objekt zurück { x, y, z }
      let z = aktuellePosition.z; // Z-Wert aus dem Objekt holen

      // Setze die neue Position
      punkt.setAttribute("position", { x: x, y: y, z: z }); 
    }
}

function updatePunktPositions(raum) {
  let roomData = raeume[raum];
  if (!roomData) {
      console.error("Raum nicht gefunden:", raum);
      return;
  }
  // Aktualisiere Punkt im kleinen/großen Grundriss
  bewegePunkt("#punktKlein", roomData.grundrissPosKlein);
  bewegePunkt("#punktGross", roomData.grundrissPosGross);
}

  
  // Startraum laden
  ladeRaum('haupteingang');
  