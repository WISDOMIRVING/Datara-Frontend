import API from "./api";

export const register = (userData) => API.post("/auth/register", userData);
export const login = (userData) => API.post("/auth/login", userData);
export const getMe = () => API.get("/auth/me");
export const updateProfile = (data) => API.put("/auth/profile", data);
export const changePassword = (data) => API.put("/auth/password", data);

// Password reset flow
export const forgotPassword = (data) => API.post("/auth/forgot-password", data);
export const verifyOtp = (data) => API.post("/auth/verify-otp", data);
export const resetPassword = (data) => API.post("/auth/reset-password", data);
