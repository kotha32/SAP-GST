using { com.sap.satinfotech as db } from '../db/schema';
using { API_OPLACCTGDOCITEMCUBE_SRV as gstapi } from './external/API_OPLACCTGDOCITEMCUBE_SRV';

service satinfotech @(requires: 'authenticated-user') {
    entity remote as projection on gstapi.A_OperationalAcctgDocItemCube {
    CompanyCode,
    FiscalYear,
    AccountingDocument,
    AccountingDocumentItem,
    AccountingDocumentType,
    DocumentReferenceID,
    AmountInTransactionCurrency,
    GLAccount,
    TaxCode,
    LastChangeDate
    }

    entity gstlocal as projection on db.gst;
    entity gstItems as projection on db.gstItems;
    action ListReporter() returns String;
    action GSTFetchStatus() returns String;
}

annotate satinfotech.gstlocal with @odata.draft.enabled;