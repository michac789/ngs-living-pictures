import { productionUrl } from "../sidebar";

export const essaySample = {
  'label': 'IV',
  'title': 'IV. Sample Page',
  'subtitle': 'This is only a sample page, providing you with guidance on how to create the essay pages, and things you need to know',
  'abstract': 'The text here is a part of `abstract`, you may choose to leave it empty.',
  'markdown': `
## Creating New Essay Page

Creating a new essay page is a 2-step process as follows:

1. Create the essay file

    a) Simply navigate to \`src/constants/essays\` and create a new file with the name of the essay,
    e.g. \`essaySample.ts\`, and copy the content of this file into the new file.

    b) Please change the constant name from \`essaySample\` to the name of the essay,
    you can leave it and fill in the details later.

    c) You can choose to leave the \`abstract\`, \`title\`, etc. empty,
    or fill in the details as you see fit.

2. Add the essay to the pages constant

    a) Simply import and add the new essay to the \`orderedPages\` constant in \`src/constants/pages.tsx\`.

    b) The \`link\` is the path to the essay page,
    the \`name\` is the display title for the sidebar and topbar,
    and the \`element\` is the React component of the essay.

    c) You may additionally add \`metaData\`, or add \`hasStickyMenu\` to the essay page.

## Markdown

The contents are in Markdown.
Please refer to the [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
for more information.

You can also choose to write html tags and inline css in the markdown,
it will be rendered as is.
Please refer to the [HTML and CSS Guide](https://www.w3schools.com/html/html_css.asp)
for more information.

You can add endNotes and citation at the end of the essay,
which are all using markdown syntax.

However, there are extra custom syntax that are used in this template,
to for example, display images, videos, and footnotes.
Refer to the next section for some of the custom syntax.

## Custom Syntax

Note: please replace the underscore with blank space in all the custom syntax below

### Horizontal Line

Use \`{%_figure_'hr'_%}\` to create a customized style horizontal line,
as an alternative to the default markdown horizontal line.

### Endnotes Citation

Use \`[^<NUMBER_HERE>]\` to create a footnote citation,
clicking on the number will scroll to the endnotes section.
The numbering is in order of the endnotes.

### Bibliography Citation

Please fill the bibliography in the \`bibliographyList\` constant in \`src/constants/bibliography.ts\`,
before using the citation.

Use \`{%_cite_'<BIBLIOGRAPHYIDHERE>'_%}\` to create a bibliography citation tooltip.
Make sure that the id is valid and exists in the bibliography list.

### Video

Use \`{%_figure_'vid-<ENTERVIDEOLINKHERE>'_%}\` to create a video player,
video link can be from youtube, vimeo, etc.

### Image

Please fill the figures in the \`figures\` constant in \`src/constants/figures.ts\`,
before using the image.

Use \`{%_figure_'fig-<ENTERFIGUREIDHERE'_%}\` to create an image preview component,
make sure that the id is valid and exists in the figures list.

{% figure 'hr' %}

## Example

Just some example on how everything can be put together.

{% figure 'vid-https://www.youtube.com/watch?v=VZAGdMAIp9s' %}

{% figure 'fig-sampleId' %}

In the tapestry of life, woven with threads of perseverance and resilience, the concept of hard work emerges as a fundamental pillar, shaping destinies and carving paths to success ({% cite 'pl. 37' %}). Life, often akin to a challenging journey, demands dedication and tenacity to surmount obstacles and reach the summit of one's aspirations. [^1]

Hard work is the compass that guides individuals through the labyrinth of challenges, pushing them to explore the depths of their potential. It is the persistent force that propels dreams into reality, transforming mere visions into tangible achievements. The sweat-soaked brow, the calloused hands – these are the insignias of individuals who have embraced the arduous yet rewarding journey of hard work. [^2]

In the crucible of hard work, character is forged, and resilience is tested. The pursuit of excellence demands unwavering commitment and an unyielding spirit. It is a journey marked by sleepless nights, early mornings, and a relentless pursuit of improvement. Hard work becomes a beacon, illuminating the path to self-discovery and accomplishment. [^3]

Life often unfolds its lessons through challenges that require more than just talent; they necessitate diligence and an indomitable work ethic. The stories of those who have overcome adversities resonate with the echoes of hard work – tales of triumph over adversity, of persistence in the face of setbacks. [^4]

The fruits of hard work extend beyond individual achievements; they contribute to the collective progress of societies. It is the foundation upon which civilizations are built, innovations are conceived, and societal transformations are ushered in. Hard work fosters a culture of diligence, creating a ripple effect that inspires and uplifts those who witness its transformative power. [^5]

In essence, hard work is not merely a means to an end; it is a journey, a philosophy, and a testament to the human spirit's ability to endure and thrive. It is the symphony of effort and determination that plays in the background of every success story, reminding us that the path to greatness is paved with the bricks of hard work. As we navigate the intricate tapestry of our lives, let hard work be the thread that weaves our stories into epics of triumph and resilience. [^6]

  `,
  'endNotes': [
    'Sample Footnote 1',
    'Sample Footnote 2',
    'Sample Footnote 3',
    'Sample Footnote 4',
    'Sample Footnote 5',
    'Sample Footnote 6',
  ],
  'citation': `This is what you see when you click the share button. Edit on \`citation\` constant! Source: ${productionUrl}`,
};
