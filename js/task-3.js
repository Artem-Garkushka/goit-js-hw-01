function getElementWidth(content, padding, border){
    const totalPadding = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
    return totalPadding;
}
console.log(getElementWidth("50px", "8px", "4px"));

function getElementWidth(content, padding, border){
    const totalPadding = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
    return totalPadding;
}
console.log(getElementWidth("60px", "12px", "8.5px"));

function getElementWidth(content, padding, border){
    const totalPadding = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
    return totalPadding;
}
console.log(getElementWidth("200px", "0px", "0px"));