console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiHandler.Batched<AllBrokersStrategy.BrokerKey,Collection<TransactionListing>>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.clients.admin.internals.ListTransactionsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.ListTransactionsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#43"
 , "c1" : "ListTransactionsHandler"
 , "c2" : "ListTransactionsHandler(ListTransactionsOptions;LogContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#52"
 , "c1" : "AllBrokersStrategy.AllBrokersFuture&lt;Collection&lt;TransactionListing&gt;&gt;"
 , "c2" : "newFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#57"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#62"
 , "c1" : "AdminApiLookupStrategy&lt;AllBrokersStrategy.BrokerKey&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#67"
 , "c1" : "ListTransactionsRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set&lt;AllBrokersStrategy.BrokerKey&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#80"
 , "c1" : "ApiResult&lt;AllBrokersStrategy.BrokerKey,Collection&lt;TransactionListing&gt;&gt;"
 , "c2" : "handleResponse(Node;Set&lt;AllBrokersStrategy.BrokerKey&gt;;AbstractResponse)"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#116"
 , "c1" : "AllBrokersStrategy.BrokerKey"
 , "c2" : "requireSingleton(Set&lt;AllBrokersStrategy.BrokerKey&gt;;int)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.apiName@POLYN162482 the MagicNumber/String  'listTransactions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method buildBatchedRequest arguments int  brokerId|Set&lt;AllBrokersStrategy.BrokerKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method handleResponse arguments Node  broker|Set&lt;AllBrokersStrategy.BrokerKey &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'The  ListTransactions  request sent to broker {} failed because the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'coordinator is still loading state. Will try again after backing off' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'The  ListTransactions  request sent to broker {} failed because the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'coordinator is shutting down' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'ListTransactions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'request sent to broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  ' failed because the coordinator is shutting down' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'The  ListTransactions  request sent to broker {} failed because of an ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'ListTransactions request ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  'sent to broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN163447 the MagicNumber/String  ' failed with an unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method requireSingleton arguments Set&lt;AllBrokersStrategy.BrokerKey &gt;  keys|int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.requireSingleton@POLYN165653 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.requireSingleton@POLYN165653 the MagicNumber/String  'Unexpected key set: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.requireSingleton@POLYN165653 the MagicNumber/String  'Unexpected broker key: ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
