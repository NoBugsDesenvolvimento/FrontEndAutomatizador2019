export function getCookie(name) {
  let cookies = document.cookie.split(";");
  let cookie;
  for (let i in cookies) {
    cookie = cookies[i].split("=")
    if (cookie[0].trim() === name) {
      return cookie[1];
    }
  }
}
