export function setLanguageToLocalStorage(language){
    localStorage.setItem('language', JSON.stringify(language))
}

export function getLanguageFromLocalStorage(){
    let lang = localStorage.getItem('language');
    return lang ? JSON.parse(lang) : 'en';
}