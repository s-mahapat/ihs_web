var ihsApp = angular.module('ihs', ['ngRoute']);

ihsApp.config(function ($routeProvider, $locationProvider) {

    //home
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html'

                // about
    }).when('/about', {
        templateUrl: 'partials/about.html'

                // about->orgstructure
    }).when('/about/orgstructure', {
        templateUrl: 'partials/orgstructure.html'

                // about->reachus
    }).when('/about/reachus', {
        templateUrl: 'partials/reachus.html'
    }).when('/project/archives', {
        templateUrl: 'partials/project_archive.html'

                /*------------------------------*/
                /* AP BURDEN OF DISEASE STUDY */
                /*------------------------------*/
    }).when('/project/archive/apburdenofdiseasestudy', {
        templateUrl: 'partials/BOD/AP_Burden_of_Disease_Study.html'

                /*------------------------------*/
                /* AP HEALTH STATE VALUATION STUDY */
                /*------------------------------*/
    }).when('/project/archive/aphealthstatevaluationstudy', {
        templateUrl: 'partials/BOD/AP_Health_State_Valuation_Study.html'

                /*------------------------------*/
                /* CAUSE OF DEATH */
                /*------------------------------*/
    }).when('/project/archive/causeofdeath', {
        templateUrl: 'partials/BOD/Cause_Of_Death.html'

                /*------------------------------*/
                /* BOD TRAINING PROGRAMMES */
                /*------------------------------*/
    }).when('/project/archive/bodtrainingprogrammes', {
        templateUrl: 'partials/BOD/BOD_Training_Programmes.html'

                /*------------------------------*/
                /* DFHS */
                /*------------------------------*/
    }).when('/project/archive/DFHS', {
        templateUrl: 'partials/BOD/DFHS.html'

                /*------------------------------*/
                /* INDOOR AIR POLLUTION */
                /*------------------------------*/
    }).when('/project/archive/indoorairpollution', {
        templateUrl: 'partials/BOD/Indoor_Air_Pollution.html'

                /*------------------------------*/
                /* RTA */
                /*------------------------------*/
    }).when('/project/archive/RTA', {
        templateUrl: 'partials/BOD/RTA.html'
                /*------------------------------*/
                /* Burden of Disease and Socioeconomic Impact of HIV/AIDS */
                /*------------------------------*/
    }).when('/project/archive/bodsocioeconomicimpactofhivaids', {
        templateUrl: 'partials/BOD/BOD_Socioeconomic_Impact_of_HIV_AIDS.html'

                /*------------------------------*/
                /* Air Pollution and Cause of Deaths in Hyderabad */
                /*------------------------------*/
    }).when('/project/archive/airpollutionandcod', {
        templateUrl: 'partials/BOD/Air_Pollution_COD.html'

                /*------------------------------*/
                /*Technical Support for Verbal Autopsy*/
                /*------------------------------*/
    }).when('/project/archive/technicalsupportforverbalautopsy', {
        templateUrl: 'partials/BOD/Technical_Support_for_Verbal_Autopsy.html'

                /*------------------------------*/
                /*Cause of Death Coding for AP Rural Health Initiative*/
                /*------------------------------*/
    }).when('/project/archive/codcoding', {
        templateUrl: 'partials/BOD/COD_Coding.html'

                /*------------------------------*/
                /*Health Effects of Air Pollution in Hyderabad*/
                /*------------------------------*/
    }).when('/project/archive/healtheffectsofairpollution', {
        templateUrl: 'partials/BOD/Health_Effects_Of_Air_Pollution.html'

                /*------------------------------*/
                /*Socioeconomic Impact of Asthma*/
                /*------------------------------*/
    }).when('/project/archive/socioeconomicimpactofasthma', {
        templateUrl: 'partials/BOD/Socioeconomic_Impact_of_Asthma.html'

                /*------------------------------*/
                /*Faculty Profile Details*/
                /*------------------------------*/
    }).when('/about/facultyprofiledetails', {
        templateUrl: 'partials/faculty_profile_details.html'

                /*------------------------------*/
                /*National Burden of Disease Estimation Workshops*/
                /*------------------------------*/
    }).when('/project/archive/nationalBODworkshops', {
        templateUrl: 'partials/BOD/National_BOD_Estimation_Workshops.html'

                /*------------------------------*/
                /*Health System Performance Assessment*/
                /*------------------------------*/
    }).when('/HSPA', {
        templateUrl: 'partials/HSPA/HSPA.html'

                /*------------------------------*/
                /*Others*/
                /*------------------------------*/
    }).when('/hspaprojects', {
        templateUrl: 'partials/HSPA/HSPA_Projects.html'

                /*------------------------------*/
                /*Others*/
                /*------------------------------*/
    }).otherwise('/home');

    $locationProvider.html5Mode(true);
});

ihsApp.value('constants',
        {'ihs_email': 'ihs@ihsnet.org.in'}
);

ihsApp.controller('mainController',
        function ($scope, $location, $anchorScroll, $timeout, constants) {
            $scope.ihs_email = constants.ihs_email;

            $scope.scrollToProfile = function (id) {
                var old = $location.hash();
                $location.url('about/facultyprofiledetails#' + id);
                
                /*$timeout(function () {
                    $location.hash(id);
                    //this will make anchorScroll scroll to the div minus 50px
                    $anchorScroll.yOffset = 100;
                    $anchorScroll();
                }, 00);
                
                //reset to old to keep any additional routing logic from kicking in
                $location.hash(old);*/
            };
        }
);