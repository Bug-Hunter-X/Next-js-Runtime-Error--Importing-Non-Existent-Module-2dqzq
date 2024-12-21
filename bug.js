```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because it tries to import a non-existent module.
  import { nonExistentFunction } from '@/utils/helper';

  return (
    <div>
      <h1>About Page</h1>
      {/* This line will cause an error if the function is not found */}
      <p>{nonExistentFunction()}</p>
    </div>
  );
}
```