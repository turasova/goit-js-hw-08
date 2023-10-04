import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line




const galleryList = document.querySelector('.gallery');


galleryList.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));



function createMarkup(arr) {
    return arr.map(({preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    ).join('');
}
console.dir(galleryList)

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
