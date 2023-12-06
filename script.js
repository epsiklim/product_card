class Product{
    imgLink;
    productName;
    productPrice;

    constructor(link, name, price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;

        const container = document.createElement("div");
        container.innerHTML = 
        `
            <img src="${this.imgLink}">
            <h5>${this.productName}</h5>
            <h5>${this.productPrice}</h5>
            <button>Buy</Button>
        `
        document.body.append(container);
    }
}