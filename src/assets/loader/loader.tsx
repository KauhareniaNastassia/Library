import loader from '../img/loader.svg'
import css from './loader.module.scss'

export const Loader = () => (

    <div className={css.loader_wrapper}>
        <div className={css.loader} data-test-id='loader'>
            <img src={loader} alt="loader"/>
        </div>
    </div>


);