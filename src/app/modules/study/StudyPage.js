import React from "react";
import { Layout } from "antd";
import MyLayout from "../../layout/Layout";
import SideBar from "./sideBar";
const { Footer, Content, Header } = Layout;
const StudyPage = () => {
  return (
    <MyLayout hideFooter className="studyPage !overflow-hidden">
      <Layout hasSider className="lg:mt-24 mt-12 w-full h-full">
        <SideBar />
        <Layout className="lg:ml-[200px]">
          <Header className="site-layout-background" />
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                textAlign: "center",
              }}
            >
              <p>long content</p>
              {
                // indicates very long content
                Array.from(
                  {
                    length: 100,
                  },
                  (_, index) => (
                    <React.Fragment key={index}>
                      {index % 20 === 0 && index ? "more" : "..."}
                      <br />
                    </React.Fragment>
                  )
                )
              }
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2022 Created by Ynnub2804
          </Footer>
        </Layout>
      </Layout>
    </MyLayout>
  );
};
export default StudyPage;
