import React from 'react';

// React Component!
// Follow <-> following
// 스타터 코드
function FollowButton() {
  const [following, setFollowing] = React.useState(false);

  const commonBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    cursor: "pointer",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold"
  };
  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "black",
    color: "white"
  };
  const follwingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #cfd9de"
  }

  // JavaScript -> JSX

  // JavaScript
  // return React.createElement(
  //   "div", 
  //   {
  //     onClick: () => {
  //       setFollowing(!following);
  //     },
  //     style: following? follwingBtnStyle : followBtnStyle
  //   },
  //   following? "following" : "follow"
  // );

  // JSX
  return (
    <div
      onClick={() => setFollowing(!following)}
      style={following? follwingBtnStyle : followBtnStyle}
    >
      {following? "following" : "follow"}
    </div>
  )

}

export default FollowButton;