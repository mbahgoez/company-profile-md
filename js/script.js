$grid = $("#grid-button");
$list = $("#list-button");

$grid.on("click", function(){
	$("#list-menu-makanan").addClass("grid");
	$("#list-menu-makanan").removeClass("list");
	$(this).addClass("active");
	$list.removeClass("active");
});

$list.on("click", function(){
	$("#list-menu-makanan").addClass("list");
	$("#list-menu-makanan").removeClass("grid");
	$(this).addClass("active");
	$grid.removeClass("active");
});
console.log($grid);