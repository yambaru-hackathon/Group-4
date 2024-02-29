
const fileSizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

const fileSizeString = (bytes) => {
    if (bytes === 0) return "0B";

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    const num = (bytes / Math.pow(1024, i));
    return `${
        Number.isInteger(num)
            ? num
            : num.toFixed(2)
        }${fileSizes[i]}`;
}

export default fileSizeString;