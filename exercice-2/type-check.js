function type_check_v1(value, type){
    if(value==null && type ==="null")   return true;
    if (Array.isArray(value) && type === "array")return true;
    if(typeof value === type)return true;
    return false;
}

function type_check_v2(value, obj){
    var bool = true;
    if (obj.hasOwnProperty("type")) {
        if(!type_check_v1(value, obj.type)){
            bool = false;
        }
        if (obj.hasOwnProperty("value")){
            if (value !== obj.value){
                bool = false;
            }
        }
    }
    if (obj.hasOwnProperty("enum")) {
        if (!obj.enum.includes(value)){
            bool = false;
        }
    }
    return bool;
}

function type_check_v3(){

}


// console.log(type_check_v1(null, "null"));
console.log(type_check_v2({prop1: 1}, {type: "object"}));
console.log(type_check_v2("foo", {type: "string", value: "foo"}));
console.log(type_check_v2("foo", {type: "string", value: "bar"}));
console.log(type_check_v2(3, {enum: ["foo","bar",3]}));
