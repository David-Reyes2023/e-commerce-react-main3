import basketImg from '../assets/ecomm-bag-icon.svg';

export default function Item ({image, title, category, price, wasPrice, discount, stars}){
    return (
      <div class="cs-item">
                  <a href="" class="cs-link">
                    <div class="cs-picture-group">
                      <img src={image} class="cs-picture"/>
                      <span class="cs-offer">-{discount}%</span>
                    </div>
                    <div class="cs-details">
                      <span class="cs-category">{category}</span>
                      <h3 class="cs-name">{title}</h3>
                      <div class="cs-actions">
                        <div class="cs-flex">
                          <span class="cs-price">${price} </span>
                          <span class="cs-was-price">${wasPrice}</span>
                          <div class="cs-stars">                          
                          </div>
                        </div>
                        <button class="cs-buy">
                          <img src={basketImg} class="cs-basket" />
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
    );  
  }