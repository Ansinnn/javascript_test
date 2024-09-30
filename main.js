"use strict";

let resultNode = document.getElementById('result')

function Product(name, price){
  this.name = name
  this.price = price  
}

let products = [
  new Product('대뱃살', 3000),
  new Product('목살', 5000),
  new Product('배꼽살', 4000),
  new Product('중뱃살', 1000)
]

let totalPrice = 0

function selectTuna(products) {
  let sum = 0
  let result = []

  for(let i=0; i < products.length; i++) {
    let option = products[i]
    if(option.selected) {
      result += `<li>${option.text}</li>`
      sum += parseInt(option.value)
    }
    totalPrice = sum
  }
  resultNode.innerHTML = `<h3>선택한 상품</h3>
  <ul>${result}</ul>
  <h4>총액 : <span>${sum}</span></h4>` 
}

function payment() {
  if( totalPrice == 0){
    alert('결제할 상품을 선택해야 합니다.')
  } else {
    window.open('payment.html', '_blank','left=100,top=100,width=400,height=400')
  }
}

function getTotalPrice() {
  // console.log(totalPrice)
  return totalPrice
}





 
