import React from "react";
import { AudioGuideContainer } from "./AudioGuideStyle";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { Text } from "../../components/Text/Text";

const AudioGuide = () => {
  return (
    <AudioGuideContainer>
      <Text variant="title2">
        Audio Guide
      </Text>
      <Text variant="subtitle3">
        TODO - Add audio guide content
      </Text>
      <AudioPlayer audioPath="sampleaudio3.mp3" />
    </AudioGuideContainer>
  );
}
export default AudioGuide;
