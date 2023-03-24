import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './tile.module.scss'
import {BookListResponseType} from "../../../api/books-list-api";
import TileItem from "./tile-item/tile-item";

type TilePropsType = {
    selectCategoryBooks: BookListResponseType[]
}

export const Tile: React.FC<TilePropsType> = ({selectCategoryBooks}) => {

    return <div className={css.wrapper_tile}>

        {selectCategoryBooks.map((item) =>
            <div key={item.id}>
                <NavLink to={`/books/${item.categories}/${item.id}`}>
                    <TileItem
                        image={item.image}
                        title={item.title}
                        authors={item.authors}
                        issueYear={item.issueYear}
                        rating={item.rating}
                        booking={item.booking}
                        delivery={item.delivery}
                    />
                </NavLink>

            </div>
        )
        }
    </div>

}

