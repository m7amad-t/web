



document.body.innerHTML =`
<dialog id="done-pop">
    <p>
        you have inserted new information successfully.
    </p>

    <button id="close">X</button>
</dialog>

<div class="base-con">
  <div class="main-con">
    <form id="info-form">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" />
      <small id="name-req"></small>

      <br /><br />

      <label for="email">Email:</label>
      <input type="email" name="email" id="email" />
      <small id="email-req"></small>

      <br /><br />

      <label for="age">Age:</label>
      <input type="number" name="age" id="age" />
      <small id="age-req"></small>

      <br /><br />

      <input type="submit" value="Add Data" id="submit-b" />
    </form>
    <br /><br /><br />

    <div class="table-con">
      <table class="data-table" id="table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      
      </table>
    </div>
  </div>
</div>` ; 

// event listner for submition button
let submition = document.getElementById('info-form'); 

submition.addEventListener('submit' , function(event){
    event.preventDefault(); 
    console.log("starting the mission");
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    

    let table = document.getElementById('table'); 
   
    //its use for checking if any required fields are not inputed
    let isTrue = true; 


    let reqName = document.getElementById('name-req'); 
    let reqEmail = document.getElementById('email-req');
    let reqAge = document.getElementById('age-req'); 


    if(!name.value){
        reqName.innerHTML = 'Name is Required'; 
        isTrue = false; 
    }else {
        reqName.innerHTML = ''; 
    }
    
    if(!email.value){
        reqEmail.innerHTML = 'Email is Required'; 
        isTrue = false; 
    }else {
        reqEmail.innerHTML = '';
    }


    if(!age.value){
        reqAge.innerHTML = 'Age is Required'; 
        isTrue = false; 
    }else {
        if(age.value <= 0 ){
            reqAge.innerHTML = 'Age is out of range'; 
            isTrue = false; 
        }else {
            reqAge.innerHTML = ''; 
        }
    }

    if(!isTrue){
        return ; 
    }


    // show dialog tell the use that the information is added 
    document.getElementById('done-pop').showModal(); 

    // empty the fileds 
    
    table.innerHTML += `
    <tr>
              <td>${name.value}</td>
              <td>${email.value}</td>
              <td>${age.value}</td>
            </tr>
    `; 
    name.value = age.value = email.value= ''; 

});


let closeB = document.getElementById('close'); 

closeB.addEventListener('click' , function(event){
    document.getElementById('done-pop').close();  
});