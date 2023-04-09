import React from 'react';

function PrograssingMsg(props: { message: string }) {
  return <div className="progress_indicator">{props.message}</div>;
}
export default PrograssingMsg;
