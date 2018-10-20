app.run(() => {
    console.log("Run call..");
});
// angular.element()
app.service(() => {
    console.log(`Service call...`);
});
app.component();
app.config(() => {
    console.log(`config called...`);
});
// app.constant();
// app.decorator();
// app.directive();
// app.factory();
// app.filter();
// app.provider();
// app.name= '';
// app.requires();
app.controller("myctrl", ($scope) => {
    $scope.$watch('FN', (newValue, oldValue) => {
        if (oldValue != newValue) {
            console.log("First NUmber Modified ", oldValue, newValue);
        }
    });
    $scope.Show = () => {
        var element = angular.element(document.querySelector("#msg"));
        console.log("Element is ", element[0].innerHTML);
    }
    var count = 1;
    const docount = () => {
        count++;
        $scope.$apply(() => {
            $scope.result = count;
            console.log("Apply called...");
        })
    }
    const init = () =>
        document.querySelector("#btn").addEventListener("click", docount);

    init();
    $scope.$watch(() => {
        console.log("Watch Called...");
    })
})