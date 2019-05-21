window.addEventListener('load', ()=>{
	var priceRange = document.querySelector('.price-range');
	var minControlUp = document.querySelector('.min-control-up');
	var minControlDown = document.querySelector('.min-control-down');
	var maxControlUp = document.querySelector('.max-control-up');
	var maxControlDown = document.querySelector('.max-control-down');
	var minK = document.querySelector('.min-price');
	var maxK = document.querySelector('.max-price');
	
	priceRange.classList.add('fadeIn');

	var minPrice = [0,1,2,3,4,5,6,7,8,9];
	var maxPrice = [11,10,9,8,7,6,5,4,3,2,1];
	var minCounter = 0;
	var maxCounter = 0;

	minControlUp.addEventListener('click', function(){
		if (minCounter == 9) {
			minCounter--;
		} else {
			minCounter++;
			minK.textContent = minPrice[minCounter]+ " " + "k";
		}
	});

	minControlDown.addEventListener('click', function(){
		if (minCounter > 0) {
			minCounter--;
			minK.textContent = minPrice[minCounter]+ " " + "k";
		} else {
			minCounter++;
		}		
	});

	maxControlUp.addEventListener('click', function(){
		if (maxCounter > 1) {
			maxCounter--;
			maxK.textContent = maxPrice[maxCounter]+ " " + "k";
		} else {
			maxCounter++;
		}
	});

	maxControlDown.addEventListener('click', function(){
		if (maxCounter == 10) {
			maxCounter--;
		} else {
			maxCounter++;
			maxK.textContent = maxPrice[maxCounter]+ " " + "k";
		}		
	});




});