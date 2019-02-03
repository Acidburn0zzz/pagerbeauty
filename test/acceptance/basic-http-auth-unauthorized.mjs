// ------- Imports -------------------------------------------------------------

import test from 'ava';
import chai from 'chai';

// ------- Internal imports ----------------------------------------------------

import { AcceptanceHelpers, BASE_URL_WITH_AUTH } from '../helpers/AcceptanceHelpers';

// ------- Init ----------------------------------------------------------------

const { expect } = chai;
const { withNewPage, ensureUnauthrozied } = AcceptanceHelpers;

test.before(AcceptanceHelpers.openBrowser);
test.after.always(AcceptanceHelpers.closeBrowser);

// ------- Tests ---------------------------------------------------------------

test('HTTP Unauthorized: Check /', withNewPage(), async (t, page) => {
  const response = await ensureUnauthrozied(page, '/');
  // Make sure we don't redirect on 401
  expect(response.url()).to.equal(`${BASE_URL_WITH_AUTH}/`);
});

test('HTTP Unauthorized: Check Schedules List', withNewPage(), async (t, page) => {
  await ensureUnauthrozied(page, '/v1/schedules.html');
});

// ------- End -----------------------------------------------------------------
