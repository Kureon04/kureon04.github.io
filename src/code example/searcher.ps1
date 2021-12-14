
$dir = Get-ChildItem -name 'C:\'
$i = 0$check = 0Do {    if($dir[$i] -eq "Program Files"){
        "Found"
        $check = 1
    }
    $i = $i + 1
} While ($i -le $dir.Length -and $check -eq 0)
if($check -eq 0) {
    "Not Found"
}
