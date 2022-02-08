import { Header } from "./components/header";
import { Layout } from "antd";
import { ContentItem } from "./components/ContentItem";
import { Wrapper } from './components/Wrapper';
import { Instruments } from './components/Instruments';
import { WorkExperience } from './components/WorkExperiemce';

function App() {
  return (
    <Wrapper>
      <Layout style={{
        margin: 10,
        backgroundColor: 'white',
      }}>
        <Header />
        <ContentItem title="stack">
          <Instruments />
        </ContentItem>
        <ContentItem title="experience">
          <WorkExperience />
        </ContentItem>
        <ContentItem title="education">
          <Instruments />
        </ContentItem>
        <ContentItem title="projects">
          <Instruments />
        </ContentItem>
      </Layout>
    </Wrapper>
  );
}

export default App;
