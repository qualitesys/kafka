console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java 76 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminApiHandler.Batched<TopicPartition,Void>"
 , "c2" : "org.apache.kafka.clients.admin.internals.AbortTransactionHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.AbortTransactionHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AbortTransactionHandler"
 , "c2" : "AbortTransactionHandler(AbortTransactionSpec;LogContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiFuture.SimpleAdminApiFuture<TopicPartition,Void>"
 , "c2" : "newFuture(Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiLookupStrategy<TopicPartition>"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "WriteTxnMarkersRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<TopicPartition,Void>"
 , "c2" : "handleResponse(Node;Set<TopicPartition>;AbstractResponse)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<TopicPartition,Void>"
 , "c2" : "handleError(Errors)"
 , "c3" : "8"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateTopicPartitions(Set<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "48"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method newFuture arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.apiName@POLYN187535 the MagicNumber/String  'abortTransaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method buildBatchedRequest arguments int  brokerId|Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.buildBatchedRequest@POLYN187766 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method handleResponse arguments Node  broker|Set&lt;TopicPartition &gt;  topicPartitions|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00081] For method handleResponse list of called methods Object monObjet|WriteTxnMarkersResponseData response_dataN189194"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'WriteTxnMarkers response ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'included unexpected marker entries: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  '(expected to find exactly one ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'entry with producerId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'WriteTxnMarkers response ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'included unexpected topic entries: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  '(expected to find exactly one ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'entry with topic partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'WriteTxnMarkers response ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  'included unexpected partition entries for topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  '(expected to find exactly one entry with partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleResponse@POLYN188860 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method handleError arguments Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed cluster authorization' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  ' failed due to cluster ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'authorization error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed due to an invalid producer epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  ' failed due an invalid producer epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed because the coordinator epoch is fenced' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  ' failed since the provided ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'coordinator epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  ' has been fenced ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'by the active coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed due to {}. Will retry after attempting to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'find the leader again' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request for abort spec {} failed due to an unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  'WriteTxnMarkers request with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String  ' failed due to unexpected error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method validateTopicPartitions arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.validateTopicPartitions@POLYN193991 the MagicNumber/String  'Received unexpected topic partitions ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.validateTopicPartitions@POLYN193991 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.validateTopicPartitions@POLYN193991 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request for abort spec {} failed cluster authorization' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String ' failed due to cluster ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request with ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'authorization error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00136] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request for abort spec {} failed due to an invalid producer epoch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String ' failed due an invalid producer epoch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request with ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00142] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request for abort spec {} failed because the coordinator epoch is fenced' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String ' failed since the provided ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request with ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String ' has been fenced ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'coordinator epoch ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'by the active coordinator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00153] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request for abort spec {} failed due to {}. Will retry after attempting to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'find the leader again' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request for abort spec {} failed due to an unexpected error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String ' failed due to unexpected error: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AbortTransactionHandler.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.clients.admin.internals.AbortTransactionHandler.handleError@POLYN191972 the MagicNumber/String 'WriteTxnMarkers request with ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
