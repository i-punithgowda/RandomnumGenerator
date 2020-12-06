const range=document.querySelector('.form-control');
const btn=document.querySelector('.btn');

// range.addEventListener('change',() =>{
// console.log(range.value);
// });


btn.addEventListener('click',e =>{
e.preventDefault();
const load=document.querySelector('.spinner-border');

const num=range.value;

// console.log(Math.floor(Math.random() * num ));
const rand = Math.floor(Math.random() * num );
const txtarea=document.querySelector('.rand');
txtarea.textContent=rand;




});
