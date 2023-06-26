import Image from "../../assets/image-product-desktop.jpg";

function Card() {
  return (
    <div className="container">
      <div className="main-box">
        <div className="card">
          <div className="left-box">
            <img src={Image} />
          </div>
          <div className="right-box">
            <div className="information">
              <div className="text-detail">
                <p>P E R F U M E</p>
              </div>
              <h1 className="w-700">
                Gabrielle <br /> Essence Eau <br /> De Parfum
              </h1>
              <div className="text-detail">
                <p>
                  A floral,solar and voluptuous <br /> interpretation composed
                  by <br /> Olivier Polge,PerFumer-Creator <br /> for the House
                  of CHANEL.
                </p>
              </div>
            </div>
            <div className="price">
            <h1>$149.99</h1> 
            <p>$̶1̶6̶9̶.̶9̶9̶</p>
            </div>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
