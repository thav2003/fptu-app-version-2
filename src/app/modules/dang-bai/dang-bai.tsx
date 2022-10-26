import React, { useEffect, useState } from "react";
import "./dang-bai.css";
import { Layout, Row, Col, Tabs, Button, Space } from "antd";
import {
  DashOutlined,
  AreaChartOutlined,
  FormOutlined,
  VideoCameraFilled,
  SendOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { ConfessIcon, SharePublicIcon } from "../../icons/icon";
import TrangThai from "./trang-thai/trang-thai";
const { Content } = Layout;
const { TabPane } = Tabs;

const DangBai: React.FC = () => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "100%" }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="h-full">
          <Col span={12}>
            <div className="space-y-4 w-full h-full">
              <Tabs
                defaultActiveKey="1"
                tabBarStyle={{ userSelect: "none" }}
                className="bg-[#fefefe] header-boxshadow p-2 min-h-[250px]"
              >
                <TabPane
                  tab={
                    <span>
                      <FormOutlined />
                      Trạng thái
                    </span>
                  }
                  key="1"
                >
                  <TrangThai />
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <AreaChartOutlined />
                      Image
                    </span>
                  }
                  key="2"
                >
                  <input
                    accept="image/*,image/heif,image/heic"
                    className="plzdoh0l"
                    multiple
                    type="file"
                  />
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <VideoCameraFilled />
                      Video
                    </span>
                  }
                  key="3"
                >
                  <input
                    accept="video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
                    className="plzdoh0l"
                    multiple
                    type="file"
                  />
                </TabPane>
              </Tabs>
              <div className="bg-[#fefefe] p-2 flex header-boxshadow">
                <Space>
                  <Button
                    className="relative"
                    icon={
                      <SendOutlined className="-rotate-45 -translate-y-1" />
                    }
                  >
                    Đăng ngay
                  </Button>
                  <Button
                    icon={<CalendarOutlined className="-translate-y-0.5" />}
                  >
                    Lên lịch đăng
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="space-y-4 w-full h-full">
              <div className="bg-[#fefefe] p-2 flex header-shadow">
                <h3 className="font-semibold flex-grow flex-shrink ">
                  Xem trước bài viết
                </h3>
              </div>

              <div className={`min-h-[250px]  bg-[#1c1e21] rounded-[8px] `}>
                <div>
                  <div>
                    <div className="flex items-start px-[16px] pt-[12px] mb-[-12px]">
                      <div className="mr-[8px] ">
                        <ConfessIcon />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col mt-[-5px]">
                          <div className="max-w-full ">
                            <h2 className="text-[.9375rem] text-[#E4E6EB] font-[400]">
                              <strong>FPTU HCM Confessions</strong>
                            </h2>
                          </div>
                          <div>
                            <p className="text-[.8125rem] text-[#B0B3B8] font-[400]">
                              7 giờ trước
                              <span aria-hidden="true"> · </span>
                              <span>
                                <SharePublicIcon />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-[8px] ">
                        <DashOutlined style={{ color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="px-[16px] pt-[12px]">
                      <div className="flex flex-col">
                        <div className="my-[5px] whitespace-pre-line">
                          <span className="text-[.9375rem] text-[#E4E6EB]">
                            content here
                          </span>
                        </div>
                        <div>
                          <span className="text-[.9375rem] text-[#E4E6EB] whitespace-pre-line">
                            admin here
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="border-solid border-b-[1px] border-[#3E4042] border-b-[1px] my-0 pb-[10px] mx-[12px]"></div>
                      <div className=" mx-[12px]">
                        <div className="relative flex flex-shrink-[0] flex-row items-stretch justify-between p-4 box-border flex-wrap mt-[-6px] mx-[-2px]">
                          <div className="relative flex flex-col flex-shrink basis-[0px] max-w-full box-border px-[2px]  ">
                            <div className="relative border-box inline-flex flex-shrink items-stretch flex-row basis-[auto] p-0 m-0 bg-transparent">
                              <div className="relative whitespace-nowrap flex flex-row px-[12px] flex-grow flex-shrink items-center justify-center pt-0 box-border h-[44px] my-[-6px] mx-[-4px] border-box flex-wrap">
                                <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="i-image gneimcpu oee9glnz"
                                  />
                                </div>
                              </div>
                              <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                <span className="text-[0.9375rem max-w-full block font-[600] text-[#B0B3B8] leading-[1.3333]  whitespace-nowrap">
                                  Thích
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex flex-col flex-shrink basis-[0px] max-w-full box-border px-[2px] ">
                            <div className="relative border-box inline-flex flex-shrink items-stretch flex-row basis-[auto] p-0 m-0 bg-transparent">
                              <div className="relative whitespace-nowrap flex flex-row px-[12px] flex-grow flex-shrink items-center justify-center pt-[0px] box-border h-[44px] my-[-6px] mx-[-4px] border-box flex-wrap">
                                <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="i-image gneimcpu oee9glnz"
                                  />
                                </div>
                              </div>
                              <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                <span className="text-[0.9375rem max-w-full block font-[600] text-[#B0B3B8] leading-[1.3333]  whitespace-nowrap">
                                  Bình luận
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex flex-col flex-shrink basis-[0px] max-w-full box-border px-[2px] ">
                            <div className="relative border-box inline-flex flex-shrink items-stretch flex-row basis-[auto] p-0 m-0 bg-transparent">
                              <div className="relative whitespace-nowrap flex flex-row px-[12px] flex-grow flex-shrink items-center justify-center pt-[0px] box-border h-[44px] my-[-6px] mx-[-4px] border-box flex-wrap">
                                <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="i-image gneimcpu oee9glnz"
                                  />
                                </div>
                              </div>
                              <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                <span className="text-[0.9375rem max-w-full block font-[600] text-[#B0B3B8] leading-[1.3333]  whitespace-nowrap">
                                  Chia sẻ
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};
export default DangBai;
