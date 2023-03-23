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
}


const OrderModal: React.FC<CreateCommentModalPropsType> = ({onCloseHandler, onClickCreateHandler, customerId, onClickUpdateHandler, onClickDeleteHandler}) => {

    const [selectedDay, setSelectedDay] = useState(new Date())

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
                selectDate={(date: Date) => setSelectedDay(date)}/>


            {customerId
                ? (<div>
                    <ButtonForModal
                        onClickHandler={onClickUpdateOrderHandler}
                        title='забронировать'
                        disabled={!selectedDay}
                    />

                    <ButtonForModal
                        onClickHandler={onClickDeleteOrderHandler}
                        title='отменить бронь'
                        disabled={!selectedDay}
                    />
                </div>)

                : (
                    <ButtonForModal
                        onClickHandler={onClickCreateOrderHandler}
                        title='забронировать'
                        disabled={!selectedDay}
                    />
                )
            }

        </div>
    );
};

export default OrderModal;