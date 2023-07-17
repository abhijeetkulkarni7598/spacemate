import React, { useState } from 'react'
import productApi from '../../API/productApi';
import '../service/Servicepg.css'

const Products = () => {
    const [serviceData, setServiceData] = useState(productApi)
    return (
      <div className="mt-5">
        <section className="services-main-container px-10">
          <div className="container service-container">
            <div className="section-head col-sm-12 px-5">
              <h4>
                <span>Our</span> Products
              </h4>
              <p>
                Spacemate is your young innovative designing partner. We believe
                in innovative design and the best quality. At Spacemate we
                provide you pocket friendly complete home interior solutions.
              </p>
            </div>
            <div className="row work-container-subdiv-service">
                {serviceData.map((curElem) => {
                    const {id, img, title, info} = curElem
                    return (
                        <>
                            <div className="col-12 col-lg-6 col-sm-6 work-container-subdiv-service-block">
                              <div className="item">
                                <span className="product-img">
                                  <img src={`/images/${img}`} alt="" />
                                </span>
                                <h2>{title}</h2>
                                <p className="main-hero-para-service w-100">
                                  {info}
                                </p>
                                { /*<button className="input-group-button__serv">Know More</button> */}
                              </div>
                            </div>
                        </>
                    )
                })}
                
            </div>
          </div>
        </section>
      </div>
    );
}

export default Products
