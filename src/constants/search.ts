import { audioList } from "./audio"
import { bibliographyList } from "./bibliography"
import { contributorList } from "./contributors"
import { about } from "./essays/about"
import { essayCT } from "./essays/essayCT"
import { essayRoy } from "./essays/essayRoy"
import { essaySze } from "./essays/essaySze"
import { forewordConstants } from "./foreword"
import { artistGlossary, artworkGlossary } from "./glossary"
import { homeConstants } from "./home"
import { imagePlatesDetailData } from "./imageplates"
import { images } from "./imageslider"

export const searchContents: {
  [key: string]: string
} = {
  home: `
    ${homeConstants.coverTitle}
    ${homeConstants.coverSubtitle}
    ${homeConstants.coverSubtitle2}
    ${homeConstants.creditTextMd}
    ${homeConstants.homeTextMd}
  `,
  foreword: `
    ${forewordConstants.subtitle}
    ${forewordConstants.forewordTextMd}
  `,
  essayCT: `
    ${essayCT.label}
    ${essayCT.title}
    ${essayCT.subtitle}
    ${essayCT.abstract}
    ${essayCT.markdown}
  `,
  essayRoy: `
    ${essayRoy.label}
    ${essayRoy.title}
    ${essayRoy.subtitle}
    ${essayRoy.abstract}
    ${essayRoy.markdown}
  `,
  essaySze: `
    ${essaySze.label}
    ${essaySze.title}
    ${essaySze.subtitle}
    ${essaySze.abstract}
    ${essaySze.markdown}
  `,
  ImagePlatesHome: `
    Image Plates Homepage
  `,
  imagePlate1: `
    ${imagePlatesDetailData[0].title}
    ${imagePlatesDetailData[0].description}
  `,
  imagePlate2: `
    ${imagePlatesDetailData[1].title}
    ${imagePlatesDetailData[1].description}
  `,
  bibliography: `
    Bibliography
    ${bibliographyList.map((item) => `${item.id} ${item.markdown}`).join(" ")}
  `,
  contributor: `
    Contributors
    ${contributorList.map((item) => `${item.name} ${item.descriptionMd}`).join(" ")}
  `,
  about: `
    ${about.title}
    ${about.markdown}
  `,
  imageSlider: `
    Image Slider
    ${images.map((item) => `${item.caption} ${item.altName}`).join(" ")}
  `,
  audioGuide: `
    Audio Guide
    ${audioList.map((item) => `${item.title} ${item.author || ''} ${item.descriptionMd || ''}`).join(" ")}
  `,
  glossary: `
    Glossary
    ${artistGlossary.map((item) => `${item.name} ${item.description}`).join(" ")}
    ${artworkGlossary.map((item) => `${item.name} ${item.description}`).join(" ")}
  `,
}
