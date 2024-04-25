const regExEmail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const regExURL = new RegExp('^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$');

export function isEmailValid(email) {
  return regExEmail.test(email);
}

export function isUrlValid(url) {
  return regExURL.test(url);
}
