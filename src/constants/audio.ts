
export interface Audio {
  audioPath: string;
  title: string;
  author?: string;
  descriptionMd?: string;
}

export const audioList: Audio[] = [
  {
    audioPath: "sampleaudio1.mp3",
    title: "Winold Reiss, Langston Hughes, 1925",
    author: "John Keene",
    descriptionMd: "Sample *markdown* description 1, **bold** text, and [link](). lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    audioPath: "sampleaudio2.mp3",
    title: "Winold Reiss, Alain Leroy Locke, 1925",
    author: "Denise Murrell",
    descriptionMd: "Sample *markdown* description 2, **bold** text, and [link]().",
  },
  {
    audioPath: "sampleaudio3.mp3",
    title: "Valley of the Damned, 2009",
    author: "Sam Totman",
    descriptionMd: "Sample *markdown* description 3, **bold** text, and [link]().",
  },
  {
    audioPath: "sampleinvalidaudio.mp3",
    title: "Sample Invalid Audio File",
    author: "The Invisible Man",
  },
]
