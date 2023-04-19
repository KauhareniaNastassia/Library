

export const onClickCreateNewOrderHandler = (id: number | undefined, bookingByMe: string | null) => {
    if (id) {
        if (!bookingByMe) {
            localStorage.setItem('booking', JSON.stringify(+id));
        } else {
            const bookingParced = JSON.parse(bookingByMe);
            if (+bookingParced !== id) {
                localStorage.removeItem('booking');
                localStorage.setItem('booking', JSON.stringify(+id));
            } else {
                localStorage.setItem('booking', JSON.stringify(bookingParced))
            }
        }
    }
}

export const onClickDeleteOrderHandler = (id: number | undefined, bookingByMe: string | null) => {
    if (id && bookingByMe) {
        localStorage.removeItem('booking');
    }
}