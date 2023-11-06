import { useState } from 'react';
import './ChooseFont.css';
import iconArrow from '../assets/images/icon-arrow-down.svg';

export default function ChooseFont({fonts, font, changeFont}) {
    const [openFont, setOpenFont] = useState(false);

    function toggleMenu() {
        setOpenFont(!openFont);
    }

    function selectFont(newFont) {
        changeFont(newFont.value);
        toggleMenu();
    }

    return (
            <div className='font-family'>
                <button className='flex fonts' onClick={toggleMenu}>
                    <p className='choosed-font'>{fonts.find((i) => i.value === font).text}</p>
                    <img src={iconArrow}/>
                </button>
                 { openFont &&
                    <div className='font-dropdown'>
                        <ul>
                            {fonts.map((f, idx) => {
                                return (
                                    <li className='font' key={idx} onClick={() => selectFont(f)}>{f.text}</li>
                                );
                            })}
                        </ul>
                    </div>
                }
            </div>
    )
}
