let heading = document.querySelector("h1")
let input = document.querySelector("input")

console.log(heading)
console.log(input)

let Text = "We Love Programming!";
let value = -1;
let speed = 3500;


input.addEventListener("click", () => {
    input.addEventListener("keypress", (event) => 
    {
        if (event.key == '8' || event.key == '5') 
        {
            clearInterval(IntervalSet)
            if (event.key == '8') {
                let placeholder = input.getAttribute("placeholder");
                if (placeholder <= 9) {
                    input.setAttribute("placeholder", `${++placeholder}`)
                    speed /= 1.75;
                }
            }

            else if (event.key == '5') {
                let placeholder = input.getAttribute("placeholder");
                if (placeholder > 1) {
                    input.setAttribute("placeholder", `${--placeholder}`)
                    speed *= 1.75;
                }
            }
            IntervalSet = setInterval(() => speedChecker(), speed);
            // setInterval(() => speedChecker, speed);
        }
    });
});

let IntervalSet = setInterval(() => speedChecker(), speed);
IntervalSet = setInterval(() => speedChecker(), speed);

let speedChecker = (check) => {
    if (value == Text.length - 1) {
        heading.innerText = `${Text.charAt(0)}`;
        value = 0
    }
    else {
        ++value;
        if (Text.charAt(value) == " ")
            heading.innerText += `\u00a0`;
        else
            heading.innerText += `${Text.charAt(value)}`;    
        console.log(heading.innerText)  
    }
}