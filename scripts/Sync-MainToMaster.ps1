#Requires -Version 5.1
<#
.SYNOPSIS
  Point each subtree remote master branch at the same commit as main.

.DESCRIPTION
  Use when Vercel deploys master but subtree push updated main.
  Run from repo root: powershell -NoProfile -File scripts/Sync-MainToMaster.ps1
#>
$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

$cfg = Get-Content -Raw (Join-Path $root "scripts/subtree-remotes.json") | ConvertFrom-Json

foreach ($r in $cfg.remotes) {
  $url = $r.pushUrl
  $name = $r.remoteName
  Write-Host ""
  Write-Host "=== $name ===" -ForegroundColor Cyan
  $ls = git ls-remote $url "refs/heads/main" "refs/heads/master" 2>$null
  if (-not $ls) {
    Write-Warning "ls-remote failed for $url"
    continue
  }
  $lines = $ls -split "`n" | Where-Object { $_ -match '\S' }
  $mainSha = $null
  $masterSha = $null
  foreach ($line in $lines) {
    if ($line -match 'refs/heads/main$') { $mainSha = ($line -split '\s+')[0] }
    if ($line -match 'refs/heads/master$') { $masterSha = ($line -split '\s+')[0] }
  }
  if (-not $mainSha) {
    Write-Warning "No refs/heads/main on $name - skip"
    continue
  }
  if ($mainSha -eq $masterSha) {
    Write-Host "master already matches main ($mainSha)"
    continue
  }
  Write-Host "main=$mainSha master=$masterSha -> updating master"
  git push $url "${mainSha}:refs/heads/master"
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Non-FF: force master to match main (Vercel parity)" -ForegroundColor Yellow
    git push --force $url "${mainSha}:refs/heads/master"
    if ($LASTEXITCODE -ne 0) { throw "push failed for $name" }
  }
}
Write-Host ""
Write-Host "Done." -ForegroundColor Green
