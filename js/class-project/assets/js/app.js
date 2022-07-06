class ProductList {
  Products = [
    {
      image: 'assets/images/image1.jpg',
      title: "Office 1",
      desciption: "fasfasfasdfsadfas"
    },
    {
      image: 'assets/images/image2.jpg',
      title: "Office 2",
      desciption: "fasfasfasdfsadfas"
    },
    {
      image: 'assets/images/image1.jpg',
      title: "Office 3",
      desciption: "fasfasfasdfsadfas"
    },
    {
      image: 'assets/images/image2.jpg',
      title: "Office 4",
      desciption: "fasfasfasdfsadfas"
    },
  ]

  render() {
    const root = document.getElementById('app');

    for (const index in this.Products) {
      const prodEl = new Product(this.Products[index],index);

      const div = prodEl.render();

      root.append(div)
    }
  }
}

class Product {
  constructor(product,index) {
    this.product = product;
    this.index = index;
  }

  addToCart()  {
    console.log("add to cart working ");
    console.log(this.product);
  }

  render() {
    const div = document.createElement('div');
    div.className = "card"
    div.style.width = "18rem"

    const img = document.createElement('img')
    img.className = "card-img-top"
    img.src = this.product.image;
    img.style.height = "200px"

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const h5 = document.createElement('h5');
    h5.className = "card-title";
    h5.innerHTML = this.product.title

    const desciption = document.createElement('p');
    desciption.className = "card-text";
    desciption.innerHTML = this.product.desciption


    const button = document.createElement('button')
    button.id =  `but-${this.index}`
    button.className="btn btn-primary"
    button.innerHTML ="ADD TO CART"

    cardBody.append(h5);
    cardBody.append(desciption)
    cardBody.append(button)

    div.append(img);
    div.append(cardBody);

    const buttonEl = document.querySelector("button");

    if(buttonEl) {
      buttonEl.addEventListener('click' ,this.addToCart.bind(this))
    }
    
    return div;
  }
}

const productList = new ProductList();

productList.render();


