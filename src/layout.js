import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/signup">signUp</Link>
                    </li>
                    <li>
                        <Link to="/signin">signIn</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};
export default Layout;
