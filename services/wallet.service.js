import API from "./api";

export const getWallet = () => API.get("/wallet");
export const getTransactions = () => API.get("/wallet/transactions");
export const topUpWallet = (data) => API.post("/wallet/fund", data);
export const initFundWallet = (amount) => API.post("/wallet/init-fund", { amount });
