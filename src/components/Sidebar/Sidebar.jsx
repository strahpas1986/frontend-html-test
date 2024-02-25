import './sidebar.scss';
import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default function Sidebar() {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpened = () => {
        setIsOpened(!isOpened);
    }
    return (
        <div className={isOpened === false ? 'sidebar' : 'sidebar_active'}>
                <div className={isOpened === false ? 'sidebar__logo' : 'sidebar__logo_active'}>
                    <img
                        className='sidebar__img'
                        src={ logo }
                        alt="TensorFlow logo"
                    />
                    <span className={isOpened === false ? 'sidebar__btn_descr' : 'sidebar__btn_descr_active'}>TensorFlow</span>
                </div>
                <button 
                    className={isOpened === false ? 'sidebar__btn' : 'sidebar__btn_active'}
                    onClick={handleOpened}
                >
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } />
                </button>
                <div className={isOpened === false ? 'sidebar__container' : 'sidebar__container_active'}>
                    {
                        routes.map((route) => (
                            <div 
                                key={ route.title }
                                // onClick={ () => this.goToRoute(route.path) }
                                className='sidebar__list'
                            >
                                <FontAwesomeIcon icon={ route.icon } />
                                <span 
                                    className={isOpened === false ? 'sidebar__list_item' : 'sidebar__list_item_active'}
                                    // isOpened={isOpened}
                                >
                                    { route.title }
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
    )

}
