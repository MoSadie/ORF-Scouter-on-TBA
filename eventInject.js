//TODO: Check against ORF Scouting Service and only display if event data is found.
chrome.runtime.sendMessage({type:'showPageAction'});
var eventKey = new RegExp("\\d{1,}.+","g").exec(document.URL);
var element = document.createElement("p");
element.innerHTML = "<img src=\"https://orf4450.org/favicon.ico\" class=\"image-atc\" style=\"background-image:  none;\"><a target=\"_blank\" href=\"http://orfscoutingservice.azurewebsites.net/?input="+ eventKey +"\">View on ORF Scouter</a>";
document.getElementsByClassName("col-sm-12")[1].insertBefore(element, document.getElementsByClassName("col-sm-12")[1].childNodes[5]);