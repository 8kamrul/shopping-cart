// Plus event handler for cart 1

const increaseBtn = document.getElementById("increaseNumber");
increaseBtn.addEventListener("click", function(){
    const input = document.getElementById("counter").value;
    const inputNumber = parseInt(input);
    document.getElementById("counter").value = inputNumber + 1 ;
    const totalInput = inputNumber + 1 ;
    // console.log(totalInput);
    // input.value = parseInt(input.value) + 1 ;
})

// Minus event handler for cart 1

const decreaseBtn = document.getElementById("decreaseNumber");
decreaseBtn.addEventListener("click", function(){
    const input = document.getElementById("counter").value;
    const inputNumber = parseInt(input);
    document.getElementById("counter").value = inputNumber - 1 ;
    const totalInput = inputNumber - 1 ;
    // console.log(totalInput);
})

// Plus event handler for cart 2
const increaseBtn2 =document.getElementById("increaseNumber2");
increaseBtn2.addEventListener("click", function(){
    const input2 = document.getElementById("counter2").value;
    const inputNumber2 = parseInt(input2);
    document.getElementById("counter2").value = inputNumber2 + 1;
    const totalInput2 = inputNumber2 + 1 ;
    // console.log(totalInput2);
})

// Minus event handler for cart 2

const decreaseBtn2 = document.getElementById("decreaseNumber2");
decreaseBtn2.addEventListener("click", function(){
    const input2 = document.getElementById("counter2").value;
    const inputNumber2 = parseInt(input2);
    document.getElementById("counter2").value = inputNumber2 - 1 ;
    const totalInput2 = inputNumber2 - 1 ;
    // console.log(totalInput2);
})

// Price Update increase quantity for cart 1

const priceBtn = document.getElementById("increaseNumber");
priceBtn.addEventListener("click", function(){
    document.getElementById("cart1Price").innerText = 1219;
    const price = document.getElementById("cart1Price").innerText;
    const priceNumber = parseFloat(price);
    // const singlePrice = 1219;
    const input = document.getElementById("counter").value;
    const inputNumber = parseInt(input);
    document.getElementById("counter").value = inputNumber;
    const totalInputPrice = inputNumber *  priceNumber;
    // console.log(totalInputPrice);
    document.getElementById("cart1Price").innerText = totalInputPrice ;

    document.getElementById("subTotal").innerText = 00;
    const subTotalAmount = document.getElementById("subTotal").innerText;
    const priceAmount = parseInt(subTotalAmount);
    // console.log(subTotalAmount);
    const amount = totalInputPrice + priceAmount ;
    document.getElementById("subTotal").innerText = amount ;
    // console.log(amount);
})

// Price Update decrease quantity for cart 1

const priceBtn2 = document.getElementById("decreaseNumber");
priceBtn2.addEventListener("click", function(){
    document.getElementById("cart1Price").innerText = 1219;
    const price = document.getElementById("cart1Price").innerText;
    const priceNumber = parseInt(price);

    const input = document.getElementById("counter").value;
    const inputNumber = parseInt(input);
    document.getElementById("counter").value = inputNumber;
    const totalInputPrice = inputNumber * priceNumber;
    document.getElementById("cart1Price").innerText = totalInputPrice ;

    document.getElementById("subTotal").innerText = 00;
    const subTotalAmount = document.getElementById("subTotal").innerText;
    const priceAmount = parseInt(subTotalAmount);
    // console.log(subTotalAmount);
    const amount = totalInputPrice + priceAmount ;
    document.getElementById("subTotal").innerText = amount ;
    // console.log(amount);

    
})

// Price Update increase quantity for cart 2
const priceBtn3 = document.getElementById("increaseNumber2");
priceBtn3.addEventListener("click", function(){
    document.getElementById("cart2Price").innerText = 59;
    const price = document.getElementById("cart2Price").innerText;
    const priceNumber = parseFloat(price);
    // console.log(priceNumber);
    // const singlePrice = 59;
    const input = document.getElementById("counter2").value;
    const inputNumber = parseInt(input);
    document.getElementById("counter2").value = inputNumber;
    const totalInputPrice = inputNumber *  priceNumber;
    // console.log(totalInputPrice);
    document.getElementById("cart2Price").innerText = totalInputPrice ;

    document.getElementById("subTotal").innerText = 00;
    const subTotalAmount = document.getElementById("subTotal").innerText;
    const priceAmount = parseInt(subTotalAmount);
    // console.log(subTotalAmount);
    const amount = totalInputPrice + priceAmount ;
    document.getElementById("subTotal").innerText = amount ;
    
})
// Price Update decrease quantity for cart 2
const priceBtn4 = document.getElementById("decreaseNumber2");
priceBtn4.addEventListener("click", function(){
    document.getElementById("cart2Price").innerText = 59;
    const price = document.getElementById("cart2Price").innerText;
    const priceNumber = parseFloat(price);
    // console.log(priceNumber);
    // const singlePrice = 59;
    const input2 = document.getElementById("counter2").value;
    const inputNumber2 = parseInt(input2);
    document.getElementById("counter2").value = inputNumber2;
    const totalInputPrice = inputNumber2 * priceNumber ;
    document.getElementById("cart2Price").innerText = totalInputPrice ;
})

