<template>
  <router-view/>
</template>

<style>
*{
  padding:0;
  margin: 0;
}
body{
  background:#FFFA65;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nprogress .bar {
  height:5.5em;
  background: #00a2ff !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #00a2ff, 0 0 5px #00a2ff;
}

#nprogress .spinner-icon {
  border-top-color: #00a2ff;
  border-left-color: #00a2ff;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
