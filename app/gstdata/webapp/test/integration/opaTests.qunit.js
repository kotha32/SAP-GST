sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'gstdata/test/integration/FirstJourney',
		'gstdata/test/integration/pages/gstlocalList',
		'gstdata/test/integration/pages/gstlocalObjectPage'
    ],
    function(JourneyRunner, opaJourney, gstlocalList, gstlocalObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('gstdata') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThegstlocalList: gstlocalList,
					onThegstlocalObjectPage: gstlocalObjectPage
                }
            },
            opaJourney.run
        );
    }
);