import "./admin.css";

function Admin() {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="forms-container">
        <div className="form">
          <h3>Create Product</h3>
          <div>
            <label className="form-label">Title</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label className="form-label">Category</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label className="form-label">Image</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label className="form-label">Price</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <button className="btn btn-dark">Save Product</button>
          </div>
        </div>
        <div className="form">
          <h3>Coupon</h3>

          <div>
            <label className="form-label">Code</label>
            <input type="text" className="form-control" />
          </div>
          <label className="form-label">Discount</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form">
          <h3>Donation</h3>
          <div class="dropdown">
  <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Charity
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#">Army</a></li>
    <li><a class="dropdown-item" href="#">Marines</a></li>
    <li><a class="dropdown-item" href="#">Navy</a></li>
    <li><a class="dropdown-item" href="#">Air Force</a></li>
    <li><a class="dropdown-item" href="#">Space Force</a></li>
  </ul>
</div>
        <div>
    <label className="form-label">Amount</label>
    <input type="number" className="form-control"/>
        </div>
</div>
      </div>
    </div>
  );
}

export default Admin;
