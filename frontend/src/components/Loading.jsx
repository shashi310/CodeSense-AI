import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <ProgressBar
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loading;
