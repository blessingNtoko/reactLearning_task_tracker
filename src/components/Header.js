import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onShowAddTask, showingAddTask }) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button
                backColor={showingAddTask ? 'red' : 'green'}
                text={showingAddTask ? 'Close' : 'Add'}
                onClick={onShowAddTask}
            />}
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// An example of how to implement CSS in JS
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'green'
// }

export default Header;
