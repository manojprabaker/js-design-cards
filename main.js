let foodList=[
{
	id:1,
	name:"SS Hyderabad Briyani",
	cuisine:"Briyani,North Indian,Chinese",
	rating:4.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xy5pdrfdlirnz6ypnaj2"
},
{
	id:2,
	name:"Tasty Kitchen",
	cuisine:"Biryani, South Indian, Chinese, North Indian",
	rating:4.2,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cyxyhx6wzgi9ogyapxym"
},
{
	id:3,
	name:"Palmshore",
	cuisine:"Arabian",
	rating:3.5,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/9ae730c95d13d6e26bf0bc9d69119a38"
},
{
	id:4,
	name:"Burger King",
	cuisine:"Burgers, American",
	rating:2.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zggqzcw1muhht6tkwuba"
},
{
	id:5,
	name:"Zaitoon",
	cuisine:"Biryani, Juices, North Indian, Chinese, Arabian, Mughlai, Kebabs",
	rating:1.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ac1staxtetolkvynv2ot"
},
{
	id:6,
	name:"Buhari",
	cuisine:"Biryani, North Indian, Chinese, South Indian, Arabian",
	rating:3.7,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hwbeetykbqbudvijg6yd"
},
{
	id:7,
	name:"Dindigul Thalappakatti",
	cuisine:"Biryani, Barbecue, South Indian, Chinese, North Indian",
	rating:4.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b4oufcrv1ejzlgbz1oyb"
},
{
	id:8,
	name:"China Town",
	cuisine:"Chinese",
	rating:4.6,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rs86cebsq2sc0udwmb6l"
}];


let cnt=document.querySelector(".container");
let cards=document.createElement("div");
cards.classList.add("row");
cnt.appendChild(cards);
console.log(cards);

foodList.forEach(function(e){
	let div=document.createElement("div");
	div.classList.add("col");
	cards.appendChild(div);
	
	let div2=document.createElement("div");
	div2.classList.add("col-item");
	div.appendChild(div2);
	
	let img=document.createElement("img");
	img.classList.add("col-img");
	img.src=e.imgurl;
	div2.appendChild(img);
	
	let h2=document.createElement("h2");
	h2.classList.add("col-name");
	h2.innerHTML=e.name;
	div2.appendChild(h2);
	
	let cuisine=document.createElement("p");
	cuisine.setAttribute("class","cuisine");
	cuisine.innerHTML=e.cuisine;
	div2.appendChild(cuisine);
	
	let rate=document.createElement("p");
	rate.classList.add("rating");
	rate.innerHTML=e.rating;
	div2.appendChild(rate);
  
  
	if(e.rating<2.9)
	{
		rate.style.backgroundColor="red";
	}
	 else if(3<e.rating && e.rating<3.9)
	 {
		 rate.style.backgroundColor="#db7c38";
	 }
	 else if(4<e.rating && e.rating<5)
	 {
		 rate.style.backgroundColor="#48c479";
	 }
	 else {
		 rate.style.backgroundColor="white";
	 }
	
	
    
});

// foodList.map(function(ratingColor){
	// if(ratingColor.rating>4)
	// {
		 // rate.style.backgroundColor="white";
	// }
// });