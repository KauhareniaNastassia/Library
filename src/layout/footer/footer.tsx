import {NavLink} from 'react-router-dom';
import facebookLogo from '../../assets/img/facebook-logo.svg'
import instagramLogo from '../../assets/img/instagram-logo.svg'
import linkedinLogo from '../../assets/img/linkedin-logo.svg'
import vkLogo from '../../assets/img/vk-logo.svg'
import css from './footer.module.scss'

export const Footer = () => (
    <section className={css.wrapper}>
        <span>
            © 2020-2023 Cleverland. Все права защищены.
        </span>
        <div className={css.social}>
            <NavLink to='https://www.facebook.com/' target='_blank'>
                <img src={facebookLogo} alt='Facebook logo'/>
            </NavLink>
            <NavLink to='/https://www.instagram.com/' target='_blank'>
                <img src={instagramLogo} alt='Instagram logo'/>
            </NavLink>
            <NavLink to='https://vk.com/' target='_blank'>
                <img src={vkLogo} alt='VK logo'/>
            </NavLink>
            <NavLink to='https://www.linkedin.com/' target='_blank'>
                <img src={linkedinLogo} alt='Linkedin logo'/>
            </NavLink>

        </div>
    </section>
);
