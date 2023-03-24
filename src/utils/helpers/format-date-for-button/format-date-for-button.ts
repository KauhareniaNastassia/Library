

export const formatDateForButton = (date: string | undefined | null) => {
    let arr = date?.slice(5, 10).split('-');
    if (arr) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    return arr?.join('.')
}