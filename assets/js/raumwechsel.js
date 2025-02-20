 
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

  
  
  //Raumdatenbank
  
  const  
    raeume = {
    haupteingang: {
      bild: 'assets/bilder/haupteingang.jpg',
      rotation: "0 -97 0",
      etage: '1',
      pfeile:[
        {ziel:'treppe01', position: '0.2 0 -4.5', rotation:'0 0 0'},
        {ziel: 'neubau', position: '5 0 0', rotation: '0 0 0'}
      ]
    },
    haupteingang_2: {
      bild: 'assets/bilder/haupteingang.jpg',
      rotation: "0 83 0",
      etage: '1',
      pfeile:[
        {ziel:'treppe01', position: '-0.2 0 4.5', rotation:'0 180 0'},
        {ziel: 'neubau', position: '-5 0 0', rotation: '0 180 0'}
      ]
    },

    treppe01: {
      bild: 'assets/bilder/treppe01.jpg', 
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'haupteingang', position: '0 -1 5', rotation: '0 180 0'},
        { ziel: 'treppeK', position: '2.5 -1 -3', rotation: '0 0 0'},
        { ziel: 'treppeE1', position: '-2.8 -1 -3', rotation: '0 0 0'}
      ]
    },
    treppe01_2: {
      bild: 'assets/bilder/treppe01.jpg', 
      rotation: "0 40 0",
      etage: '1',
      pfeile: [
        { ziel: 'haupteingang', position: '0 -1 -5', rotation: '0 0 0'},
        { ziel: 'treppeK', position: '-2.5 -1 3', rotation: '0 180 0'},
        { ziel: 'treppeE1', position: '2.8 -1 3', rotation: '0 180 0'}
      ]
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
      ]
    },
    treppeK_2: {
      bild: 'assets/bilder/keller/treppeK.jpg',
      rotation: "0 132 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '-3.5 -1 2', rotation: '0 90 0'},
        { ziel: 'K4', position: '3.5 -1 2', rotation: '0 -90 0'},
        { ziel: 'treppe01', position: '-1 -1 -5', rotation: '0 0 0'}
      ]
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
      ]
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
      ]
    },
    
    r007: {
      bild: 'assets/bilder/keller/007.jpg',
      rotation: "0 130 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '2.5 -1 -6', rotation: '0 -20 0'},
      ]
    },

    r011: {
      bild: 'assets/bilder/keller/011.jpg',
      rotation: "0 20 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '-1.6 -1 3.8', rotation: '0 170 0'},
      ]
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
      ]
    },
    K1_2: {                                       //nicht sicher, ob nötig - > Richtung
      bild: 'assets/bilder/keller/K1.jpg',
      rotation: "0 -20 0",
      etage: '0',
      pfeile: [
        { ziel: 'K2', position: '2 -1 5', rotation: '0 180 0'},
        { ziel: 'r008', position: '-6 -1 0.5', rotation: '0 90 0'},
        { ziel: 'r009', position: '2 -2 -3.5', rotation: '0 0 0'},
        { ziel: 'r010', position: '5 -1 -1', rotation: '0 -90 0'}
      ]
    },


    r008: {
      bild: 'assets/bilder/keller/008.jpg',
      rotation: "0 -33 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '6.7 -1 6.5', rotation: '0 -90 0'}, //3.5 -1 2.5
        { ziel: 'r009', position: '4.5 -1 -6', rotation: '0 25 0'},
      ]
    },

    r009: {
      bild: 'assets/bilder/keller/009_1.jpg',
      rotation: "0 135 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '-6 -2 2.5', rotation: '0 130 0'},
        { ziel: 'r008', position: '4 -1 0.7', rotation: '0 -70 0'},
        { ziel: 'r010', position: '-7 -1 3', rotation: '0 106 0'},
      ]
    },

    r010: {
      bild: 'assets/bilder/keller/010.jpg',
      rotation: "0 155 0",
      etage: '0',
      pfeile: [
        { ziel: 'K1', position: '-2.5 -1 6.7', rotation: '0 210 0'},
        { ziel: 'r009', position: '-3.4 -1 -6.2', rotation: '0 -20 0'},
      ]
    },

    K4: {
      bild: 'assets/bilder/keller/K4.jpg',
      rotation: "0 -115 0",
      etage: '0',
      pfeile: [
        { ziel: 'treppeK', position: '-0.1 -1 5', rotation: '0 180 0'},
        { ziel: 'r005', position: '1.7 -1 4', rotation: '0 155 0'},
        { ziel: 'K5', position: '0.1 -1 -5', rotation: '0 0 0'},
      ]
    },
    K4_2: {
      bild: 'assets/bilder/keller/K4.jpg',
      rotation: "0 65 0",
      etage: '0',
      pfeile: [
        { ziel: 'treppeK', position: '0.1 -1 -5', rotation: '0 0 0'},
        { ziel: 'r005', position: '-1.7 -1 -4', rotation: '0 -25 0'},
        { ziel: 'K5', position: '-0.1 -1 5', rotation: '0 180 0'},
      ]
    },

    r005: {
      bild: 'assets/bilder/keller/005.jpg',
      rotation: "0 -1 0",
      etage: '0',
      pfeile: [
        { ziel: 'K4', position: '6 -1 -3.8', rotation: '0 -91 0'},//6 -1 -4.3
      ]
    },

    K5: {
      bild: 'assets/bilder/keller/K5.jpg',
      rotation: "0 -115 0",
      etage: '0',
      pfeile: [
        { ziel: 'K4', position: '-0.1 -1 5', rotation: '0 180 0'},
        { ziel: 'r004', position: '1.4 -1 3', rotation: '0 155 0'},
        { ziel: 'K6', position: '0.1 -1 -5', rotation: '0 -1 0'},
      ]
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
      ]
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
      rotation: "0 0 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppe01', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppe12', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'E11', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'E13', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E11: {
      bild: 'assets/bilder/1etage/E11.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r105', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r106', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r108', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r109', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },
    E11_2: {
      bild: 'assets/bilder/1etage/E11.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r105', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r106', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r108', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r109', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r105: {
      bild: 'assets/bilder/1etage/105.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E1', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r106: {
      bild: 'assets/bilder/1etage/106.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E1', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r108: {
      bild: 'assets/bilder/1etage/108.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E1', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r109: {
      bild: 'assets/bilder/1etage/109.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E1', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    E13: {
      bild: 'assets/bilder/1etage/E13.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r104', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r105', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'rE14', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },
    E13_2: {
      bild: 'assets/bilder/1etage/E13.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'treppeE1', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r104', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r105', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'rE14', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r104: {
      bild: 'assets/bilder/1etage/104.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E13', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r103: {
      bild: 'assets/bilder/1etage/103.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E13', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    E14: {
      bild: 'assets/bilder/1etage/E14.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E13_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E15', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },
    E14_2: {
      bild: 'assets/bilder/1etage/E14.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E13', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E15', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    E15: {
      bild: 'assets/bilder/1etage/E15.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E14_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r102', position: '-2 1 -4', rotation: '0 90 0'}, 
        { ziel: 'E16', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },
    E15_2: {
      bild: 'assets/bilder/1etage/E15.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E14_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r102', position: '-2 1 -4', rotation: '0 90 0'}, 
        { ziel: 'E16', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r102: {
      bild: 'assets/bilder/1etage/102.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E15', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    E16: {
      bild: 'assets/bilder/1etage/E16.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E15', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppchenE1', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r101', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r117', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    treppchenE1: {
      bild: 'assets/bilder/1etage/treppchenE1.jpg',
      rotation: "0 -138 0",
      etage: '1',
      pfeile: [
        { ziel: 'E16', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppchenE2', position: '-2 1 -4', rotation: '0 90 0'}, 
        { ziel: 'K7', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },
  
    //2. Etage

    treppe12: {
      bild: 'assets/bilder/treppe12.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppe01', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppeE2', position: '-2 1 -4', rotation: '0 90 0'}        
      ]
    },

    treppeE2: {
      bild: 'assets/bilder/2etage/treppeE2.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppe23', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppe12', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'E22', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r210h', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r208', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r207', position: '-2 1 -4', rotation: '0 90 0'}        
      ]
    },
    
    r207: {
      bild: 'assets/bilder/2etage/207.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppeE2', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r208: {
      bild: 'assets/bilder/2etage/208.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppeE2', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r210h: {
      bild: 'assets/bilder/2etage/210h.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppeE2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r210', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r210: {
      bild: 'assets/bilder/2etage/210.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'r210h', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    E22: {
      bild: 'assets/bilder/2etage/E22.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppeE2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r204', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r212', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r213', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E22_2: {
      bild: 'assets/bilder/2etage/E22.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppeE2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r204', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r212', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r213', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r204: {
      bild: 'assets/bilder/2etage/204.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E22', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r212: {
      bild: 'assets/bilder/2etage/212.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E22', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r213: {
      bild: 'assets/bilder/2etage/213.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E22', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    E23: {
      bild: 'assets/bilder/2etage/E23.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E22_2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r203', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r203: {
      bild: 'assets/bilder/2etage/203.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    E23_2: {
      bild: 'assets/bilder/2etage/E23.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E22_2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r203', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E24: {
      bild: 'assets/bilder/2etage/E24.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E25', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r202', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E24_2: {
      bild: 'assets/bilder/2etage/E24.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E23_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E25', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r202', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r202: {
      bild: 'assets/bilder/2etage/202.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    E25: {
      bild: 'assets/bilder/2etage/E25.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E24_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppchenE2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r201', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r220', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r221', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r201: {
      bild: 'assets/bilder/2etage/201.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E25', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r220: {
      bild: 'assets/bilder/2etage/220.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E25', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    r221: {
      bild: 'assets/bilder/2etage/221.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'E25', position: '0 1 -4', rotation: '0 180 0'} 
      ]
    },

    treppchenE2: {
      bild: 'assets/bilder/treppchenE2.jpg',
      rotation: "0 -138 0",
      etage: '2',
      pfeile: [
        { ziel: 'treppchenE1', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppchenE3', position: '-2 1 -4', rotation: '0 90 0'}        
      ]
    },

    //3. Etage

    treppe23: {
      bild: 'assets/bilder/treppe23.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppe01', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppeE2', position: '-2 1 -4', rotation: '0 90 0'}        
      ]
    },

    treppeE3: {
      bild: 'assets/bilder/3etage/treppeE3.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppe23', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E31', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'E32', position: '-2 1 -4', rotation: '0 90 0'}        
      ]
    },

    E31: {
      bild: 'assets/bilder/3etage/E31.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppeE3', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r308', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'Aula_2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r306', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    Aula_2: {
      bild: 'assets/bilder/3etage/Aula_2.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E31', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'Aula_1', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    Aula_1: {
      bild: 'assets/bilder/3etage/Aula_1.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'Aula_2', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r308: {
      bild: 'assets/bilder/3etage/308.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E31', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r306: {
      bild: 'assets/bilder/3etage/306.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E31', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E33: {
      bild: 'assets/bilder/3etage/E33.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppeE3', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E34', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r304', position: '-2 1 -4', rotation: '0 90 0'},        
        { ziel: 'r309', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },
    E33_2: {
      bild: 'assets/bilder/3etage/E33.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'treppeE3', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E34', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r304', position: '-2 1 -4', rotation: '0 90 0'},        
        { ziel: 'r309', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },


    r304: {
      bild: 'assets/bilder/3etage/304.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E33', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r309: {
      bild: 'assets/bilder/3etage/309.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E33', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E34: {
      bild: 'assets/bilder/3etage/E34.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E35', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E33_2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r303', position: '-2 1 -4', rotation: '0 90 0'},        
        { ziel: 'r310', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E34_2: {
      bild: 'assets/bilder/3etage/E34.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E35', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E33_2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r303', position: '-2 1 -4', rotation: '0 90 0'},        
        { ziel: 'r310', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r303: {
      bild: 'assets/bilder/3etage/303.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E34', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r309: {
      bild: 'assets/bilder/3etage/309.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E34', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E35: {
      bild: 'assets/bilder/3etage/E35.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E34_2', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },
    E35_2: {
      bild: 'assets/bilder/3etage/E35.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'E34_2', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    E36: {
      bild: 'assets/bilder/3etage/E36.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E35_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppchenE3', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r301_1', position: '-2 1 -4', rotation: '0 90 0'},        
        { ziel: 'r315_2', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    treppchenE3: {
      bild: 'assets/bilder/3etage/treppchenE3.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppchenE2', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r301_1', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r315_2', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r301_1: {
      bild: 'assets/bilder/3etage/301_1.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r301_2', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    r301_2: {
      bild: 'assets/bilder/3etage/301_2.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'r301_1', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r315_2: {
      bild: 'assets/bilder/3etage/315_2.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'E36', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r315_1', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r315_1: {
      bild: 'assets/bilder/3etage/315_1.jpg',
      rotation: "0 -138 0",
      etage: '3',
      pfeile: [
        { ziel: 'r315_2', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },










  
  
  
  };


  function ladeGrundriss(etage) {
    const GrundrissImage = document.getElementById('Grundriss');
    console.log("Update floor plan for etage:", etage);
    
    //Etagen zu den entsprechenden Grundrissbildern
    const Grundriss = {
      '0': 'assets/bilder/grundriss0.png',
      '1': 'assets/bilder/grundriss1.png',
      '2': 'assets/bilder/grundriss2.png',
      '3': 'assets/bilder/grundriss3.png',
      '.1': 'assets/bilder/grundrissn1.png',
      '.2': 'assets/bilder/grundrissn2.png'
    };

    if (Grundriss[etage]) {
      console.log("Changing floor plan to:", Grundriss[etage]);
      GrundrissImage.setAttribute('src', Grundriss[etage]);
    } else {
      console.error("Kein Grundriss für Etage", etage, "gefunden!");
    }
  }
  
  


  function ladeRaum(raum) {
    
    //vorherige Pfeile entfernt 
    document.querySelectorAll('.pfeil').forEach((el) => el.remove());
    
    // Setze die Rotation zuerst
    const sky = document.querySelector('a-sky');
    sky.setAttribute('rotation', raeume[raum].rotation || "0 0 0");

     const camera = document.querySelector('a-camera');
     console.log("Kamera:", camera);   
   
     console.log(`Lade Raum: ${raum}, Setze Rotation: ${raeume[raum].rotation}`);
     camera.setAttribute('rotation', raeume[raum].rotation);

     console.log("Kamera:", camera);   


    // Warte kurz, bevor das Bild geladen wird (damit Rotation zuerst greift) -> set timeout
    
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
  
  }
  
  // Startraum laden
  ladeRaum('haupteingang');
  