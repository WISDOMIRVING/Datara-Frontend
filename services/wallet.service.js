import API from "./api";

export const getWallet = () => API.get("/wallet");
export const getTransactions = () => API.get("/wallet/transactions");
export const topUpWallet = (data) => API.post("/wallet/topup", data);
