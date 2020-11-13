export class Place {
    constructor(id, name, city, province, directions, discription, imgUrl) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.province = province;
        this.directions = directions;
        this.discription = discription;
        this.imgUrl = imgUrl;
    }

    renderAll(){
      // div tag containing the card
      const div = document.createElement('div');
      div.classList.add("col-xs-12", "col-sm-4", "col-md-4", "col-lg-4")
      //link wrapping the card
      const link = document.createElement('a');
      link.href="./detail_place.html"
      //card wrapper
      const cardWrapper = document.createElement('div');
      cardWrapper.classList.add('card-wrapper');
      //img
      const img = document.createElement('img');
      img.classList.add("place-pic-style", "cards-info");
      img.src = this.imgUrl;
      img.alt = "brussels park";
      //place name
      const name = document.createElement('div');
      name.classList.add("place-name-style", "cards-info");
      name.innerText = this.name;
      //place location
      const location = document.createElement('div');
      location.classList.add("place-loc-style", "cards-info");
      location.innerHTML = `<i class="fas fa-map-marker"></i> ${this.city}`
      //put all together
      cardWrapper.append(img,name,location);
      link.appendChild(cardWrapper);
      div.appendChild(link);

      return div;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('content-mid-wrapper');

        const title = document.createElement('h3');
        title.textContent = this.name;

        const body = document.createElement('p');
        body.textContent = this.body;

        container.appendChild(title);
        container.appendChild(body);
        return container;
    }
}