/**
 * @file promise-testing.js
 *
 * Provides convenience functions for testing Promise behavior using the 
 * Jasmine testing library.
 */

module.exports = {
    /**
     * Tests that a Promise resolves correctly.
     *
     * @param promise      The tested Promise object.
     *
     * @param done         A testing object provided by Jasmine for signalling
     *                     that an asynchronous test is complete.
     *
     * @return             A Promise that will resolve when the test is
     *                     complete.
     */
    testPromiseResolution : function(promise, done) {
        return promise.then(() => {
            done();
        })
        .catch((err) => {
            done.fail("Unexpected error: " + err);
        })
    },

    /**
     * Tests that a Promise attempting to perform some illegal action is 
     * rejected with an appropriate error message.
     *
     * @param promise            The tested Promise object.
     *
     * @param description        A string describing the tested action, to be
     *                           printed as part of a failure message if the
     *                           promise resolves.
     *
     * @param expectedErrString  The string version of the error that should
     *                           be returned when the promise finishes.
     *
     * @param done               A testing object provided by Jasmine for
     *                           signalling that an asynchronous test is 
     *                           complete.
     *
     * @return                   A Promise that will resolve when the test is
     *                           complete.
     */
    testPromiseRejection
            : function(promise, description, expectedErrString, done) {
        return promise.then(() => {
                done.fail("Promise should have been rejected: " + description);
        })
        .catch((err) => {
            expect(err.toString()).toEqual(expectedErrString);
            done();
        });
    }
};
