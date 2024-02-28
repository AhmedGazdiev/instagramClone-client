declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FunctionComponent<
  React.SVGProps<SVGSVGElement>
  >
  const src: string
  export default src
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare const DEV: boolean
