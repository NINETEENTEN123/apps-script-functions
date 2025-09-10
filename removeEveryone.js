function removeEveryone(){
  var editors = DocumentApp.getActiveDocument().getEditors()
  for(let i = 0; i < editors.length; i++){
    DocumentApp.getActiveDocument().removeEditor(editors[i])
  }
}
