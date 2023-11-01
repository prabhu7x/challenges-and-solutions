import React, { useEffect, useState } from "react";
import { images } from "../../images";
import data from "../../../build/product_data.json";
import { DataContext } from "../../Context/DataContext";

function ProductCard() {
  const [open_pre, setOpen_pre] = useState(false);
  const [mainPreview, setMainPreview] = useState(data[0].image);
  const [count, setCount] = useState(1);
  const { addToCart, increase_quantity, decrease_quantity,} = React.useContext(DataContext);

  const preview_count = data[0].previews.length - 1;
  const next = () => {
    if (count < preview_count) {
      setCount(count + 1);
      setMainPreview((prev_img) => data[0].previews[count + 1].path);
    }
  };
  const previous = () => {
    if (count > 0) {
      setCount(count - 1);
      setMainPreview((prev_img) => data[0].previews[count - 1].path);
    }
  };


  const handleButtonClick = (previewPath) => {
    setMainPreview(previewPath);
  };

  useEffect(() => {
    if (open_pre) {
      document.body.classList.add("open-preview");
    } else {
      document.body.classList.remove("open-preview");
    }
  }, [open_pre]);
  return (
    <main>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <article>
            <div className="preview">
              <img
                onClick={() => setOpen_pre(!open_pre)}
                src={mainPreview}
                alt={item.name}
              />
              <div className="navigation">
                <button
                  disabled={count === 0 ? true : false}
                  onClick={previous}
                  className="previous"
                >
                  <img src={images.previous} alt="previous" />
                </button>
                <button
                  disabled={count === preview_count ? true : false}
                  onClick={next}
                >
                  <img src={images.next} alt="next" />
                </button>
              </div>
            </div>
            <div className="preview_container">
              {/* thumbnails container */}
              {item.previews.map((preview) => (
                <button
                  key={preview.name}
                  onClick={() => handleButtonClick(preview.path)}
                  className={
                    mainPreview === preview.path ? "preview_active" : null
                  }
                >
                  <img src={preview.thumbnail} alt={preview.name} />
                </button>
              ))}
            </div>

            <div className="preview-only">
              <div className="preview-only-inner">
                <div className="navigation">
                  <button
                    disabled={count === 0 ? true : false}
                    onClick={previous}
                    className="previous"
                  >
                    <img src={images.previous} alt="previous" />
                  </button>
                  <button
                    disabled={count === preview_count ? true : false}
                    onClick={next}
                    className="next"
                  >
                    <img src={images.next} alt="next" />
                  </button>
                </div>
                <div className="overlay-content">
                  {data.map((item) => (
                    <React.Fragment key={item.id}>
                      <div className="full-main-preview">
                        <button
                          onClick={() => setOpen_pre(false)}
                          className="close"
                        >
                          <img src={images.close} alt="" />
                        </button>
                        <img className="main" src={mainPreview} alt="" />
                      </div>
                      <div className="full-preview-container preview_container">
                        {item.previews.map((item, index) => (
                          <React.Fragment key={item.name}>
                            <button
                              onClick={() => handleButtonClick(item.path)}
                              className={
                                mainPreview === item.path
                                  ? "preview_active"
                                  : null
                              }
                            >
                              <img src={item.thumbnail} alt={item.name} />
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <section>
            <h2>{item.brand.toUpperCase()}</h2>
            <h1 className="offer">{item.offer}</h1>
            <p>{item.description}</p>
            <div className="price">
              <h1>
                ${item.price}.00 <span>{item.discount}%</span>
              </h1>
              <h2>${item.actual_price}.00</h2>
            </div>
            <div className="add_to_cart">
              <div>
                <button onClick={()=>decrease_quantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>increase_quantity(item)}>+</button>
              </div>
              <button
                onClick={()=>addToCart(item)}
                className="cart_btn"
              >
                <img src={images.cart} alt="cart" />
                Add to cart
              </button>
            </div>
          </section>
        </React.Fragment>
      ))}
    </main>
  );
}

export default ProductCard;
