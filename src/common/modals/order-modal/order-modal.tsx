import React, {useState} from 'react';
import css from './order-modal.module.scss'
import {ButtonForModal} from "../button-for-modal/button-for-modal";
import {Calendar} from "../../../features/calendar/calendar";

type CreateCommentModalPropsType = {
    onCloseHandler: () => void
    onClickHandler: (date: string) => void
}


const OrderModal: React.FC<CreateCommentModalPropsType> = ({onCloseHandler, onClickHandler}) => {

    const [selectedDay, setSelectedDay] = useState(new Date())

    const onClickCreateCommentHandler = () => {

        // console.log(selectedDay.toJSON())
        onClickHandler(selectedDay.toJSON())
        onCloseHandler()
    }

    return (
        <div className={css.modal_content_wrapper}>
            <h3 className={css.modal_title}>Выбор даты бронирования</h3>

            <Calendar
                selectedDate={selectedDay}
                selectDate={(date: Date) => setSelectedDay(date)}/>

            <ButtonForModal
                onClickHandler={onClickCreateCommentHandler}
                title='забронировать'
                disabled={!selectedDay}
            />
        </div>
    );
};

export default OrderModal;