# React Sandbox 2026

React sandbox and experimentation web project.

- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Conventions](#conventions)
  - [Conventional commits](#conventional-commits)
  - [Updating pushed commits](#updating-pushed-commits)

## Prerequisites

- [Git](https://git-scm.com/)
  - To commit changes, can be skipped if you just want to check out the app.
- [NodeJS](https://nodejs.org/)
  - This will also install `npm`, make sure both are added to the `path` and available in terminal.
  - It is a good idea to use [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage NodeJS. It can easily help to switch NodeJS versions when working in multiple repositories.
- [Bun](https://bun.sh/)
  - Faster and more robust package manager than `npm`.

## Quick start

1. Install required dependencies with `bun i`.
2. Start the app with `bun run dev`.

There are more scripts available, check out the [package.json](./package.json) file.

## Conventions

### Conventional commits

When committing changes to the repository, the [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) pattern should be used.

Example commit messages:

- `docs: add examples to root readme`
- `feat: update module loading`
- `fix: update module loading`

### Updating pushed commits

To revert a commit already pushed to the remote, the below commands can be used:

```bash
# 1. Revert the commit:
# 1a. Keeps changes staged
git reset --soft HEAD~1
# 1b. Discards changes
git reset --hard HEAD~1

# 2. Push the revert to the remote
git push origin main --force
```

After the above, make your changes and push them normally.
