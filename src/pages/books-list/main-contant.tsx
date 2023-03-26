import React, {useEffect, useMemo, useRef, useState} from 'react';
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
import {NotFoundMessage} from "../../common/not-found-message/not-found-message";


export const MainContent = () => {
    const [show, setShow] = useState(true)
    const [isActive, setIsActive] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false)
    const node = useRef<HTMLDivElement>(null);
    const [sortByRating, setSortByRating] = useState(true)
    const [searchValue, setSearchValue] = useState<string>('');
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

    const sortedBooks = useMemo(() => {

        return [...selectCategoryBooks].sort((prev, next) => {
            return sortByRating
                ? (next.rating === null ? 0 : next.rating) - (prev.rating === null ? 0 : prev.rating)
                : (prev.rating === null ? 0 : prev.rating) - (next.rating === null ? 0 : next.rating);
        })

    }, [selectCategoryBooks,sortByRating])

    const searchAndSortedBooks = useMemo( () => {

        return sortedBooks.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))

    }, [sortedBooks, searchValue] )


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

    useEffect(() => {
        dispatch(getBooksTC())
    }, [])

    return <section className={css.wrapper}>
        <section className={!searchOpen ? css.filterBar : css.filterBar__search_open}>
            <div className={css.filterBar_left}>

                <div ref={node}>
                    <InputSearch openSearch={() => setSearchOpen(true)}
                                 searchOpen={searchOpen}
                                 closeSearch={closeSearch}
                                 searchValue={searchValue}
                                 setSearchValue={setSearchValue}
                    />
                </div>

                <button
                    className={sortByRating ? css.filterBar__rating : `${css.filterBar__rating} ${css.filterBar__rating_reverse}`}
                    onClick={() => setSortByRating(!sortByRating)}
                    type="button">
                    <img src={ratingIcon} alt="BurgerMenu icon"/>
                    <span>По рейтингу</span>
                </button>
            </div>


            <div className={css.filterBar_right}>
                <button type="button"
                        value="tile"
                        className={isActive ? `${css.filterBar__button} ${css.activeBtn}` : css.filterBar__button}
                        onClick={onTileButtonClickHandler}>
                    <img src={tileIcon} alt="Tile icon"/>
                </button>
                <button type="button"
                        value="list"
                        className={css.filterBar__button}
                        onClick={onListButtonClickHandler}>
                    <img src={listIcon} alt="List icon"/>
                </button>

            </div>
        </section>

        {sortedBooks.length === 0 && <NotFoundMessage message='В этой категории книг еще нет'/>}
        {searchAndSortedBooks.length === 0 && sortedBooks.length !== 0 && <NotFoundMessage message='По запросу ничего не найдено'/>}

        {show
            ? <Tile searchValue={searchValue} selectCategoryBooks={searchAndSortedBooks}/>
            : <List searchValue={searchValue} selectCategoryBooks={searchAndSortedBooks}/>}

    </section>

}

