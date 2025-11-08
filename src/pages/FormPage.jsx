import { useState } from "react"
import axios from "axios"

const FormPage = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title,
                body,
                userId:1,
            });
            if (res.status === 201) {
                setResponse(res.data);
                setTitle("");
                setBody("");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="col-md-6 mx-auto">
            <h2 className="mb-4">Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter post title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Enter post content"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>

            {response && (
                <div className="alert alert-success mt-4">
                    <h6>✅ Post Created Successfully!</h6>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default FormPage
