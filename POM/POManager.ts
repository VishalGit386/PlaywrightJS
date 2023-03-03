import LoginPageClass from "./LoginPage";
import LogOutPageClass from "./LogOutPage";

export default class POManager
{
    page:any;
    loginpage: LoginPageClass;
    logoutpage: LogOutPageClass;

    constructor(page:any)
    {
    this.page = page;
    this.loginpage = new LoginPageClass(this.page);
    this.logoutpage = new LogOutPageClass(this.page);

    }
    getLoginPage()
    {
    return this.loginpage
    }
    getLogoutPage()
    {
    return this.logoutpage
    }

}