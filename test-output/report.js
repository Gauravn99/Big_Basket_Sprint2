$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Big_Basket_Sprint2.feature");
formatter.feature({
  "name": "bigbasket Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Flow of Addchart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I want to open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.i_want_to_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open url",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.open_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on signup/signin",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.click_on_signup_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid mobile number and OTP",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.enter_valid_mobile_number_and_OTP()"
});
formatter.result({
  "error_message": "java.util.NoSuchElementException\r\n\tat java.util.Scanner.throwFor(Scanner.java:862)\r\n\tat java.util.Scanner.next(Scanner.java:1371)\r\n\tat steps.Steps_Big_Basket_Sprint2.enter_valid_mobile_number_and_OTP(Steps_Big_Basket_Sprint2.java:48)\r\n\tat ✽.Enter valid mobile number and OTP(file:Features/Big_Basket_Sprint2.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on Verify and Continue",
  "keyword": "When "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.click_on_Verify_and_Continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter firstname lastname and emailid",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.enter_firstname_lastname_and_emailid()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on startshopping",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.click_on_startshopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Goto search",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.goto_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Search for Onion",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.search_for_Onion()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select the Quantity and click on Add",
  "keyword": "And "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.select_the_Quantity_and_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Print message Item is added successfully in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps_Big_Basket_Sprint2.print_message_Item_is_added_successfully_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
});