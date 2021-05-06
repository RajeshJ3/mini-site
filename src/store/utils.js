function get_domain() {
  if (window.location.hostname === "localhost") {
    return "http://127.0.0.1:8000/api";
  } else if (window.location.hostname === "192.168.43.207") {
    return "http://192.168.43.207:8000/api";
  } else {
    return "https://api.fun.azuuk.com/api";
  }
}

export const DOMAIN = get_domain();
export const FRONTEND_URL = "https://fun.azuuk.com";
