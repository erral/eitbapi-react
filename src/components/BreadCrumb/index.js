import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const MyBreadCrumb = (props) => {
  const { items } = props;

  const build_url = (index) => {
    let my_items = [];
    for (let i = 0; i < index; i++) {
      my_items.push(items[i]);
    }
    return `/${my_items.join('/')}`;
  };

  return (
    <Breadcrumb>
      {items.map((item, index) => {
        return (
          <Breadcrumb.Item href={build_url(index)}>{item}</Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default MyBreadCrumb;
