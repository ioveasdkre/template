# template

```bash
# 匯出已安裝的擴充套件
code --list-extensions > extensions.txt
# 在另一台電腦上安裝擴充套件
Get-Content extensions.txt | ForEach-Object { code --install-extension $_ }
```
