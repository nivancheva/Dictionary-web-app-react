import './Navigation.css';
import Toggle from '../components/Toggle';
import logo from '../assets/images/logo.svg';
import iconArrowDown from '../assets/images/icon-arrow-down.svg'

export default function Navigation() {
    return (
        <div className='header flex'>
            <img src={logo}/>
            <div className='header-nav flex'>
                <div className='font-family flex'>
                    <p className='font-family-style'>Sans-Serif</p>
                    <button className='arrow-down'><img src={iconArrowDown}/></button>
                </div>
                <Toggle />
            </div>     
        </div>
    )
}