import ContentItem from "../components/ContentItem";
import { connect } from "react-redux";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Content(props) {
  const priorityContent = props.priorityContent ? props.priorityContent : null;
  // console.log("priorityContent", priorityContent);

  // 피드 게시물
  let feedContents = props.contents;
  if (feedContents) {
    if (feedContents.length > 1) {
      feedContents.sort((a, b) => (a.contentSeq > b.contentSeq ? 1 : -1));
      // priorityContent가 있다면 맨 뒤에 push(나중에 reverse 하기 때문)
      if (priorityContent) {
        feedContents.push(priorityContent);
      }
    }
    // 피드 게시물은 없지만 priorityContent가 있을 때
  } else if (priorityContent) {
    feedContents = priorityContent;
  }

  // 무한스크롤
  const [items, setItems] = useState(feedContents.reverse().slice(0, 10));
  const [count, setCount] = useState(10);

  const handleItems = () => {
    setItems(items.concat(feedContents.slice(count, count + 10)));
    console.log(count);
  };
  const fetchMoreData = () => {
    setTimeout(() => {
      handleItems();
      setCount(count + 10);
    }, 1500);
  };

  return (
    <>
      <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={true} loader={<h4 className="text-center">persona</h4>}>
        {items.map((content, index) => {
          return <ContentItem content={content} storages={props.storages} key={index}></ContentItem>;
        })}
      </InfiniteScroll>
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Content);
