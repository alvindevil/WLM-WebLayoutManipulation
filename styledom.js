const box_css = document.getElementById("box-css");
const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");
const button_group = document.getElementById("button-group");
const style1 = document.getElementById("style1");
const style2 = document.getElementById("style2");

style1.addEventListener('click', function()
{
    box_css.classList.remove("box-css-2");
    box_css.classList.add("box-css-1");
    header.className="header1";
    content.classList.remove("content2");
    content.className="content1";
    footer.className="footer1";
    button_group.className="button-group1";
});

style2.addEventListener('click', function()
{
    box_css.classList.remove("box-css-1");
    box_css.classList.add("box-css-2");
    header.className="header2";
    content.className="content2";
    footer.className="footer2";
    button_group.className="button-group2";
});