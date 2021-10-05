$(document).ready(function () {

    // get all left panel links
    let sidebarItems = $("#leftSidebar").children('a')

    for(let i = 0; i < sidebarItems.length; i++){

        $(sidebarItems[i]).click( function(){
            let selectedItem = $(sidebarItems[i]).parent().children('.active')
            $(selectedItem).removeClass('active')
            $(sidebarItems[i]).addClass('active')
        });
    }
    
});