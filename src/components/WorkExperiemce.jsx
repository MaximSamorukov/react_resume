import React from "react";
import { JobItem } from './Job_item';
import { data } from '../data/data';

export const WorkExperience = () => {
  return (
    <ul className="ui list">
      {
        data.ru.experience.map((item, index) => {
          return (
            <JobItem key={index} item={item} />
          )
        })
      }
    </ul>
  )
}
