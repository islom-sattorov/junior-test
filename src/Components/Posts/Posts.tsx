import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import style from './Post.module.scss';

type Post = {
    userId: number;
    id: number;
    title: string;
    category: string;
    subtitle: string;
}

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
    const [posts, setPosts] = useState<Post[]>(() => []);
    const [error, setError] = useState<unknown>();
    const [currentPage, setCurrentPage] = useState(() => 1)
    const [fetching, setFetching] = useState(() => true) 
    const [totalCount, setTotalCount] = useState<any>(() => 0)
    
    const scrollHandler = ():void =>{
        if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100){
            setFetching(true)
        }
    }
    
    const renderedPosts = posts && posts.map((post) =>{
        return(
            <div key={post.id} className={style.posts_post}>
                <h2>{post.title}</h2>
                <p>{post.category}</p>
                <p className={style.test}>{post.subtitle}</p>
                <span>{post.userId}</span>
            </div>
        )
    });

    useEffect(() =>{
        if(fetching){
            axios.get(`http://localhost:3001/posts?_limit=20&_page=${currentPage}`)
            .then(response =>{
            setPosts([...posts, ...response.data])
            setCurrentPage(prev => prev + 1)
            setTotalCount(response.headers[`x-total-count`])
        })
        .finally(() => {
            setFetching(false)
        })
    }
    }, [fetching])  

    useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
      return () => {
    document.removeEventListener('scroll', scrollHandler)
      }
    }, [])
    
    return(
        <>
         {error ? "Error" :
           <div className={style.posts_container}>
            {renderedPosts}
            </div>}
        </>
    )
}



// const dispatch = useAppDispatch();
// const {data,error, loading} = useAppSelector((state) => state.posts);