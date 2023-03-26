import React, {ChangeEvent, useState} from 'react';
import css from './input-search.module.scss'
import searchIcon from "../../assets/img/search-icon.svg";
import cancelSearchIcon from "../../assets/img/cancel-icon.svg";

type InputSearchPropsType = {
    openSearch?: () => void
    searchOpen?: boolean
    closeSearch?: () => void
    searchValue: string
    setSearchValue: (value: string) => void
}

export const InputSearch:React.FC<InputSearchPropsType> = ({openSearch, searchValue,  closeSearch, searchOpen, setSearchValue}) => {


   /* const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const onBlurInputValue = () => {
        setSearchValue(event.target.value)
    }*/

    return <div
        className={searchOpen === false ? css.filterBar__search : css.filterBar__search_open}>

        <button type='button'
                className={css.filterBar__search_button}
                onClick={openSearch}
        >

            <img src={searchIcon} alt="Search icon"/>

        </button>

        <input
            value={searchValue}
            aria-label="Search"
            type={searchOpen === false ? 'search' : 'text'}
            placeholder="Поиск книги или автора..."
            className={css.filterBar__search_input}
            onChange={(event) => setSearchValue(event.target.value)}
            //nBlur={onBlurInputValue}
        />

        <button type='button'
                className={css.filterBar__search_cancel_icon}
                onClick={closeSearch}
        >

            <img src={cancelSearchIcon} alt="Search icon"/>

        </button>
    </div>
}




