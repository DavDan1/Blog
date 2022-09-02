import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Dav', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Nick', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Jon', id: 3 }
  ])

  const [name, setName] = useState('Jon');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Doe')}>Change name</button>
    </div>
  );
}

export default Home;