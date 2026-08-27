
### Assignment 1 – Complete PR Lifecycle with `feature/contact-form` (Mandatory)

**Goal:** Practice the full cycle: branch → file → commit → push → PR → merge → cleanup.

1. Update main:  
   `git checkout main && git pull origin main`
2. Create branch:  
   `git checkout -b feature/contact-form`
3. Create file `contact.html` with a simple heading and a short paragraph about a contact form.
4. Stage, commit and push:  
   ```bash
   git add contact.html
   git commit -m "Add contact form page"
   git push -u origin feature/contact-form
   ```
5. On GitHub: Open a Pull Request (base = `main`, compare = `feature/contact-form`). Write a clear title and description.
6. Merge the Pull Request using **“Create a merge commit”**.
7. Delete the remote branch (GitHub “Delete branch” button or `git push origin --delete feature/contact-form`).
8. Update local main using the two-command method:  
   ```bash
   git checkout main
   git fetch origin main
   git merge origin/main
   ```
9. Delete local branch:  
   `git branch -d feature/contact-form`
10. Take screenshots of:  
    (a) the merged PR  
    (b) terminal after fetch + merge  
    (c) `git branch` showing the branch is gone

**Submit:** Merged PR link + the 3 screenshots listed above.

---

**Answers:**

**Merged_Link**

-https://github.com/om8980/day-11-As/pull/1

---

<img width="712" height="383" alt="Screenshot 2026-08-27 150240" src="https://github.com/user-attachments/assets/85ff88e2-3ee5-4012-8fa5-6ef2fdc33e0b" />

---

<img width="956" height="500" alt="Screenshot 2026-08-27 150709" src="https://github.com/user-attachments/assets/1d021e9f-6e48-450f-8adb-e0331ba5f946" />

---

<img width="952" height="503" alt="Screenshot 2026-08-27 150804" src="https://github.com/user-attachments/assets/e3ee6154-8b64-46f9-8305-8113c48ca980" />

---


