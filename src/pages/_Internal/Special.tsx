import React from "react";
import ReactPlayer from "react-player";
import { PageContent } from "../../components/PageContent/PageContent";

const Special = () => {
  return (
    <PageContent data={{ title: "Easter Egg 🥚" }} style={{ height: "60vh", width: "90%" }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        playing={true}
        muted={true}
        controls={true}
        width="100%"
        height="100%"
      />
      -michac789
    </PageContent>
  );
}
export default Special;
