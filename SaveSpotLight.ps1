##
## KingRider @2019
##
## Verifique existe a pasta: 
## %userprofile%\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets
##

$arquivo = gci $Env:LocalAppData\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets | where Length -gt 1kb

if ($arquivo) {
    $shell = New-Object -ComObject Shell.Application
    #-- $pasta = "$Env:USERPROFILE\Pictures\Spotlight"
    $pasta = "C:\Temp\Rider Backgrounds"
    if (!(Test-Path $pasta)) { mkdir $pasta }
    $arquivo | % {
        $_ | Copy-Item -Destination $pasta\$_.jpg
        Get-Item $pasta\$_.jpg
    } | % {
        $namespace = $shell.namespace($pasta)
        $item = $namespace.ParseName($_.Name)
        $size = $namespace.GetDetailsOf($item, 31)
        if ($size -match '(\d+) x (\d+)') {
            $width = [int]($Matches[1])
            $height = [int]($Matches[2])
        }
        if (!$size -or $width -lt 1920 -or $height -lt 500) {
            Remove-Item $_
        }
    }
}