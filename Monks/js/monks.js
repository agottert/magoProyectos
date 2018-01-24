
window.setTimeout(
    () => {
        document.querySelectorAll('.monk')[0].style.display='none';
        document.querySelectorAll('.main')[0].style.opacity='1';
    },
    4000
);


const slides=['0px', '-750px', '-1400px','-2250px','-3100px','-4000px','-5000px','-6200px','-6200px','-7100px'];

let page=0;

const next=(number)=>{
    document.querySelectorAll('.container')[0].style.backgroundPositionX =slides[number];
    page=number;
    if(page===0){
        document.querySelectorAll('#btn-before')[0].style.display='none';
        document.querySelectorAll('.step0')[0].classList.remove('hidden'); 
        document.querySelectorAll('#btn0')[0].classList.add('whitebackground');

    }else{
        document.querySelectorAll('#btn-before')[0].style.display ='inline-block';
        document.querySelectorAll('#btn0')[0].classList.remove('whitebackground');

    }

    if(page===9){
        document.querySelectorAll('#btn-after')[0].style.display='none';
        document.querySelectorAll('.contact')[0].classList.remove('hidden');
        document.querySelectorAll('.step0')[0].classList.add('hidden'); 
        document.querySelectorAll('#btn9')[0].classList.add('whitebackground');
        
    }else{
        document.querySelectorAll('#btn-after')[0].style.display ='inline-block';
        document.querySelectorAll('.contact')[0].classList.add('hidden');
        document.querySelectorAll('#btn9')[0].classList.remove('whitebackground');

    }

    if(page===1){
        document.querySelectorAll('.step1')[0].classList.remove('hidden') 
        document.querySelectorAll('.step0')[0].classList.add('hidden'); 
        document.querySelectorAll('#btn1')[0].classList.add('whitebackground');
    }else{
        document.querySelectorAll('.step1')[0].classList.add('hidden');
        document.querySelectorAll('#btn1')[0].classList.remove('whitebackground');
    }

    if(page===2){
        document.querySelectorAll('.step2')[0].classList.remove('hidden');
        document.querySelectorAll('.step0')[0].classList.add('hidden');
        document.querySelectorAll('#btn2')[0].classList.add('whitebackground');

    }else{
        document.querySelectorAll('.step2')[0].classList.add('hidden');
        document.querySelectorAll('#btn2')[0].classList.remove('whitebackground');
    }
    if(page===3){
        document.querySelectorAll('.step3')[0].classList.remove('hidden');
        document.querySelectorAll('.step0')[0].classList.add('hidden');
        document.querySelectorAll('#btn3')[0].classList.add('whitebackground');
    }else{
        document.querySelectorAll('.step3')[0].classList.add('hidden');
        document.querySelectorAll('#btn3')[0].classList.remove('whitebackground');
    }

    if(page===4){
        document.querySelectorAll('.step4')[0].classList.remove('hidden');
        document.querySelectorAll('.step0')[0].classList.add('hidden');  
        document.querySelectorAll('#btn4')[0].classList.add('whitebackground');
    }else{
        document.querySelectorAll('.step4')[0].classList.add('hidden');
        document.querySelectorAll('#btn4')[0].classList.remove('whitebackground');
    }

    if(page===5){
        document.querySelectorAll('.step5')[0].classList.remove('hidden');
        document.querySelectorAll('.step0')[0].classList.add('hidden');  
        document.querySelectorAll('#btn5')[0].classList.add('whitebackground');
    }else{
        document.querySelectorAll('.step5')[0].classList.add('hidden');
        document.querySelectorAll('#btn5')[0].classList.remove('whitebackground');
    }

    if(page===6){
        document.querySelectorAll('.step6')[0].classList.remove('hidden');
        document.querySelectorAll('.step0')[0].classList.add('hidden');   
        document.querySelectorAll('#btn6')[0].classList.add('whitebackground');

    }else{
        document.querySelectorAll('.step6')[0].classList.add('hidden');
        document.querySelectorAll('#btn6')[0].classList.remove('whitebackground');
    }
    
    if(page===7){
        document.querySelectorAll('.step7')[0].classList.remove('hidden');
        document.querySelectorAll('.step0')[0].classList.add('hidden'); 
        document.querySelectorAll('#btn7')[0].classList.add('whitebackground');
    }else{
        document.querySelectorAll('.step7')[0].classList.add('hidden');
        document.querySelectorAll('#btn7')[0].classList.remove('whitebackground');
    }

    if(page===8){
        document.querySelectorAll('.step8')[0].classList.remove('hidden') 
        document.querySelectorAll('.step0')[0].classList.add('hidden');  
        document.querySelectorAll('#btn8')[0].classList.add('whitebackground');
    }else{
        document.querySelectorAll('.step8')[0].classList.add('hidden');
        document.querySelectorAll('#btn8')[0].classList.remove('whitebackground');
    }
 }

document.querySelectorAll('#btn-after')[0].addEventListener('click',()=>{    
    page=page+1;
    if (page>9){
        page=0;
    }
    next(page);
});
document.querySelectorAll('#btn-before')[0].addEventListener('click',()=>{    
    page=page-1;
    next(page);
});
document.querySelectorAll('#btn0')[0].addEventListener('click',()=>{
    next(0); 
});

document.querySelectorAll('#btn1')[0].addEventListener('click',()=>{
    next(1);
});
document.querySelectorAll('#btn2')[0].addEventListener('click',()=>{
    next(2);
});
document.querySelectorAll('#btn3')[0].addEventListener('click',()=>{
   next(3);
});
document.querySelectorAll('#btn4')[0].addEventListener('click',()=>{
   next(4); 
});
document.querySelectorAll('#btn5')[0].addEventListener('click',()=>{
    next(5);
});
document.querySelectorAll('#btn6')[0].addEventListener('click',()=>{
    next(6);
});
document.querySelectorAll('#btn7')[0].addEventListener('click',()=>{
    next(7);
});
document.querySelectorAll('#btn8')[0].addEventListener('click',()=>{
   next(8); 
});
document.querySelectorAll('#btn9')[0].addEventListener('click',()=>{
    next(9); 
 });
 
