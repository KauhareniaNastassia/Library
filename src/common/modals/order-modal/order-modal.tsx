import React, {useState} from 'react';
import css from './order-modal.module.scss'
import {ButtonForModal} from "../button-for-modal/button-for-modal";
import {Calendar} from "../../../features/calendar/calendar";

type CreateCommentModalPropsType = {
    onCloseHandler: () => void
    onClickCreateHandler: (date: string) => void
    customerId?: boolean
    onClickUpdateHandler: (date: string) => void
    onClickDeleteHandler: () => void
    dateOrder?: string | null | undefined
}

export const OrderModal: React.FC<CreateCommentModalPropsType> = ({
                                                               onCloseHandler,
                                                               onClickCreateHandler,
                                                               customerId,
                                                               onClickUpdateHandler,
                                                               onClickDeleteHandler,
                                                               dateOrder
                                                           }) => {

    const [selectedDay, setSelectedDay] = useState(new Date())
    const [disableOrderButton, setDisableOrderButton] = useState(true)

    const onClickCreateOrderHandler = () => {
        onClickCreateHandler(selectedDay.toJSON())
        onCloseHandler()
    }

    const onClickUpdateOrderHandler = () => {
        onClickUpdateHandler(selectedDay.toJSON())
        onCloseHandler()
    }
    const onClickDeleteOrderHandler = () => {
        onClickDeleteHandler()
        onCloseHandler()
    }

    return (
        <div className={css.modal_content_wrapper}>
            <h3 className={css.modal_title}>Выбор даты бронирования</h3>

            <Calendar
                selectedDate={selectedDay}
                selectDate={(date: Date) => setSelectedDay(date)}
                setDisableOrderButton={() => setDisableOrderButton(false)}
                dateOrder={dateOrder}/>

            {customerId
                ? (<div className={css.modal_buttons_block}>
                    <ButtonForModal
                        onClickHandler={onClickUpdateOrderHandler}
                        title='забронировать'
                        disabled={disableOrderButton}
                    />

                    <ButtonForModal
                        onClickHandler={onClickDeleteOrderHandler}
                        title='отменить бронь'
                        disabled={false}
                    />
                </div>)

                : (
                    <ButtonForModal
                        onClickHandler={onClickCreateOrderHandler}
                        title='забронировать'
                        disabled={disableOrderButton}
                    />
                )
            }
        </div>
    );
};

