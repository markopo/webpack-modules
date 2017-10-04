/**
 * Created by markopoikkimaki on 2017-09-03.
 */



import Mathematics from './sum';
import ImageViewer from './image_viewer';


const imageGallery = document.querySelector('#image-gallery');

const iw = new ImageViewer();
const image = iw.getImage();
imageGallery.appendChild(image);


document.getElementById('btn').addEventListener('click', (e) => {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    document.getElementById('message').innerHTML = Mathematics.sum(a, b).toString();
});





