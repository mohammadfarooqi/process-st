describe('Demo Test', function() {
  it('has a dummy spec to test 2 + 2', function() {
    expect(2 + 2).toEqual(4);
  });
});

describe('Component: wistiaUploadFileComponent', function () {
  beforeEach(module('wistiaApp'));

  describe('with $componentController', function () {
    var controller;
    var scope;

    beforeEach(inject(function($rootScope, $componentController) {
      scope = $rootScope.$new();
      controller = $componentController('wistiaUploadFileComponent', {$scope: scope}, {});
    }));

    it('should be attached to the scope', function() {
      expect(scope.$ctrl).toBe(controller);
    });
  });

  // describe('with element', function () {
  //   var $compile;
  //   var $rootScope;

  //   beforeEach(module('templates'));

  //   beforeEach(inject(function (_$rootScope_, _$compile_) {
  //     $rootScope = _$rootScope_;
  //     $compile = _$compile_;
  //   }));

  //   it('should call submit()', function () {
  //     var scope = $rootScope.$new();
  //     var element = $compile('<wistia-upload-file-component></wistia-upload-file-component>')(scope);
  //     // $rootScope.$apply();
  //     scope.$digest()
  //     console.log(element.html());
  //   });
  // });
});