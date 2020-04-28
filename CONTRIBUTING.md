# Contributing Guidelines to the Coding Dojo repo for Mentors

## Proposing a new Kata
If you have any new katas that you would like to share, you could do the following.
1. Clone the repository.
2. Create a new branch for your new kata.
3. Add the Kata to the folder `/katas/` (e.g. `/katas/my-new-kata/`).
4. Open a Pull Request 🤗

Once the Pull Request has been approved and merged, you can find your katas in the repository. 

## Updating an Kata

**DON'T** push to `master` directly.

**DO**:
1. Clone the repository.
1. Create a branch from `master` and make your changes in it (e.g. `git checkout -b melbourne-kata-update`).
2. Create a PR to master.
3. Wait for review (you can go to the [Muses Code JS](https://muses-code-js.slack.com/) to announce your changes).
4. If approved, your changes will be merged by the reviewer(s).

## Pushing the work done during a session

If you're organising a coding-dojo in your chapter, first of all, congratulations and thank you for teaching the best practices to others. We want to keep a clean repository. 

As an organiser, you'll have to share the work done during a session with all of the attendees. To do so, request access to the `coding-dojo-melbourne` repo on the [Muses Code JS](https://muses-code-js.slack.com/) and then do the following:

**DON'T** push to `master` directly in a folder.

**DO**:
1. Create a branch from `master` following the below branch naming convention.
2. Add your folder and files to the folder by year - e.g. `2020/melbourne/28-03-2018-fizz-buzz`.
3. Push your changes to GitHub.
4. Create a release tag with the same name as your branch.
5. Share it with the attendants.

### Branch naming convention
The branch name has to contain your chapter's name and the coding-dojo date like so: `melbourne/28-03-2018`. If your coding dojo session has more than one group, suffix the name with a letter from A to Z :
```
melbourne/28-03-2018_A
melbourne/28-03-2018_B
```
