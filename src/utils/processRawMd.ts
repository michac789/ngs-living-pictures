import { colors } from "../constants/styles/colors";

/**
 * Process raw markdown to add custom rules that are not supported otherwise
 * 
 * 1. Citation superscript
 * [^1]: create a citation superscript, link to endnotes
 * 
 * 2. Bibliography citation
 * {% cite 'citation-key' %}: when clicked open a tooltip with the citation details,
 * reference to the bibliography section
 */

const handleCitationSuperscript = (value: string) => {
  return `<span class="citation" id="citation-${value}">${value}</span>`;
}

const handleBibliographyCitation = (value: string) => {
  return `<span class="bibliography" style="color: ${colors.Blue900}; cursor: pointer; text-decoration: underline ${colors.Blue600} dotted;">${value}</span>`;
}

export function processRawMarkdown(value: string) {
  let processedMd = value;
  processedMd = processedMd.replace(/\[\^(\d+)\]/g, handleCitationSuperscript('$1'));
  processedMd = processedMd.replace(/\{% cite '(.*?)' %\}/g, handleBibliographyCitation('$1'));
  return processedMd;
}
