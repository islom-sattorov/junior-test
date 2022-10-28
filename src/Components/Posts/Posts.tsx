import { Spinner } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { getPosts } from '../../features/posts/postSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import style from './Post.module.scss';

export const Posts: FC = () =>{
    return(
        <section className={style.posts}>
            <div className='container'>
            <PostRender/>          
            </div>
        </section>
    )
}


const PostRender: FC = () =>{
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
        <>
        {loading ? 
            <Spinner
            thickness='4px' 
            speed='0.65s' 
            emptyColor='gray.200' 
            color='blue.500' 
            size='xl'/> : 
            error ? "Error" :
            <div className={style.posts_container}>
                {renderedPosts}
            </div>}
        </>
    )
}
