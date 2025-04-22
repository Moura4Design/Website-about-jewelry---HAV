	function myFunction(imgs) {
    let expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
};

(function() {
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartInfo.addEventListener('click', function() {
	cart.classList.toggle('show-cart');
	cart.style.border = '0.1rem solid #C0B283';
})
})();

(function() {
	const cartBtn = document.querySelectorAll('.store-item-icon');

	cartBtn.forEach(function(btn) {
		btn.addEventListener('click', function(event) {
			//console.log(event.target);
			if(event.target.parentElement.classList.contains('store-item-icon')) {
				//console.log(event.target.parentElement.previousElementSibling.src);

				let fullPath = event.target.parentElement.previousElementSibling.src;
				let pos = fullPath.indexOf('img') +3;
				//console.log(pos);

				let partPath = fullPath.slice(pos);
				//console.log(partPath);

				const item = {};
				item.img = `img-reduce${partPath}`;
				let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
				item.name = name;
				//console.log(name);

				let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[2].textContent;
				//console.log(price);

				let finalPrice = price.slice(1).trim();
				item.price = finalPrice;
				//console.log(finalPrice);
				//console.log(item);

				const cartItem = document.createElement('div');
				cartItem.classList.add('cart-item');
				cartItem.innerHTML =`
					<img src="${item.img}" id="item-img" alt="">
					<div class="cart-item-text">
						<p id="cart-item-title">${item.name}</p>
						<span id="cart-item-price" class="cart-item-price">${item.price}</span>
						</div>
						<a href="#" id="cart-item-remove" class="cart-item-remove">
						<i class="fa fa-trash" aria-hidden="true"></i></a>
						</div>`;


				//Select the cart
				const cart = document.getElementById('cart');
				const total = document.querySelector('.cart-total-container');

				cart.insertBefore(cartItem, total);
				alert('item added to the cart');
				showTotals();

			}
		})
	})


	//Show the totals
	function showTotals() {
		//console.log('hello');
		const total = [];
		const item = document.querySelectorAll('.cart-item-price');
		item.forEach(function(item) {
			total.push(parseFloat(item.textContent));
		});

		//console.log(total);
		const totalMoney = total.reduce(function(total, item) {
			total += item;
			return total;
		},0);

		const finalMoney = totalMoney.toFixed(2);
		//console.log(finalMoney);
		document.getElementById('cart-total').textContent = finalMoney;
		document.querySelector('.item-total').textContent = finalMoney;
		document.getElementById('item-count').textContent = total.length;
	}

})();

(function(){
	const removeItem = document.querySelectorAll('.cart');
	removeItem.forEach(function(buton) {
		buton.addEventListener('click', function(event) {
			//console.log(event.target);
			/*buton.parentNode.removeChild(removeItem);*/
			if(event.target.parentElement.classList.contains('cart-item-remove')) {
				//console.log(event.target);
				event.target.parentElement.parentElement.remove();

				const total = [];
				const item = document.querySelectorAll('.cart-item-price');
				item.forEach(function(item) {
					total.push(parseFloat(item.textContent));
				});

				//console.log(total);
				const totalMoney = total.reduce(function(total, item) {
				total += item;
				return total;
				},0);

				const finalMoney = totalMoney.toFixed(2);
				//console.log(finalMoney);
				document.getElementById('cart-total').textContent = finalMoney;
				document.querySelector('.item-total').textContent = finalMoney;
				document.getElementById('item-count').textContent = total.length;

			}
		});
	})
})();