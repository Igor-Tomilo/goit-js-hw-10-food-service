import galleryTemplate from '../template/gallery.hbs';
import menu from '../menu.json';
import refs from './refs.js';

const markup = galleryTemplate(menu);
refs.menu.insertAdjacentHTML('afterbegin', markup);

