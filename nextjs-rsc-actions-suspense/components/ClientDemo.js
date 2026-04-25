'use client';

import { useState } from "react";

export default function ClientDemo({ children }) {
  console.log('ClientDemo rendered');
  const [counter, setCounter] = useState();

  return (
    <div className='client-cmp'>
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> the server.
      </p>
      {children}
    </div>
  );
}
