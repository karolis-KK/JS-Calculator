const container = document.getElementById("container");
const buttons = document.querySelectorAll("button");

let operator = "";
let numbers = [];
let answer;

function roundResult(value) {
    return Math.round(value * 10000000000) / 10000000000;
}

function calculate() {
    switch (operator) {
        case "+":
            answer = numbers[0] + numbers[1];
            break;
        case "-":
            answer = numbers[0] - numbers[1];
            break;
        case "/":
            answer = numbers[0] / numbers[1];
            break;
        case "*":
            answer = numbers[0] * numbers[1];
            break;
        case "%":
            answer = numbers[0] % numbers[1];
            break;
    }
    numbers = []
    container.textContent = roundResult(answer);
    operator = ""
}

buttons.forEach(button => {
    if (button.textContent === "0" || button.textContent === "1" || button.textContent === "2" || button.textContent === "3" || button.textContent === "4" || button.textContent === "5" || button.textContent === "6" || button.textContent === "7" || button.textContent === "8" || button.textContent === "9") {
        button.addEventListener("click", () => {
            if (parseFloat(container.textContent) === numbers[0]) {
                container.textContent = ""
            }
            container.textContent += button.textContent.toString()
        })      
    }
    else if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/" || button.textContent === "%" ) {
        button.addEventListener("click", () => {
            if (container.textContent != "") {
                operator = button.textContent.toString()
                numbers.push(parseFloat(container.textContent))
                console.log(numbers)
            }
        })
    }
    else {
        button.addEventListener("click", () => {
            switch (button.textContent) {
                case "+/-":
                    container.textContent = parseFloat(container.textContent) * (-1)
                    break;
                case ".":
                    if (!container.textContent.includes(".")) {
                        container.textContent += "."
                    }
                    break;
                case "=":
                    if (operator != "" && numbers.length > 0) {
                        numbers.push(parseFloat(container.textContent))
                    }
                    calculate()
                    break;
                case "Delete":
                    container.textContent = container.textContent.slice(0, container.textContent.length - 1)
                    break;
                case "AC":
                    container.textContent = ""
                    numbers = []
                    operator = ""
            }
        })
    }
})