import React, { useContext } from "react";
import { LanguageContext } from "../context";
import { data } from "../data/data";
import CourseItem from "./CourseItem";
import c from "./styles/index.module.scss";

const Courses = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  const courses = data[language]?.courses;
  return (
    <div className={c.courses_layout}>
      {courses?.map((course) => (
        <CourseItem className={c} course={course} />
      ))}
    </div>
  );
};

export { Courses };
