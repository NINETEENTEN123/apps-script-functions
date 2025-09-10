function darkMode(){
  SpreadsheetApp.getActiveSpreadSheet().getRange("A1:Z100").setBackground("#222222").setFontColor("#ffffff")
}

function lightMode(){
  SpreadsheetApp.getActiveSpreadSheet().getRange("A1:Z100").setBackground("#ffffff").setFontColor("#222222")
}
