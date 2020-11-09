
var sidebarItems = document.querySelectorAll('.sidebar-item.has-sub');
var _loop = function _loop(){
	var sidebarItem = sidebarItems[i];
	sidebarItems[i].querySelector('.sidebar-link').addEventListener('click', function (d){
		d.preventDefault();
		var submenu = sidebarItem.querySelector('.submenu');
			if(submenu.classList.contains('active')) submenu.classList.remove('active');
			else submenu.classList.add('active');
		});
	};

for ( var i = 0;  i < sidebarItems.length; i++){
		_loop();
}