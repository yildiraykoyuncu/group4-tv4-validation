export class List {
    list = [];
    item = null;
    url = null;

    constructor(item, url) {
        this.item = item;
        this.url = url;
        this.populate()
    }
//id, name, city, province, directions, discription, imgUrl
    async populate() {
        const Item = this.item;
        try {
            const response = await fetch(this.url);
            const data = await response.json()
            console.log(this.url)
            console.log('data---', data)
            data.forEach(el => {
                const name = el.name;
                const id = el.id;
                const city = el.city;
                const province = el.province;
                const directions = el.directions;
                const discription = el.discription;
                const imgUrl = el.imgUrl;
                const item = new Item(id, name, city, province, directions, discription, imgUrl);
                this.list.push(item)

            })
            this.render()

        } catch (err) {
            console.log(err)
        }
    }

    render() {
        this.list.forEach(item => {
            const renderedPlace = item.renderAll();
            document.getElementById('places').appendChild(renderedPlace);
        });

    }
}