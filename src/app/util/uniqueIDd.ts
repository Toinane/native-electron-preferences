let currentId = 0;

export default function (prefix: String = "id") {
    currentId++;
    return `${prefix}${currentId}`;
}
