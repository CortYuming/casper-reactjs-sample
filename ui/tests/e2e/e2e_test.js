/*global casper*/
casper.test.begin('Check the display of the reactjs view.', function suite(test) {
    casper.start('http://todomvc.com/examples/react/#/');

    casper.then(function() {
        var selector = '#new-todo';
        this.waitForSelector(
            selector,
            function() {
                test.assertExists(selector);
            }
        );
    });

    casper.run(function() {
        test.done();
    });
});
