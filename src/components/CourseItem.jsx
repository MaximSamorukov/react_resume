import React, { useContext } from "react";
import { LanguageContext } from "../context";
import hexletLogo from "../icons/hexlet_logo.png";
import htmlAcademyLogo from "../icons/html_academy_logo.png";
import rss from "../icons/rss.jpg";

const logos = {
  hexlet: hexletLogo,
  academy: htmlAcademyLogo,
  rss: rss,
};

const CourseItem = ({ className, course }) => {
  return (
    <div className={className.course_item}>
      <div className={className.course_item_type}>
        <img src={logos[course.type]} alt={course.type} />
      </div>
      <div className={className.course_item_school}>{course.school}</div>
      <div className={className.course_item_name}>{course.name}</div>
    </div>
  );
};

export default CourseItem;
