function toTitleCase(str: string) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
function toSnakeCase(str: string) {
    return str.replaceAll(" ", "_")
}
export { toSnakeCase, toTitleCase };

