import React from 'react';
import css from "../../pages/books-list/book/book-page.module.scss";
import {Link, useParams} from "react-router-dom";
import {CategoriesType} from "../../api/books-list-api";
import {useAppSelector} from "../../hooks/hooks";

type BreadcrumbsPropsType = {
    categories: CategoriesType | null
    title: string
}

export const Breadcrumbs: React.FC<BreadcrumbsPropsType> = ({categories, title}) => {
    const categoriesFromServer = useAppSelector(state => state.categories.items)
    const {category} = useParams();


    let categoryArr = category?.split(',') //if category not one, but two,here they are in string
    let categoryName

    if (categoryArr && categoryArr?.length > 0) {
        if (categories) {
            categoryName = categoriesFromServer.find(({name}) => name === categories[0]);
        }
    } else {
        categoryName = categoriesFromServer.find(({name}) => name === category);
    }

    return (
        <div className={css.bookPage__path}>
            <Link to={`/books/${categoryName?.path}`}>
                <span>{category ? categoryName?.name : 'Все книги'}</span>
            </Link>
            <span>/</span>
            <span>{title}</span>
        </div>
    );
};

