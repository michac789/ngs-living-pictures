
export interface Audio {
  audioPath: string;
  title: string;
  author: string;
  descriptionMd: string;
}

export const audioList: Audio[] = [
  {
    audioPath: "sampleaudio1.mp3",
    title: "Audio 1 Title",
    author: "Author 1",
    descriptionMd: "Sample *markdown* description 1, **bold** text, and [link](). lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    audioPath: "sampleaudio2.mp3",
    title: "Audio 2 Title",
    author: "Author 2",
    descriptionMd: "Sample *markdown* description 2, **bold** text, and [link]().",
  },
  {
    audioPath: "sampleaudio3.mp3",
    title: "Sample Audio 3",
    author: "Author 3",
    descriptionMd: "Sample *markdown* description 3, **bold** text, and [link]().",
  },
]
