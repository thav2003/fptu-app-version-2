import React, { useState, useEffect } from "react";
import {
  LikeFilled,
  EyeFilled,
  MessageFilled,
  ShareAltOutlined,
  DollarCircleOutlined,
  EditOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Col,
  Row,
  Button,
  DatePicker,
  Skeleton,
  List,
  Divider,
  Calendar,
  Select,
  Badge,
  Modal,
} from "antd";
import type { DatePickerProps } from "antd";
import "moment/locale/vi";
import moment from "moment";
import type { Moment } from "moment";
import locale from "antd/es/date-picker/locale/vi_VN";
import Helmet from "react-helmet-async";
import filter from "lodash.filter";
import { formatDate } from "../../helpers/helper";
import axiosApi from "./api/axiosApi";
const { Content } = Layout;

// id: feed.id,
// tags: tags,
// reactions: reactions[0].values[0].value,
// comments: comments.data,

interface IReaction {
  [key: string]: number;
}
interface IComment {
  created_time:"string",
  id:string,
  message:string,
  [key: string | number]: any;
}
interface ITag {
  [key: string | number]: any;
}
interface IApprover{
  _id:string,
  name:string,
}
interface ISender{
  _id:string,
  name:string,
}
interface IPost {
  id: string;
  tags: ITag[];
  comments: IComment[];
  reactions: IReaction[];
  reaction_total: number;
  view: number;
  share: number;
  content:string;
  updatedAt:string;
  createdAt:string;
  status:number;
  title?: string;
  approver?:IApprover;
  cfsID?:string;
  reason?:string;
  sender?:ISender;
}

