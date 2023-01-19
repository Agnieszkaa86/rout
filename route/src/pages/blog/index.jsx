import { Link } from "react-router-dom";
function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <ul>
                <li>
                    <Link to="/blog/post-1">Post 1</Link>
                </li>
                 <li>
                    <Link to="/blog/jak-zrobic-jajecznice">Jak zrobić jajecznice</Link>
                </li>
                 <li>
                    <Link to="/blog/3">Co dobrego w pogodzie</Link>
                </li>
            </ul>
        </>
    );
}
export default Blog;