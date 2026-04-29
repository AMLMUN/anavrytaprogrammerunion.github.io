// (function() {
//     const DELAY = 100; // milliseconds
//     let closeTimer = null;

//     // Helper function to close all open menus except the one being hovered
//     const closeAllMenus = (exceptThis) => {
//         const allOpen = document.querySelectorAll('.dropdown.open, .dropdown-submenu.open');
//         allOpen.forEach(menu => {
//             // Don't close the menu if it's the one we are currently hovering over
//             // or if it's a parent of the one we are hovering over
//             if (exceptThis && (menu === exceptThis || menu.contains(exceptThis))) {
//                 return;
//             }
            
//             menu.classList.remove('open');
//             const innerMenu = menu.querySelector('.dropdown-menu');
//             if (innerMenu) {
//                 innerMenu.style.display = '';
//                 innerMenu.style.opacity = '';
//                 innerMenu.style.visibility = '';
//             }
//         });
//     };

//     document.addEventListener('mouseover', function(e) {
//         const dropdown = e.target.closest('.dropdown, .dropdown-submenu');
        
//         if (dropdown) {
//             // If we move into a menu, cancel any pending close timer
//             if (closeTimer) {
//                 clearTimeout(closeTimer);
//                 closeTimer = 0;
//             }
            
//             // Close other sibling/unrelated menus when moving into a new one
//             closeAllMenus(dropdown);
            
//             // For Mobirise specifically, force the 'open' class
//             dropdown.classList.add('open');
//             const menu = dropdown.querySelector('.dropdown-menu');
//             if (menu) {
//                 menu.style.display = 'block';
//                 menu.style.opacity = '1';
//                 menu.style.visibility = 'visible';
//             }
//         } else {
//             // If we are hovering over the navbar background or a non-dropdown link,
//             // we should still consider closing things after a delay.
//             if (!e.target.closest('.navbar')) {
//                 closeAllMenus(null);
//             }
//         }
//     });

//     document.addEventListener('mouseout', function(e) {
//         const dropdown = e.target.closest('.dropdown, .dropdown-submenu');
//         if (dropdown) {
//             // Instead of closing immediately, wait a moment
//             closeTimer = setTimeout(() => {
//                 // Check if the mouse is still not over the menu
//                 if (!dropdown.matches(':hover')) {
//                     dropdown.classList.remove('open');
//                     const menu = dropdown.querySelector('.dropdown-menu');
//                     if (menu) {
//                         menu.style.display = '';
//                         menu.style.opacity = '';
//                         menu.style.visibility = '';
//                     }
//                 }
//             }, DELAY);
//         }
//     });
// })();