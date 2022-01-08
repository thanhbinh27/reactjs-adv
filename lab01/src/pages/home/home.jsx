import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <main>
                <h1>Home page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aliquam. Alias accusantium, veritatis, ad cum debitis tempora, aut quia vel ut excepturi sapiente consequuntur harum ducimus error vitae atque iure?</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}