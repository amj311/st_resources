const placeholderTrapId = null;

/**
 * Captures placeholders stored in HTML like so:
 * 
 * \<div id="stPlaceholderTrap" style="display:none">
 * 
 * &emsp;\<div id="firstname">Firstname_Placeholder</div>
 * 
 * \</div>
 * @returns {{ [key: string]: number|string }}
 */
const getStData = function () {
    let userData = {};
    let id = placeholderTrapId || 'stPlaceholderTrap';
    for (let el of document.querySelectorAll(`#${id} > div`)) {
        let value = el.innerHTML;
        if (el.getAttribute('type') === 'number') {
            value = Number(value);
        }
        userData[el.id] = value;        
    }
    return userData;
}