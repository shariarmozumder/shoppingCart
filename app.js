
function updateProductNumber(product,price,isIncresing){
    const caseInput=document.getElementById(product + "-number");
    let productNumber= caseInput.value;
    if(isIncresing == true){
        productNumber=parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber=parseInt(productNumber) - 1;

    }
    caseInput.value=productNumber;
    //update  total
    const caseTotal=document.getElementById(product + "-total");
    caseTotal.innerText= productNumber * price;
    //calculate Total
    calculateTotal();
}
function getInputValue(product){
    const productInput=document.getElementById(product + "-number");
    const productNumber =parseInt(productInput.value);
    return productNumber;

}

function calculateTotal(){
    
    const phoneTotal=getInputValue("phone") * 1219;
    const caseTotal=getInputValue("case") * 59;
    const subTotal =phoneTotal + caseTotal;
    const tax=subTotal / 10;
    const totalPrice=subTotal + tax
    //update
    document.getElementById("sub-total").innerText=subTotal;
    document.getElementById("tax-amount").innerText=tax;
    document.getElementById("total-price").innerText=totalPrice;
    
}
//phone incresing decrease event
document.getElementById("phone-pluse").addEventListener("click", function(){
   updateProductNumber('phone',1219,true)
})

//phone minus
document.getElementById("phone-minus").addEventListener("click", function(){
    updateProductNumber('phone',1219,false)
})


//Handel Case Incresing decrease Events

document.getElementById("case-pluse").addEventListener("click", function(){
  updateProductNumber("case",59,true)
});
document.getElementById("case-minus").addEventListener("click", function(){
    updateProductNumber("case",59,false)
});