import React from 'react';
import {decrypted} from "./cripto-data";

export const GetLocalStorage = (name: string)=> {
    const item = localStorage.getItem(name);

    if(item) {
        return decrypted(item)
    }

    return null;
};

