import axios from "axios";

let catalog = [
    {
        "title" : "Boot Band",
        "category" : "Band",
        "price" : 620.58,
        "image" : "boot bands.jpg",
        "_id" : "1",
    },
    {
        "title" : "Boot Blouse",
        "category" : "Blouse",
        "price" : 552.13,
        "image" : "blouse.jpg",
        "_id" : "2",
    },
    {
        "title" : "Boot Trousers",
        "category" : "Trouser",
        "price" : 479.84,
        "image" : "trousers.jpeg",
        "_id" : "3",
    },
    {
        "title" : "Boot Cover",
        "category" : "Cover",
        "price" : 210.99,
        "image" : "cover.jpg",
        "_id" : "4",
    },
    {
        "title" : "Boot Boots",
        "category" : "Boots",
        "price" : 990.67,
        "image" : "boots.jpg",
        "_id" : "5",
    },
    {
        "title" : "Boot Socks",
        "category" : "Socks",
        "price" : 100.37,
        "image" : "socks.webp",
        "_id" : "6",
    },
    {
        "title" : "Boot Skivvy Shirt and Shorts",
        "category" : "Underwear",
        "price" : 700.42,
        "image" : "underwear.jpg",
        "_id" : "7",
    },
];

class DataService{

    serverURL ="http:///127.0.0.1:5000";

    async getProducts()
    {
        //return catalog;
        //call the server by sending HTTP request with axios
        const response = await axios.get(this.serverURL + "/api/products");
        return response.data;
    }
    async saveProduct(product)
    {
    let response = await axios.post(this.serverURL + '/api/products', product);
    return response.data;
    }
}
export default DataService;
