class PWAConfApp {
  constructor() {
    this.init();
  }

  async init() {
    this.registerSW();
  }


  async registerSW() {
    // if ("serviceWorker" in navigator) {
    //   try {
    //     await navigator.serviceWorker.register("./service-worker.js");
    //   } catch (e) {
    //     // console.log("Service worker is not supported");
    //     alert("Service worker is not supported");
    //     alert("ServiceWorker registeration failed. Sorry about that.");
    //   }
    // } else {
    //   document.querySelector('.alert').removeAttribute('hidden');
    // }


    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js');
    } else {
      console.log("Service worker is not supported");
    }
  }
}


window.addEventListener("load", (e) => {
  new PWAConfApp();
});