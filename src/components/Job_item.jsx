import React from "react";

export const JobItem = ({ item }) => {
  const { company, title, start, end, description } = item;
  return (
    <div className="ui relaxed divided list">
      <div className="content">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              marginRight: 10,
            }}>
              <h4 className="ui header">{company}</h4>
            </div>
            <div style={{
              lineHeight: '18px'
            }}>
              <span>{start}</span>
              <span> - </span>
              <span>{typeof end === 'string' ? end : 'н.в.'}</span>
            </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              marginRight: 10,
              marginTop: 8,
            }}>
              <span >{title}</span>
            </div>
        </div>


        <div
          className="ui bulleted list"
        >
          {description.map((i, index) => (
            <div
              key={index}
              className="item"
              style={{
                //height: 22
              }}
            >{i}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
