<template>
  <div class="register">
    <div class="inputRegister">
      <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/18-512.png">
      <label for="Username">Username</label> 
      <input type="text" placeholder="Entername">
      <label for="Password">Password</label>
      <input type="text" placeholder="Create your Password">
      <button>Sign Up</button>
    </div>
    <div class="btnText">Forgot <span>Password?</span></div>
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
    position: relative;
    /* background-color: rgb(16, 83, 141); */
  }
  img{
    width: 200px;
    height: 200px;
    margin: auto;
  }
  .inputRegister{
    display: flex;
    flex-direction:column ;
    gap: 12px;
  }
 
  input{
    min-width: 512px;
    font-size: 12px;
    height: 36px;
    background-color: rgb(182, 174, 174);
 
    border-radius: 3.6px;
    border: none;
  }
  label{
    font-size: 15px;
  }
  span{
    color: rgb(40, 237, 40);
  }
  button{
    min-width: 512px;
    height: 36px;
    border-radius: 3.6px;
    text-align:center;
    background-color: rgb(40, 237, 40);
    border: none;
  }
  .btnText{
    position: absolute;
    bottom: 0;
    right: 0%;
  }
}
</style>
