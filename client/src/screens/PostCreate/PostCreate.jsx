import Layout from '../../components/shared/Layout/Layout';
import { Redirect } from 'react-router-dom';
import { createProduct } from '../../services/products';

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    userId: '',
  });

  const [isCreated, setCreated] = useState(false);

  return <input placeholder='Title' name='title' />;
};

export default PostCreate;
