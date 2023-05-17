// 預設的輸出
let x = "hihihi";
// 1.
// export default x;

// 非預設的輸出
let data = [5, 6, 7];
let obj = { x: 10, y: 2 };
// 2.
// export { data, obj };

// 整合 1. + 2.
export { x as default, data, obj };
