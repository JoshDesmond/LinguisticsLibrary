# This script is for starting the MongoDB service on my personal set-up. Your configuration will likely differ.

$script:MONGOD_LOCATION = "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"
if ((Test-Path $script:MONGOD_LOCATION) -eq $False) {
    Write-Error "Mongod.exe not found at $($script:MONGOD_LOCATION)"
}

$script:DBPATH = "C:\code\personal\Anagrams\mongo"
if ((Test-Path "C:\code\personal\Anagrams\") -eq $False) {
    Write-Error "Anagrams folder not found"
} else {
    
}

&$script:MONGOD_LOCATION --dbpath=$DBPATH