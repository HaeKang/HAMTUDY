import React, { useRef } from "react";
import styled from "styled-components";

const mediaStreamConstraints = {
  video: {
    width: {
      min: 200,
    },
    height: {
      min: 300,
    },
  },
};

type WindowProps = {
    onShare:boolean
}
function Window( {onShare}:WindowProps) {
  const localVideo = React.createRef<HTMLVideoElement>();
  let localStream;

  function gotLocalMediaStream(mediaStream:MediaProvider | null | undefined) {
    localStream = mediaStream;
    console.log("gotLocalMediaStream localVideo", localVideo.current);
    // localVideo?  (localVideo.current.srcObject = mediaStream) : null;
  }

  function handleLocalMediaStreamError(error:any) {
    console.log("navigator.getUserMedia error: ", error);
  }
  if (onShare) {
    navigator.mediaDevices
      .getUserMedia(mediaStreamConstraints) //-> get permission "can i access^^?"
      .then(gotLocalMediaStream) //-> mediastream이 리턴됨. 그리고 gotlocalmediastream을 호출
      .catch(handleLocalMediaStreamError);
    console.log("localVideo", localVideo.current);
  } else {
    console.log("hsare is falselocalVideo", localVideo.current);
  }

  return (
    <>
      <video ref={localVideo} autoPlay playsInline></video>
    </>
  );
}

export default Window;
