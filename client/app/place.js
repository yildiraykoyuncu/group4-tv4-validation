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

    openDetailsHandler(event){
     const content = document.getElementById('content');
     content.innerHTML = '';
     const renderedPlace = this.renderDetail();
     content.appendChild(renderedPlace)
    }

    renderAll(){
      // div tag containing the card
      const div = document.createElement('div');
      div.classList.add("col-xs-12", "col-sm-4", "col-md-4", "col-lg-4")
      //link wrapping the card
      const link = document.createElement('a');
      link.href=`#`
      link.dataset.id = this.id;
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
      //link.appendChild(cardWrapper);
      div.appendChild(cardWrapper);
      div.addEventListener('click', this.openDetailsHandler.bind(this))

      return div;
    }

    renderDetail() {
       

        const containerDiv = document.createElement('div');
        containerDiv.classList.add("row", "center-xs", "center-sm", "start-md", "start-lg", "middle-xs", "middle-sm", "middle-md", "middle-lg")

        const textContainer = document.createElement('div');
        textContainer.classList.add("col-xs-12", "col-sm-12", "col-md-6", "col-lg-6");

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add("details");

        const name = document.createElement('h2');
        name.classList.add("place", "details-style");
        name.textContent = this.name;

        const location = document.createElement('div');
        location.classList.add("location", "details-style")
        location.innerHTML = `<i class="fas fa-map-marker"></i> ${this.city}`;

        const discription = document.createElement('p');
        discription.classList.add("description", "details-style");
        discription.textContent = this.discription;

        const directions = document.createElement('div');
        directions.classList.add("transport", "details-style")
        directions.innerHTML = `<i>To get to this place</i> <p>${this.directions}</p>`

        detailsDiv.append(name, location, discription, directions);
        textContainer.appendChild(detailsDiv)

        // img

        const imageContainer = document.createElement('div');
        imageContainer.classList.add("col-xs-12", "col-sm-12", "col-md-6", "col-lg-6");

        const imgDetailsDiv = document.createElement('div');
        imgDetailsDiv.classList.add("details");

        const img = document.createElement('img');
        img.classList.add("details-pic-style")
        img.src = this.imgUrl;
        img.alt = this.name;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add("content-buttons");

        buttonsDiv.innerHTML = `<a href="./all_places.html"><button>Back</button></a> <!--LINK TO TEST-->
                <button class="btn-cta">Next Place</button>`


        imgDetailsDiv.append(img, buttonsDiv);
        imageContainer.appendChild(imgDetailsDiv);

        containerDiv.append(textContainer, imageContainer);
       
        return containerDiv;
    }
}