import React from 'react';
import {encrypted} from "./cripto-data";


export const SaveLocalStorage = (name: string, str: string) => {
    localStorage.setItem(name, encrypted(str))
}