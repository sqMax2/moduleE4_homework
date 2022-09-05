// 1
function getSelfPropertyList (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

getSelfPropertyList({a:1, b:2});

// 2
function checkProperty (str, obj) {
    if (str in obj) {
        return true;
    }
    return false;
}

console.log(checkProperty('a', {a:1}));
console.log(checkProperty('a', {b:2}));

// 3
function getEmptyObject () {
    return Object.create(null);
}
let emptyObject = getEmptyObject();
console.log(emptyObject);
