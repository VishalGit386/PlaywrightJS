export default class LoginPageClass{
    Loginbutton:any;
    username:any;
    password:any;
    page: any;
    goto:any;

    constructor(page:any)
    {
    this.page = page;
    this.goto = page.goto('https://www.saucedemo.com/');
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.Loginbutton = page.locator('#login-button');
    }
     goTo()
    {
     this.goto;
    }
    async validlogin()
    {
    const uname = 'standard_user';
    const pass = 'secret_sauce'
    await this.username.fill(uname);
    await this.password.fill(pass);
    await this.Loginbutton.click();
    }
}