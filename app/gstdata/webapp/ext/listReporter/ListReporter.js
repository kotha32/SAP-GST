sap.ui.define([
    "sap/m/MessageBox",
    "sap/ui/core/library",
    'sap/ui/core/BusyIndicator',
    "sap/m/MessageToast"

],
function (MessageBox, coreLibrary,BusyIndicator){
    "use strict";
    return {
    
        ListReporter: function(oBindingContext, aSelectedContexts) {
            
            // MessageToast.show("Custom handler invoked.");

                this.editFlow.invokeAction('satinfotech/ListReporter;', {
                    model: this._view.getModel(),
                    
                }).then(function(result) {
                    console.log("Action executed successfully.");
                    // BusyIndicator.show();
                    // console.log(result.value);
                    // BusyIndicator.hide();
                    // aSelectedContexts[0].getModel().refresh();
                
                })

            //     let mParameters = {
            //         contexts: aSelectedContexts[0],
            //         label: 'Confirm',
            //         invocationGrouping: true
            //     };
            // this.editFlow.invokeAction('satinfotech.billingFetch',mParameters).then(function (result) {
            //     BusyIndicator.show();
            //     console.log(result.value);
            //     BusyIndicator.hide();
            //     aSelectedContexts[0].getModel().refresh();
                
            // })

        },
        
    }
});