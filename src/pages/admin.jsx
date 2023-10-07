import DataService from "../services/dataService";
import "./admin.css";
import { useState } from 'react';



function Admin() {
  const[product, setProduct] = useState({});//go to globalstate for example how to make global variable
  const[coupon, setCoupon] = useState({});
  const[donation, setDonation] = useState({});

  const[allProducts, setAllProducts] = useState([]);
  const[allCoupons, setAllCoupons] = useState([]);
  const[allDonations, setAllDonations] = useState([]);


  
  function handleSaveProduct(){
    console.log(product);
    let fixedProd ={...product};
    fixedProd.price = parseFloat(fixedProd.price);
    let service = new DataService();
    service.saveProduct(fixedProd);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }
  
  function productChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    let copy = {...product};
    copy[name] = value;
    setProduct(copy);
    
  }
  
  function handleSaveCoupon(){
    console.log(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }
  
  function productCoupon(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    let copy = {...coupon};
    copy[name] = value;
    setCoupon(copy);
  }
  
  function handleSaveDonation(){
    console.log(donation);

    let copy = [...allDonations];
    copy.push(donation);
    setAllDonations(copy);
  }
  function productDonation(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    let copy = {...donation};
    copy[name] = value;
    setDonation(copy);
  }
  
  return(
    
    <div className="admin">
      <h1>Admin</h1>
      <div className="forms-container">
        <div className="form output-title">
          <h3>Create Product</h3>
          <div>
            <label className="form-label output">Title</label>
            <input
            
              type="text"
              onChange={productChange}
              name="title"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label output ">Category</label>
            <select
              class="form-select"
              aria-label="Small select example"
              onChange={productChange}
              name="category"
              className="form-control"
            >
              <option selected>Select what category your new product is please!</option>
              <option value="Boots">Boots</option>
            <option value="Cover">Cover</option>
            <option value="Blouse">Blouse</option>
            <option value="Boot Band">Band</option>
            <option value="Underwear">Skivvy Shirt and Shorts</option>
            <option value="Socks">Socks</option>
            <option value="Trousers">Trousers</option>
            </select>
            
          </div>
          <div>
            <label className="form-label output ">Image</label>
            <input
            
              type="text"
              onChange={productChange}
              name="image"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label output">Price</label>
            <input
              type="number"
              onChange={productChange}
              name="price"
              className="form-control"
            />
          </div>
          <div>
            <button onClick={handleSaveProduct} className="btn btn-dark output-save">
              Save Product
            </button>
          </div>

          <ul>
            {allProducts.map(prod => (<li key={prod.title} className="output" >{prod.title} - ${prod.price} </li>))}
          </ul>

        </div>
        <div className="form output-title">
          <h3>Coupon</h3>

          <div>
            <label className="form-label output">Code</label>
            <input
              type="text"
              onChange={productCoupon}
              name="code"
              className="form-control"
            />
          </div>
          <label className="form-label output">Discount</label>
          <input
            type="number"
            onChange={productCoupon}
            name="discount"
            className="form-control"
          />
          <button onClick={handleSaveCoupon} className="btn btn-dark output-save">
            Save Coupon
          </button>
          <ul>
            {allCoupons.map((c) => (<li key={c.code} className="output">{c.code} - ${c.discount} </li>))}
          </ul>
        </div>

        <div className="form">
          <div className="select-form output-title">
            <h3>Donation</h3>
            <select
              class="form-select"
              aria-label="Small select example"
              onChange={productDonation}
              name="donation"
            >
              <option selected>Choose the charity of your choice!</option>
              <option value="Army">Army</option>
              <option value="Marines">Marines</option>
              <option value="Air Force">Air Foce</option>
              <option value="Navy">Navy</option>
              <option value="Space Force">Space Foce</option>
            </select>
          </div>
          <div>
            <label className="form-label output">Amount</label>
            <input type="number" className="form-control" onChange={productDonation} name="amount"/>
            <button onClick={handleSaveDonation} className="btn btn-dark output-save">
              Save Charity
            </button>
            <ul>
            {allDonations.map((d) => (<li key={d.donation} className="output">{d.donation} - ${d.amount} </li>))}
          </ul>
          </div>
          
        </div>
        
      </div>
      <button type = "button" className="btn btn-success clear-button">Clear Cart</button>
    </div>
    
  );
}

export default Admin;
