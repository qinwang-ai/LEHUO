angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, Dashs) {

    $scope.dashs = Dashs.all();
  // 轮播图数据初始化
  var slides = [];
  // 添加轮播图源
  slides.push({ link: $scope.dashs[0].link, image: $scope.dashs[0].image, alt: 'First Slide', caption: $scope.dashs[0].title, time: $scope.dashs[0].enddate });
  slides.push({ link: $scope.dashs[1].link, image: $scope.dashs[1].image, alt: 'Second Slide', caption: $scope.dashs[1].title, time: $scope.dashs[1].enddate });
  slides.push({ link: $scope.dashs[2].link, image: $scope.dashs[2].image, alt: 'Third Slide', caption: $scope.dashs[2].title, time: $scope.dashs[2].enddate });
  slides.push({ link: $scope.dashs[3].link, image: $scope.dashs[3].image, alt: 'Forth Slide', caption: $scope.dashs[3].title, time: $scope.dashs[3].enddate });
  slides.push({ link: $scope.dashs[4].link, image: $scope.dashs[4].image, alt: 'Fifth Slide', caption: $scope.dashs[4].title, time: $scope.dashs[4].enddate });
  $scope.carousels = slides;
})

.controller('DashDetailCtrl', function($scope, $stateParams, Dashs, $ionicPopup, $timeout) {
  //$scope.myGoBack = function() {
  //  $ionicHistory.goBack();
  //};

  $scope.showPopup = function() {
    $scope.data = {}
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      title: '已收藏'
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });

    $(".ion-ios-star-outline").attr('class', 'button button-icon button-clear ion-ios-star');

    $timeout(function() {
       myPopup.close(); //close the popup after 3 seconds for some reason
    }, 1000);
  };

  $scope.turn = function() {
    window.location.href = "#/tab/dash-message";
  }
  
  $scope.dash = Dashs.get($stateParams.dashId);

  var basicinfos = [];
  
  basicinfos.push({ label: '活动时间：', text: $scope.dash.startdate + ' - ' + $scope.dash.enddate });
  basicinfos.push({ label: '开放时间：', text: $scope.dash.starttime + ' - ' + $scope.dash.finaltime });
  basicinfos.push({ label: '地点：', text: $scope.dash.address });
  basicinfos.push({ label: '入场方式：', text: $scope.dash.way });
  $scope.basicinfos = basicinfos;

})

.controller('DashOrderCtrl', function($scope, Order) {
  $scope.order = Order.all();
  
})

.controller('DashMessageCtrl', function($scope, User) {
  $scope.user = User.all();
  
})

.controller('CorporationCtrl', function($scope) {
  
})

.controller('FindCtrl', function($scope) {
  
})

.controller('MineCtrl', function($scope) {

});