const metody = [["Zwraca długość łancucha znaków","length"],
                ["Zwraca znak na danym indeksie","charAt"],
                ["Zwraca ascii znaku na danym indeksie", "charCodeAt"],
                ["Zwraca łancuch znaków z wielkich liter","toUpperCase"],
                ["Zwraca łańcuch znaków z małych liter","toLowerCase"],
                ["Zwraca indeks danej litery","indexOf"],
                ["Zwraca ostatni indeks danej litery","lastIndexOf"],
                ["Zwraca wycięty łańcuch znaków o danej długości od danego indeksu","substr"],
                ["Zwraca wycięty łańcuch znaków od danego indeksu do danego indeksu","substring"],
                ["Wydobywa fragment tablicy i zwraca go jako nową tablicę.","slice"],
                ["Zwraca nowy łanuch znaków w którym zmieniono wystąpienia pierwszego parametru na drugi parametr","replace"]]
let string = document.querySelector(".string").value
let arguments = document.querySelector(".arguments").value

const buttons = document.querySelector(".buttons")
const result = document.querySelector(".wynik")
const desc = document.querySelector(".opis")

createButtons();

function createButtons(){
    for (let i=0;i<metody.length;i++){
        const button = document.createElement("button")
        button.innerText = metody[i][1];
        button.type="button";
        button.className="btn btn-primary w-50";
        const x = i;
        button.addEventListener("click", buttonPress)
        button.addEventListener("click", function(){desc.innerText = metody[x][0]})
        buttons.appendChild(button)
    }}

function buttonPress(){
    
    string = document.querySelector(".string").value
    arguments = document.querySelector(".arguments").value
    arguments = arguments.split(",")
    const func = this.innerText
    if (func == "length")
        string = string[func]
    else
        string = string[func](arguments[0],arguments[1])
    result.innerText = string
}