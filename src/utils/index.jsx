export function uuid() {
  const uid =
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }) || crypto.randomUUID().toString(16);
  return uid;
}

export const setToStorage = (name = "", data = "") =>
  localStorage.setItem(name, JSON.stringify(data));

export const getFromStorage = (name = "", initailValue) =>
  localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : initailValue;
