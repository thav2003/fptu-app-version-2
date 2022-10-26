import React, { useEffect, useState } from "react";
import "./lich-su.scss";
import { Layout, Space, Table, Tag, Button,Modal } from "antd";
import type { TableProps } from "antd";
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import { FilterFilled } from "@ant-design/icons";
import axiosApi from "./api/axiosApi";
import Loading from "../loading/Loading";
import { formatTime,formatDate } from "../../helpers/helper";
const { Content } = Layout;

interface IConfession{
  id:string,
  approver: string,
  content: string,
  updatedAt: string,
  tags:string[],
}

interface IFillter{
  text: string, 
  value: string,
}

const LichSu: React.FC = () => {
  const [fillter,setFillter]=useState<IFillter[]>([]);
  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<IConfession>>({});
  const [data,setData]=useState<IConfession[]>([]);
  const [isLoading,setIsLoading]=useState(false);

  const [modelData,setModelData]=useState<IConfession|any>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: ColumnsType<IConfession> = [
    {
      title     : "Người duyệt",
      dataIndex : "approver",
      key       : "id",
      width     : 200,
      filters   : fillter,
      filterIcon: (filtered) => (
        <FilterFilled
          style={{
            color: filtered ? "#1890ff" : undefined,
          }}
          className="text-[18px] mx-[5px] "
        />
      ),
      filteredValue: filteredInfo.approver || null,
      onFilter     : (value: any, record) => record.approver.includes(value),
      sorter       : (a, b) => {
        {
          if (a.approver < b.approver) {
            return -1;
          }
          if (a.approver > b.approver) {
            return 1;
          }
          return 0;
        }
      },
      sortOrder: sortedInfo.columnKey === "approver" ? sortedInfo.order : null,
      ellipsis : true,
    },
    {
      title    : "Title",
      dataIndex: "title",
      key      : "id",
      width    : 300,
      ellipsis : true,
      // sorter   : (a, b) => {
      //   {
      //     if (a.content.split("_")[1] < b.content.split("_")[1]) {
      //       return -1;
      //     } else {
      //       return 1;
      //     }
      //     return 0;
      //   }
      // },
      sortOrder: sortedInfo.columnKey === "content" ? sortedInfo.order : null,
      render   : (text)=><p className="font-bold">{text}</p>
    },
    {
      title    : "Thời gian duyệt",
      dataIndex: "updatedAt",
      key      : "id",
      width    : 200,
      ellipsis : true,
      sortOrder: sortedInfo.columnKey === "updatedAt" ? sortedInfo.order : null,
      render   : (text)=><a>{`${formatTime(text)} ${formatDate(text)}`}</a>
    },
    {
      title    : "Tags",
      key      : "tags",
      ellipsis : true,
      dataIndex: "tags",
      sortOrder: sortedInfo.columnKey === "tags" ? sortedInfo.order : null,
      render   : (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            if (tag === "Loại") {
              color = "volcano";
            } else if (tag === "Duyệt") {
              color = "green";
            } else {
              color = "geekblue";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title    : "Action",
      key      : "content",
      ellipsis : true,
      sortOrder: sortedInfo.columnKey === "content" ? sortedInfo.order : null,
      render   : (_, record) => {
        const handleView=()=>{
          setModelData(record);
          setIsModalOpen(true);
        };
        return(
          <Space size="middle">
            <a onClick={handleView} className="text-pink-500">View</a>
          </Space>
        );
      }
      
    },
  ];
  const handleChange: TableProps<IConfession>["onChange"] = (
    pagination,
    filters,
    sorter,
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<IConfession>);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const loadData=()=>{
    setIsLoading(true);
    axiosApi.getAll().then(res=>{
      const d=res.data;
      const filterAdmin=res.filterAdmin;
      console.log(d);
      const f=[] as IFillter[];
      filterAdmin.forEach(admin => {
        f.push({
          text : admin,
          value: admin,
        });
      });
      setData(d);
      setFillter(f);
      setIsLoading(false);
    });
  };
  useEffect(()=>{
    loadData();
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
        <div className=" w-full h-full">
          <div className="bg-blue-600 p-2 flex">
            <h3 className="text-white flex-grow flex-shrink">
              Lịch sử confessions
            </h3>
          </div>
          <div>
            <Space style={{ marginBottom: 16, marginTop: 16 }}>
              <Button onClick={clearFilters}>Clear filters</Button>
              <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table
              columns={columns}
              rowKey="id" 
              dataSource={data}
              pagination={{ pageSize: 5 , showLessItems: true,}}
              scroll={{ y: 300 }}
              onChange={handleChange}
              className="select-none"
            />
            <Modal title="Content" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <p className="whitespace-pre-line">{modelData && modelData.content}</p>
            </Modal>
          </div>
        </div>
      </div>
    </Content>
  );
};
export default LichSu;
