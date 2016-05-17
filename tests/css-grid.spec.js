
describe('css-grid', function () {
    var cssGridElement;


    beforeEach(function () {
        cssGridElement = document.createElement('css-grid');
    });

    // it('created element should have the correct attributes', function () {
    //     expect(notificationElement.getAttribute('supported')).toBeTruthy();
    //     expect(notificationElement.getAttribute('title')).toBe(config.title);
    //     expect(notificationElement.getAttribute('body')).toBe(config.body);
    //     expect(notificationElement.getAttribute('icon')).toBe(config.icon);
    // });

    it('created element should match string representation', function () {
        var expectedEl = '<css-grid></css-grid>';

        var gridWrapper = document.createElement('div');
        gridWrapper.appendChild(cssGridElement);

        expect(gridWrapper.innerHTML).toBe(expectedEl);
    });

    it('created element should have shadow root and inner shadow elements', function () {

        var gridWrapper = document.createElement('div');
        gridWrapper.appendChild(cssGridElement);

        expect(gridWrapper.querySelector('css-grid').shadowRoot).not.toBeNull();

    })
});