export const checkIsDayForOrder = (currentDay: number, dayOfWeek: number, dayOfCurrentMonth: number) => {
    const today = new Date()
    let currentMonth = new Date().getMonth()

    if (dayOfCurrentMonth === currentMonth) {
        if (dayOfWeek === 1) {
            return currentDay + 1
        }
        if (dayOfWeek === 7) {
            return currentDay + 2
        }
        return currentDay + 1
    }


}