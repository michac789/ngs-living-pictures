/**
 * Process raw markdown to add custom rules that are not supported
 * 
 * 1. Citation superscript
 * [^1]: create a citation superscript, link to endnotes
 */

const handleCitationSuperscript = (value: string) => {
  return `<span class="citation" id="citation-${value}">${value}</span>`;
}

export function processRawMarkdown(value: string) {
  let processedMd = value;
  processedMd = value.replace(/\[\^(\d+)\]/g, handleCitationSuperscript('$1'));
  // processedMd = value.replace(/\{% (.*?) %\}/g, handleXyz('$1'));
  return processedMd;
}
