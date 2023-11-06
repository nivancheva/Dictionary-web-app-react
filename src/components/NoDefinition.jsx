import './NoDefinition.css';

export default function NoDefinition() {
    return (
        <div className="no-data">
            <p className='emoji'>😕</p>
            <p className='no-found'>No Definitions Found</p>
            <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
    )
}