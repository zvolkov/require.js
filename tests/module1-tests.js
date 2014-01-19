/// <reference path="rqtst.js" />

testing('../features/module1.js', function(initSUT) {

    test('module1 must return message jquery version number', function() {
        //GIVEN sut with jquery mocked out
        var jquery = {fn: {jquery: '1.2.3'}};
        var sut = initSUT(jquery);
        //THEN sut return hello world message
        equal(sut.message, 'hello world: 1.2.3');
    });

    test('example of failing test', function() {
        //GIVEN sut with jquery mocked out
        var jquery = {fn: {jquery: '1.2.3'}};
        var sut = initSUT(jquery);
        //THEN sut return hello world message
        equal(sut.message, 'hello world: 1.2.4');
    });
});
