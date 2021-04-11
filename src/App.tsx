
import './App.css';
import Layout from "components/layout/Layout";
import TopNav from 'components/layout/TopNav/TopNav';
import Contents from 'components/layout/Contents';
import LeftMenu from 'components/layout/LeftMenu/LeftMenu';
import Page from 'components/layout/Page';

function App() {

  return (
    <div className="App">
      <Layout>

        <TopNav />

        <Contents>

          <LeftMenu />

          <Page>
            adsadsadsasd
          </Page>

        </Contents>

      </Layout>


    </div>
  );
}

export default App;
