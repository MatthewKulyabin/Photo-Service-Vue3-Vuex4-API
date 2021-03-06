import { createWebHistory, createRouter } from 'vue-router';

import Signup from '../views/Signup';
import Login from '../views/Login';
import Home from '../views/Home';
import Logout from '../views/Logout';
import AddPhoto from '../views/AddPhoto';
import Photo from '../views/Photo';
import PhotoDetail from '../views/PhotoDetail';
import User from '../views/User';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/add_photo',
    name: 'AddPhoto',
    component: AddPhoto
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/photo/detail',
    name: 'PhotoDetail',
    component: PhotoDetail
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
