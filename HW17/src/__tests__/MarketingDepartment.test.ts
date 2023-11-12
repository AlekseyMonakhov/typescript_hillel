import {MarketingDepartment} from "../classes/Departments";
import {IMarketingDepartment} from "../types";

describe('MarketingDepartment', () => {
    let marketingDepartment = new MarketingDepartment();


    test("it should send emal", () => {
        const email = 'myemail@gmail.com';
        const message = 'Hello world';

        console.log = jest.fn();

        marketingDepartment.sendEmail(email, message);

        expect(console.log).toHaveBeenCalledWith(`Email was sent to ${email} with message: ${message}`)
    })


    test("it should send sms", () => {
        const phone = '123456789';
        const message = 'Hello world';

        console.log = jest.fn();

        marketingDepartment.sendSMS(phone, message);

        expect(console.log).toHaveBeenCalledWith(`Email was sent to ${phone} with message: ${message}`)
    })
})