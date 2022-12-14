console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java 23 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiHandler.Batched<AllBrokersStrategy.BrokerKey,Collection<TransactionListing>>"
 , "c2" : "org.apache.kafka.clients.admin.internals.ListTransactionsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.ListTransactionsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#28"
 , "c1" : "ListTransactionsHandler"
 , "c2" : "ListTransactionsHandler(ListTransactionsOptions;LogContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#37"
 , "c1" : "AllBrokersStrategy.AllBrokersFuture<Collection<TransactionListing>>"
 , "c2" : "newFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#42"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#47"
 , "c1" : "AdminApiLookupStrategy<AllBrokersStrategy.BrokerKey>"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#52"
 , "c1" : "ListTransactionsRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set<AllBrokersStrategy.BrokerKey>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#65"
 , "c1" : "ApiResult<AllBrokersStrategy.BrokerKey,Collection<TransactionListing>>"
 , "c2" : "handleResponse(Node;Set<AllBrokersStrategy.BrokerKey>;AbstractResponse)"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#101"
 , "c1" : "AllBrokersStrategy.BrokerKey"
 , "c2" : "requireSingleton(Set<AllBrokersStrategy.BrokerKey>;int)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.svg" }

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
"data11" : [
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
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.apiName@POLYN160118 the MagicNumber/String  'listTransactions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method buildBatchedRequest arguments int  brokerId|Set&lt;AllBrokersStrategy.BrokerKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method handleResponse arguments Node  broker|Set&lt;AllBrokersStrategy.BrokerKey &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00065] For method handleResponse list of called methods Object monObjet|int broker_idN161255|org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey requireSingletonN161338"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument broker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'The `ListTransactions` request sent to broker {} failed because the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'coordinator is still loading state. Will try again after backing off' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'The `ListTransactions` request sent to broker {} failed because the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'coordinator is shutting down' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'ListTransactions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'request sent to broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  ' failed because the coordinator is shutting down' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'The `ListTransactions` request sent to broker {} failed because of an ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'ListTransactions request ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  'sent to broker ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.handleResponse@POLYN161079 the MagicNumber/String  ' failed with an unexpected exception' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method requireSingleton arguments Set&lt;AllBrokersStrategy.BrokerKey &gt;  keys|int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.requireSingleton@POLYN163275 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.requireSingleton@POLYN163275 the MagicNumber/String  'Unexpected key set: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.admin.internals.ListTransactionsHandler.requireSingleton@POLYN163275 the MagicNumber/String  'Unexpected broker key: ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListTransactionsHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
