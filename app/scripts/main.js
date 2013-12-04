App = {};

$(function () {

	if($("#app").hasClass("editor")) {
		App.editor = ace.edit("editor");
		App.editor.setTheme("ace/theme/chrome");
		App.editor.getSession().setMode("ace/mode/javascript");
		App.editor.getSession().setUseWrapMode(true);
	}

	if($("#app").hasClass("api") || $("#app").hasClass("visuals")) {
		App.editor = ace.edit("code-viewer");
		App.editor.setTheme("ace/theme/chrome");
		App.editor.getSession().setMode("ace/mode/javascript");
		App.editor.setReadOnly(true);
		App.editor.getSession().setUseWrapMode(true);
		App.editor.setOptions({
		    maxLines: 100
		});
	}

	if($("#app").hasClass("visuals")) {
		$(".button-edit, .button-new").on("click", function () {
			window.location.href = "/editor.html"
		});
	}

});