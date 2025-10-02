declare module '*.jpg';
declare module '*.md';
declare module '*.json';
declare module '*?raw' {
  const content: string;
  export default content;
}
declare module '*?inline' {
  const content: string;
  export default content;
}
