
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//MY EXRTA CODE
//Toast Notification(Zitakuwa active baada ya kuunganisha firebase)
/*function showToast(message, success = true) {
  const toastElement = document.getElementById("toastMessage");
  const toastBody = document.getElementById("toastBody");

  toastBody.textContent = message;
  toastElement.classList.remove("bg-success", "bg-danger");
  toastElement.classList.add(success ? "bg-success" : "bg-danger");

  const toast = new bootstrap.Toast(toastElement);
  toast.show();
} */

//CODE FOR NOTESPAGE
function showNotes(course) {
    document.getElementById("btcict").classList.add("d-none");
    document.getElementById("tcict").classList.add("d-none");
    document.getElementById(course).classList.remove("d-none");
}