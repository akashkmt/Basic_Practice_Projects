//Display Products on homepage

function displayProducts(products){
    document.getElementById('container').innerHTML='';

    products.forEach((element,index) => {
        var div = document.createElement('div');
        div.setAttribute('class','product');

        var image = document.createElement('img');
        image.setAttribute('src',element.image);
        image.setAttribute('class','productImage');

        var name = document.createElement('h4');
        name.innerText=element.title;
        name.setAttribute('class','name');

        var price = document.createElement('p');
        price.innerText=`$ ${element.price}`;

        var removeBtn = document.createElement('button');
        removeBtn.setAttribute('class','removeBtn');
        removeBtn.innerText='Remove';
        removeBtn.addEventListener('click', function (){
            products.splice(index,1);
            localStorage.setItem('fakeCart',JSON.stringify(cart));
            window.location.reload();
        })

        div.append(image, name, price, removeBtn);

        document.getElementById('container').append(div);
    });

}

function offer(){
    var code=document.getElementById('couponCode').value;
    if(code=='masai30'){
        var price=(totalPrice*70)/100;
        alert('Applied Successfully');
        document.getElementById('cartTotal').innerText='Total Payable Amount : '+price.toFixed(2);
        document.getElementById('couponCode').value='';
        localStorage.setItem('payablePrice',price);
    }
    else{
        alert('Invalid Promo Code');
    }
}

var cart = JSON.parse(localStorage.getItem('fakeCart'));

displayProducts(cart);
document.getElementById('cart-counter').innerText='Cart - Count : '+JSON.parse(localStorage.getItem('fakeCart')).length;

var totalPrice = cart.reduce((prev,cur)=>{
    return prev+cur.price;
},0);
// console.log(totalPrice);
document.getElementById('cartTotal').innerText='Total Payable Amount : '+totalPrice.toFixed(2);
localStorage.setItem('payablePrice',totalPrice);
