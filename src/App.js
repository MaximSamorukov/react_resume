import { Header } from "./components/header";
import { Layout } from "antd";
import { ContentItem } from "./components/ContentItem";
import { Wrapper } from './components/Wrapper';
import { Instruments } from './components/Instruments';
import { WorkExperience } from './components/WorkExperiemce';
import { Profiles } from './components/Profiles.jsx';
import { Courses } from './components/Courses.jsx';
import { Projects } from './components/Projects.jsx';

function App() {
  return (
    <Wrapper>
      <Layout style={{
        margin: 10,
        backgroundColor: 'white',
      }}>
        <Header />
        <ContentItem style={{
          marginRight: 'auto',
          marginLeft: 'auto'
        }} title="profiles">
          <Profiles />
        </ContentItem>
        <ContentItem title="stack">
          <Instruments />
        </ContentItem>
        <ContentItem title="experience">
          <WorkExperience />
        </ContentItem>
        <ContentItem title="education">
          <Courses />
        </ContentItem>
        <ContentItem title="projects">
          <Projects />
        </ContentItem>
      </Layout>
    </Wrapper>
  );
}

export default App;
