function wechselRaum(bild) {

    document.querySelector('a-sky').set
    Attribute('src,bild')
  }
  
  //Raumdatenbank
  const raeume = {
    start: {
      bild: 'assets\bilder\haupteingang.jpg',
      pfeil:[
        {ziel:'haupteinganginnen', position: '0.03 0 -4.5', rotation:'0 0 0'},
        {ziel: 'neubau', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    haupteinganginnen: {
      bild: 'haupteinganginnen.jpg',
      pfeile: [
        { ziel: 'start', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'keller_3treppe', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: '1etage_treppe', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    //Keller
  
    keller_3treppe: {
      bild: 'keller_3treppe.jpg',
      pfeile: [
        { ziel: 'keller_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'keller_4', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'haupteinganginnen', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    keller_2: {
      bild: 'keller_2.jpg',
      pfeile: [
        { ziel: 'keller_1', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'keller_3treppe', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r011', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r007', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },
    
    r007: {
      bild: '007.jpg',
      pfeile: [
        { ziel: 'keller_2', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },
    r011: {
      bild: '011.jpg',
      pfeile: [
        { ziel: 'keller_2', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },

    keller_1: {
      bild: 'keller_1.jpg',
      pfeile: [
        { ziel: 'keller_2', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r008', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r009', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'r010', position: '-2 1 -4', rotation: '0 90 0'}
      ]
    },

    r008: {
      bild: 'keller_1.jpg',
      pfeile: [
        { ziel: '008', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },
    r009: {
      bild: '009.jpg',
      pfeile: [
        { ziel: 'keller_1', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },
    r010: {
      bild: '010.jpg',
      pfeile: [
        { ziel: 'keller_1', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },

    keller_4: {
      bild: 'keller_4.jpg',
      pfeile: [
        { ziel: 'keller_3', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r005', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'keller_5', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    r005: {
      bild: '004.jpg',
      pfeile: [
        { ziel: 'keller_1', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },

    keller_5: {
      bild: 'keller_5.jpg',
      pfeile: [
        { ziel: 'keller_4', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r004', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'keller_6', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    r004: {
      bild: '004.jpg',
      pfeile: [
        { ziel: 'keller_1', position: '0 1 -4', rotation: '0 180 0'},
      ]
    },
  
    keller_6: {
      bild: 'keller_6.jpg',
      pfeile: [
        { ziel: 'keller_5', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'keller_7', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },

    keller_7: {
      bild: 'keller_7.jpg',
      pfeile: [
        { ziel: 'keller_vor', position: '0 1 -4', rotation: '0 180 0'},
        { ziel: 'r001', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: 'keller_6', position: '-2 1 -4', rotation: '0 90 0'},
        { ziel: '1etage_treppchen', position: '-2 1 -4', rotation: '0 90 0'},
      ]
    },
  
  
  
  
  
  
  
  };
  