import { FC, useEffect } from 'react';
import './App.css';
import { getPosts } from './features/posts/postSlice';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelector';

const App: FC = () => {
  const dispatch = useAppDispatch()
  const {data, error, loading} = useAppSelector((state) => state.posts)
  

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  
  const renderedData = data && data.map((post) =>{
    return(
      <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <span>{post.userId}</span>
      </div>
    )
  })

   return (
    <div>
      <h2>Test</h2>
      <button>Test Custom Hook</button>
      <div>
        {error && "Error"}
        {loading ? <h2>Loading...</h2> :
         renderedData }
      </div>
    </div>
  );
}

export default App;
