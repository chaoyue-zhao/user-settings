// Place your key bindings in this file to override the defaultsauto[]
[
	{
		key: "cmd+.",
		command: "workbench.action.openSettings2"
	},
	{
		key: "shift+cmd+g",
		command: "workbench.view.scm"
	},
	{
		key: "ctrl+shift+g",
		command: "-workbench.view.scm"
	},
	{
		key: "cmd+t",
		command: "workbench.action.terminal.toggleTerminal"
	},
	{
		key: "ctrl+`",
		command: "-workbench.action.terminal.toggleTerminal"
	},
	{
		key: "cmd+k cmd+e",
		command: "workbench.files.action.collapseExplorerFolders"
	},
	{
		key: "alt+w",
		command: "macros.collapseAndClose"
	},
	{
		key: "ctrl+alt+cmd+j",
		command: "editor.action.joinLines",
		when: "editorTextFocus"
	},
	{
		key: "cmd+j",
		command: "-editor.action.joinLines",
		when: "editorTextFocus"
	},
	{
		key: "cmd+k",
		command: "workbench.action.terminal.clear",
		when: "terminalFocus"
	},
	{
		key: "ctrl+alt+cmd+g",
		command: "git.stageSelectedRanges"
	},
	{
		key: "ctrl+w",
		command: "editor.emmet.action.wrapIndividualLinesWithAbbreviation"
	},
	{
		key: "ctrl+w",
		command: "-workbench.action.switchWindow"
	},
	{
		key: "cmd+r",
		command: "-workbench.action.gotoSymbol"
	},
	{
		key: "cmd+r",
		command: "-workbench.action.reloadWindow",
		when: "isDevelopment"
	},
	{
		key: "cmd+r",
		command: "workbench.action.reloadWindow"
	},
	{
		key: "ctrl+b",
		command: "markdown.extension.editing.toggleBold",
		when: "editorTextFocus && !editorReadonly && editorLangId == 'markdown'"
	},
	{
		key: "cmd+b",
		command: "-markdown.extension.editing.toggleBold",
		when: "editorTextFocus && !editorReadonly && editorLangId == 'markdown'"
	},
	{
		key: "ctrl+shift+space",
		command: "toggleSuggestionDetails",
		when: "suggestWidgetVisible && textInputFocus"
	},
	{
		key: "ctrl+space",
		command: "-toggleSuggestionDetails",
		when: "suggestWidgetVisible && textInputFocus"
	},
	{
		key: "cmd+d",
		command: "workbench.action.terminal.split",
		when: "terminalFocus"
	},
	{
		key: "cmd+\\",
		command: "-workbench.action.terminal.split",
		when: "terminalFocus"
	},
	{
		key: "cmd+w",
		command: "workbench.action.terminal.kill",
		when: "terminalFocus"
	},
	{
		key: "ctrl+alt+cmd+w",
		command: "spellright.addFromSelectionToUserDictionary"
	},
	{
		key: "alt+up",
		command: "expand_region",
		when: "editorTextFocus"
	},
	{
		key: "ctrl+w",
		command: "-expand_region",
		when: "editorTextFocus"
	},
	{
		key: "alt+enter",
		command: "editor.action.quickFix",
		when: "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
	},
	{
		key: "cmd+.",
		command: "-editor.action.quickFix",
		when: "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly"
	}
];
