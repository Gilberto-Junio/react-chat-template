export const getTime = () => {
    return new Date()
        .toLocaleString("en-us",{
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        })
        .toLocaleLowerCase();
}