export default setHeaderConfig = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
};