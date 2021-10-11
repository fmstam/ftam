$(document).ready(function () {

    
    // handel topic selection in the sidebar

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


// scroll navigation highlighting
$(window).scroll(function() {
    let position = $(this).scrollTop();

    $('.content').each(function() {
        let target = $(this).offset().top;
        let id = $(this).attr('id'); // get id of the content div
        if (position >= target) {    // if we hit the current div    
            $('#leftSidebar > a').removeClass('active'); // remove the active class from all
            $('#leftSidebar > a[href=\\#' + id + ']').addClass('active'); // get the required nav item highlighted
        }
    });
});