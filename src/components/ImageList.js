import React from "react";
// import StackGrid, { transitions, easings } from "react-stack-grid";
import LazyLoad from "react-lazyload";

const ImageList = ({ urlList }) => {
  // const { scaleDown } = transitions;
  const test = urlList.filter(url => url.image_url.shop_image1 !== "");
  const list = test.map(url => {
    return (
      <div className="item" key={url.url}>
        <a href={url.url} target="_blank">
          <LazyLoad>
            <img className="image" src={url.image_url.shop_image1} alt="" />
          </LazyLoad>
        </a>
      </div>
    );
  });

  // const appear = rect => ({
  //   translateY: rect.top - 10,
  //   scale: 1.1,
  //   opacity: 0
  // });

  // const appeared = () => ({
  //   scale: 1,
  //   opacity: 1
  // });

  // const enter = appear;

  // const entered = appeared;

  // const leaved = rect => ({
  //   translateY: rect.top + 10,
  //   scale: 0.95,
  //   opacity: 0
  // });

  // let widthSize = () => {
  //   if (screen.availWidth <= 375) {
  //     console.log(screen.availWidth);
  //     return 40 + "%";
  //   } else if (screen.availWidth <= 800) {
  //     console.log(screen.availWidth);
  //     return 40 + "%";
  //   } else {
  //     console.log(screen.availWidth);
  //     return 185;
  //   }
  // };

  // return (
  //   // <StackGrid
  //   //   columnWidth={widthSize()}
  //   //   duration={1000}
  //   //   gutterWidth={10}
  //   //   gutterHeight={10}
  //   //   appearDelay={100}
  //   //   // easing={easings.expoOut}
  //   //   // {...transitions.fadeUp}
  //   //   // appear={appear}
  //   //   // appeared={appeared}
  //   //   // enter={enter}
  //   //   // entered={entered}
  //   //   // leaved={leaved}
  //   //   className="list"
  //   // >
  //     {list}
  //   // </StackGrid>
  // );
  return <div className="list">{list}</div>;
};

export default ImageList;
