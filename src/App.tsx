
import './App.css';
import Layout from "components/layout/Layout";
import TopNav from 'components/layout/TopNav/TopNav';
import Contents from 'components/layout/Contents';
import LeftMenu from 'components/layout/LeftMenu/LeftMenu';
import Page from 'components/layout/Page';
import Routes from 'components/layout/Routes';
import { useDispatch } from 'react-redux';
import { setUsers, setComments, setPhotos, setPosts } from 'features/api/apiSlice'
import { Api } from 'features/api/Api';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Api.fetchUsers().then(data => {
      dispatch(setUsers(data));
    });

    Api.fetchComments().then(data => {
      dispatch(setComments(data));
    });

    Api.fetchPhotos().then(data => {
      dispatch(setPhotos(data));
    });

    Api.fetchPosts().then(data => {
      dispatch(setPosts(data));
    });
  })


  return (
    <div className="App">
      <Layout>

        <TopNav />

        <Contents>

          <LeftMenu />

          <Routes />

        </Contents>

      </Layout>


    </div>
  );
}

export default App;
