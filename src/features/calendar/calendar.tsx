import React, {useState} from 'react';
import css from './calendar.module.scss'
import {useCalendar} from "../../hooks/useCalendar";
import {FormateDate} from "../../utils/helpers/date/formate-date";
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
}


export const Calendar: React.FC<CalendarPropsType> = ({
                                                          selectedDate,
                                                          selectDate,
                                                          locale = 'default',
                                                          firstWeekDay = 2
                                                      }) => {

    const {state, functions} = useCalendar({firstWeekDay, locale, selectedDate})

    return (
        <div className={css.calendar}>
            <div className={css.calendar__title}>

                <label  className={css.calendar__title__label} htmlFor='select'>
                    <select
                        id='select'
                        name='select'
                        className={css.calendar__title__select}
                        value={state.selectedMonth.monthIndex}
                        onChange={(event => functions.setSelectedMonthByIndex(Number(event.currentTarget.value)))}>
                        {state.monthsNames.map((month, index) =>
                            <option key={month.month} value={index} >
                                {month.month[0].toUpperCase() + month.month.slice(1)} {state.selectedYear}
                            </option>
                        )}
                       {/* {state.monthsNames.map((month) => (
                            <option key={month.month}>

                                {month.month}
                                {FormateDate(selectedDate, 'MMM YYYY')[0].toUpperCase() + FormateDate(selectedDate, 'MMM YYYY').slice(1)}
                                {FormateDate(selectedDate, 'MMM YYYY')}
                            </option>
                        ))}*/}
                    </select>
                    <img src={dropDown} alt='drop down'/>
                </label>

                <div className={css.calendar__title__arrow_block}>
                    <img src={arrowUp} alt='arrow up' onClick={() => functions.onClickArrow('up')}/>
                    <img src={arrowDown} alt='arrow down' onClick={() => functions.onClickArrow('down')}/>
                </div>

            </div>

            {/*<div>
                {state.mode === 'days' && (
                    <div aria-hidden onClick={() => functions.setMode('months')}>
                        {state.monthsNames[state.selectedMonths.monthIndex].month} {state.selectedYear}
                    </div>
                )}

                {state.mode === 'months' && (
                    <div aria-hidden onClick={() => functions.setMode('years')}>
                        {state.selectedYear}
                    </div>
                )}

                {state.mode === 'years' && (
                    <div aria-hidden onClick={() => functions.setMode('days')}>
                        {state.selectedYearsInterval[0]} -{' '}
                        {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
                    </div>
                )}
            </div>*/}

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
                                const isWeekEnd =  day.dayNumberInWeek === 1 || day.dayNumberInWeek === 7
                                const isWeekEndInThisMonth = isWeekEnd && day.monthIndex === state.selectedMonth.monthIndex

                                const isDayForOrder = checkIsDayForOrder(new Date().getDate(), day.dayNumberInWeek, day.monthIndex)
                                const currentDay = new Date().getDate()

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
                                    disabled={day.dayNumber !== isDayForOrder && day.dayNumber !== currentDay}
                                    onClick={() =>{
                                        functions.setSelectedDay(day)
                                        selectDate(day.date)
                                        console.log(day.date.toJSON())

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

