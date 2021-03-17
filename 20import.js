/* <script type="library.js"></script> */
//일반적 구식 호환성은 좋은

// <!-- <script type="module"> -->
//호환성은 떨어짐

import a from './library.js';
//특정 a 만 임포트
// <!-- </script> -->

// a 작명

var a = 10;
var b = 20;
export default a;
// 파일당 1회
//////////////
export { a };
export { b };
//여러번 가능
export { a, b };

export var c = 30;

import { a } from './library.js';
// 그냥 export 일 땐, {}, 변수명 일치해야 함

// export, exportdefault 동시 가능
// export default -> import 임의 from ''
// export -> import {정확한변수명} from ''
// export -> import {정확한변수명 as 임의} from ''
// -> 동시 : import 임의,{a,b} from ''
// import * as 별명 from ''
// import 디폴트, * as 별명 from ''
// * 은 default는 임포트 x


