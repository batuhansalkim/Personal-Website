import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from 'react'

function PricingCard() {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 50</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 75</p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Bussines -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default PricingCard