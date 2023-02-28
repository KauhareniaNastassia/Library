import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import css from './main-contant.module.scss'
import ratingIcon from '../../assets/img/rating-icon.svg';
import tileIcon from '../../assets/img/tile-icon.svg';
import listIcon from '../../assets/img/list-icon.svg';
import {Tile} from './tile';
import {List} from './list';
import {useOnClickOutside} from "../../hooks/use-on-click-outside";
import {InputSearch} from "../../features/search-input";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {BookListResponseType} from "../../api/books-list-api";
import {getBooksTC} from "../../redux/books-reducer";


export const MainContent = () => {
    const [show, setShow] = useState(true)
    const [isActive, setIsActive] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false)
    const node = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch()
    const {category} = useParams()
    const books = useAppSelector((state) => state.books.books)
    const currentCategory = useAppSelector(state => state.categories.items.find(el => el.path === category))
    const booksInThisCategory = books.filter((book) => book.categories?.find((ctgrs) => ctgrs === currentCategory?.name))


    let selectCategoryBooks: BookListResponseType[] = []

    if (category === 'all') {
        selectCategoryBooks = books
    } else {
        selectCategoryBooks = booksInThisCategory
    }

    const onTileButtonClickHandler = () => {
        setIsActive(true)
        setShow(true)
    }

    const onListButtonClickHandler = () => {
        setIsActive(false)
        setShow(false)
    }

    const closeSearch = () => {
        setSearchOpen(false)
    }

    useOnClickOutside(node, closeSearch);

    useEffect( () => {
        dispatch(getBooksTC())
    }, [])

    return <section className={css.wrapper}>
        <section className={!searchOpen ? css.filterBar : css.filterBar__search_open}>
            <div className={css.filterBar_left}>

                <div ref={node}>
                    <InputSearch openSearch={() => setSearchOpen(true)}
                                 searchOpen={searchOpen}
                                 closeSearch={closeSearch}
                                 />
                </div>

                <button
                    className={css.filterBar__rating}
                    type="button">
                    <img src={ratingIcon} alt="BurgerMenu icon"/>
                    <span>По рейтингу</span>
                </button>
            </div>


            <div className={css.filterBar_right}>
                <button type="button"
                        value="tile"
                        className={isActive ? `${css.filterBar__button} ${css.activeBtn}` : css.filterBar__button}
                        onClick={onTileButtonClickHandler}
                        data-test-id='button-menu-view-window'>
                    <img src={tileIcon} alt="Tile icon"/>
                </button>
                <button type="button"
                        value="list"
                        className={css.filterBar__button}
                        onClick={onListButtonClickHandler}
                        data-test-id='button-menu-view-list'>
                    <img src={listIcon} alt="List icon"/>
                </button>

            </div>
        </section>

        {show
            ? <Tile selectCategoryBooks={selectCategoryBooks}/>
            : <List selectCategoryBooks={selectCategoryBooks}/>}

    </section>

}

