export const setHeaderConfig = token => {
  return {
    headers: {
      'Authorization': `Bearer ${token.slice(1,-1)}`
    }
  }
};