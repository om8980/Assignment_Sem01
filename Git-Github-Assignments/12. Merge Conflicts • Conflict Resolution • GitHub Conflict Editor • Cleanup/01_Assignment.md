
### Assignment 1 – Create and Resolve a Merge Conflict on GitHub (Mandatory)

**Goal:** Create a real conflict with two feature branches and resolve it using the GitHub browser editor.

1. Create/clone a repository and on `main` create `tasks.txt`:

```text
My Tasks
1. Study Git
2. Complete assignment
3. Review notes
```

2. Commit and push to `main`.
3. Create branch `feature/tasks-A` → change line 3 to `Practice merge conflicts` → commit → push → open PR (do **not** merge yet).
4. Switch back to `main`, create branch `feature/tasks-B` → change line 3 to `Watch Git tutorial` → commit → push → open second PR.
5. Merge the first PR successfully.
6. Merge the second PR → conflict appears.
7. Resolve the conflict on GitHub:
   - Understand Current vs Incoming
   - Decide final text (keep one, both, or write your own)
   - Remove all conflict markers
   - Mark as resolved → Commit merge → Merge the PR
8. Delete both remote feature branches.
9. Update local main and delete local branches:
   ```bash
   git checkout main
   git pull origin main
   git branch -D feature/tasks-A
   git branch -D feature/tasks-B
   ```
   ---


## **Answers:**

---

#### Repository link: https://github.com/om8980/day-12-01/pulls?q=is%3Apr+is%3Aclosed

---

<img width="652" height="344" alt="Screenshot 2026-09-07 182020" src="https://github.com/user-attachments/assets/e53b7c9e-c358-4d81-85ac-7b6fd9288c34" />

---

<img width="652" height="343" alt="Screenshot 2026-09-07 181952" src="https://github.com/user-attachments/assets/c0289483-3405-4c57-9b37-75f8dea1d188" />

---

<img width="954" height="503" alt="Screenshot 2026-09-07 182303" src="https://github.com/user-attachments/assets/674094de-3876-48ad-900a-6fee844c07fe" />

---
