import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";
import {useEffect, useState} from "react";

function Catalog(props){
    let [products, setProducts]= useState([]);
    const[categories,setCategories]= useState([]);
    const[prodsDisplay,setProdsDisplay]= useState([]);


    useEffect(function(){
        console.log("Component loaded");
        loadCatalog();
    },[]);

function loadCatalog(){
    let service = new DataService();
    let prods = service.getProducts();
    console.log(prods);
    setProducts(prods);
    let cats =["cover","boots","blouse","socks","trousers","boot bands","underwear",];
    setCategories(cats);
    setProdsDisplay(prods);
}
return(
    <div className="catalog">
            
            <h1>Check out our {products.length} products</h1>
            <br/>
            {categories.map(c=> <button key={c} onClick={() => filter(c)} className="btn btn-sm btn-primary btn-filter">{c}</button>)}
            <br/>
            {prodsDisplay.map(p => <Product key={p._id} data={p}/>)}
            <br/>
            <button onClick={clearFilter} className="btn bnt-small btn-dark btn-filter">Clear</button>
        </div>
    )

function clearFilter(){
    setProdsDisplay(products);
}

    function filter(category){
        console.log("filter clicked");
        let list = [];
    
        for(let i=0;i<products.length;i++)
        {
            let prod = products[i];
            if(prod.category === category)
            {
                list.push(prod);
            }
        }
        console.log(list);
    }
}

export default Catalog;