$(document).ready(function () {

    /*
    handel topic selection in the sidebar
    */
    // get all left panel links
    let sidebarItems = $("#leftSidebar").children('a')

    for(let i = 0; i < sidebarItems.length; i++){
        // activate and deactivate sidebar items
        $(sidebarItems[i]).click( function(){
            let selectedItem = $(sidebarItems[i]).parent().children('.active')
            $(selectedItem).removeClass('active')
            $(sidebarItems[i]).addClass('active')
        });
    }
    
});