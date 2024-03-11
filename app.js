let toggleSwitch = document.getElementsByClassName('redButton')[0]

function go_to_1() {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    document.getElementById("outerContainer").style.backgroundColor = "#4A5B7E"
    document.getElementById("buttonContainer").style.backgroundColor = "#222D41"
    document.getElementById("legendTextContainer").style.color = "#ffffff"

}

function go_to_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#E5E5E5"
    document.getElementById("buttonContainer").style.backgroundColor = "#D3CCCA"
    document.getElementById("legendTextContainer").style.color = "#222222"
    
}

function go_to_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#000000"
    document.getElementById("buttonContainer").style.backgroundColor = "#444444"
    document.getElementById("legendTextContainer").style.color = "#E2D241"
    
}
  

const btns = document.querySelectorAll(".button");
const displayInput = document.querySelector("#inputDisplay");

let val = "";

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnVal = e.target.innerHTML;

        if (btnVal === "=") {
            try {
                // Check if the value is not empty before evaluation
                if (val !== "") {
                    val = eval(val);
                    displayInput.value = val;
                }
            } catch (error) {
                val = "";
                displayInput.value = "Error";
                console.error(error);
            }
        } else if (btnVal === "RESET") {
            val = "";
            displayInput.value = val;
        } else if (btnVal === "DEL") {
            val = val.slice(0, -1);
            displayInput.value = val;
        } else {
            val += btnVal;
            displayInput.value = val;
        }
    });
});

