function distributeGifts(packOfGifts, reindeers) {
    const nummberRegalo = packOfGifts.map(gift => gift.length);
    const pesoregalos = nummberRegalo.reduce((a,b) => a+ b);
    const numRenos = reindeers.map(reno => reno.length * 2);
    const pesoRenos = numRenos.reduce((a, b) => a + b);
    console.log(packOfGifts);
    console.log(nummberRegalo);
    console.log(pesoregalos);
    console.log(reindeers);
    console.log(numRenos);
    console.log(pesoRenos);
    
    return Math.floor(pesoRenos / pesoregalos);
  }


  const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2