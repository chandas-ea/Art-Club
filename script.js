var x=document.getElementById('wallet-price');

function price(){
    var pr=10;
    x.innerHTML=pr+" ETH";
}

function pricechange(){
    var pr=10;
    var y=document.getElementById('eth-price').textContent;
    var z=parseFloat(y);
    x.innerHTML=pr-z+"ETH";  
}