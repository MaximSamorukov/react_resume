import React from "react";
import { Header } from "./components/header";
import { Layout } from "antd";
import { ContentItem } from "./components/ContentItem";
import { Wrapper } from "./components/Wrapper";
import { Instruments } from "./components/Instruments";
import { WorkExperience } from "./components/WorkExperiemce";
import { Profiles } from "./components/Profiles.jsx";
import { Courses } from "./components/Courses.jsx";
import { Projects } from "./components/Projects.jsx";
import { Bio } from "./components/Bio.jsx";
import s from './components/styles/app.module.scss';

function App() {
  return (
    <Wrapper>
      <Layout
        id="pdf"
        className={s.layout}
      >
        <Header />
        <ContentItem>
          <Bio />
        </ContentItem>
        <ContentItem
          style={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
          title="profiles"
        >
          <Profiles />
        </ContentItem>
        <ContentItem title="stack">
          <Instruments />
        </ContentItem>
        <ContentItem title="experience">
          <WorkExperience />
        </ContentItem>
        <ContentItem
          style={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
          title="education"
        >
          <Courses />
        </ContentItem>
        <ContentItem title="projects" style={{ minWidth: "100%" }}>
          <Projects />
        </ContentItem>
      </Layout>
    </Wrapper>
  );
}

export default App;
