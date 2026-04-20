# Novara demos (monorepo)

This repository holds multiple standalone demo sites as top-level folders.

## Publishing a subdirectory to its own GitHub repo

Remotes and folder prefixes are **tracked in Git** so any clone can reproduce your setup:

| Tracked config | Purpose |
|----------------|---------|
| `scripts/subtree-remotes.json` | Maps each app folder → remote name → `pushUrl` |
| `scripts/Setup-SubtreeRemotes.ps1` | Registers those remotes (`git remote add` / `set-url`) |
| `scripts/Push-AllSubtrees.ps1` | Runs `git subtree push` for every entry |

After cloning:

```powershell
cd F:\novara_demos
powershell -NoProfile -File scripts/Setup-SubtreeRemotes.ps1
```

After you commit changes in the monorepo:

```powershell
powershell -NoProfile -File scripts/Push-AllSubtrees.ps1
```

`defaultBranch` in `subtree-remotes.json` is **`master`** so subtree pushes match typical Vercel **Production Branch = master** settings.

If you ever push to `main` only, sync deploy branch once:

```powershell
powershell -NoProfile -File scripts/Sync-MainToMaster.ps1
```

Or push a single project (branch name must match `defaultBranch`):

```powershell
git subtree push --prefix=novara-photographer photo master
```

**Alternative (no branch sync):** In each Vercel project, set **Settings → Git → Production Branch** to **`main`** and keep subtree pushes on `main`.

## Demos with a linked publish remote

Configured in `scripts/subtree-remotes.json`:

- `novara-fitness-coach`
- `novara-photographer`
- `novara-luxury-brand`
- `novara-restaurant-demo`
- `novara-luxury-restaurant`
- `novara-influencer`
- `novara-nail-tech`
- `novara-plumbing-demo`
- `novara-football-club`
- `novara-law-firm`

## Other folders (no URL yet)

`prefixesWithoutRemote` in the JSON lists monorepo apps that do not yet have a `pushUrl`. Add an object to `remotes` when a GitHub repository exists, then run `Setup-SubtreeRemotes.ps1` again.
