export const BytesToImageUrl = (bytes: Uint8Array) => {
    return URL.createObjectURL(new Blob([bytes]));
}