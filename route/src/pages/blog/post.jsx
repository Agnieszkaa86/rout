import { useParams } from "react-router-dom"

function Post() {
    const { postId } = useParams();
    return (
        <>
            <h1>Single post</h1>
            <h2>Post ID:{postId}</h2>
        </>
    );
}
export default Post;