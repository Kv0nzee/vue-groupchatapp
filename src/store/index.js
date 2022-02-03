import { createStore } from 'vuex'
import {db,auth} from '../includes/firebase';
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email, payload.password,
      );

      await db.collection("users").doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        url: payload.url
      });

      await userCred.user.updateProfile({
        displayName: payload.name,
        photoURL:payload.url,
      });

    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
    },
  },
})
