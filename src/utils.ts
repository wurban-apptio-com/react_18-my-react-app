/*********************************************************************
* © Copyright IBM Corp. 2024
*********************************************************************/
import React from 'react';

/*
if you don't want to use LazyLoadImport you can import based on following code snippet example
// const SampleComponent = React.lazy(async () => {
//   return {
//     default: (await import('./SampleComponent')).SampleComponent
//   }
// })
*/
export function LazyLoadImport(f: () => Promise<() => JSX.Element>) {
  return React.lazy(async () => {
    return {
      default: await f(),
    };
  });
}
