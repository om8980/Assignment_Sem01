## Question 3:

**Scenario:**

You are working on a project. Initially you were working alone, so you created lightweight tags as personal bookmarks. Later, two more developers joined the project. Now you need to follow professional standards.

### Part A: Lightweight Tags

1. Create a new repository.
2. Make at least **3 commits** on the `main` branch.
3. Create **Lightweight tags** on these commits as personal bookmarks.  
   Example names:
   - `v0.1.0-light`
   - `v0.1.1-bugFix`
   - `temp-trial`

4. Run the following command and take a screenshot:
   ```bash
   git tag
   ```

---

# Answers:

<img width="957" height="502" alt="Screenshot 2026-09-11 112602" src="https://github.com/user-attachments/assets/c4b6de16-b6e5-4b58-966e-cae87971b59a" />

---

### Part B: Annotated Tags

Now imagine 2-3 developers have joined your project. From now on, use only **Annotated tags**.

### Steps:

1. Create three branches:
   ```bash
   git branch feature/major-update
   git branch feature/minor-update
   git branch bugfix/login-issue
   ```

2. **Major Update (v1.0.0)**
   - Switch to `feature/major-update`
   - Make **3 commits** (example: Authentication, Home Page, Payment Gateway)
   - Merge the branch into `main` using `pull request`
   - Create an **Annotated tag** on the merge commit:
     ```bash
     git tag -a v1.0.0 -m "First stable release - Auth, Home Page & Payment Gateway"
     ```

3. **Minor Update (v1.1.0)**
   - Switch to `feature/minor-update`
   - Make **2 commits** (example: Dark Mode feature)
   - Merge into `main` using `pull request`
   - Create Annotated tag:
     ```bash
     git tag -a v1.1.0 -m "Minor release - Added Dark Mode"
     ```

4. **Bug Fix (v1.1.1)**
   - Switch to `bugfix/login-issue`
   - Make **1 commit** (example: Fixed login redirect)
   - Merge into `main` using `pull request`
   - Create Annotated tag:
     ```bash
     git tag -a v1.1.1 -m "Patch release - Fixed login redirect issue"
     ```

---

# Answers:

<img width="716" height="422" alt="Screenshot 2026-09-12 102536" src="https://github.com/user-attachments/assets/6809c342-26b9-4d37-ab5f-958aca67cbbe" />

---

<img width="626" height="404" alt="Screenshot 2026-09-12 101836" src="https://github.com/user-attachments/assets/d3d2bd18-e552-419e-8de7-59e4864cb7af" />

---

<img width="716" height="422" alt="Screenshot 2026-09-12 102536" src="https://github.com/user-attachments/assets/835f6310-f982-48f0-9616-c3941c4f55d7" />

---

### Part C: Push to GitHub

1. Push the `main` branch:
   ```bash
   git push origin main
   ```

2. Push all the annotated tags:
   ```bash
   git push origin v1.0.0
   git push origin v1.1.0
   git push origin v1.1.1
   ```

   **OR**

   ```bash
   git push origin --tags
   ```

---

### Part D: Create GitHub Releases

1. Go to your repository on GitHub.
2. Click on **Releases** → **Draft a new release**.
3. Create releases for the following tags:

   | Tag     | Release Title                        |
   |---------|--------------------------------------|
   | v1.0.0  | v1.0.0 – First Stable Release        |
   | v1.1.0  | v1.1.0 – Dark Mode Added             |
   | v1.1.1  | v1.1.1 – Login Bug Fix               |

4. Add a short description for each release.

---

# Answers:
