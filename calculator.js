document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button");
    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            switch (value) {
                case "AC":
                    expression = "";
                    break;
                case "Del":
                    expression = expression.slice(0, -1);
                    break;
                case "=":
                    try {
                        // Use eval to calculate the result
                        expression = eval(expression).toString();
                    } catch (e) {
                        expression = "Error";
                    }
                    break;
                default:
                    expression += value;
                    break;
            }

            display.textContent = expression || "0";
        });
    });
});
