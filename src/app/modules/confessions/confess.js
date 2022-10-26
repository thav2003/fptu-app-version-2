import React, { useState, useEffect, createRef, useRef } from "react";
import { Card, Col, Row, Avatar, Button, List, Skeleton, Tag } from "antd";
import TimeAgo from "react-timeago";
import viStrings from "react-timeago/lib/language-strings/vi";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import Helmet from "react-helmet-async";
const count = 3;
const formatter = buildFormatter(viStrings);
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const Confess = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        setInitLoading(false);
        setData(
          [...new Array(count)].map(() => ({
            content: "Hello mấy bạn",
            createdAt: new Date(),
          }))
        );
        setList(
          [...new Array(count)].map(() => ({
            content: "Hello mấy bạn",
            createdAt: new Date(),
          }))
        );
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          content: "",
          createdAt: null,
        }))
      )
    );
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(res => {
        const newData = data.concat(
          [...new Array(count)].map(() => ({
            content: "Hello mấy bạn",
            createdAt: new Date(),
          }))
        );
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const Render = (content, approver = "admin@fptu.cf", cfsID = "0") => {
    return (
      <div>
        <div className="confess-content">
          <div className="whitespace-pre-line">{content}</div>
        </div>
        <div style={{ margin: ".5rem 0" }}>
          <Tag color="green">
            <a
              href={`https://www.facebook.com/hashtag/${APP_ENV.FB_TAGNAME}_${cfsID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              #{APP_ENV.FB_TAGNAME}
              {cfsID}
            </a>
          </Tag>
          <Tag color="blue">#{approver}</Tag>
        </div>
      </div>
    );
  };
  //console.log(list);
  return (
    <>
      <Helmet>
        <title>Confess của tui</title>
      </Helmet>
      <List
        className="min-h-[350px]"
        loading={initLoading}
        itemLayout="vertical"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Skeleton title={false} loading={item.loading} active>
              <List.Item.Meta
                description={
                  <span>
                    Được gởi{" "}
                    <TimeAgo date={item.createdAt} formatter={formatter} />
                  </span>
                }
              />
              {Render(item.content)}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
export default Confess;
