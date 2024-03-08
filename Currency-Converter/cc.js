const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const hide = document.querySelector(".Answer");
const show = document.querySelector(".submit");
const input = document.querySelector("input");
const dropdown = document.querySelectorAll(".dropdown select");
const from = document.querySelector(".from select");
const to = document.querySelector(".TO select");

for (let select of dropdown) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        select.append(newOption);
        if (select.name === "from" && code === "INR") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && code === "USD") {
            newOption.selected = "selected";
        }
    }
    select.addEventListener("change", (evt) => {
        changeFlag(evt.target);    // targetting the select tag when select was change    

    })
}
const changeFlag = (element) => {// element means selecte tag
    let code = element.value; // for get value of selected country 
    let countryCode = countryList[code];// for get country currency code of selected country
    let newImg = `https://flagsapi.com/${countryCode}/flat/64.png`;// for changing image when choose country
    let img = element.parentElement.querySelector("img");//access image tag
    img.src = newImg;//change the source of image when new country select
}

show.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amtval = input.value;
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        input.value = "1";
    }
    //   console.log(from.value, to.value);
    const URL = `${base_url}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    //   console.log(data);
    let rate = data[to.value.toLowerCase()];
    //   console.log(rate);
    let finalAmount = amtval * rate;
    console.log(finalAmount);
    hide.innerText = `${amtval}${from.value.toLowerCase()}=${finalAmount}${to.value.toLowerCase()}`;

    hide.classList.remove("hide");
});