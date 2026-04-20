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
pwsh -File scripts/Setup-SubtreeRemotes.ps1
```

After you commit changes on `master`:

```powershell
pwsh -File scripts/Push-AllSubtrees.ps1
```

Or push a single project:

```powershell
git subtree push --prefix=novara-photographer photo main
```

(`main` matches `defaultBranch` in `subtree-remotes.json`; change both if you use another default branch.)

## Demos with a linked publish remote

Configured in `scripts/subtree-remotes.json`:

- `novara-fitness-coach`
- `novara-photographer`
- `novara-luxury-brand`
- `novara-restaurant-demo`
- `novara-luxury-restaurant`
- `novara-influencer`
- `novara-nail-tech`

## Other folders (no URL yet)

`prefixesWithoutRemote` in the JSON lists monorepo apps that do not yet have a `pushUrl`. Add an object to `remotes` when a GitHub repository exists, then run `Setup-SubtreeRemotes.ps1` again.
