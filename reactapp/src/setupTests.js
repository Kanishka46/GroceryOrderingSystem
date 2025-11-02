import '@testing-library/jest-dom';
import {act} from 'react';
globalThis.act=act;
const originalError=console.error;
console.error=(...args)=>{
    if(/warning:An update to .* inside the test was not wrapped/.test(args[0])
||/Warning: `ReactDOMTestUtils\.act` is deprecated/.test(args[0]))
{
    return;
}
originalError(...args);
}
