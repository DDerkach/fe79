$.fn.scrollToSection = function() {
  const links = this;
  links.click(clickHandler);

  function clickHandler(e) {
    e.preventDefault();
    const sectionToScroll = $(e.target.hash);
    console.log(sectionToScroll.offset().top);
    $("body").animate(
      {
        // find silution to scroll body on "sectionToScroll.offset().top";
      },
      400
    );
  }
};
