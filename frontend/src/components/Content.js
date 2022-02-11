import ContentItem from "../components/ContentItem";
import { connect } from "react-redux";

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

  return (
    <>
      {feedContents.reverse().map((content, index) => {
        return <ContentItem content={content} storages={props.storages} key={index}></ContentItem>;
      })}
    </>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(Content);
