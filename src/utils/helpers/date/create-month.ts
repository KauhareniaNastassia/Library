import React from 'react';
import {CreateDate} from "./create-date";
import {GetMonthNumberOfDays} from "./get-month-number-of-days";

type CreateMonthPropsType = {
    locale?: string
    date?: Date
}

export const CreateMonth = (props?: CreateMonthPropsType ) => {

    const locale = props?.locale ?? 'default'

    const date = props?.date ?? new Date()

    const d = CreateDate({date, locale})
    const {month: monthName, year, monthNumber, monthIndex} = d

    const getDay = (dayNumber: number) => CreateDate({date: new Date(year, monthIndex, dayNumber), locale})


    const createMonthDays = () => {
        const days = []

        for(let i = 0; i <= GetMonthNumberOfDays(monthIndex, year) - 1; i++) {
            days[i] = getDay(i + 1)
        }
        return days
    }

    return {
        getDay,
        monthName,
        monthIndex,
        monthNumber,
        year,
        createMonthDays
    }
};

