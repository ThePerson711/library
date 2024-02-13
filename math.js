function sinus(alpha) {
    solution = Math.sin(alpha*Math.PI/180);
    return solution;
}
function cosinus(alpha) {
    solution = Math.cos(alpha*Math.PI/180);
    return solution;
}
function tangius(alpha) {
    solution = Math.tan(alpha*Math.PI/180);
    return solution;
}

function arcsinus(num) {
    degree = Math.asin(num)*180/Math.PI;
    return degree;
}
function arccosinus(num) {
    degree = Math.acos(num)*180/Math.PI;
    return degree;
}
function arctangius(num) {
    degree = Math.atan(num)*180/Math.PI;
    return degree;
}

function yaxlitlash(number, count) {
    answer = number * Math.pow(10, count);
    answer = Math.round(answer);
    answer = answer / Math.pow(10, count);
    return answer;
}

function tekis_past(number) {
    answer = Math.floor(number);
    return answer;
}

function tekis_tepa(number) {
    answer = Math.ceil(number);
    return answer;
}

function ildiz(number) {
    answer = Math.sqrt(number);
    return answer;
}

function daraja(number, daraja) {
    answer = Math.pow(number, daraja);
    return answer;
}
