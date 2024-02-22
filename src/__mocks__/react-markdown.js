// Jest does not fully support ESM and causes issues with react-markdown
// This file is a workaround to avoid the issue for now
// The drawback is that the react-markdown package cannot be actually tested

function ReactMarkdown({ children }){
  return <>{children}</>;
}
export default ReactMarkdown;
