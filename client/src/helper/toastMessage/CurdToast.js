import cogoToast from "cogo-toast";

class CurdToast {
  successMessage(message) {
    cogoToast.success(message);
  }

  errorMessage(message) {
    cogoToast.error(message);
  }
}

export const { successMessage, errorMessage } = new CurdToast();
