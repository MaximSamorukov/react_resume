import React from "react";
import cn from "classnames";
import { icons } from "../icons";
import { themes } from "../data/libraries";

const logos = (theme) => ({
  hexlet: icons[theme].hexlet,
  academy: icons[theme].academy,
  rss: icons[theme].rss,
});

const CourseItem = ({ className, course, theme }) => {
  return (
    <div className={className.course_item}>
      <div className={className.course_item_type}>
        {logos(theme)[course.type]}
      </div>
      <div className={cn(
        className.course_item_school,
        {
          [className.course_item_black]: theme === themes.b,
          [className.course_item_white]: theme === themes.w,
        }
      )}>{course.school}</div>
    </div>
  );
};

export default CourseItem;
