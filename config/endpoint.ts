import { AUTH_API } from "@/config/api";

export const AUTH_ENDPOINTS = {
  LOGIN: `${AUTH_API}/login`,
  FIRST_TIME_PASSWORD_CHANGE: `${AUTH_API}/first-time-password-change`,
  REGISTER: `${AUTH_API}/register`,
  LOGOUT: `${AUTH_API}/logout`,
};
