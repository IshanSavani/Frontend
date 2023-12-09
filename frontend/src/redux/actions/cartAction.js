import axios from "axios";
import Swal from "sweetalert2";
import { GETCART } from "../types/types";
import { showLoader } from "../../Components/loaderFunc";

export const getCartApi = () => {
  return (dispatch) => {
    showLoader(true);
    // axios
    //   .get(
    //     "https://cute-tan-drill-slip.cyclic.cloud/api/addtocart/get",
    //     JSON.parse(localStorage.getItem("authData"))
    //   )
    //   .then((resp) => {
    //     dispatch({ type: GETCART, resp: resp.data.data });
    //     showLoader(false);
    //   });
    axios
      .get(
        "http://localhost:7000/api/addtocart/get",
        JSON.parse(localStorage.getItem("authData"))
      )
      .then((resp) => {
        dispatch({ type: GETCART, resp: resp.data.data });
        showLoader(false);
      });
  };
};

export const addToCartApi = (cartobj) => {
  return (dispatch) => {
    // axios
    //   .post(
    //     "https://cute-tan-drill-slip.cyclic.cloud/api/addtocart/add",
    //     cartobj,
    //     JSON.parse(localStorage.getItem("authData"))
    //   )
    //   .then((resp) => {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       text: "Product Add To Cart SuccessFully",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     dispatch(getCartApi());
    //   })
    //   .catch((err) => {
    //     // handle Error
    //   });
    axios
      .post(
        "http://localhost:7000/api/addtocart/add",
        cartobj,
        JSON.parse(localStorage.getItem("authData"))
      )
      .then((resp) => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Product Add To Cart SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(getCartApi());
      })
      .catch((err) => {
        // handle Error
      });
  };
};

export const removeCartApi = (productId) => {
  return (dispatch) => {
    // axios
    //   .delete(
    //     `https://cute-tan-drill-slip.cyclic.cloud/api/addtocart/remove?productId=${productId}`,
    //     JSON.parse(localStorage.getItem("authData"))
    //   )
    //   .then((resp) => {
    //     dispatch(getCartApi());
    //   })
    //   .catch((err) => console.log(err));
    axios
      .delete(
        `http://localhost:7000/api/addtocart/remove?productId=${productId}`,
        JSON.parse(localStorage.getItem("authData"))
      )
      .then((resp) => {
        dispatch(getCartApi());
      })
      .catch((err) => console.log(err));
  };
};
