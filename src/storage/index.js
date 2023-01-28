export const saveToStorage = (favourite) => {
   window.localStorage.setItem('favourite', JSON.stringify(favourite));
};
