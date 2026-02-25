import API from "./api";

export const buyAirtime = (data) => API.post("/vtu/airtime", data);
export const buyData = (data) => API.post("/vtu/data", data);
export const buyElectricity = (data) => API.post("/vtu/electricity", data);
export const buyCable = (data) => API.post("/vtu/cable", data);
