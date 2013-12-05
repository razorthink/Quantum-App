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
		$(".button-green, .button-new").on("click", function () {
			window.location.href = "/editor.html"
		});
	}

	if($("#app").hasClass("pitches new") ) {
		$("#editor-1").ckeditor({
			toolbar: [
				[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', 'Bold', 'Italic' ],
				{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
					'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] }
			]
		});

		$("#img-upload").hide();

		$(".upload-btn").on("click", function () {
			$("#img-upload").trigger("click");
		});	
	}

	if($("#app").hasClass("pitches") ) {
		$(".button-new").on("click", function () {
			window.location.href = "/pitches-new.html"
		});
	}

});


