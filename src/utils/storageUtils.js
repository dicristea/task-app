export default function fetchArray(localStorageKey) {
    let localStorageList = [];

    if (window.localStorage.getItem(localStorageKey) !== null) {
        localStorageList = JSON.parse(window.localStorage.getItem(localStorageKey))
    }

    return localStorageList;
}