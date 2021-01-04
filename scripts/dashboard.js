var arrProducts = ["Nokia","Nokia 1"];

function show(){
    var tbody = document.getElementsByClassName('tbody');
    tbody[0].innerHTML = arrProducts.map((item) => {
        var index = arrProducts.indexOf(item);
        return `<tr>
                    <td class="name-product">${item}</td>
                    <td><a href="#" class="btn btn-success" onclick = 'editItem(${index})'>Edit</a>
                        <a href="#" class="btn btn-danger" onclick = 'deleteItem(${index})'>Delete</a></td>
                <tr>`
    }).join('');
    console.log(tbody[0].innerHTML);
}
function getValue(v){
    return v.trim();
}
function checkValue(v,arr){
    for (let value of arr) {
        if(value.toLowerCase()== v.toLowerCase())
            return true;
    }
    if(v.length == 0)
        return true;
    return false;
}
function addItem(){
    // debugger;
    var inputValue = document.getElementsByClassName('inputProducts')[0].value;
    var inputProducts = getValue(inputValue);
    // debugger;
    if(arrProducts.indexOf(inputProducts) != -1 || checkValue(inputProducts,arrProducts)){
        alert('Products is existing');
    } else {
        arrProducts.push(inputProducts);
        show();
    }
    document.getElementsByClassName('inputProducts')[0].value = '';
}
var btnAdd = document.getElementsByClassName('add')[0];
btnAdd.addEventListener('click',addItem);

function keypressHandler(event,i,v){
     var changeValue = event.target.value;
    var nameProduct = getValue(changeValue);
    if(arrProducts.indexOf(nameProduct) != -1 || checkValue(nameProduct,arrProducts)){
        alert('Products is existing');
        nameProduct = v;
    } else {
        arrProducts[i] = nameProduct;
        show();
    }
    var inputNameProducts = document.getElementsByClassName('name-product')[i];
    inputNameProducts.innerHTML = nameProduct;
}
function productChangeInput(i){
    var inputNameProducts = document.getElementsByClassName('name-product')[i];
    inputNameProducts.innerHTML = `<input type='text' onchange='keypressHandler(event,${i},"${inputNameProducts.innerHTML}")'>`;
    console.log(inputNameProducts);
}

function editItem(i){
    productChangeInput(i);
}

function deleteItem(i){
    arrProducts.splice(i,1);
    show();
}


function main(){
    show();
}
main();