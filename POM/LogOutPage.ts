export default class LogOutPageClass{

    page: any;
    menubar:any;
    logout:any;
    constructor(page:any)
    {

        this.page = page;
        //this.menubar = page.locator("//button[@id='react-burger-menu-btn']");
        //this.menubar = page.getByRole('button', { name: 'Open Menu' });
        this.logout = page.getByRole('link', { name: 'Logout' });

    }
    async logoutbtn()
    {
        // await this.menubar.click();
        await this.logout.click();
    }
}