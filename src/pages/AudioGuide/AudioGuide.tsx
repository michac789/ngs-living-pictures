import React from "react";
import { AudioGuideContainer, AudioItemCard } from "./AudioGuideStyle";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { Markdown } from "../../components/Markdown/Markdown";
import { Text } from "../../components/Text/Text";
import { Audio, audioList } from "../../constants/audio";

const AudioGuide = () => {
  return (
    <AudioGuideContainer>
      <Text variant="title2">
        Audio Guide
      </Text>
      {audioList.map((audio: Audio) => (
        <AudioItemCard key={audio.title}>
          <Text variant="subtitle2" style={{ fontStyle: "normal" }}>
            {audio.title}
          </Text>
          {audio.author && (
            <Text variant="body2">{audio.author}</Text>
          )}
          <AudioPlayer audioPath={audio.audioPath} />
          {audio.descriptionMd && (
            <Markdown
              value={audio.descriptionMd}
              type="small"
            />
          )}
        </AudioItemCard>
      ))}
    </AudioGuideContainer>
  );
}
export default AudioGuide;
