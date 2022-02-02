<template>
  <form class="formbox">
    <div class="inputbox">
        <input class="errormesg" id="email" type="text" required>
        <span>Email Address</span>
        <p class="em"></p>
    </div>
    <div class="inputbox">
        <input class="errormesg" id="password" type="password" required>
        <span>Password</span>
        <p class="ps">(no space between characters,minimum length of password: 6)</p>
    </div>
    <button  class="conbtn"><p>Continue</p></button>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>