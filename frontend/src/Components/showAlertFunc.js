import Swal from "sweetalert2"

export const showAlertFunc = (title) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        text: title,
        showConfirmButton: false,
        timer: 1000
      })
}