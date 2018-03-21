//TODO: Check against ORF Scouting Service and only display if team data is found.
chrome.runtime.sendMessage({type:'showPageAction'});
var teamNumber = new RegExp("\\d{1,}","m").exec(document.URL);
document.getElementsByClassName("pull-right")[1].parentNode.insertBefore(document.createElement("p"),document.getElementsByClassName("pull-right")[1]).innerHTML = "<img src=\"https://orf4450.org/favicon.ico\" class=\"image-atc\" style=\"background-image:  none;\"><a target=\"_blank\" href=\"http://orfscoutingservice.azurewebsites.net/?input="+ teamNumber +"\">View on ORF Scouter</a>";