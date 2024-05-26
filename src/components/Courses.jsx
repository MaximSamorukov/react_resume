import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context";
import { data } from "../data/data";
import CourseItem from "./CourseItem";
import c from "./styles/index.module.scss";

const Courses = () => {
  const {
    language: { language },
  } = useContext(LanguageContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(data[language]?.courses.filter((i) => i.valid));
  }, [language]);

  return (
    <div className={c.courses_layout}>
      {courses.sort((a, b) => a.index - b.index)?.map((course, index) => (
        <CourseItem key={index} className={c} course={course} />
      ))}
    </div>
  );
};

export { Courses };
