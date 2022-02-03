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
  height:0.5em;
  background: #3d3d3d !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #3d3d3d, 0 0 5px #3d3d3d;
}

#nprogress .spinner-icon {
  border-top-color: #3d3d3d;
  border-left-color: #3d3d3d;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
