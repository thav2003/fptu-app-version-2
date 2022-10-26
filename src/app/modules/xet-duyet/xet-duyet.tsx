/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Pagination,Popconfirm,Button,Modal,Select,Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import TextArea from "antd/lib/input/TextArea";
import type { PaginationProps} from "antd";
import { DashOutlined,ExclamationCircleOutlined  } from "@ant-design/icons";
import { ConfessIcon, SharePublicIcon } from "../../icons/icon";
import axiosApi from "./api/axiosApi";
import { formatTime,formatDate } from "../../helpers/helper";
import Loading from "../loading/Loading";
import {IConfession} from "../../interfaces/type.ts";
const { Content } = Layout;
const { Option } = Select;
/*
  tag_stt time
  content

  admin
*/
const columns: ColumnsType<IConfession> = [
  {
    title     : 'STT',
    dataIndex : 'id',
    render    : text => <a>{text}</a>,
    width     : '9%',
    responsive: ['md'],
  },
  {
    title     : 'Bài viết',
    dataIndex : 'content',
    render    : text => <a className="line-clamp-2 whitespace-pre-line">{text}</a>,
    width     : '50%',
    responsive: ['md'],
  },
  {
    title     : 'Vi phạm',
    dataIndex : 'vipham',
    render    : text => <a>No</a>,
    width     : '17%',
    responsive: ['lg'],
  },
  {
    title     : 'Thời gian gửi',
    dataIndex : 'createdAt',
    render    : date => <a>{formatTime(date)+" "+formatDate(date)}</a>,
    width     : '20%',
    responsive: ['lg'],
  },
 
];



const pageConfig={
  showLessItems  : true,
  responsive     : true,
  defaultPageSize: 6,
  total          : 0,
  onChange       : (page, pageSize) => {
    //setPaginationConfig(page);
    console.log(page, pageSize);
  }
};

//shallow remove
function removeItem<T>(arr: Array<T>, value: T): Array<T> { 
  const newArr=arr.slice();
  const index = newArr.indexOf(value);
  if (index > -1) {
    newArr.splice(index, 1);
  }
  return newArr;
}
function removeMoreItem<T extends { id?: string }>(arr: Array<T>, value: string[]): Array<T> { 
  const newArr=arr.slice();
  value.forEach(idx=>{
    const index = newArr.map(el=>el.id).indexOf(idx);
    if (index > -1) {
      newArr.splice(index, 1);
    }
  });
  return newArr;
}


const patternContent="tag_stt [time]\ncontent\n\nadmin";

const createNewContent=(array:IConfession[],stt)=>{
  let newContent="";
  array.forEach(content=>{
    const text=patternContent
      .replace("tag","#FPTUC")
      .replace("stt",(stt++).toString())
      .replace("time",formatTime(content.createdAt)+" "+formatDate(content.createdAt))
      .replace("content\n\nadmin",content.content);

      newContent+=text + "\n\n";
  });
  newContent+="admin";
  return newContent;
};


