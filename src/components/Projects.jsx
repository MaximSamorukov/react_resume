import React, { useContext } from "react";
import { Table, Row } from "antd";
import { LanguageContext } from "../context";
import { data } from '../data/data';
import { links_table_en, links_table_ru } from '../data/libraries';

const Render = ( _ , { repositoryUrl, taskUrl, deployUrl }) => {
  const { language: { language }} = useContext(LanguageContext);
  const links = language === 'en' ? links_table_en : links_table_ru;
  return (
  <>
    <Row>
      <a href={repositoryUrl}>{links.repository}</a>
    </Row>
    <Row>
      <a href={taskUrl}>{links.task}</a>
    </Row>
    <Row>
      <a href={deployUrl}>{links.deploy}</a>
    </Row>
  </>
)}

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '150px',
  },
  {
    title: 'Description, Stack',
    dataIndex: 'description',
    key: 'description',
    width: '450px',
  },
  {
    title: 'Links',
    dataIndex: 'repositoryUrl',
    key: 'repositoryUrl',
    render: Render,
  },
]

const Projects = () => {
  const { language: { language }} = useContext(LanguageContext);
  return (
    <div>
      <Table
        dataSource={data[language].projects}
        columns={columns}
      />
    </div>
  )
}

export {
  Projects,
}