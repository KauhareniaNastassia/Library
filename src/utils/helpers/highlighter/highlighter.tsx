import React from "react";


export const Highlighter = (search: string, string: string) => {

    if (!search) return string
    const regExp = new RegExp(`${search}`, 'ig')
    const matchValues = string.match(regExp)

    if (matchValues) {
        return string.split(regExp).map((str: string, index: number, array: string | any[]) => {
            const match = matchValues.shift()
            if (index < array.length - 1) {
                return <>{str}<span style={{color: 'red'}}>{match}</span></>
            }
            return str
        })
    }
    return string
}