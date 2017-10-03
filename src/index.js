/**
 * Created by markopoikkimaki on 2017-09-03.
 */

import Mathematics from './sum';


document.getElementById('btn').addEventListener('click', (e) => {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    document.getElementById('message').innerHTML = Mathematics.sum(a, b).toString();
});