const getListData = (value: Moment) => {
  let listData;
  const dateValue = value.format("DD/MM/YYYY");
  switch (dateValue) {
    case "12/10/2022":
      listData = [
        { time: "12:20", content: "Hôm nay đi uống trà sữa." },
        { time: "10:30", content: "Tạch cmnr." },
      ];
      break;
    case "10/10/2022":
      listData = [
        { time: "14:20", content: "Reatake cmnr." },
        { time: "18:00", content: "Thở oxy." },
        { time: "21:00", content: "..." },
      ];
      break;

    default:
  }
  return listData || [];
};
const dateCellRender = (value: Moment, month: number) => {
  const listData = getListData(value);
  const count = listData.length;
  const showDot = count > 0 ? true : false;
  const [isModalVisible, setIsModalVisible] = useState(false);
  let style;
  if (value.month() !== month) {
    style = "text-gray-400";
  } else {
    style = "text-black";
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //console.log(value.format("DD//MM"));
  return (
    <div>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <Badge dot={showDot}>
        <div
          onClick={value.month() === month ? showModal : undefined}
          className={`h-[32px] w-[32px] hover:bg-slate-400  flex items-center justify-center  ${
            showDot && "bg-sky-500"
          }`}
        >
          <div className={style}>{value.format("DD")}</div>
        </div>
      </Badge>
      <Modal
        title={value.format("DD/MM/YYYY")}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} className="rounded-lg">
            Back
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            className="bg-gray-800 hover:bg-gray-400 hover:text-white rounded-lg border-none text-white w-fit"
          >
            Okie
          </Button>,
        ]}
      >
        <ul>
          {listData.map(item => (
            <li key={item.content}>
              <div className="flex gap-5 items-end">
                <p className="text-[14px]">{item.time} :</p>
                <p className="text-[18px] font-[500]">{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

const DashBoard: React.FC = () => {
  const [day, setDay] = useState<Moment | null>(moment());
  const [data, setData] = useState<IPost[]>([]);
  const [fullData, setFullData] = useState<IPost[]>([]);
  const [evenDay, setEventDay] = useState<Moment>(moment());

  const contains = (post, query) => {
    const time = formatDate(post.createdAt);

    if (time === query) {
      return true;
    }
    return false;
  };
  const onChangeDay: DatePickerProps["onChange"] = (date, dateString) => {
    //console.log(date, dateString);
    const filteredData = filter(fullData, post => {
      return contains(post, dateString);
    });

    setData(filteredData);
    setDay(date);
  };

  const onSelect = (newValue: Moment) => {
    //console.log(newValue);
    //console.log("click");
    setEventDay(newValue);
  };

  useEffect(() => {
    axiosApi.getAll().then(res => {
      //console.log(formatDate(res.data.data.data[0].createdAt));
      const cfs = res.data;
      //console.log(formatDate(day?.toISOString()));
      const filteredData = filter(cfs, post => {
        
        return contains(post,formatDate(day?.toISOString()));
      });
      //console.log(filteredData);
      setData(filteredData);
      setFullData(cfs);
    });
    
   

  }, []);

  return (
    <Content style={{ margin: "24px 16px 0" }} className="dashboardPage">
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "100%" }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="h-full">
          <Col span={12} md={{ span: 14 }} lg={{ span: 16 }}>
            <div className=" space-y-4 w-full h-full rounded-lg">
              <div className="bg-yellow-400 w-full h-[30%] rounded-lg px-5 py-1 gap-1 flex">
                <div className="h-full flex-[1_1_65%]   flex flex-col justify-evenly">
                  <h1 className="font-semibold font-serif">Hello Admin!</h1>
                  <p className="text-[18px] font-[500]">
                    Bạn có muốn đăng tải tâm trạng hôm nay
                  </p>
                  <Button
                    size="large"
                    className="bg-gray-800 hover:bg-gray-400 hover:text-white rounded-lg border-none text-white w-fit"
                  >
                    Viết bài mới
                  </Button>
                </div>
                <div className="h-full flex-[1_0_35%]">
                  <img
                    src="/assets/images/fptuhcm-confessions.png"
                    className="h-full w-full object-fill imageSpin"
                  />
                </div>
              </div>
              <div className="bg-slate-100 w-full h-[70%] rounded-lg px-5 py-5 space-y-3 ">
                <div className="flex items-center">
                  <h1 className="font-semibold font-serif w-full">Top Posts</h1>
                  <div>
                    <DatePicker
                      onChange={onChangeDay}
                      format="DD/MM/YYYY"
                      locale={locale}
                      allowClear={false}
                      value={day}
                      bordered={true}
                    />
                  </div>
                </div>
                <div className="overflow-x-hidden overflow-y-auto h-[22rem] custom-scroll-y pr-[16px] w-full">
                  <List
                    className="w-full"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item key={item.id}>
                        <div className="!flex items-center w-full ">
                          <p className="mr-[16px]">{index + 1}</p>
                          <div className="w-[50%]">
                            <h3 className="text-pink-500">
                              {/* #FPTUC_1164{index} */}
                              {item.title}
                            </h3>
                          </div>
                          <div className="w-[50%]">
                            <table className="w-full ">
                              <tbody>
                                <tr>
                                  <td className="w-[25%] text-right">
                                    <div className="flex gap-2 items-center justify-end">
                                      <p>{item.view}</p>
                                      <EyeFilled />
                                    </div>
                                  </td>
                                  <td className="w-[25%] text-right">
                                    <div className="flex gap-2 items-center justify-end">
                                      <p>{item.reaction_total}</p>
                                      <LikeFilled />
                                    </div>
                                  </td>
                                  <td className="w-[25%] text-right">
                                    <div className="flex gap-2 items-center justify-end">
                                      <p>
                                        {item.comments
                                          ? item.comments.length
                                          : 0}
                                      </p>
                                      <MessageFilled />
                                    </div>
                                  </td>
                                  <td className="w-[25%] text-right">
                                    <div className="flex gap-2 items-center justify-end">
                                      <p>{item.share}</p>
                                      <ShareAltOutlined />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col span={12} md={{ span: 10 }} lg={{ span: 8 }}>
            <div className=" space-y-4 w-full h-full rounded-lg">
              <div className="bg-green-300 p-5 py-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <DollarCircleOutlined className="left-icon" />
                  <div>
                    <h1>623</h1>
                    <p>Tổng bài đăng</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-300 p-5 py-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <EditOutlined className="left-icon" />
                  <div>
                    <h1>623</h1>
                    <p>Chờ duyệt/đăng</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-300 p-5 py-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <ClockCircleOutlined className="left-icon" />
                  <div>
                    <h1>623</h1>
                    <p>Bị từ chối</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-500 w-fit rounded-lg">
                <div className="w-full rounded-lg bg-yellow-500 p-2 ">
                  <Calendar
                    fullscreen={false}
                    value={evenDay}
                    dateFullCellRender={value =>
                      dateCellRender(value, evenDay.month())
                    }
                    onSelect={onSelect}
                    headerRender={({ value, onChange }) => {
                      const start = 0;
                      const end = 12;
                      const monthOptions = [] as any;

                      const current = value.clone();
                      const localeData = value.localeData();
                      const months = [] as any;
                      for (let i = 0; i < 12; i++) {
                        current.month(i);
                        months.push(localeData.monthsShort(current));
                      }

                      for (let i = start; i < end; i++) {
                        monthOptions.push(
                          <Select.Option
                            key={i}
                            value={i}
                            className="month-item"
                          >
                            {months[i]}
                          </Select.Option>
                        );
                      }

                      const month = value.month();

                      return (
                        <div className="bg-yellow-500 flex items-center p-4 pr-8">
                          <h2 className="font-semibold w-full">
                            Event Calendar
                          </h2>
                          <Row gutter={8}>
                            <Col>
                              <Select
                                size="small"
                                dropdownMatchSelectWidth={false}
                                value={month}
                                onChange={newMonth => {
                                  const now = value.clone().month(newMonth);
                                  onChange(now);
                                }}
                              >
                                {monthOptions}
                              </Select>
                            </Col>
                          </Row>
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default DashBoard;
