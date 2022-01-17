var services = [
    "Consultant",
    "Data security"
]

var part = 0;

var partIndex = 0;

var intervalVal;

var element = document.querySelector("#pro");

var cursor = document.querySelector("#cursor");


function Type(){

    var text = services[part].substring(0, partIndex + 1);
    element.innerHTML = text;
    partIndex++;

    if (text === services[part]) {
        cursor.style.display = "none";
        
        clearInterval(intervalVal);
        setTimeout(function () {
            intervalVal = setInterval(Delete, 100);
        }, 1000);
    }
}

function Delete() {
    var text = services[part].substring(0, partIndex - 1);

    element.innerHTML = text;
    partIndex--;

    if (text === '') {
        clearInterval(intervalVal);

        if (part === (services.length - 1)) {
            part = 0
        } else {
            part++;
        }
        partIndex = 0;

        setTimeout(function () {
            cursor.style.display = "inline-block";
            intervalVal = setInterval(Type, 100);

        }, 200);
    }
}

intervalVal = setInterval(Type, 100);