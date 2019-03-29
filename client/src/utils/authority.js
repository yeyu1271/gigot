// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return sessionStorage.getItem('ice-pro-authority') || '';
}

export function setAuthority(authority) {
  return sessionStorage.setItem('ice-pro-authority', authority);
}
