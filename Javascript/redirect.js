function redirect(webpage)
{
    var prefix = "https://tanya-design93.github.io/";
    switch(webpage)
    {
        case "contact":
            location.replace(prefix + "Contact.htm");
            break;
        case "homepage":
            location.replace(prefix + "Homepagesite.htm");
            break;
        case "menu":
            location.replace(prefix + "Menu.htm");
            break;
        case "ourkitchen":
            location.replace(prefix + "Ourkitchen.htm");
            break;
        default:
            location.replace("https://thisiswhyimbroke.com");
            break;
    }
}