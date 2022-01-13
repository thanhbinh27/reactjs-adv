import { Link } from 'react-router-dom';

export function NotMatch(props) {
    return (
        <div>
            <h1>Error 404 - file/pages not found</h1>
            <div>
                <Link to="/search">Go to home page</Link>
            </div>
        </div>
    );
}