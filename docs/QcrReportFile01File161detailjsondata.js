console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java 29 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminApiHandler.Batched<CoordinatorKey,Map<TopicPartition,Errors>>"
 , "c2" : "org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DeleteConsumerGroupOffsetsHandler"
 , "c2" : "DeleteConsumerGroupOffsetsHandler(String;Set<TopicPartition>;LogContext)"
 , "c3" : "1"
 , "c4" : "4"
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
   "c1" : "AdminApiLookupStrategy<CoordinatorKey>"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiFuture.SimpleAdminApiFuture<CoordinatorKey,Map<TopicPartition,Errors>>"
 , "c2" : "newFuture(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateKeys(Set<CoordinatorKey>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OffsetDeleteRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set<CoordinatorKey>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<CoordinatorKey,Map<TopicPartition,Errors>>"
 , "c2" : "handleResponse(Node;Set<CoordinatorKey>;AbstractResponse)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleGroupError(CoordinatorKey;Errors;Map<CoordinatorKey,Throwable>;Set<CoordinatorKey>)"
 , "c3" : "8"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.apiName@POLYN183613 the MagicNumber/String  'offsetDelete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method newFuture arguments String  groupId"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method validateKeys arguments Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument groupIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.validateKeys@POLYN184126 the MagicNumber/String  'Received unexpected group ids ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.validateKeys@POLYN184126 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.validateKeys@POLYN184126 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method buildBatchedRequest arguments int  coordinatorId|Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method handleResponse arguments Node  coordinator|Set&lt;CoordinatorKey &gt;  groupIds|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method handleGroupError arguments CoordinatorKey  groupId|Errors  error|Map&lt;CoordinatorKey ,Throwable &gt;  failed|Set&lt;CoordinatorKey &gt;  groupsToUnmap"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00122] The argument groupId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument groupsToUnmap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String  '`OffsetDelete` request for group id {} failed due to error {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String  '`OffsetDelete` request for group id {} failed because the coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String  ' is still in the process of loading state. Will retry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String  '`OffsetDelete` request for group id {} returned error {}. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String  'Will attempt to find the coordinator again and retry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String  '`OffsetDelete` request for group id {} failed due to unexpected error {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.buildBatchedRequest@POLYN184583"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String '`OffsetDelete` request for group id {} failed due to error {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String '`OffsetDelete` request for group id {} failed because the coordinator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String ' is still in the process of loading state. Will retry.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String '`OffsetDelete` request for group id {} returned error {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String 'Will attempt to find the coordinator again and retry.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN187439 the MagicNumber/String '`OffsetDelete` request for group id {} failed due to unexpected error {}.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
