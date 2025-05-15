# Instruction to Reproduce

1. Open this project in VS Code
2. Run npm install
3. Run npm run build
4. Run the extension in the development host (e.g. by using F5)
5. Bring up the contributed view and observe the presence of the string
`This is an example VS Code Webview View`
6. Close the development host
7. Package the extension to a VSIX file using `npm run vscode:package`
8. Install this VSIX into Theia and repeat 3 ; the string is not here