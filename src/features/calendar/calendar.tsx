import React from 'react';
import css from './calendar.module.scss'
import {useCalendar} from "../../hooks/useCalendar";
import dropDown from '../../assets/img/drop-down.svg'
import arrowUp from '../../assets/img/arrow-up-calendar.svg'
import arrowDown from '../../assets/img/arrow-down-calendar.svg'
import {checkIsToday} from "../../utils/helpers/date/check-is-today";
import {checkDateIsEqual} from "../../utils/helpers/date/check-date-is-equal";
import {checkIsDayForOrder} from "../../utils/helpers/date/is-day-for-order";

type CalendarPropsType = {
    selectedDate: Date;
    selectDate: (date: Date) => void
    locale?: string
    firstWeekDay?: number
    setDisableOrderButton: () => void
    dateOrder?: string | null | undefined
    customerId?: boolean
}


export const Calendar: React.FC<CalendarPropsType> = ({
                                                          selectedDate,
                                                          selectDate,
                                                          locale = 'default',
                                                          firstWeekDay = 2, setDisableOrderButton,
                                                          dateOrder,
                                                          customerId
                                                      }) => {

    const {state, functions} = useCalendar({firstWeekDay, locale, selectedDate})


    return (
        <div className={css.calendar}>
            <div className={css.calendar__title}>

                <label className={css.calendar__title__label} htmlFor='select'>
                    <select
                        id='select'
                        name='select'
                        className={css.calendar__title__select}
                        value={state.selectedMonth.monthIndex}
                        onChange={(event => functions.setSelectedMonthByIndex(Number(event.currentTarget.value)))}>
                        {state.monthsNames.map((month, index) =>
                            <option key={month.month} value={index}>
                                {month.month[0].toUpperCase() + month.month.slice(1)} {state.selectedYear}
                            </option>
                        )}
                    </select>
                    <img src={dropDown} alt='drop down'/>
                </label>

                <div className={css.calendar__title__arrow_block}>
                    <img src={arrowUp} alt='arrow up' onClick={() => functions.onClickArrow('up')}/>
                    <img src={arrowDown} alt='arrow down' onClick={() => functions.onClickArrow('down')}/>
                </div>

            </div>

            <div className={css.calendar__body}>
                {state.mode === 'days' && (
                    <>
                        <div className={css.calendar__week__names}>
                            {state.weekDaysNames.map((weekDayName) => (
                                <div key={weekDayName.dayShort} className={css.calendar__week__names_item}>
                                    {weekDayName.dayShort[0].toUpperCase() + weekDayName.dayShort.slice(1)}
                                </div>
                            ))}
                        </div>

                        <div className={css.calendar__days}>
                            {state.calendarDays.map((day) => {

                                const isToday = checkIsToday(day.date)
                                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date)
                                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex
                                const isWeekEnd = day.dayNumberInWeek === 1 || day.dayNumberInWeek === 7
                                const isWeekEndInThisMonth = isWeekEnd && day.monthIndex === state.selectedMonth.monthIndex
                                const currentDay = new Date().getDate()
                                const isDayForOrder = checkIsDayForOrder(currentDay, day.monthIndex)

                                return (<button
                                    key={`${day.dayNumber}-${day.monthIndex}`}
                                    className={[
                                        css.calendar__day,
                                        isToday ? css.calendar__today__item : '',
                                        isSelectedDay ? css.calendar__selected__item : '',
                                        isAdditionalDay ? css.calendar__additional__day : '',
                                        isWeekEndInThisMonth ? css.calendar__weekend__day : '',
                                        day.dayNumber === isDayForOrder ? css.calendar__day_for_order : ''
                                    ].join(' ')}
                                    disabled={
                                        (dateOrder && customerId && new Date(JSON.parse(dateOrder)).getDate()) === isDayForOrder
                                            ? day.dayNumber !== currentDay
                                            : (dateOrder && customerId && new Date(JSON.parse(dateOrder)).getDate()) === currentDay
                                                ? day.dayNumber !== isDayForOrder
                                                : (day.dayNumber !== isDayForOrder && day.dayNumber !== currentDay)
                                    }
                                    onClick={() => {
                                        functions.setSelectedDay(day)
                                        selectDate(day.date)
                                        setDisableOrderButton()
                                    }}
                                >
                                    {day.dayNumber}
                                </button>)
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

