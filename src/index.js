class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}
 
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    };
 
 
    delete() {
 
 
    }
 
 
    appendNumber(number) {
        this.currentOperand = number
    }
 