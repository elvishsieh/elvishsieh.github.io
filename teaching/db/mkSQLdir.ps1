# 1. 詢問使用者輸入主資料夾名稱
$mainFolderName = Read-Host "請輸入想要建立資料庫的主資料夾名稱"

# 2. 定義 D 槽根目錄與完整的目標路徑
$targetRoot = "D:\"
$mainFolderPath = Join-Path -Path $targetRoot -ChildPath $mainFolderName

# 3. 定義需要建立的子資料夾名稱清單
$subFolders = @("SQLBinary", "SQLData", "SQLLog", "SQLBackup", "SQLTemp")

# 4. 檢查主資料夾是否存在，若不存在則建立
if (-not (Test-Path -Path $mainFolderPath)) {
    New-Item -Path $mainFolderPath -ItemType Directory | Out-Null
    Write-Host "已成功建立資料庫主資料夾：$mainFolderPath" -ForegroundColor Green
} else {
    Write-Host "資料庫主資料夾已存在：$mainFolderPath，將直接在底下建立子資料夾。" -ForegroundColor Yellow
}

# 5. 依序建立子資料夾
foreach ($subFolder in $subFolders) {
    $subFolderPath = Join-Path -Path $mainFolderPath -ChildPath $subFolder
    
    if (-not (Test-Path -Path $subFolderPath)) {
        New-Item -Path $subFolderPath -ItemType Directory | Out-Null
        Write-Host "  -> 已建立子資料夾：$subFolder" -ForegroundColor Cyan
    } else {
        Write-Host "  -> 子資料夾已存在：$subFolder" -ForegroundColor DarkYellow
    }
}

Write-Host "`n所有資料夾配置完成！" -ForegroundColor Green