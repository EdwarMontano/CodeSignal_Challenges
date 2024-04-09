# CodeSignal Challenges Solutions

Welcome to my repository of CodeSignal challenges solutions! This collection represents my journey through the exciting and challenging problems found on [CodeSignal](https://codesignal.com/). Here, you'll find solutions written primarily in JavaScript, showcasing various algorithmic techniques and problem-solving strategies.

## About CodeSignal

CodeSignal is a platform offering engaging coding challenges that range from basic programming to advanced algorithms, aimed at improving coding skills and preparing for technical interviews.

## Repository Structure

Each solution is organized by challenge, making it easy to navigate through the repository. The challenges are categorized based on their domains on CodeSignal, such as `Interview Practice`, `Arcade`, `Graphs`, and more.

- **Arcade**: Fundamental programming problems that cover basic concepts.
- **Interview Practice**: Challenges similar to those asked in software engineering interviews.
- **Graphs**: Problems involving graph theory and traversal algorithms.

## Getting Started

To run these solutions on your local machine, you will need [Node.js](https://nodejs.org/) installed. Each solution is a standalone script that can be executed with Node.js 18.

Example of running a solution:

```bash
nvm install --lts=Hydrogen
nvm use
corepack enable pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -
node src/path/to/solution_file.js
git config commit.gpgsign true
git config user.signingkey [uuid-of-gpg-key]
```

## Contributing

### Style for the comments

For comments, we will follow the format below. For the configuration, you can refer to the following [guide](https://chocoplot.notion.site/Better-Comments-d5f56ea6e3e942beb99862ee66089cc0):

```javascript
//  Normal Comment
// BUG: Lorem Ipsum is simply dummy text
// HACK: Lorem Ipsum is simply dummy text
// WARNING: Lorem Ipsum is simply dummy text
// TODO: Lorem Ipsum is simply dummy texttext
// [ ] TODO: Lorem Ipsum is simply dummy text
// [x] TODO: Lorem Ipsum is simply dummy text
// FIXME: Lorem Ipsum is simply dummy texttext
// ( ) FIXME: Lorem Ipsum is simply dummy text
// (x) FIXME: Lorem Ipsum is simply dummy text
// ISSUE: Lorem Ipsum is simply dummy texttext
// ( ) ISSUE: Lorem Ipsum is simply dummy text
// (x) ISSUE: Lorem Ipsum is simply dummy text
// NOTE: Lorem Ipsum is simply dummy text
// PERF: This function is OK
```
