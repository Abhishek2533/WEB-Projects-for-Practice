import React, { useEffect, useState } from 'react'
import firebase from 'firebase'




function Feed() {
    const [input, setInput] = useState()
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);
    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").orderBy("timestamp", "desc").add({
            name: '',
            description: '',
            message: input,
            photoUrl: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };


    return (
        <div className='feed'>
            <div className="feedInputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions />
                </div>
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed;