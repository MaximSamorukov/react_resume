import { Header } from "./components/header";
import { Layout } from "antd";
import { ContentItem } from "./components/ContentItem";
import { Wrapper } from './components/Wrapper';
import { Instruments } from './components/Instruments';

function App() {
  return (
    <Wrapper>
      <Layout style={{
        margin: 10,
      }}>
        <Header />
        <ContentItem title="stack">
          <ul>
            <Instruments />
          </ul>
        </ContentItem>
      </Layout>
    </Wrapper>
  );
}

export default App;
