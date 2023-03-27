import React from 'react';
import css from './list.module.scss'
import {BookListResponseType} from "../../../api/books-list-api";
import {ListItem} from "./list-item/list-item";
import {NavLink} from "react-router-dom";
import {NotFoundMessage} from "../../../common/not-found-message/not-found-message";

type ListPropsType = {
    selectCategoryBooks: BookListResponseType[]
    searchValue?: string
}

export const List: React.FC<ListPropsType> = ({selectCategoryBooks, searchValue}) => {

    return <div className={css.wrapper_list}>
        {selectCategoryBooks.map((item) =>
                <div key={item.id}>
                    <NavLink to={`/books/${item.categories}/${item.id}`}>
                        <ListItem
                            id={item.id}
                            searchValue={searchValue}
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
