import * as vscode from 'vscode'

export class CustomViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'customView'

	private view?: vscode.WebviewView

	constructor(private readonly extensionUri: vscode.Uri) {
		this.extensionUri = extensionUri
	}

	public resolveWebviewView(webviewView: vscode.WebviewView): Thenable<void> | void {
		this.view = webviewView
		this.view.webview.options = {
			enableScripts: true,

			localResourceRoots: [this.extensionUri],
		}

		this.view.webview.html = this.getHtmlForWebview(this.view.webview)
	}

	private getHtmlForWebview(webview: vscode.Webview) {
		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'out', 'custom-view-app.mjs'))

		return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Panel Title Goes Here</title>
		</head>
		<body>
			<div id="root"></div>
			<script type="module" src="${scriptUri.toString()}"></script>
		</body>
		</html>`
	}
}
