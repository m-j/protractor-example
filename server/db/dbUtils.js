exports.addIds = function(list) {
    return list.map(function(element, index) {
        element.id = index
        return element
    })
}