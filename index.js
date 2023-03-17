console.log('JS is Connected')

let pepperoniPizza = document.querySelector('#pizza1')

const pepperoni = () => {
    alert('Pepperoni is the best')
}

pepperoniPizza.addEventListener('mouseover', pepperoni)


let bbqPizza = document.querySelector('#pizza2')

const bbq = () => {
    alert('BBQ Chicken is god tier!')
}

bbqPizza.addEventListener('mouseover', bbq)











let hawaiianPizza = document.querySelector('#pizza3')

const hawaiian = () => {
    alert('Pineapple, it has the JUICE')
}

hawaiianPizza.addEventListener('mouseover', hawaiian)























let myForm = document.querySelector('form')

const suggestion = () => {

    event.preventDefault()

    alert('Good suggestion! But PINEAPPLE!!!')

}

myForm.addEventListener('submit', suggestion)