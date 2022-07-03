console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java 35 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminApiHandler.Batched<CoordinatorKey,Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ListConsumerGroupOffsetsHandler"
 , "c2" : "ListConsumerGroupOffsetsHandler(String;List<TopicPartition>;LogContext)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "AdminApiFuture.SimpleAdminApiFuture<CoordinatorKey,Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "newFuture(String)"
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
   "c1" : "AdminApiLookupStrategy<CoordinatorKey>"
 , "c2" : "lookupStrategy()"
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
   "c1" : "OffsetFetchRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set<CoordinatorKey>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<CoordinatorKey,Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "handleResponse(Node;Set<CoordinatorKey>;AbstractResponse)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleGroupError(CoordinatorKey;Errors;Map<CoordinatorKey,Throwable>;Set<CoordinatorKey>)"
 , "c3" : "5"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.svg" }

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
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
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
 , "c4" : "15"
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
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method newFuture arguments String  groupId"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.apiName@POLYN184077 the MagicNumber/String  'offsetFetch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method validateKeys arguments Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument groupIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.validateKeys@POLYN184278 the MagicNumber/String  'Received unexpected group ids ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.validateKeys@POLYN184278 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.validateKeys@POLYN184278 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method buildBatchedRequest arguments int  coordinatorId|Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.buildBatchedRequest@POLYN184735 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.buildBatchedRequest@POLYN184735 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method handleResponse arguments Node  coordinator|Set&lt;CoordinatorKey &gt;  groupIds|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method handleResponse list of called methods Object monObjet|Errors response_groupLevelErrorN185474"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleResponse@POLYN185164 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleResponse@POLYN185164 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleResponse@POLYN185164 the MagicNumber/String  'Skipping return offset for {} due to error {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method handleGroupError arguments CoordinatorKey  groupId|Errors  error|Map&lt;CoordinatorKey ,Throwable &gt;  failed|Set&lt;CoordinatorKey &gt;  groupsToUnmap"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument groupId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#120"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00120] The argument groupsToUnmap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00142] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String  '`OffsetFetch` request for group id {} failed due to error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String  '`OffsetFetch` request for group id {} failed because the coordinator ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String  'is still in the process of loading state. Will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String  '`OffsetFetch` request for group id {} returned error {}. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String  'Will attempt to find the coordinator again and retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String  '`OffsetFetch` request for group id {} failed due to unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String '`OffsetFetch` request for group id {} failed due to error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String '`OffsetFetch` request for group id {} failed because the coordinator ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String 'is still in the process of loading state. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00137] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String '`OffsetFetch` request for group id {} returned error {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String 'Will attempt to find the coordinator again and retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN187452 the MagicNumber/String '`OffsetFetch` request for group id {} failed due to unexpected error {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
