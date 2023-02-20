import React, {ChangeEvent, useState} from 'react';
import css from './input-search.module.scss'
import searchIcon from "../../assets/img/search-icon.svg";
import cancelSearchIcon from "../../assets/img/cancel-icon.svg";

type InputSearchPropsType = {
    openSearch?: () => void
    searchOpen?: boolean
    closeSearch?: () => void
}

export const InputSearch = (props: InputSearchPropsType) => {

    const [searchValue, setSearchValue] = useState('')

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const onBlurInputValue = () => {
        setSearchValue('')
    }

    return <div
        className={props.searchOpen === false ? css.filterBar__search : css.filterBar__search_open}>

        <button type='button'
                className={css.filterBar__search_button}
                onClick={props.openSearch}
        >

            <img src={searchIcon} alt="Search icon"/>

        </button>

        <input
            value={searchValue}
            aria-label="Search"
            type={props.searchOpen === false ? 'search' : 'text'}
            placeholder="Поиск книги или автора..."
            className={css.filterBar__search_input}
            onChange={onChangeInputValue}
            onBlur={onBlurInputValue}
        />

        <button type='button'
                className={css.filterBar__search_cancel_icon}
                onClick={props.closeSearch}
        >

            <img src={cancelSearchIcon} alt="Search icon"/>

        </button>
    </div>
}




