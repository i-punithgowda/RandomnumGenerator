const range=document.querySelector('.range');
const submit=document.querySelector('.submitBtn');
const rand=document.querySelector('.randomno');

// range.addEventListener('change', ()=>{
//     console.log(range.value);
// });

submit.addEventListener('click',e=>{
    e.preventDefault();

const num=range.value;
const randomNumber=Math.floor(Math.random() * num);
rand.textContent=randomNumber;
});