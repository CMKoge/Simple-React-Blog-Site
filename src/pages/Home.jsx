import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data.slice(0, 10));
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <div>
                <h2 className="text-center mb-2">All Posts</h2>
                {loading ? (
                    <p>Loading Posts...</p>
                ) : (
                    <div>
                        {posts.map(item => (
                            <div key={item.id} className="card mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Home
