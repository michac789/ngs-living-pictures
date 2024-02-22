// Jest does not fully support ESM and causes issues with rehype-raw
// This file is a workaround to avoid the issue for now

function rehypeRaw() {
  return;
}
export default rehypeRaw;
