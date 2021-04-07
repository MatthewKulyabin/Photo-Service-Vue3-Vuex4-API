import { createApp } from 'vue';
import { createStore } from 'vuex';

import {
  postData,
  postPhoto,
  getData,
  inLocalStorage,
  outLocalStorage,
  changePhoto,
  getDetailData,
  deleteDetailData,
  searchData,
  shareDetailData
} from '../pureFunctions';

const URL_PATH = 'http://u104386.test-handyhost.ru/api';

export const store = createStore({
  state() {
    return {
      token: inLocalStorage('username') || '',
      photos: []
    };
  },
  getters: {
    username(state) {
      return state.username;
    },
    photos(state) {
      return state.photos;
    }
  },
  mutations: {
    saveUsername(state, payload) {
      state.username = payload.usernameText;
      state.result.username = state.username;
      return true;
    },
    saveToken(state, payload) {
      state.token = payload.token;
      inLocalStorage('username', payload.token);
    },
    deleteToken(state) {
      state.token = '';
      outLocalStorage('username');
    },
    savePhotos(state, payload) {
      state.photos.push(payload);
    },
    savePhoto(state, payload) {
      state.photo = payload;
    }
  },
  actions: {
    async signup(store, payload) {
      console.log('Sign Up', payload);
      postData(
        `${URL_PATH}/signup`,
        { 'Content-type': 'application/json' },
        { payload }
      ).then(data => {
        console.log(data);
      });
    },
    async login(store, payload) {
      console.log('Login', payload);
      postData(
        `${URL_PATH}/login`,
        { 'Content-type': 'application/json' },
        { payload }
      ).then(data => {
        console.log(data.token);
        store.commit('saveToken', data);
      });
    },
    async logout(store) {
      console.log(store.state.token);
      postData(`${URL_PATH}/logout`, {
        Authorization: 'Bearer ' + store.state.token
      }).then(data => {
        console.log(data);
        store.commit('deleteToken');
      });
    },
    async addPhoto(store, payload) {
      console.log(payload);
      postPhoto(`${URL_PATH}/photo`, store.state.token, {
        payload
      }).then(data => {
        console.log(data);
      });
    },
    async changePhoto(store, payload) {
      console.log(payload);
      changePhoto(`${URL_PATH}/photo/${payload.id}`, store.state.token, {
        payload
      }).then(data => {
        console.log(data);
      });
    },
    async getPhoto(store) {
      let photos = [];
      await getData(`${URL_PATH}/photo`, store.state.token).then(data => {
        console.log(data);
        photos.push(data);
      });
      return photos;
    },
    async getDetailPhoto(store, { id }) {
      console.log(id);
      let detailPhoto = null;
      await getDetailData(`${URL_PATH}/photo/${id}`, store.state.token, {
        id
      }).then(data => {
        detailPhoto = data;
      });
      return detailPhoto;
    },
    async deleteDetailPhoto(store, { id }) {
      console.log(id);
      await deleteDetailData(`${URL_PATH}/photo/${id}`, store.state.token, {
        id
      }).then(data => {
        console.log(data);
      });
    },
    async searchUser(store, { text }) {
      console.log(text);
      const newUrl = new URL(`${URL_PATH}/user`);
      const params = { search: text };
      newUrl.search = new URLSearchParams(params).toString();
      let users = null;
      await searchData(newUrl, store.state.token).then(data => {
        users = data;
      });
      return users;
    },
    async shareDetailPhoto(store, { userId, photoId }) {
      console.log(userId, photoId);
      await shareDetailData(
        `${URL_PATH}/user/${userId}/share`,
        store.state.token,
        {
          photoId
        }
      ).then(data => {
        if (data.existing_photos.length) {
          alert('This photo has been shared already to this person');
        } else {
          alert('Success');
        }
        console.log(data.existing_photos);
        console.log(data);
      });
    }
  }
});
