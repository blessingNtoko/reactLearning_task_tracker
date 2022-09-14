import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {

    const onClick = () => {
        console.log('Click from Header');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                backColor='green'
                text='Add'
                onClick={onClick}
            />
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
