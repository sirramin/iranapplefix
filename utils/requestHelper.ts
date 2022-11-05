import axios, { AxiosPromise, AxiosResponse } from "axios";
import store from "../store/store";

const BaseURL = "https://api.iranapplefix.com/api/v1";

const requestHelper = async (
  method: string,
  url: string,
  data: object | null = null,
  headers: object | null = null,
  params: object | null = null
) => {
  // const {
  //   auth: { token },
  //   // loadingReducer: { showLoader },
  // } = store.getState();

  const token = ""; //TODO

  // console.log('showLoader', showLoader);
  try {
    // store.dispatch({
    //   type: "SHOW_LOADER",
    //   payload: true,
    // });
    const {
      data: { result },
    } = await axios({
      method,
      url: BaseURL + url,
      data,
      headers: {
        Authorization: "Bearer " + token,
        ...headers,
      },
      timeout: 8000,
      params,
    });
    // store.dispatch({
    //   type: "HIDE_LOADER",
    // });
    return result;
  } catch (err) {
    // console.log("request helper error", err?.response?.data?.error);
    let errorMessage = "خطایی رخ داد";
    errorMessage = err?.response?.data?.error;
    store.dispatch({
      type: "HIDE_LOADER",
    });
    alert(errorMessage);
    // WToast.show({
    //   data: errorMessage,
    //   textColor: "#ffffff",
    //   backgroundColor: "red",
    //   duration: WToast.duration.LONG,
    // });
    return Promise.reject();
  }
};

export default requestHelper;
