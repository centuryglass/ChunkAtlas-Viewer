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
            done.fail("Unexpected error: " + err.message);
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
     * @param expectedErrMessage  The message that should be stored in an
     *                            error thrown when the promise is rejected.
     *
     * @param done                A testing object provided by Jasmine for
     *                            signalling that an asynchronous test is 
     *                            complete.
     *
     * @return                    A Promise that will resolve when the test is
     *                            complete.
     */
    testPromiseRejection
            : function(promise, description, expectedErrMessage, done) {
        return promise.then(() => {
            done.fail("Promise should have been rejected: " + description);
        })
        .catch((err) => {
            expect(err.message).withContext(JSON.stringify(err, null, 4))
                    .toEqual(expectedErrMessage);
            done();
        });
    }
};
