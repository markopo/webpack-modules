/**
 * Created by markopoikkimaki on 2017-10-04.
 */

import './css/image_viewer.css';

export default class ImageViewer {

    constructor() {
        this.image = document.createElement('img');
        this.image.src = 'http://lorempixel.com/640/640';

    }

    getImage() {
       return this.image;
    }

}