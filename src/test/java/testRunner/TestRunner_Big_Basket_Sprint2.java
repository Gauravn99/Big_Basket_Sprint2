package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = ".\\Features\\Big_Basket_Sprint2.feature",
glue = "steps",
monochrome = true,
plugin= {"pretty","html:test-output"}

)
public class TestRunner_Big_Basket_Sprint2 {

}
