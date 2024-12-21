# Next.js Runtime Error: Importing Non-Existent Module

This repository demonstrates a common runtime error in Next.js applications that occurs when a page attempts to import a module or function that does not exist.  The error is not caught during development and only manifests during runtime, making it difficult to debug.

## Problem

The `pages/about.js` file attempts to import `nonExistentFunction` from a non-existent module `@/utils/helper`. This causes a runtime error on the client-side when the `About` page is loaded.

## Solution

The solution involves either creating the necessary module and function or removing the import statement that causes the error.  Proper error handling can also improve the user experience.