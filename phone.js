const loadphone=async(searchText) =>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
 const data=await res.json();
 const phones =data.data;
 disolayPhone(phones);

}
const disolayPhone = phones =>{
    console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

    phones.forEach(phone =>{

        console.log(phone);
        const phoneCard=document.createElement('div');
        phoneCard.classList=(`card bg-base-100 w-96 shadow-xl`);
        phoneCard.innerHTML=`
         <figure>                                                                                       
     <img                                                                                       
             src="${phone.image}"    
             alt="Shoes" />                                                                     
 </figure>                                                                                      
 <div class="card-body">                                                                        
     <h2 class="card-title">${ phone.phone_name}</h2>                                                         
     <p>Welcome to my company.This is demo phone picture. </p>                                    
     <div class="card-actions justify-end">                                                     
         <button class="btn btn-primary">Buy Now</button>                                       
     </div>                                                                                     
 </div>                                                                                            
        `;
        phoneContainer.appendChild(phoneCard);

    })
}

const handleSearch =()=>{

    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    loadphone(searchText);


}

loadphone()