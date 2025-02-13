 
  AFRAME.registerComponent('cursor-listener', {
    init: function () {
      console.log("cursor-listener hinzugefügt zu", this.el);  // Debugging
        this.el.addEventListener('click', () => {
            const zielRaum = this.el.getAttribute("data-ziel");
            console.log("Geklickter Pfeil, neuer Raum:", zielRaum);//Consolelog apäter entfernen
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
    pfeile:[
      {ziel:'treppe01', position: '0.2 0 -4.5', rotation:'0 0 0'},
      {ziel: 'neubau', position: '5 0 0', rotation: '0 0 0'}
    ]
  },

  treppe01: {
    bild: 'assets/bilder/treppe01.jpg', 
    rotation: "0 -138 0",
    pfeile: [
      { ziel: 'haupteingang', position: '0 -1 5', rotation: '0 180 0'},
      { ziel: 'treppeK', position: '2.5 -1 -3', rotation: '0 0 0'},
      { ziel: 'treppeE1', position: '-2.8 -1 -3', rotation: '0 0 0'}
    ]
  },

  //Keller

  treppeK: {
    bild: 'assets/bilder/keller/treppeK.jpg',
    rotation: "0 -48 0",
    pfeile: [
      { ziel: 'K2', position: '3.5 -1 -2.5', rotation: '0 -90 0'},
      { ziel: 'K4', position: '-3.5 -1 -2.5', rotation: '0 90 0'},
      { ziel: 'treppe01', position: '0 -1 5', rotation: '0 180 0'}
    ]
  },

  K2: {
    bild: 'assets/bilder/keller/K2.jpg',
    rotation: "0 25 0",
    pfeile: [
      { ziel: 'K1', position: '0.3 -0.5 -5', rotation: '0 -2 0'},
      { ziel: 'treppeK', position: '0.3 -1 6', rotation: '0 180 0'},
      { ziel: 'r011', position: '1.5 -1 3.5', rotation: '0 -210 0'},
      { ziel: 'r007', position: '-0.8 -1 -5', rotation: '0 -40 0'}
    ]
  },
  
  r007: {
    bild: 'assets/bilder/keller/007.jpg',
    rotation: "0 130 0",
    pfeile: [
      { ziel: 'K2', position: '2.5 -1 -6', rotation: '0 -20 0'},
    ]
  },
  r011: {
    bild: 'assets/bilder/keller/011.jpg',
    rotation: "0 20 0",
    pfeile: [
      { ziel: 'K2', position: '-1.6 -1 3.8', rotation: '0 170 0'},
    ]
  },

  K1: {
    bild: 'assets/bilder/keller/K1.jpg',
    rotation: "0 -20 0",
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
    pfeile: [
      { ziel: 'K1', position: '6.7 -1 6.5', rotation: '0 -90 0'}, //3.5 -1 2.5
      { ziel: 'r009', position: '4.5 -1 -6', rotation: '0 25 0'},
    ]
  },

  r009: {
    bild: 'assets/bilder/keller/009_1.jpg',
    rotation: "0 -138 0",
    pfeile: [
      { ziel: 'K1', position: '0 1 -4', rotation: '0 -90 0'},
      { ziel: 'r008', position: '0 1 -4', rotation: '0 180 0'},
      { ziel: 'r010', position: '0 1 -4', rotation: '0 180 0'},
    ]
  },

    r010: {
      bild: 'assets/bilder/keller/010.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'K1', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },

    K4: {
      bild: 'assets/bilder/keller/K4.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'K3', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r005', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'K5', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    r005: {
      bild: 'assets/bilder/keller/004.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'K1', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },

    K5: {
      bild: 'assets/bilder/keller/K5.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'K4', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r004', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'K6', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    r004: {
      bild: 'assets/bilder/keller/004.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'K1', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },
  
    K6: {
      bild: 'assets/bilder/keller/K6.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'K5', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'K7', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    K7: {
      bild: 'assets/bilder/keller/K7.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'r021', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r001', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'K6', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'treppchenE1', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    r021: {
      bild: 'assets/bilder/keller/021.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'K7', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },
  
  //1.Etage

    treppeE1: {
      bild: 'assets/bilder/1etage/treppeE1.jpg',
      rotation: "0 -138 0",
      pfeile: [
        { ziel: 'treppe01', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'treppe12', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'E11', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'E13', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },


  
  
  
  
  };

  function ladeRaum(raum) {

    //vorherige Pfeile entfernt 
    document.querySelectorAll('.pfeil').forEach((el) => el.remove());

    // Setze die Rotation zuerst
    const sky = document.querySelector('a-sky');
     sky.setAttribute('rotation', raeume[raum].rotation || "0 0 0");

    // Warte kurz, bevor das Bild geladen wird (damit Rotation zuerst greift)
    setTimeout(() => {
        sky.setAttribute('src', raeume[raum].bild);
        console.log("Bild geladen:", raeume[raum].bild);
    }, 100);  

    
    
      
    // Neue Pfeile hinzufügen
    setTimeout(() => {
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
  }, 200);
  }
  
  // Startraum laden
  ladeRaum('haupteingang');
  