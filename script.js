var cart = []
var newIndex = 0
if (localStorage.cartStringified) {
    cart = JSON.parse(localStorage.getItem('cartStringified'))
}


if (cart.length == '') {
    document.getElementById('noItem').style.display = 'block'
    noItem.innerHTML = `<p class = "alert alert-success text-center">
    
    no items added yet
    </p>`
}

function addItems(){
   
    

    
    var input1 = document.getElementById('product').value
    var input2 = document.getElementById('productDes').value
    
    var todoProduct = {
        productItem: input1,
        productDes: input2
    }

    if (input1 == '' || input2 == '') {
        document.getElementById('errorAlert').style.display = 'block'
        document.getElementById('noItem').style.display = 'none'
    }else {
        noItem.style.display = 'none'
        document.getElementById('errorAlert').style.display = 'none'
        cart.push(todoProduct)
        // console.log(cart);
        localStorage.setItem('cartStringified', JSON.stringify(cart))
        console.log(cart);
        document.getElementById('product').value = ''
        document.getElementById('productDes').value = ''
        show.innerHTML ='' 
        window.location.href = 'secondpage.html'
        displayItem()
          
        
    }
}

// function delCard(index){
//     alert('Are you sure')
    
//     cart.splice(index, 1)
//     console.log(cart);
//     displayItem()
// }
// 
// function delLast() {
//     cart.pop()
//     console.log(cart);
//     show.innerHTML = ''
//     displayItem()

// }

// function delFirst() {
//     cart.shift()
//     show.innerHTML = ''
//     displayItem()
// }

// function delAny(){
//     var delWhat = Number(prompt('Which number are you deleting'))
//     cart.splice(delWhat-1, 1)
//     alert('Are you sure')
//     show.innerHTML = ''
//     displayItem()
// }

// function edit(index){
//     newIndex = index
//     var itemValue = cart[newIndex];
//     document.getElementById('FirstProduct').value = itemValue;


// }

// function editItem(){
//     if (FirstProduct.value == '') {
//         document.getElementById('errorFirst').style.display = 'block'
        
//     }else {
//         document.getElementById('errorFirst').style.display = 'none'
//         var newEdit = document.getElementById('FirstProduct')
//         var newValue = newEdit.value
//         newEdit = cart[newIndex]
//         cart.splice(newIndex, 1, newValue)
//         // console.log(cart);
//         // FirstProduct.value = ''
//         // show.innerHTML ='' 
//         displayItem()
          
//     }
    
// }

// function delAll(){
//     var confirmation = confirm('Are you sure you want to delete. This action is irreversible')
//     console.log(confirmation);
//     show.innerHTML = ''
//     if (confirmation == true) {
//         cart.splice(0, cart.length)
//         displayItem()
//     }
// }

// function editAny(){
//     var editWhat = Number(prompt('Which number do you want to edit?'))
//     var toWhat = prompt('enter your new item')
//     cart[editWhat -1] = toWhat
//     show.innerHTML = ''
//     displayItem()
//     // cart.splice(0, 1, toWhat)
//     // show.innerHTML = ''
//     // displayItem()
// }











// function displayItem() {
// var reDirect = window.location.href = 'secondpage.html'

//     // page = reDirect
//     show.innerHTML = ""
//     for(i =0; i<cart.length; i++){
//         show.innerHTML += `
//         <div class="card" style="width: 23rem;">
//         <div class="card-body bg-dark">
//           <h5 class="card-title text-center text-light">Product: ${i+1}. ${product.value} </h5> <hr style = "color: white;">
//           <h5 class="card-title text-center text-light ">Description: ${cart[i].productDes}</h5> <hr style = "color: white;">
//           <div class = "d-flex gap-3 mt-5">
//             <button class="btn p-2 btn-sm btn-success  col-6" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "edit(${i})" >Edit</button>
//             <button class="btn p-2 btn-sm btn-danger  col" onclick=" delCard(${i})">Delete</button>
//           </div>

          
//         </div>
//       </div>
//         ` 
//    }
// }
      