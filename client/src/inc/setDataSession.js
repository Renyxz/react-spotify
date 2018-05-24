// Set data to session storage
const setDataSession = (item) => {

    window.sessionStorage.setItem(item.key, item.data);

}

export {

    setDataSession

}