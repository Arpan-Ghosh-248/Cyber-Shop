import React from 'react'

function cart() {
    return (
        <>

    {/* <!-- Main Visual --> */}
    <section class="main-visual">
      <img class="top" src="img/tv pic top.svg" alt="" />
      <img id="sony" src="img/sony-256.png" />
  
  
  
      <div class="ad">
        <p class = "one">A NEW TV EXPERIENCE AWAKENS</p>
        <p class = "two">BRAVIA</p>
        <p class = "three">OLED</p>
      </div>
  
  
  
    </section>

    {/* <!-- Content --> */}
    <section class="content">
       

        <ul class="items">
          <li>
            <img src="img/sony tv.png" class="item-image" alt="" />
            <div class="info">
              <div class="name">Sony BROVIA X80J series 164cm (65 inch)
                Ultra HD 4k google smart
              </div>
              
              <div class="info-bottom">
                <div class="price">$380</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src="img/234479_2_mzgwn4-removebg-preview.jpg" class="item-image" alt="" />
            <div class="info">
              <div class="name">Samsung 579 Litres frost free digital
                inverter French door refrigerator
              </div>
              
              <div class="info-bottom">
                <div class="price">$1000</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

          <li>
            <img src="img/234257_ydifvx-removebg-preview-2.jpg" class="item-image" alt="" />
            <div class="info">
                <div class="name">Apple iPhone 12 mini (256GB ROM, 4GB
                    RAM, Purple  
                </div>
                <div class="info-bottom">
                    <div class="price">$1000</div>
                    <div class="number">
                        <span class="minus">－</span>
                        <span class="count">1</span>
                        <span class="plus">+</span>
                    </div>
                </div>
            </div>
        </li>

        <li>
            <img src="img/8941290029086-removebg-preview.jpg" class="item-image" alt="" />
            <div class="info">
              <div class="name">Samsung 28 Litres convection microwave
                Oven, black
              </div>
              
              <div class="info-bottom">
                <div class="price">$300</div>
                <div class="add">Add +</div>
              </div>
            </div>
          </li>

        </ul> 
    </section>
        </>
    )
}

export default cart
