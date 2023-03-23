import React from 'react';
import css from './list.module.scss'
import {BookListResponseType} from "../../../api/books-list-api";
import {ListItem} from "./list-item/list-item";

type ListPropsType = {
    selectCategoryBooks: BookListResponseType[]
}

export const List: React.FC<ListPropsType> = ({selectCategoryBooks}) => {

    return <div className={css.wrapper_list}>

        {selectCategoryBooks.map((item) =>

            <ListItem
                key={item.id}
                item={item}
            />
        )
        }
    </div>
}
