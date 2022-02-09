import React, { useContext } from "react";
import { Table } from "antd";
import { LanguageContext } from "../context";
import { data } from '../data/data';

const columns = [
  {
    title: 'Course',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: items => {
      return items.map((item, index, arr) => (
      <>
        <span>{item}</span>
        {(arr.length > index + 1) && <span> | </span>}
      </>
    ))}
  }
]

const Courses = () => {
  const { language: { language }} = useContext(LanguageContext);
  return (
    <div
      style={{
        marginLeft: 40,
      }}
    >
      <Table
        dataSource={data[language].courses}
        columns={columns}
      />
    </div>
  )
}

export {
  Courses,
}