const addNewHandler = async (event) =>{
event.preventDefault()

const newPlace = {
 
  name: event.target.name.value,
  city: event.target.city.value,
  province: event.target.province.value,
  directions: event.target.directions.value,
  discription: event.target.discription.value,
  imgUrl: event.target.imgUrl.value

}
console.log(newPlace)

const res = await fetch('/api/places', {
  method: 'POST',
  body: JSON.stringify(newPlace),
  headers: {
      "Content-type": "application/json; charset=UTF-8"
                }
});

return res;

}

document.querySelector('form.form-container').addEventListener('submit', addNewHandler);

