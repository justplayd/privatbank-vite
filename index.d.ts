declare module '*.css' {
  const content: { [className: string]: string };

  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };

  export default content;
}

declare module 'path' {
  const content: any;

  export default content;
}
