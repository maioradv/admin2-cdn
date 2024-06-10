CKEDITOR.plugins.add( 'sfogliaimmagini', {
    init: function( editor ) {
        editor.addCommand( 'insertMyImage', {
            exec: function( editor ) {
				var id_ckeditor = editor.name;
				$('#sfoglia_immagini').modal().attr('id_ckeditor', id_ckeditor);
				sfoglia_immagini();
				
            }
        });
        editor.ui.addButton( 'Timestamp', {
            label: 'Inserisci Immagine',
            command: 'insertMyImage',
            toolbar: 'insert',
			icon: this.path+'icons/sfogliaimmagini.png',
        });
    }
});