import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context";
import { data } from "../data/data";
import CourseItem from "./CourseItem";
import c from "./styles/index.module.scss";
import Cosmic from 'cosmicjs';

const Courses = () => {
  const {
    locale,
    language: { language },
  } = useContext(LanguageContext);
  const [courses, setCourses] = useState([]);
  const api = Cosmic();
  const bucket = api.bucket({
    slug: process.env.REACT_APP_COSMIC_SLUG,
    read_key: process.env.REACT_APP_COSMIC_READ,
  });
  useEffect(() => {
    bucket?.objects
    .find({
      type: "courses",
      locale,
    })
    .props("metadata")
    .then((data) => {
      setCourses(data?.objects?.map((i) => i?.metadata));
    })
    .catch(() => {
      setCourses(data[language]?.courses);
    })
  }, [locale]);

  return (
    <div className={c.courses_layout}>
      {courses.sort((a, b) => a.index - b.index)?.map((course, index) => (
        <CourseItem key={index} className={c} course={course} />
      ))}
    </div>
  );
};

export { Courses };
