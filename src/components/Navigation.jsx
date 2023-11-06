import './Navigation.css';
import Toggle from '../components/Toggle';
import logo from '../assets/images/logo.svg';
import ChooseFont from './ChooseFont';

const fonts = [
    {
        text: "Sans-Serif",
        value: "sans-serif"
    },
    {
        text: "Serif",
        value: "serif"
    },
    {
        text: "Mono",
        value: "mono"
    }
];

export default function Navigation({font, changeFont}) {
    return (
        <div className='header flex'>
            <img src={logo}/>
            <div className='header-nav flex'>

                <ChooseFont fonts={fonts} font={font} changeFont={changeFont}/>

                <Toggle />
            </div>     
        </div>
    )
}