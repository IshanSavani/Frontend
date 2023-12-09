import axios from "axios";
import Swal from "sweetalert2";
import { COMPLETEDORDER, GETORDER } from "../types/types";
import { showLoader } from "../../Components/loaderFunc";
import { removeCartApi } from "./cartAction";

export const getorderApi = () => {
    showLoader(true);
    return (dispatch) => {
        // axios.get('https://cute-tan-drill-slip.cyclic.cloud/api/order/get' , JSON.parse(localStorage.getItem('authData'))).then((resp) => {
        //     dispatch({type : GETORDER , resp : resp.data.data});
        //     showLoader(false);
        // })
        axios.get('http://localhost:7000/api/order/get' , JSON.parse(localStorage.getItem('authData'))).then((resp) => {
            dispatch({type : GETORDER , resp : resp.data.data});
            showLoader(false);
        })
    }
}

export const addOrderApi = (obj) => {
  return (dispatch) => {
    // axios
    //   .post(
    //     "https://cute-tan-drill-slip.cyclic.cloud/api/order/add",
    //     obj,
    //     JSON.parse(localStorage.getItem("authData"))
    //   )
    //   .then((resp) => {
    //     dispatch(getorderApi());
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'order placed successFully',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //   })
    //   .catch((err) => console.log(err));
    axios
      .post(
        "http://localhost:7000/api/order/add",
        obj,
        JSON.parse(localStorage.getItem("authData"))
      )
      .then((resp) => {
        dispatch(getorderApi());
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'order placed successFully',
            showConfirmButton: false,
            timer: 1500
          })
          
      })
      .catch((err) => console.log(err));
  };
};


export const removeOrderAPi = (productId) => {
    return (dispatch) => {
        // axios.delete(`https://cute-tan-drill-slip.cyclic.cloud/api/order/remove?productId=${productId}` , JSON.parse(localStorage.getItem('authData'))).then((resp) => {
        //     console.log(resp);
        //     dispatch(getorderApi());
        // }).catch((err) => {
        //     // handle Error
        // })
        axios.delete(`http://localhost:7000/api/order/remove?productId=${productId}` , JSON.parse(localStorage.getItem('authData'))).then((resp) => {
            console.log(resp);
            dispatch(getorderApi());
        }).catch((err) => {
            // handle Error
        })
    }
}

export const completedOrderApi = () => {
    return (dispatch) => {
        showLoader(true);
        // axios.get('https://cute-tan-drill-slip.cyclic.cloud/api/orderCompleted/get' , JSON.parse(localStorage.getItem('authData'))).then((resp) => {
        //     dispatch({type :COMPLETEDORDER , resp : resp.data.data})
        //     showLoader(false);
        // }).catch((err) => {
        //     // handle Error
        // })
        axios.get('http://localhost:7000/api/orderCompleted/get' , JSON.parse(localStorage.getItem('authData'))).then((resp) => {
            dispatch({type :COMPLETEDORDER , resp : resp.data.data})
            showLoader(false);
        }).catch((err) => {
            // handle Error
        })
    }
}