/**
 * Created by markopoikkimaki on 2017-10-04.
 */

import './css/image_viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

export default class ImageViewer {

    constructor() {
        this.image = document.createElement('img');
        this.image.src = small;

        this.image.addEventListener('click', (e) => {
             this.image.src = big;
        });

    }


    getImage() {
       return this.image;
    }

}