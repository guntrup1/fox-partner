const time = 2000;
const step = 1;

function outNum(num, elem){
	let l = document.querySelector('.' + elem);
	n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
		t);
}



const timeTwo = 2000;
const stepTwo = 6;

function outTwoNum(nums, elem){
	let l = document.querySelector('.' + elem);
	ntwo = 0;
	let t = Math.round(timeTwo / (nums / stepTwo));
	let interval = setInterval(() => {
		ntwo = ntwo + stepTwo;
		if (ntwo == nums) {
			clearInterval(interval);
		}
		l.innerHTML = ntwo;
	},
		t);
}



function isOnVisibleSpace(element) {
	var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset   = elemRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

var listenedElements = [];

window.onscroll = function() {
	listenedElements.forEach(item=>{
  	var result = isOnVisibleSpace(item.el);
    

    if(!item.el.isOnVisibleSpace && result){
    	item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
}


function onVisibleSpaceListener(elementId, cbIn, cbOut) {
  var el = document.getElementById(elementId);

  listenedElements.push({
  	el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut    
  });
}


onVisibleSpaceListener("partners-stats__citys", 
	el=>{
    outNum(39, 'partners-stats__citys');
    outTwoNum(1638, 'partners-stats__clients');
    
	},
);