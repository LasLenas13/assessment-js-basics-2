///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => {
   return acc + cur.price
}, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let cartTotal = 26.97
let couponValue = 5
let tax = .06

function calcFinalPrice (cartTotal, couponValue, tax){
    const withTax = cartTotal * tax;
    const finalPrice = cartTotal + withTax - couponValue;
    return finalPrice;
}
const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(finalPrice)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    I did a Google search and found this article in FSR magazine (https://www.fsrmagazine.com/fsr/expert-insights/5-things-you-should-know-about-your-customers)

    1. Who are they?

Restaurants large and small may believe they “know” their customers based on what they order. This metric is easily obtained based on inventory analysis. It stands to reason that if you always run low on chicken, your customers like chicken. However, that number doesn’t give you the full story on who customers really are. Knowing their dining habits and behavior gives a fuller picture that can better target marketing efforts.

2. What do customers order?

Again, the first clue is inventory, but that isn’t the whole story. Are they more likely to order the daily special if you send them a deal for it? Do they like what they ordered? Even if the customer is a tried and true member of the “clean plate club,” it doesn’t mean that they liked the food. Encouraging guests to post reviews of the restaurant gives a more accurate view and can be accomplished as part of an integrated Wi-Fi analytics and automated marketing platform.

3. When do guests visit?

If there are lines out the door between noon and 2, lunchtime is your most popular visit time. But, sometimes it’s not that obvious. Restaurants that have peaks and valleys throughout the day need to drill down on this information. Real-time observation through a Wi-Fi analytics dashboard gives immediate, actionable data that restaurants can use for triggering deals at the optimal time of day. It also takes some of the guesswork out of scheduling staff.

4.  How long do patrons stay?

Dwell time—or the amount of time a particular customer stays on premise—offers a framework for triggering deals to get them to spend more time and money at the location. For example, a customer profile, collected by a Wi-Fi analytics program, might show a particular patron stays at a café for two hours and spends $5 on coffee. Trigger a deal for a muffin while that guest is still on the premises and chances are good they’ll spend another $3. Send them a deal for coffee and a muffin for the next day, and you better the odds that the customer returns.

5 . Why do customers come back?

How many customers are repeat visitors and how many are first timers?  Are they using the deals you send? Sharing them on social media? Writing reviews of your restaurant?  Knowing who your customer is and their behavior means you can target them individually with what is most likely to gain their loyalty.

Knowing the customer is the first step. Reaching them comes next. Ninety percent of consumers keep their mobile phones with them at all times, so a marketing automation platform that triggers direct communication that grabs customers’ attention while they’re in the restaurant actually drives social media interaction and promotes retention after they leave.
    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const myCustomers = {
    whoDe: "Pizza Lover",
    whatOrder: "Supreme Za",
    whenVisit: "Lunchtime",
    dineTime: 2,
    comeBack: "Social App",
}
