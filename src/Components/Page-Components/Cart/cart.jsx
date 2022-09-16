import React, { useState, useEffect } from "react";
import axios from "axios";

// import { FiShare2, FiStar } from "react-icons/fi";
const Cart = () => {
  const [Cart, setCart] = useState();
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    console.log(count + 1);
  };
  const decrease = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    axios
      .post("http://localhost:1337/api/carts?populate=*")
      .then((response) => {
        setCart(response.data.data);
      });
  }, []);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto">
          <table class="table-auto w-full text-left whitespace-no-wrap">
            {Cart?.map((val, i) => {
              return (
                <div key={i}>
                  <tbody>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <img
                          src={`http://localhost:1337${val.attributes.Image.data.attributes.formats.thumbnail.url}`}
                          className="h-full"
                          alt=""
                        />
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <div className="text-sm md:text-lg">
                          {val.attributes.subTitle}
                        </div>
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        ${val.attributes.price}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <div className="flex items-center">
                          {count}
                          <div className="grid text-4xl bg-red-300">
                            <button onClick={add} className="bg-green-300">
                              +
                            </button>
                            <button onClick={decrease} className="bg-blue-300">
                              -
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
