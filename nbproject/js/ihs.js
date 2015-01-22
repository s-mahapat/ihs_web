var ihsApp = angular.module('ihs', ['ngRoute']);

ihsApp.config(function ($routeProvider) {

    /*------------------------------*/
    /* HOME */
    /*------------------------------*/
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html'

                /*------------------------------*/
                /* ABOUT */
                /*------------------------------*/
    }).when('/about', {
        templateUrl: 'partials/about.html'

                /*------------------------------*/
                /* ORGANIZATION STRUCTURE */
                /*------------------------------*/
    }).when('/about/orgstructure', {
        templateUrl: 'partials/orgstructure.html'

                /*------------------------------*/
                /* PROJECT ARCHIVE */
                /*------------------------------*/
    }).when('/project/archives', {
        templateUrl: 'partials/project_archive.html'

                /*------------------------------*/
                /* AP BURDEN OF DISEASE STUDY */
                /*------------------------------*/
    }).when('/project/archive/apburdenofdiseasestudy', {
        templateUrl: 'partials/AP_Burden_of_Disease_Study.html'

                /*------------------------------*/
                /* AP HEALTH STATE VALUATION STUDY */
                /*------------------------------*/
    }).when('/project/archive/aphealthstatevaluationstudy', {
        templateUrl: 'partials/AP_Health_State_Valuation_Study.html'

                /*------------------------------*/
                /* CAUSE OF DEATH */
                /*------------------------------*/
    }).when('/project/archive/causeofdeath', {
        templateUrl: 'partials/Cause_Of_Death.html'

                /*------------------------------*/
                /* BOD TRAINING PROGRAMMES */
                /*------------------------------*/
    }).when('/project/archive/bodtrainingprogrammes', {
        templateUrl: 'partials/BOD_Training_Programmes.html'

                /*------------------------------*/
                /* DFHS */
                /*------------------------------*/
    }).when('/project/archive/DFHS', {
        templateUrl: 'partials/DFHS.html'

                /*------------------------------*/
                /* INDOOR AIR POLLUTION */
                /*------------------------------*/
    }).when('/project/archive/indoorairpollution', {
        templateUrl: 'partials/Indoor_Air_Pollution.html'

                /*------------------------------*/
                /* RTA */
                /*------------------------------*/
    }).when('/project/archive/RTA', {
        templateUrl: 'partials/RTA.html'
                /*------------------------------*/
                /* Burden of Disease and Socioeconomic Impact of HIV/AIDS */
                /*------------------------------*/
    }).when('/project/archive/bodsocioeconomicimpact', {
        templateUrl: 'partials/BOD_Socioeconomic_Impact.html'

                /*------------------------------*/
                /* Air Pollution and Cause of Deaths in Hyderabad */
                /*------------------------------*/
    }).when('/project/archive/airpollutionandcod', {
        templateUrl: 'partials/Air_Pollution_COD.html'

                /*------------------------------*/
                /*Technical Support for Verbal Autopsy*/
                /*------------------------------*/
    }).when('/project/archive/technicalsupportforverbalautopsy', {
        templateUrl: 'partials/Technical_Support_for_Verbal_Autopsy.html'

                /*------------------------------*/
                /*Cause of Death Coding for AP Rural Health Initiative*/
                /*------------------------------*/
    }).when('/project/archive/codcoding', {
        templateUrl: 'partials/COD_Coding.html'

                /*------------------------------*/
                /*Health Effects of Air Pollution in Hyderabad*/
                /*------------------------------*/
    }).when('/project/archive/healtheffectsofairpollution', {
        templateUrl: 'partials/Health_Effects_Of_Air_Pollution.html'

                /*------------------------------*/
                /*Socioeconomic Impact of Asthma*/
                /*------------------------------*/
    }).when('/project/archive/socioeconomicimpactofasthma', {
        templateUrl: 'partials/Socioeconomic_Impact_of_Asthma.html'

                /*------------------------------*/
                /*Faculty Profile Details*/
                /*------------------------------*/
    }).when('/about/facultyprofiledetails', {
        templateUrl: 'partials/faculty_profile_details.html'

                /*------------------------------*/
                /*National Burden of Disease Estimation Workshops*/
                /*------------------------------*/
    }).when('/project/archive/nationalBODworkshops', {
        templateUrl: 'partials/National_BOD_Estimation_Workshops.html'

                /*------------------------------*/
                /*Others*/
                /*------------------------------*/
    }).otherwise('/home');
});

ihsApp.value('constants',
        {'ihs_email': 'ihs@ihsnet.org.in'}
);

ihsApp.controller('mainController',
        function ($scope, constants) {
            $scope.ihs_email = constants.ihs_email;
        }
);