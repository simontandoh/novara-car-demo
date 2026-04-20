#Requires -Version 5.1
<#
.SYNOPSIS
  Push every configured subdirectory to its GitHub repo via git subtree.

.DESCRIPTION
  Uses scripts/subtree-remotes.json defaultBranch. Run from repo root after committing:
    powershell -NoProfile -File scripts/Push-AllSubtrees.ps1

  Requires network; may prompt for GitHub credentials depending on your setup.
#>
$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

$cfgPath = Join-Path $root "scripts/subtree-remotes.json"
$cfg = Get-Content -Raw $cfgPath | ConvertFrom-Json
$branch = if ($cfg.defaultBranch) { $cfg.defaultBranch } else { "master" }

foreach ($r in $cfg.remotes) {
  if (-not $r.pushUrl) { continue }
  $prefix = $r.prefix
  $remote = $r.remoteName
  if (-not (Test-Path (Join-Path $root $prefix))) {
    Write-Warning "Skip missing folder: $prefix"
    continue
  }
  Write-Host ""
  Write-Host "=== subtree push $prefix -> $remote $branch ===" -ForegroundColor Cyan
  git subtree push --prefix=$prefix $remote $branch
  if ($LASTEXITCODE -ne 0) {
    throw "git subtree push failed for $prefix ($LASTEXITCODE)"
  }
}

Write-Host ""
Write-Host "All configured subtree pushes finished." -ForegroundColor Green
