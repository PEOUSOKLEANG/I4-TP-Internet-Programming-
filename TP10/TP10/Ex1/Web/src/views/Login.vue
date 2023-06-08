<script setup>
import { ref, inject } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const route = inject("router");

const user = ref({
  username: "",
  password: "",
});

const loginChecking = async (e) => {
  e.preventDefault();
  const url = "http://localhost:3001/user/login";
  try {
    const res = await axios.post(url, user.value);
    localStorage.setItem("token", res.data);
    route.push("/home");
  } catch (error) {
    console.log(error);
    alert(error.response.data);
  }
};
</script>


<template>
  <main>
    <!-- <TheWelcome /> -->
    <form
      action="#"
      @submit="loginChecking"
      class="text-[1.2rem] mt-10 lg:mt-0"
    >
      <center>
        <img src="../assets/images/girl.png" alt="Picture of boy">
      </center>

      <label for="username">Usename</label><br />
      <input
        type="text"
        v-model="user.username"
        id="username"
        class="input mb-4 text-black"
        placeholder="Your username"
      />
      <br />
      <label for="password">Password</label> <br />
      <input
        type="password"
        v-model="user.password"
        id="password"
        class="input text-black"
        placeholder="Your password"
      />
      <br />
      <center>
        <button
          type="submit"
          class="bg-[#1EB37C] hover:bg-[#13392C] rounded-lg text-white px-10 py-2 mt-5 w-full mb-4"
        >
          Login
        </button>
      </center>

      <p class="text-end">
        Forget <span><a href="#" class="text-[#00BD7E]">password?</a></span>
      </p>
    </form>
  </main>
</template>

<style>
.input {
  border-radius: 0.5rem;
  border-width: 2px;
  padding-left: 0.5rem;
  width: 100%;
  height: 2.5rem;
  margin-top: 2px;
}
</style>

