import { about } from "./essays/about"
import { essayCT } from "./essays/essayCT"
import { essayRoy } from "./essays/essayRoy"
import { essaySze } from "./essays/essaySze"
import { forewordConstants } from "./foreword"
import { homeConstants } from "./home"
import { imagePlatesDetailData } from "./imageplates"

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
  imagePlate1: `
    ${imagePlatesDetailData[0].title}
    ${imagePlatesDetailData[0].description}
  `,
  imagePlate2: `
    ${imagePlatesDetailData[1].title}
    ${imagePlatesDetailData[1].description}
  `,
  about: `
    ${about.title}
    ${about.markdown}
  `,
}
