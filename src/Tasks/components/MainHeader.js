import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task1'>
                            Task1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task2'>
                            Task2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task3'>
                            Task3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task4'>
                            Task4
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task5'>
                            Task5
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task6'>
                            Task6
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task7'>
                            Task7
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task8'>
                            Task8
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/task9'>
                            Task9
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;