class Result {
    static calculate(a,b,argument){
        switch (argument){
            case "+":
                return Number(a) + Number(b);
                break;
            case "-":
                return Number(a) - Number(b);
                break;
            case "x":
                return Number(a) * Number(b);
                break;
            case "/":
                return (Number(a) / Number(b)).toFixed(2);
                break;
        }
        // console.log(a,b,argument);
    }
}
class Run {
    constructor() {
        this.plus = document.querySelector(".plus").textContent;
        this.minus = document.querySelector(".minus").textContent;
        this.multiply = document.querySelector(".multiply").textContent;
        this.division = document.querySelector(".division").textContent;
        document.querySelector(".plus").addEventListener("click", () => {
            this.startCalc(this.plus);
        });
        document.querySelector(".minus").addEventListener("click", () => {
            this.startCalc(this.minus);
        });
        document.querySelector(".multiply").addEventListener("click", () => {
            this.startCalc(this.multiply);
        });
        document.querySelector(".division").addEventListener("click", () => {
            this.startCalc(this.division);
        });
    }
    startCalc(argument) {
        this.input1 = document.querySelector(".inputA").value;
        this.input2 = document.querySelector(".inputB").value;
        this.div = document.querySelector(".result");
        this.result = Result.calculate(this.input1,this.input2,argument);
        this.div.textContent = this.result;
        // console.log(this.result);
    }
}
const calculate = new Run();