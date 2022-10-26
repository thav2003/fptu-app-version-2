import React, { Component } from "react";

import { Layout, Skeleton } from "antd";

const { Content } = Layout;

function Loading() {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div className="content-wrapper">
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    </Content>
  );
}

export default Loading;
