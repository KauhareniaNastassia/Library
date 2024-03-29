export const convertToBase64 = (file: File, callBack: (value: string) => void) => {
    const reader = new FileReader()

    reader.onloadend = () => {
        const file64 = reader.result as string

        callBack(file64)
    }
    reader.readAsDataURL(file)
}
