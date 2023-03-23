import React, {useEffect} from 'react';
import {BookSlider} from "../books-list/book/slider/slider";
import {getBookTC} from "../../redux/book-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getCategoriesListTC} from "../../redux/category-reducer";
import {useNavigate} from "react-router-dom";
import {getUserDataTC} from "../../redux/user-reducer";

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/auth')
    } else {
      dispatch(getUserDataTC())
    }

  }, [isLoggedIn, dispatch])



  return (
      <section className='profile-page'>
        Profile
      </section>
  )
}

