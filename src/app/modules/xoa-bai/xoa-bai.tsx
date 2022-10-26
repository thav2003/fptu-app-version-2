import React, { useEffect,useState } from "react";

import { Layout, List, Space, Button,Modal } from "antd";
import "./xoa-bai.scss";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  DashOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import { ConfessIcon, SharePublicIcon } from "../../icons/icon";

import axiosApi from "./api/axiosApi";
import Loading from "../loading/Loading";
const { Content } = Layout;
const { confirm } = Modal;
// const data = Array.from({ length: 23 }).map((_, i) => ({
//   href : "https://www.facebook.com/",
//   title: `#FPTUC_1164${i}`,
//   content:
//     `#FPTUC_1164${i}\nWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\n`,
// }));
interface IHistory{
  approver:string,
  content:string,
  fbID:string,
  href:string,
  id:string,
  sender:string,
  title:string,
}
const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
function escapeRegExp(string) {
  // eslint-disable-next-line no-useless-escape
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
const Highlighted = ({text = '', highlight = '' , href = ''}) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
       {parts.filter(part => part).map((part, i) => (
           regex.test(part) ? <mark key={i} className="text-blue-500"><a href={href} target="_blank" rel="noreferrer">{part}</a></mark> : <span key={i}>{part}</span>
       ))}
    </span>
  );
};
function removeItem<T>(arr: Array<T>, value: T): Array<T> { 
  const newArr=arr.slice();
  const index = newArr.indexOf(value);
  if (index > -1) {
    newArr.splice(index, 1);
  }
  return newArr;
}
const XoaBai: React.FC = () => {
  const [data,setData]=useState<IHistory[]>([]);
  const [isLoading,setIsLoading]=useState(false);

  //async button
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const handelDelete=(id,index)=>{
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
    // setLoadings(prevLoadings => {
    //   const newLoadings = [...prevLoadings];
    //   newLoadings[index] = true;
    //   return newLoadings;
    // });
    // axiosApi.delete(id).then(res=>{
    //   if(res.success){
    //     console.log(id);
    //     setData(removeItem(data,data[index]));
    //     setLoadings(prevLoadings => {
    //       const newLoadings = [...prevLoadings];
    //       newLoadings[index] = false;
    //       return newLoadings;
    //     });
    //   }
    // });
  };

  const loadData=()=>{
    setIsLoading(true);
    axiosApi.getApproved().then(res=>{
      const d=res.data;
      setData(d);
      setIsLoading(false);
    }).catch(e=>console.log(e)).finally(() => { setIsLoading(false);});
  };
  useEffect(()=>{
    loadData();
    //
  },[]);
  if(isLoading){
    return(
      <Loading />
    );
  }
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "100%" }}
      >
        <div className="space-y-4 w-full h-full">
          <div className="bg-blue-600 p-2 flex">
            <h3 className="text-white flex-grow flex-shrink">
              Bài viết đã duyệt
            </h3>
          </div>
          <div>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={data}
              renderItem={(item,index) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}
                  // extra={(
                  //   <img
                  //     width={272}
                  //     alt="logo"
                  //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  //   />
                  // )}
                >
                  <Space>
                    <Button 
                      loading={loadings[index]}
                      danger 
                      type="primary" 
                      onClick={()=>handelDelete(item.fbID,index)}
                    >
                      Delete
                    </Button>
                    <Button>Khóa chat</Button>
                    <Button>Lọc comment</Button>
                  </Space>
                  <List.Item.Meta
                    className="!mb-0"
                    title={(
                      <div>
                        <div className="flex items-start px-[16px] pt-[12px]">
                          <div className="mr-[8px] ">
                            <ConfessIcon />
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col mt-[-5px]">
                              <div className="max-w-full ">
                                <h2 className="text-[.9375rem] font-[400]">
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
                    )}
                    description={(
                      <a href={item.href} target="_blank" className="text-pink-500 px-[16px]" rel="noreferrer">
                        {item.title}
                      </a>
                    )}
                  />
                  <p className="px-[16px] pt-0 mt-0 whitespace-pre-line">
                    <Highlighted text={item.content} highlight={item.title} href={item.href} />
                  </p>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </Content>
  );
};
export default XoaBai;
