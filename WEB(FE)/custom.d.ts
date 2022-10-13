declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }

  //signup에 사용된 component들의 
  //' "*.svg"' 모듈에 내보낸 멤버 'ReactComponent'이(가) 없습니다. '
  //오류 해결을 위해 만든 파일
  