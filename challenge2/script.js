const mainContainer = document.querySelector("main");
const equationField = document.querySelector("input");
const solveButton = document.querySelector("button");
const solutionDisplay = document.querySelector("h3");

solveButton.addEventListener("click", function () {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``;

    // Write your code here 👇

    let equationComponent = document.createElement("DIV")
    equationComponent.classList.add("equation-component")
    solutionDisplay.appendChild(equationComponent);
    let array = splitter(equationField.value).split(" ");


    let result = "";
    if (array.length % 2 == 0) {
        result = "error";
    } else {

        array[0] = Number(array[0]);
        let result = array[0];


        for (let index = 0; index < Math.floor(array.length / 2); index++) {
            // const element = array[index];
            array[2 * index + 2] = Number(array[2 * index + 2]);
            console.log(result)
            // while(array.length >= 3  ){


            switch (array[2 * index + 1]) {
                case "+":
                    result = result + array[2 * index + 2];
                    break;

                case "-":
                    result = result - array[2 * index + 2];
                    break;
                case "*":
                    result = result * array[2 * index + 2];
                    break;
                case "/":
                    result = result / array[2 * index + 2];
                    break;
                default:
                    result = "error";
                    break;
            }
            equationComponent.innerHTML = `${result}`;

        }

    }
})






function splitter(str) {

    let x = str.replace("-", " - ")
    x = x.replace("+", " + ")
    x = x.replace("/", " / ")
    x = x.replace("*", " * ")
    x = x.replace(/\s+/g, ' ').trim()


    return x
}



//         array[0] = Number(array[0]);
//         array[2] = Number(array[2]);

//     switch (array[1]) {
//         case "+":
//             result = array[0] + array[2];
//             break;

//         case "-":
//             result = array[0] - array[2];

//             break;
//         case "*":
//             result = array[0] * array[2];

//             break;
//         case "/":
//             result = array[0] / array[2];

//             break;
//         default:
//             result = "error";
//             break;
//     }

//     array[0] = result;
//     array.splice(2,1);
//     console.log(result)
// } }
// // console.log(str.slice(j, i))
// let subStr = str.slice(j, i).trim();
// newArray.push(subStr);
// newArray.push(str[i]);
// j = i + 1;
// let op = /([0 - 9])\ w + /;
// let j = 0;
// let newArray = tr.match(op)