const XetDuyet: React.FC = () => {
  //table xem truoc
  const [paginationConfig,setPaginationConfig]=useState(pageConfig);
  //model reject
  const [isModalRejectOpen, setisModalRejectOpen] = useState(false);

  //popconfirm
  const [open, setOpen] = useState(false);
  
  //model add
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [addModelData,setAddModelData]=useState<IConfession[]>([]);
  const [addPaginationConfig,setAddPaginationConfig] = useState(pageConfig);
  const [addData,setAddData] = useState<IConfession[]>([]);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IConfession[]) => {
      //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setAddData(selectedRows);
    },
    getCheckboxProps: (record: IConfession) => ({
      //disabled: record.name === 'Disabled User', // Column configuration not to be checked
      id: record.id,
    }),
  };

  //async click
  const [confirmLoading, setConfirmLoading] = useState(false);

  //reject optional
  const [rejectReasonSelect,setRejectReasonSelect]=useState("Lí do khác: ");
  const [reason,setReason] = useState("");

  //init data
  const [isLoading,setIsLoading]=useState(false);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IConfession|any>();
  const [fullData,setFullData]=useState<IConfession[]>([]);

  //newConten send fb
  const [stt,setSTT]=useState<number>(0);
  const [newContent,setNewContent]=useState<string>();
  const [arrayID,setArrayID]=useState<string[]>([]);

  const [rejectID,setRejectID]=useState<IConfession>();

  const handleChangePage: PaginationProps["onChange"] = (page, pageSize) => {
    setPage(page);
    //console.log(page, pageSize);
  };
  //==============model add=========//
  const showModalAdd = () => {
    //console.log(addModelData);
    setIsModalAddOpen(true);
  };
  const handleOkAdd = () => {
    const newArrayID=[] as string[];
    const payload=[] as IConfession[];
    payload.push(data);
    newArrayID.push(data.id);
    addData.forEach(i=>{
      newArrayID.push(i.id);
      payload.push(i);
    });
    
    const newPayload=createNewContent(payload,stt);
    //console.log(newPayload,newArrayID);
    setNewContent(newPayload);
    setArrayID(newArrayID);
    setIsModalAddOpen(false);
  };

  const handleCancelAdd = () => {
    setIsModalAddOpen(false);
  };

  //=====================================================//
  const reloadPage=(p)=>{
    setData(fullData[p]);
    setNewContent(patternContent
      .replace("tag","#FPTUC")
      .replace("stt",stt.toString())
      .replace("time",formatTime(fullData[p].createdAt)+" "+formatDate(fullData[p].createdAt))
      .replace("content",fullData[p].content));
    setAddModelData(removeItem(fullData,fullData[p]));
    setArrayID([fullData[p].id]);
    //setFullData(removeItem(fullData,rejectID!));
  };
  const emptyPage=()=>{
    setData(null);
    setNewContent(patternContent);
    setAddModelData([]);
    setFullData([]);
  };

  //==============model reject=========//
  const showModalReject = (id) => {
    //console.log(id);
    setRejectID(id);
    setisModalRejectOpen(true);
  };
  const handleCancelRejectModal = () => {
    setisModalRejectOpen(false);
  };
  const handleOkRejectModal = () => {
    
    const payload={
      confessID: rejectID?.id,
      reason   : reason,
    };
    // console.log(page);
    //       setFullData(removeItem(fullData,rejectID!));
    //   setPaginationConfig({...paginationConfig,total: paginationConfig.total-1});
    //   setAddPaginationConfig({...addPaginationConfig,total: addPaginationConfig.total-1});
    //   if(page>1){
    //     reloadPage(0);
    //     setPage(1);
    //   }else if(page===fullData.length){
    //     emptyPage();
    //     setPage(1);
    //   }else{
    //     reloadPage(1);
    //     setPage(1);
    //   }
    setConfirmLoading(true);
    axiosApi.reject(payload).then(res=>{
      console.log(res);
      setisModalRejectOpen(false);
      setConfirmLoading(false);
      setFullData(removeItem(fullData,rejectID!));
      setPaginationConfig({...paginationConfig,total: paginationConfig.total-1});
      setAddPaginationConfig({...addPaginationConfig,total: addPaginationConfig.total-1});
      if(page>1){
        reloadPage(0);
        setPage(1);
      }else if(page===fullData.length){
        emptyPage();
        setPage(1);
      }else{
        reloadPage(1);
        setPage(1);
      }
    });
  };
  const handleChangeTextarea=(e)=>{
    e.preventDefault();
    setReason(e.target.value);
  };

  const handleReasonBoxChange=(e)=>{
    if(e!=="Lí do khác: "){
      setReason(e);
    }else{
      setReason("");
    }
    setRejectReasonSelect(e);
  };
  //=====================================================//

  //==============popconfirm accept=========//
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleCancelPopConfirm = () => {
    setOpen(false);
  };
  const handleApprove=()=>{
    // console.log(arrayID);
    // console.log(newContent);
    const titles=[] as string[];
    for(let i=0;i<arrayID.length;i++){
      titles.push(`#FPTUC_${stt+i}`);
    }
    const payload={
      confessID : arrayID,
      newContent: newContent,
      titles    : titles,
    };  
    // setFullData(removeMoreItem(fullData,arrayID));
    // setPaginationConfig({...paginationConfig,total: paginationConfig.total-arrayID.length});
    // setAddPaginationConfig({...addPaginationConfig,total: addPaginationConfig.total-arrayID.length});
    // setSTT(stt+arrayID.length);
    // const index = fullData.map(el=>el.id);
    // let nextPage=-1;
    // for(let i=0;i<index.length;i++) {
    //   if(arrayID.indexOf(index[i])===-1){
    //     nextPage=i+1;
    //     break;
    //   }
    // }
    // if(nextPage==-1){
    //   emptyPage();
    //   setPage(1);
    // }else{
    //   reloadPage(nextPage-1);
    //   setPage(1);
    // }
    
      
    
    
    
    setConfirmLoading(true);
    axiosApi.accept(payload).then(res=>{
      console.log(res);
      setOpen(false);
    
      setFullData(removeMoreItem(fullData,arrayID));
      setPaginationConfig({...paginationConfig,total: paginationConfig.total-arrayID.length});
      setAddPaginationConfig({...addPaginationConfig,total: addPaginationConfig.total-arrayID.length});
      
      const index = fullData.map(el=>el.id);
      let nextPage=-1;
      for(let i=0;i<index.length;i++) {
        if(arrayID.indexOf(index[i])===-1){
          nextPage=i+1;
          break;
        }
      }
      if(nextPage==-1){
        emptyPage();
        setPage(1);
      }else{
        reloadPage(nextPage-1);
        setPage(1);
      }
      setSTT(stt+arrayID.length);
      setConfirmLoading(false);
    });

  };
  //=====================================================//

  const loadData=()=>{
    setIsLoading(true);
    axiosApi.getPending().then(res=>{
      const d=res.data;
      const index=res.stt;
      // console.log(d);
      // console.log(stt);
      if(d[0]){
        setData(d[0] );
        setFullData(d );
        setNewContent(patternContent
          .replace("tag","#FPTUC")
          .replace("stt",index)
          .replace("time",formatTime(d[0].createdAt)+" "+formatDate(d[0].createdAt))
          .replace("content",d[0].content));
        setSTT(index);
        setAddModelData(removeItem(d,d[0]));
        setAddPaginationConfig({...addPaginationConfig,total: d.length-1});
        setPaginationConfig({...paginationConfig,total: d.length});
        setArrayID([d[0].id]);
      }else{
        emptyPage();
        setArrayID([]);
      }
      setIsLoading(false);
    });
  };
  // useEffect(()=>{
  //   loadData();
  // },[]);
  useEffect(() => {
    if(!data){
      loadData();
    }else{
      reloadPage(page-1);
    }
  }, [page,stt]);
  
  //console.log(formatTime(data.createdAt));
  if(isLoading){
    return(
      <Loading />
    );
  }
  return (
    <Content style={{ margin: "24px 16px 0" }} className="xetduyetPage">
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "100%" }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="h-full">
          <Col span={13}>
            <div className="space-y-4 w-full h-full">
              <div className="bg-blue-600 p-2 flex">
                <h3 className="text-white flex-grow flex-shrink">
                  Xem trước bài viết
                </h3>
                <div className=" flex-shrink text-right">
                  <Pagination
                    showLessItems={true}
                    responsive={true}
                    current={page}
                    defaultCurrent={1}
                    total={fullData.length}
                    defaultPageSize={1}
                    onChange={handleChangePage}
                  />
                </div>
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
                            {newContent}
                          </span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="border-solid border-t-[0px] border-l-[0px] border-r-[0px] border-b-[1px] border-[#3E4042] border-b-[1px] my-0 pb-[10px] mx-[12px]" />
                      <div className=" mx-[12px]">
                        <div className="relative flex flex-shrink-[0] flex-row items-stretch justify-between p-4 box-border flex-wrap mt-[-6px] mx-[-2px]">
                          <div className="relative flex flex-col flex-shrink basis-[0px] max-w-full box-border px-[2px]  ">
                            <div className="relative border-box inline-flex flex-shrink items-stretch flex-row basis-[auto] p-0 m-0 bg-transparent">
                              <div className="relative whitespace-nowrap flex flex-row px-[12px] flex-grow flex-shrink items-center justify-center pt-0 box-border h-[44px] my-[-6px] mx-[-4px] border-box flex-wrap">
                                <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="i-image"
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
                                    className="i-image"
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
                                    className="i-image"
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
                  <div>
                    <div className="text-white w-full flex items-center justify-center gap-5 py-5">
                      <Button
                        type="primary"
                        className="!bg-green-500 !border-green-500"
                        onClick={() => {
                          showModalAdd();
                        }}
                      >
                        Gộp cfs
                      </Button>
                      <Popconfirm
                        title="Bạn có chắc là duyệt cái này?"
                        okText="Có chứ"
                        cancelText="Không"
                        onCancel={handleCancelPopConfirm}
                        onConfirm={handleApprove}
                        okButtonProps={{ loading: confirmLoading }}
                        open={open}
                        icon={(
                          <ExclamationCircleOutlined />
                        )}
                      >
                        <Button type="primary" onClick={showPopconfirm}>
                          Duyệt
                        </Button>
                      </Popconfirm>
                      <Button
                        type="primary"
                        disabled={arrayID.length > 1 ? true : false}
                        danger
                        onClick={() => {
                          showModalReject(data);
                        }}
                      >
                        Từ chối
                      </Button>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
              <Modal className="!top-5" width={720} title="Gộp cfs" open={isModalAddOpen} onOk={handleOkAdd} onCancel={handleCancelAdd}>
              <div className=" w-full h-full">
                <Table 
                  rowKey="id" 
                  size="small" 
                  pagination={addPaginationConfig} 
                  columns={columns} 
                  dataSource={addModelData} 
                  rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                  }}
                />
                
              </div>
              </Modal>
              <Modal
                title="Lí do không duyệt bài này"
                open={isModalRejectOpen}
                confirmLoading={confirmLoading}
                onOk={handleOkRejectModal}
                onCancel={handleCancelRejectModal}
                footer={[
                  <>
                  <Button key="back" onClick={handleCancelRejectModal}>
                    Hủy bỏ
                  </Button>
                  <Button
                    key="submit"
                    type="primary"
                    loading={confirmLoading}
                    onClick={handleOkRejectModal}
                  >
                    Từ chối
                  </Button>
                  </>
                ]}
              >          
                <Select
                  defaultValue={rejectReasonSelect}
                  style={{ width: "100%", minWidth: "400px",marginBottom: "1rem" }}
                  onChange={handleReasonBoxChange}
                >
                  <Option value="Trùng lặp nội dung đã được đăng">
                    Trùng lặp nội dung đã được đăng
                  </Option>
                  <Option value="Ngôn từ chưa phù hợp, hãy kiểm tra nội dung và gửi lại.">
                    Ngôn từ chưa phù hợp, hãy kiểm tra nội dung và gửi lại
                  </Option>
                  <Option value="Nội dung không liên quan tới FPTU HCM">
                    Nội dung không liên quan tới FPTU HCM
                  </Option>
                  <Option value="Hãy đăng nội dung này vào group FPTU HCM's STUDENT">
                    Hãy đăng nội dung này vào group FPTU HCM's STUDENT
                  </Option>
                  <Option value="Lí do khác: ">
                    Lí do khác (ghi rõ lí do vào hộp bên dưới)
                  </Option>
                </Select>
                <TextArea
                  value={reason}
                  onChange={e => handleChangeTextarea(e)}
                  rows={4}
                  placeholder="Ghi gì lí do vì sao confess này bị từ chối..."
                  hidden={rejectReasonSelect !== "Lí do khác: "}
                />
              </Modal>
              <div>
                <div className="bg-[#1c1e21] p-2 text-right">
                  <Pagination
                    showLessItems={true}
                    responsive={true}
                    current={page}
                    defaultCurrent={1}
                    total={fullData.length}
                    defaultPageSize={1}
                    onChange={handleChangePage}
                  />
                </div>
              </div>
              
            </div>
          </Col>
          <Col span={11}>
            <div className=" w-full h-full">
              <div className="bg-blue-600 p-2">
                <h3 className="text-white">Danh sách chờ duyệt</h3>
              </div>
              <Table 
                onRow={(record, rowIndex) => {
                  return {  
                    onClick: event => {
                      //console.log(rowIndex!+1,record);
                      setPage(rowIndex! + 1);
                    },
                  };
                }} 
                size="small" 
                rowKey="id" 
                pagination={paginationConfig} 
                columns={columns} 
                dataSource={fullData} 
              />;
             
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default XetDuyet;
