// fetch('/api')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     document.getElementById('root')
//       .innerHTML = data.message;
//   })
//   .catch(err => console.error(err));

import {Place} from './place.js'

const place = new Place(3, 'test', 'antwerp', 'flanders', 'bike', 'very nice', '../images/hubert-van-den-borre-unsplash.jpg');

const html = place.renderAll();
document.getElementById('places').appendChild(html);