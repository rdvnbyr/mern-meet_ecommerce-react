import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router';
import { CommentActions } from '../../actions';

function About() {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comments);
    // const isLogin = useSelector(state => state.session.isLogin);

    useEffect(() => {
        dispatch(CommentActions.getComment());
    }, [dispatch]);

    // if (isLogin) {
    //     return Redirect('/');
    // }

    return (
        <div style={{margin: '120px', minHeight: '100vh'}}>
            {
                comments.map( comment => {
                    return(
                        <div className="m-2 p-4 shadow border w-100" key={comment.id}>
                            <h6>{comment.email}</h6>
                            <h4>{comment.name}</h4>
                            <p>{comment.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default About