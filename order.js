let perfumes = [
    "Lancome: La Vie Est Belle",
    "Yves Saint Laurent: Black Opium",
    "Cartier: La Panthére",
    "Marc Jacobs: Perfect",
    "Jimmy Choo: Blossom",
    "Coach: Coach Dreams",
    "Escada: Flor Del Sol",
    "Burberry: Burberry Classic",
    "Tom Ford: Métallic",
    "Givenchy: L'interdit",
    "DKNY: Be Delicious",
    "Dolce & Gabbana: The One",
    "Armani: Code"
];

let prices = [
    "46",
    "55",
    "65",
    "50",
    "22",
    "31",
    "33",
    "20",
    "100",
    "42",
    "33",
    "52",
    "53"
];

let perfumeSelect = document.querySelector("#perfumeSelect");
for (let i = 0; i < perfumes.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = perfumes[i];
    perfumeSelect.appendChild(option);
}

let perfumeOrder = document.querySelector("#perfumeOrder");
perfumeOrder.addEventListener("submit", function (ev) {
    ev.preventDefault();
});

function showPrice() {
    let perfumeSelect = document.querySelector("#perfumeSelect");
    let perf = perfumeSelect.value;
    let showPrice = document.querySelector("#showPrice");
    for (let k = 0; k < prices.length; k++) {
        if (perf == k) {
            showPrice.value = prices[k];
        }
    }
}

perfumeSelect.addEventListener("change", showPrice);

function totalPrice() {
    let showTotal = document.querySelector("#showTotal");
    let amountInput = document.querySelector("#amountInput");
    let showPrice = document.querySelector("#showPrice");
    let priceNumber = parseInt(showPrice.value);
    let amountNumber = parseInt(amountInput.value);
    let total = priceNumber * amountNumber;

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {
        alert("You can buy maximum 10 products.")
        total = "0";
    } else if (amountNumber < 1) {
        alert("You need to buy minumum 1 product.")
    } 

    showTotal.value = total;
    }
    
   


let orderButton = document.querySelector("#orderButton");
orderButton.addEventListener("click", totalPrice);

orderButton.addEventListener("click", sendData);



function getData () {
   let input = document.querySelectorAll(".perfume-data");
  let data = {};
   for (let j = 0; j < input.length; j++) {
       data[input[j].name] = input[j].value;
    }
           
    
   return data;
}

function sendData (btn) {
    let input = document.querySelectorAll(".perfume-data");
    let data = getData();
    let fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    fetch("http://localhost:3000/perfumeOrders", fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    );
}

