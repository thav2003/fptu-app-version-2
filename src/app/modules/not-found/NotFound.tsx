import React from "react";

import { Layout, Button, Result } from "antd";

import Helmet from "react-helmet-async";

const { Content } = Layout;

function NotFound({history}) {
  return (
    <Content className="content-container mt-24">
      <Helmet>
        <title>404 - FUHCM.com</title>
      </Helmet>
      <div
        style={{
          background: "#fff",
          padding   : "2rem",
          textAlign : "center",
        }}
      >
        <Result
          status="404"
          title="404"
          subTitle="Mô phật, thí chủ đi đâu mà lạc vào đây?"
          extra={(
            <Button type="primary" className="bg-sky-500" onClick={() => history.goBack()}>Quay lại</Button>
           
          )}
        />
      </div>
    </Content>
  );
}

export default NotFound;
