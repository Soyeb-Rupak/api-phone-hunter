const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones= data.data;
   displayPhones(phones)
}

const displayPhones = phones=>{
// console.log(abul);
const phoneContainer=document.getElementById('phone-container');
phoneContainer.textContent='';

const showAllContainner= document.getElementById('showAllbtn')

if(phones.length>12){
    showAllContainner.classList.remove('hidden')
}else{
    showAllContainner.classList.add('hidden')
}

phones=phones.slice(0,12);

phones.forEach(phone=>{
console.log(phone);
// -----step1: create a div
const phoneCard=document.createElement('div');
phoneCard.classList= `card mt-10 p-8 bg-gray-100 shadow-xl  `;
phoneCard.innerHTML= ` <figure><img src="${phone.image}" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">${phone.phone_name}</h2>
  <p>${phone.slug}</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>

`
phoneContainer.appendChild(phoneCard);


});
}

// Handle Search-----------Button

const handleSearch= ()=>{
const searchField=document.getElementById('search-field')
const searchText=searchField.value;
// console.log(searchText);  
loadPhones(searchText)


}


const handleSearch2= ()=>{
    const searchField2=document.getElementById('search-field2');
    const searchText2=searchField2.value;
    loadPhones(searchText2);}

loadPhones();