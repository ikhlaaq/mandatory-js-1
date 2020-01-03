
/* The previous developer thought the company is named
Fruits & Bananas Corp, but it's actually called Fruits & Vegetables Corp.
Text content in header h1 is wrong,
should be Fruits & Vegetables Corp (see first issue) */
document.querySelector("h1").textContent = "Fruits & Vegetables Corp";

/* The last a tag in header ul has wrong text content and href attribute (should be
Vegetables and not Bananas) */
document.querySelectorAll("a")[2].textContent = "Vegetables";

/* The section #contact and #about are in the wrong order. Swap them. */
var sec = document.querySelector('#main');
sec.insertBefore(sec.lastElementChild, sec.firstElementChild);


/* The text "We're the best in fruits & vegetables" under #about should be wrapped in a p
tag */
var p = document.getElementById('about');
firstTextNode = p.firstChild;
newP = document.createElement('p');
newP.appendChild(document.createTextNode(firstTextNode.nodeValue));
p.replaceChild(newP, firstTextNode);

/* Each section should have a h2 tag at the top with corresponding text according to its
id */
var elem = document.createElement('h2');
var elemText = document.createTextNode('About');
elem.appendChild(elemText);
var h2Tag = document.getElementById('about');
h2Tag.appendChild(elem);
var order = document.querySelector('#about');
order.insertBefore(order.lastElementChild, order.firstElementChild);

var elemCon = document.createElement('h2');
var elemTextCon = document.createTextNode('Contact');
elemCon.appendChild(elemTextCon);
var h2TagCon = document.getElementById('contact');
h2TagCon.appendChild(elemCon);
var orderCon = document.querySelector('#contact');
orderCon.insertBefore(orderCon.lastElementChild, orderCon.firstElementChild);

/* The developer used td elements in thead instead of th. Fix it.*/
var myTable1 = document.getElementsByTagName('tr')[0];
var tableItem1 = myTable1.children[0];
var newItem1 = document.createElement('th');
newItem1.textContent = 'Name';
myTable1.replaceChild(newItem1, tableItem1);

var myTable2 = document.getElementsByTagName('tr')[0];
var tableItem2 = myTable2.children[1];
var newItem2 = document.createElement('th');
newItem2.textContent = 'Email';
myTable2.replaceChild(newItem2, tableItem2);

/* Head title is wrong, Should be "Fruits & Vegetables Corp. */
document.title = 'Fruits & Vegetables Corp';
