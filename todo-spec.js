describe('angularjs homepage todo list', function() {
  it('login on page', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://app.cms2cms.com/auth');

    element(by.id('signUpEmail')).sendKeys('yura_test@gmail.com');

    element(by.id('signUpPassword')).sendKeys('12344321qwe');
    element(by.id('signUpName')).sendKeys('Yura Romanyuk');
    element(by.id('signUpPhone')).sendKeys('(132) 555-0123');
    element(by.id('agree-with-terms')).click();
	
    element(by.css('button.btn.btn-default')).click();

	
    element(by.className('user-logout'));

  });
});