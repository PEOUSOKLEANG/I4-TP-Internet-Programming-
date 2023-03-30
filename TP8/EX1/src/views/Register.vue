<template>
  <div class="register">
    <div class="headerRegister">
      <h1>Sign Up</h1> 
      <p>Please fill in this from to create an account.</p>
      <hr> 
    </div>
    <div class="inputRegister">
      <label for="Email">Email</label> 
      <input type="text" placeholder="Email"> 
      <label for="Username">Username</label> 
      <input type="text" placeholder="Username">
      <label for="Firstname">Firstname</label>
      <input type="text" placeholder="Firstname">
      <label for="Lastname">Lastname</label>
      <input type="text" placeholder="Lastname"> 
      <label for="Password">Password</label>
      <input type="text" placeholder="Create your Password">

      <div>By creating an account you agree to our <span>Team & privacy.</span></div>
      <button>Sign Up</button>
      

    </div>
    

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .register {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    width:600px ;
    padding: 12px;
    flex-direction: column;
    box-shadow: 1px 1px 3px 3px;
    border: 2px solid black;
    gap: 10 px;
    
  }
  hr{
    min-width: 512px;
    
  }
  .inputRegister{
    display: flex;
    flex-direction:column ;
    gap: 10px;
  }
  input{
    min-width: 512px;
    height: 36px;
    font-size: 12px;
    background-color: rgb(182, 174, 174);
    border-radius: 3.6px;
    border: none;
  }
  label{
    font-size: 15px;
  }
  span{
    color: rgb(129, 236, 127);
  }
  button{
    min-width: 512px;
    height: 36px;
    border-radius: 3.6px;
    text-align:center;
    background-color: rgb(40, 237, 40);
    border: none;
  }
}
</style>
