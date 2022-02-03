import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Chatroom from '../views/Chatroom.vue';
import {auth} from '../includes/firebase';
import getUser from '../includes/getUser'
let {user}=getUser();

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to,from,next){
      user = auth.currentUser;
      if(user){
        next("/chatroom")
      }else{
        next()
      }
    }
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter(to,from,next){
      user = auth.currentUser;
      if(user){
        next();
      }else{
        next("/")
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
