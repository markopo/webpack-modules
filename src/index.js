/**
 * Created by markopoikkimaki on 2017-09-03.
 */




document.getElementById('btn').addEventListener('click', (e) => {
       e.preventDefault();


       System.import('./image_viewer').then((module) => {

           console.log(module);

           const iw = new module.default();
           const ig = document.querySelector('#image-gallery');
           const img = iw.getImage();
           ig.appendChild(img);

       });



});





