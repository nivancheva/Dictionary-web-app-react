import './Navigation.css';
import Toggle from '../components/Toggle';
import logo from '../assets/images/logo.svg';

export default function Navigation({font, changeFont}) {

    return (
        <div className='header flex'>
            <img src={logo}/>
            <div className='header-nav flex'>
                <div className='font-family flex'>
                    <select
                        id="input-font"
                        className="font-family-style"
                        value={font}
                        onChange={e => changeFont(e.target.value)}>

                        <option value="sans-serif">Sans-Serif</option>
                        <option value="serif">Serif</option>
                        <option value="mono">Mono</option>
                    </select>
                </div>
                <Toggle />
            </div>     
        </div>
    )
}