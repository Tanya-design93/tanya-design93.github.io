function redirect(webpage)
{
    switch(webpage)
    {
        case "contact":
            location.replace("Contact.htm");
            break;
        case "homepage":
            location.replace("Homepagesite.htm");
            break;
        case "menu":
            location.replace("Menu.htm");
            break;
        case "ourkitchen":
            location.replace("OurKitchen.htm");
            break;
        default:
            location.replace("https://thisiswhyimbroke.com");
            break;
    }
}