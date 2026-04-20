#Requires -Version 5.1
<#
.SYNOPSIS
  Register git remotes for subtree publishing (idempotent).

.DESCRIPTION
  Reads scripts/subtree-remotes.json from the monorepo root and runs
  git remote add / git remote set-url so clones match the tracked config.
  Run from repo root:  powershell -NoProfile -File scripts/Setup-SubtreeRemotes.ps1
#>
$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

$cfgPath = Join-Path $root "scripts/subtree-remotes.json"
if (-not (Test-Path $cfgPath)) {
  throw "Missing $cfgPath"
}
$cfg = Get-Content -Raw $cfgPath | ConvertFrom-Json
$branch = if ($cfg.defaultBranch) { $cfg.defaultBranch } else { "master" }

foreach ($r in $cfg.remotes) {
  if (-not $r.pushUrl) { continue }
  $name = $r.remoteName
  $url = $r.pushUrl
  $null = git remote get-url $name 2>$null
  if ($LASTEXITCODE -eq 0) {
    Write-Host "set-url  $name -> $url"
    git remote set-url $name $url
  }
  else {
    Write-Host "add      $name -> $url"
    git remote add $name $url
  }
}

Write-Host ""
Write-Host "Registered subtree remotes. Default push branch in config: $branch"
Write-Host "Push one:  git subtree push --prefix=PREFIX REMOTE_NAME $branch"
Write-Host "Push all:  powershell -NoProfile -File scripts/Push-AllSubtrees.ps1"
