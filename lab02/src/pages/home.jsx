import {
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import Contact from './about/contact';
import Info from './about/info';

export function Home(props) {
    return (
        <div>
            <h1>Welcome to Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati officia necessitatibus corporis sit soluta suscipit ipsa, unde, dicta eveniet tempore animi? Fuga ut nisi voluptate repellendus odit illum quisquam.</p>
            
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='info' element={<Info />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<NotMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <div>
            <nav>
                <Link to="home/*">Home</Link> <br />
                <Link to="/home/info">Info</Link> <br />
                <Link to="/home/contact">Contact us</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

function NotMatch() {
    return(
        <div>
            <h2>Error 404 - File not found</h2>
            <Link to='/home'>Go to home page</Link>
        </div>
    );
}