# 安裝 Visual Studio Build Tools 2022
# 自動從 vcvarsall.bat 抓取環境變數並注入 PowerShell 專用變數區
$vcvarsall = "C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Auxiliary\Build\vcvarsall.bat"
if (Test-Path $vcvarsall) {
    cmd /c "`"$vcvarsall`" x64 & set" | ForEach-Object {
        if ($_ -match "^([^=]+)=(.*)$") {
            $name = $Matches[1]
            $value = $Matches[2]
            Set-Item -Path "Env:\$name" -Value $value
        }
    }
}