import React, { useContext } from "react";
import cn from "classnames";
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
import { LanguageContext } from "./context/index.js";
import { themes } from "./data/libraries.js";
import s from './components/styles/app.module.scss';

function App() {
  const { theme } = useContext(LanguageContext);
  const isWhiteTheme = theme === themes.w;
  const style = cn(s.layout, {
    [s.layout_whiteTheme]: isWhiteTheme
  })
  return (
    <Wrapper>
      <Layout
        id="pdf"
        className={style}
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
