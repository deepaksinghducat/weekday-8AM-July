

// async function fetchAllData()  {

//     let api = await fetch('https://restcountries.com/v3.1/all');
// }

// fetchAllData();


class Countries {

    // countries = []

     constructor() {
       this.getCountries();
    }

    getCountries = async () => {
        let response = await fetch('https://restcountries.com/v3.1/all');

        let countries = await response.json(); 

        this.render(countries)
    }

    getCountry = async (countryName) => {
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

        this.country = response.json();
    }

    render(countries) {
        const root = document.getElementById('root');

        for (const index in countries) {

            const prodEl = new Country(countries[index],index);

            const div = prodEl.render();

            root.append(div)
        }
    }
}

class Country {

    constructor(country,index) {
        this.country = country;

        this.index = index;
    }

    render() {
        const div = document.createElement('div');
        div.className = "card col-md-3"
        div.style.width = ""

        const img = document.createElement('img')
        img.className = "card-img-top"
        img.src = this.country.flags.svg;
        img.style.height = "200px"

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const h5 = document.createElement('h5');
        h5.className = "card-title";
        h5.innerHTML = "Common Name :" +this.country.name.common

        // const desciption = document.createElement('p');
        // desciption.className = "card-text";
        // desciption.innerHTML = this.product.desciption


        const button = document.createElement('button')
        button.id = `but-${this.index}`
        button.className = "btn btn-primary"
        button.innerHTML = "More Details"

        cardBody.append(h5);
        // cardBody.append(desciption)
        cardBody.append(button)

        div.append(img);
        div.append(cardBody);

        const buttonEl = document.querySelector("button");

        // if (buttonEl) {
        //     buttonEl.addEventListener('click', this.addToCart.bind(this))
        // }

        return div;
    }
}

const countries = new Countries();

// countries.render()