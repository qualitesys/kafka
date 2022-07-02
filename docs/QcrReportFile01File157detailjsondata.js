console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java 40 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AdminApiHandler.Batched<CoordinatorKey,Map<TopicPartition,Errors>>"
 , "c2" : "org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AlterConsumerGroupOffsetsHandler"
 , "c2" : "AlterConsumerGroupOffsetsHandler(String;Map<TopicPartition,OffsetAndMetadata>;LogContext)"
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
   "c1" : "OffsetCommitRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set<CoordinatorKey>)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "ApiResult<CoordinatorKey,Map<TopicPartition,Errors>>"
 , "c2" : "handleResponse(Node;Set<CoordinatorKey>;AbstractResponse)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleError(CoordinatorKey;TopicPartition;Errors;Map<TopicPartition,Errors>;Set<CoordinatorKey>;Set<CoordinatorKey>)"
 , "c3" : "11"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.svg" }

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
 , "c4" : "8"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
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
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.apiName@POLYN187910 the MagicNumber/String  'offsetCommit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method newFuture arguments String  groupId"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method validateKeys arguments Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument groupIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.validateKeys@POLYN188423 the MagicNumber/String  'Received unexpected group ids ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.validateKeys@POLYN188423 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.validateKeys@POLYN188423 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method buildBatchedRequest arguments int  coordinatorId|Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.buildBatchedRequest@POLYN188864 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method handleResponse arguments Node  coordinator|Set&lt;CoordinatorKey &gt;  groupIds|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method handleError arguments CoordinatorKey  groupId|TopicPartition  topicPartition|Errors  error|Map&lt;TopicPartition ,Errors &gt;  partitionResults|Set&lt;CoordinatorKey &gt;  groupsToUnmap|Set&lt;CoordinatorKey &gt;  groupsToRetry"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument groupId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument partitionResults is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#143"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00143] The argument groupsToUnmap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument groupsToRetry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00182] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String  'OffsetCommit request for group id {} returned error {}. Will retry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String  'OffsetCommit request for group id {} returned error {}. Will rediscover the coordinator and retry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String  'OffsetCommit request for group id {} failed due to error {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String  'OffsetCommit request for group id {} and partition {} failed due' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String  ' to error {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String  'OffsetCommit request for group id {} and partition {} failed due' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String  ' to unexpected error {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleResponse@POLYN190304"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.buildBatchedRequest@POLYN188864"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00150] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String 'OffsetCommit request for group id {} returned error {}. Will retry.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String 'OffsetCommit request for group id {} returned error {}. Will rediscover the coordinator and retry.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String 'OffsetCommit request for group id {} failed due to error {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String 'OffsetCommit request for group id {} and partition {} failed due' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String ' to error {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String 'OffsetCommit request for group id {} and partition {} failed due' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.handleError@POLYN192127 the MagicNumber/String ' to unexpected error {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AlterConsumerGroupOffsetsHandler.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.clients.admin.internals.AlterConsumerGroupOffsetsHandler.buildBatchedRequest@POLYN188864 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
