const ads = [
    { text: "Ad 1: Buy One Get One Free!", class: "ad1" },
    { text: "Ad 2: 50% Off All Items!", class: "ad2" },
    { text: "Ad 3: New Arrivals! Shop Now!", class: "ad3" }
];

let currentAdIndex = 0;

function showAd() {
    const adElement = document.getElementById('ad');
    adElement.className = '';
    adElement.classList.add(ads[currentAdIndex].class);
    adElement.textContent = ads[currentAdIndex].text;

   
    currentAdIndex = (currentAdIndex + 1) % ads.length;

    
    setTimeout(showAd, 3000);
}


showAd();
