
import './App.css';
import Layout from "components/layout/Layout";
import TopNav from 'components/layout/TopNav/TopNav';
import Contents from 'components/layout/Contents';
import LeftMenu from 'components/layout/LeftMenu/LeftMenu';

import Routes from 'components/layout/Routes';
import { useDispatch, useStore } from 'react-redux';
import { setUsers } from 'features/api/usersSlice'
import { Api } from 'features/api/Api';
import { useEffect, useState } from 'react';
import { usersSelectors } from 'app/store';
import { setComments } from 'features/api/commentsSlice';
import { setPhotos } from 'features/api/photosSlice';
import { setPosts } from 'features/api/postsSlice';
import PageLoader from 'components/pages/PageLoader';
import Spacer from 'components/common/misc/Spacer';

function App() {
  const dispatch = useDispatch();

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {

    const initApp = async () => {
      const apiData = await Api.fetchData()

      dispatch(setUsers(apiData.users));
      dispatch(setComments(apiData.comments));
      dispatch(setPosts(apiData.posts));
      dispatch(setPhotos(apiData.photos));

      setIsAppReady(true);
    }

    initApp();
  }, [])




  return (
    <div className="App">
      {isAppReady ? <Layout>

        <TopNav />

        <Contents>

          <LeftMenu />

          <Routes />

        </Contents>

      </Layout> : <PageLoader />}


    </div>
  );
}

export default App;
