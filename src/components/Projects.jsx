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
  {repositoryUrl && (
    <Row>
      <a href={repositoryUrl}>{links.repository}</a>
    </Row>
  )}
    {taskUrl && (
      <Row>
        <a href={taskUrl}>{links.task}</a>
      </Row>
    )}
    {deployUrl && (
      <Row>
        <a href={deployUrl}>{links.deploy}</a>
      </Row>
    )}
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
    width: '100px'
  },
]

const Projects = () => {
  const { language: { language }} = useContext(LanguageContext);
  return (
    <div
      style={{
        width: '900px',
        marginLeft: 40,
      }}
    >
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