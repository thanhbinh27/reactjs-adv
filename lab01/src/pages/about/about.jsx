import { Link } from "react-router-dom";

export function About() {
    return (
        <>
            <main>
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, aliquam. Alias accusantium, veritatis, ad cum debitis tempora, aut quia vel ut excepturi sapiente consequuntur harum ducimus error vitae atque iure?</p>
            </main>
            <nav>
                <Link to="/">Contact</Link>
            </nav>
        </>
    );
}