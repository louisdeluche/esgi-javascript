
var obj = {};
obj.type = {};
obj.type.nom = "test";

url = "type";

function ucfirst(str) {
    if (typeof str === 'string' || str instanceof String){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    else return '';
}

function capitalize(str) {
    if (typeof str === 'string' || str instanceof String){

    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
else return '';
}

function camelCase(string) {
    let data = "";
    if(typeof string === "string") {
        let stringSplit = string.split(" ");
        for (let i = 0; i < stringSplit.length; i++) {
            data += stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].slice(1);
        }
    }
    return data;
}

function snake_case(str) {
    if (typeof str === 'string' || str instanceof String){

    let s;
    s = str.replace(/[^\w\s]/g, "");
    s = s.replace(/\s+/g, " ");
    return s.toLowerCase().split(' ').join('_');
    }
    else return '';
}


function leet(str) {
    if (typeof str === 'string' || str instanceof String){

    let message = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "i") { message += "1"; }
        else if (str[i].toLowerCase() === "e") { message += "3"; }
        else if (str[i].toLowerCase() === "a") { message += "4"; }
        else if (str[i].toLowerCase() === "y") { message += "7"; }
        else if (str[i].toLowerCase() === "u") { message += "(_)"; }
        else if (str[i].toLowerCase() === "o") { message += "0"; }
        else { message += str[i].toLowerCase(); }
    }
    return message;
    }
    else return '';
}

function prop_access (obj, url){
    if (typeof url === 'string' || url instanceof String){
        let properties = url.split('.');
        properties.forEach(function(property){
            obj = obj[property];
        });
        if (obj == null){
            return url+"not exist";
        }
        return obj;
    }
    else return '';
}


// prop_acces partie prof
// function prop_access(input, path){
//     var pathArray = path.split(".");
//     for(var i = 0; i < pathArray.length; i++){
//         if(input[pathArray[i]] === undefined){
//             console.error('path exist');
//             return null;
//         }
//         input = input[pathArray[i]];
//     }
//     return input;
// }



function verlan(str) {
    if (typeof str === 'string' || str instanceof String){

    return str.split("").reverse().join("");
    }
    else return '';
}

function yoda(str) {
    if (typeof str === 'string' || str instanceof String){

    return str.split(" ").reverse().join(" ");
    }
    else return '';
}

function vig(str, key) {
    // if (typeof str === 'string' || str instanceof String){
    //
    // let output = "";
    // for (let i = 0, j = 0; i < str.length; i++) {
    //     let c = str.charCodeAt(i);
    //     //uppercase
    //     if (65 <= c && c <= 90) {
    //         output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
    //         j++;
    //     //lowercase
    //     } else if (97 <= c && c <= 122) {
    //         output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
    //         j++;
    //     } else {
    //         output += str.charAt(i);
    //     }
    // }
    // return output;
    // }
    // else return '';
}


console.log(ucfirst("hello world"));
console.log(capitalize("hello world"));
console.log(camelCase("hello world"));
console.log(snake_case("hello world"));
console.log(leet("aeyuoi"));
console.log(verlan("hello world"));
console.log(yoda("hello world"));
console.log(prop_access(obj,url));
console.log(prop_access(obj,url));
