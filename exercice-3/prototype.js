




String.prototype.ucfirst = function() {
    if (typeof this.valueOf() === 'string' || this.valueOf() instanceof String){
        return this.valueOf().charAt(0).toUpperCase() + this.valueOf().slice(1);
    }
    else return '';
};


String.prototype.capitalize = function() {
    str = this.valueOf()
    if (typeof str === 'string' || str instanceof String){

        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
    else return '';
};



String.prototype.camelCase = function() {
    string=this.valueOf();
    let data = "";
    if(typeof string === "string") {
        let stringSplit = string.split(" ");
        for (let i = 0; i < stringSplit.length; i++) {
            data += stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].slice(1);
        }
    }
    return data;
};


String.prototype.snakeCase = function() {
    str=this.valueOf();
    if (typeof str === 'string' || str instanceof String){

        let s;
        s = str.replace(/[^\w\s]/g, "");
        s = s.replace(/\s+/g, " ");
        return s.toLowerCase().split(' ').join('_');
    }
    else return '';
};




String.prototype.leet = function() {
    str=this.valueOf();
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
};




String.prototype.verlan = function() {
    str=this.valueOf();
    if (typeof str === 'string' || str instanceof String){

        return str.split("").reverse().join("");
    }
    else return '';
};

String.prototype.yoda = function() {
    str=this.valueOf();
    if (typeof str === 'string' || str instanceof String){

        return str.split(" ").reverse().join(" ");
    }
    else return '';
};

var chaine = "hello world"
console.log(chaine.ucfirst());
console.log(chaine.capitalize());
console.log(chaine.camelCase());
console.log(chaine.snakeCase());
console.log(chaine.leet());
console.log(chaine.verlan());
console.log(chaine.yoda());