import React, { useEffect, useRef, useState } from "react";
import {
  AudioInfoContainer,
  AudioPlayerWrapper,
  PlayPauseContainer,
  SliderContainer,
  SliderInput,
  StyledAudioText,
} from "./AudioPlayerStyle";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { colors } from "../../constants/styles/colors";

interface AudioPlayerProps {
  audioPath: string;
  isPlaying: boolean;
  onPlay: (audioPath: string | null) => void;
}

export const AudioPlayer = ({ audioPath, isPlaying, onPlay }: AudioPlayerProps) => {
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  let audioSource;
  try {
    audioSource = require(`../../assets/audio/${audioPath}`);
  } catch (e) {
    console.warn(`Audio file ${audioPath} not found, please check that you entered the correct path`);
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("loadedmetadata", () => {
        setTotalDuration(audio.duration);
      });
    }
  }, [audioPath]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  const handleTimeUpdate = (): void => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = parseFloat(e.target.value);
      setCurrentTime(audio.currentTime);
    }
  };

  const handleTimeMove = (seconds: number): void => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime += seconds;
      setCurrentTime(audio.currentTime);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleAudioEnded = () => {
    setCurrentTime(0);
    onPlay(null);
  };

  if (!audioSource) {
    return (
      <Text variant="body2" style={{ color: colors.Red700 }}>
        Audio Error! Please check that you entered the correct audio path!
      </Text>
    );
  }

  return (
    <AudioPlayerWrapper>
      <audio ref={audioRef} id="audio" onTimeUpdate={handleTimeUpdate} onEnded={() => handleAudioEnded()}>
        <source src={audioSource} type="audio/mpeg" />
      </audio>
      <PlayPauseContainer onClick={() => onPlay(isPlaying ? null : audioPath)}>
        <Icon name={isPlaying ? "ri-pause-fill" : "ri-play-fill"} />
      </PlayPauseContainer>
      <SliderContainer>
        <SliderInput
          type="range"
          value={currentTime}
          max={audioRef.current?.duration || 0}
          onChange={handleSliderChange}
        />
        <AudioInfoContainer>
          <StyledAudioText variant="body2">
            <span>{formatTime(currentTime)}</span>
            <Icon name="ri-replay-10-fill" onClick={() => handleTimeMove(-10)} />
          </StyledAudioText>
          <StyledAudioText variant="body2">
            <Icon name="ri-forward-10-fill" onClick={() => handleTimeMove(10)} />
            <span>{formatTime(totalDuration - currentTime)}</span>
          </StyledAudioText>
        </AudioInfoContainer>
      </SliderContainer>
    </AudioPlayerWrapper>
  );
};
