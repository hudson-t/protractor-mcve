var originalLocation = "https://stackoverflow.com/"

describe('protractor', function () {
  describe('when browser.navigate().back() is called', function () {
    beforeAll(function () {
      // Non angular example...
      browser.ignoreSynchronization = true;

      // Go to GitHub
      browser.get(originalLocation);

      // Click the Log in link
      browser.wait(ExpectedConditions.visibilityOf(element(by.linkText("Log In"))));
      element(by.linkText("Log In")).click();

      // Wait for Log In page to load
      browser.wait(ExpectedConditions.visibilityOf(element(by.id("email"))));

      // Trigger Browser Back button functionality
      browser.navigate().back();
    });

    it('should take you back to the previous location', function () {
      // Wait until the otiginal;
      browser.wait(ExpectedConditions.urlIs(originalLocation), 10000, "browser.navigate().back()")
    });
  });
});
