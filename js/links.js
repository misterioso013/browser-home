const links = [
    {
        label: "Github",
        url: "http://github.com",
        icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
        label: "Twitter",
        url: "http://twitter.com",
        icon: "https://abs.twimg.com/favicons/twitter.ico"
    },
    {
        label: "Facebook",
        url: "http://facebook.com",
        icon: "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
    }
];

const div = document.querySelector(".links");

links.forEach(link => {
    const a = document.createElement("a");
    a.setAttribute("href", link.url);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    a.setAttribute("title", link.label);
    a.innerHTML = `<img src="${link.icon}" alt="${link.label}">`;
    div.appendChild(a);
});