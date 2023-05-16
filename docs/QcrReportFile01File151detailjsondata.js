console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java 57 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.clients.admin.internals.AbortTransactionHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.AbortTransactionHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#46"
 , "c1" : "AbortTransactionHandler"
 , "c2" : "AbortTransactionHandler(AbortTransactionSpec;LogContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#55"
 , "c1" : "AdminApiFuture.SimpleAdminApiFuture&lt;TopicPartition,Void&gt;"
 , "c2" : "newFuture(Set&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#62"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#67"
 , "c1" : "AdminApiLookupStrategy&lt;TopicPartition&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#72"
 , "c1" : "WriteTxnMarkersRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#96"
 , "c1" : "ApiResult&lt;TopicPartition,Void&gt;"
 , "c2" : "handleResponse(Node;Set&lt;TopicPartition&gt;;AbstractResponse)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#142"
 , "c1" : "ApiResult&lt;TopicPartition,Void&gt;"
 , "c2" : "handleError(Errors)"
 , "c3" : "8"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00180"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#180"
 , "c1" : "void"
 , "c2" : "validateTopicPartitions(Set&lt;TopicPartition&gt;)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.svg" }

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
 , "c4" : "48"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
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
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method newFuture arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.apiName@POLYN174091 the MagicNumber/String  'abortTransaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method buildBatchedRequest arguments int  brokerId|Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.buildBatchedRequest@POLYN174322 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method handleResponse arguments Node  broker|Set&lt;TopicPartition &gt;  topicPartitions|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00096] For method handleResponse list of called methods Object monObjet|WriteTxnMarkersResponseData response_dataN175750|V markerResponses_getN176388|V topicResponses_getN177177|V partitionResponses_getN178022"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'WriteTxnMarkers response ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'included unexpected marker entries: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  '(expected to find exactly one ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'entry with producerId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'WriteTxnMarkers response ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'included unexpected topic entries: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  '(expected to find exactly one ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'entry with topic partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'WriteTxnMarkers response ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  'included unexpected partition entries for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  '(expected to find exactly one entry with partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN175416 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method handleError arguments Errors  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed cluster authorization' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  ' failed due to cluster ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'authorization error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed due to an invalid producer epoch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  ' failed due an invalid producer epoch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed because the coordinator epoch is fenced' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  ' failed since the provided ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'coordinator epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  ' has been fenced ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'by the active coordinator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed due to {}. Will retry after attempting to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'find the leader again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed due to an unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN178528 the MagicNumber/String  ' failed due to unexpected error: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method validateTopicPartitions arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#180"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00180] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.validateTopicPartitions@POLYN180549 the MagicNumber/String  'Received unexpected topic partitions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.validateTopicPartitions@POLYN180549 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.validateTopicPartitions@POLYN180549 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
