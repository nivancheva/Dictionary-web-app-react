import './Toggle.css';


export default function Toggle() {
    
    function toggleDarkMode() {
        let element = document.body;
        element.classList.toggle("dark-mode");
    }


    return (
        <div className='flex toggle-dark'>
            <label className="switch">
                <input 
                    type="checkbox"
                    onClick={toggleDarkMode}
                />
                <span className="slider round"></span>
            </label>

            <div className='moon-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="inherit" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
            </div>
        </div>
    )
}