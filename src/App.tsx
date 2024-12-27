/*********************************************************************
 * © Copyright IBM Corp. 2024
 *********************************************************************/

import './App.css';
import { LazyLoadImport } from './utils';
import { Add } from '@carbon/react/icons';

const SampleComponent = LazyLoadImport(
  async () => (await import('./components/SampleComponent')).SampleComponent,
);

export function App() {
  return (
    <>
      <Add />
      <SampleComponent />
    </>
  );
}
