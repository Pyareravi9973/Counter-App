let countValue=document.querySelector('#counter');

function decrement(){
    let value=parseInt(countValue.innerHTML);
    value=value-1;
    countValue.innerHTML=value;
};

function increment(){
    let value=parseInt(countValue.innerHTML);
    value=value+1;
    countValue.innerHTML=value;
};