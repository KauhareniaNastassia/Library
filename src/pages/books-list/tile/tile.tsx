import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './tile.module.scss'
import {BookListResponseType} from "../../../api/books-list-api";
import {TileItem} from "./tile-item/tile-item";
import {BookResponseType} from "../../../api/book-api";

type TilePropsType = {
    selectCategoryBooks: BookResponseType[]
    searchValue?: string
    show: boolean
}

export const Tile: React.FC<TilePropsType> = ({
                                                  selectCategoryBooks, searchValue, show
                                              }) => {

    return <div className={show ? css.wrapper_tile : css.wrapper_list}>

        {selectCategoryBooks.map((item) =>
            <div key={item.id}>
                <NavLink to={`/books/${item.categories}/${item.id}`}>
                    <TileItem
                        id={item.id}
                        searchValue={searchValue}
                        image={item.images}
                        title={item.title}
                        authors={item.authors}
                        issueYear={item.issueYear}
                        rating={item.rating}
                        booking={item.booking}
                        delivery={item.delivery}
                        show={show}
                    />
                </NavLink>
            </div>
        )
        }
    </div>
}

