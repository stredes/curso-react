const myPromises = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! yo quiero mi dinero !!
    //resolve(100);
    reject(`mi amigo se perdio`);
  }, 2000);
});

myPromises
  .then((myMoney) => {
    console.log(`tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log(`puedo seguir con mi vida`);
  });
