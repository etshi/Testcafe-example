import { Selector } from 'testcafe';

fixture('Minimal Working Example')
  .page('https://staging.app.cargo.one');

test('Click buttons on cargo.one staging', async t => {
  // Accept cookies
  const acceptCookiesButton = Selector('.iubenda-cs-accept-btn');
  await t
    .click(acceptCookiesButton)
    .wait(2000); // Wait for 2 seconds

  // Click on login button
  const loginButton = Selector('#btn-login-password');
  await t.click(loginButton);
});