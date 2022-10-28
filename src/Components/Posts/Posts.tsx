import { FC, useEffect } from 'react';
import { getPosts } from '../../features/posts/postSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import style from './Post.module.scss';

export const Posts: FC = () =>{
    const dispatch = useAppDispatch();
    const {data,error, loading} = useAppSelector((state) => state.posts);

    const renderedPosts = data && data.map((post) =>{
        return(
            <div key={post.id} className={style.posts_post}>
                <h2>{post.title}</h2>
                <p>{post.category}</p>
                <span>{post.userId}</span>
            </div>
        )
    });

    useEffect(() =>{
        dispatch(getPosts())
    }, [dispatch]);
    
    return(
        <section className={style.posts}>
            <div className='container'>
                {error && `Error: ${error}`}
                {loading ? <h2>Loading...</h2> :
            <div className={style.posts_container}>
                {renderedPosts}
            </div>
                }
            </div>
        </section>
    )
}