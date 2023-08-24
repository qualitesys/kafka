console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java 49 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiHandler.Batched<CoordinatorKey,ConsumerGroupDescription>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#60"
 , "c1" : "DescribeConsumerGroupsHandler"
 , "c2" : "DescribeConsumerGroupsHandler(boolean;LogContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#69"
 , "c1" : "Set&lt;CoordinatorKey&gt;"
 , "c2" : "buildKeySet(Collection&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#75"
 , "c1" : "AdminApiFuture.SimpleAdminApiFuture&lt;CoordinatorKey,ConsumerGroupDescription&gt;"
 , "c2" : "newFuture(Collection&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#82"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#87"
 , "c1" : "AdminApiLookupStrategy&lt;CoordinatorKey&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#92"
 , "c1" : "DescribeGroupsRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set&lt;CoordinatorKey&gt;)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#107"
 , "c1" : "ApiResult&lt;CoordinatorKey,ConsumerGroupDescription&gt;"
 , "c2" : "handleResponse(Node;Set&lt;CoordinatorKey&gt;;AbstractResponse)"
 , "c3" : "7"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00161"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#161"
 , "c1" : "void"
 , "c2" : "handleError(CoordinatorKey;Errors;Map&lt;CoordinatorKey,Throwable&gt;;Set&lt;CoordinatorKey&gt;)"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00194"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#194"
 , "c1" : "Set&lt;AclOperation&gt;"
 , "c2" : "validAclOperations(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
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
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method buildKeySet arguments Collection&lt;String &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument groupIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method newFuture arguments Collection&lt;String &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.apiName@POLYN184786 the MagicNumber/String  'describeGroups' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method buildBatchedRequest arguments int  coordinatorId|Set&lt;CoordinatorKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.buildBatchedRequest@POLYN185017 the MagicNumber/String  'Invalid transaction coordinator key ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.buildBatchedRequest@POLYN185017 the MagicNumber/String  ' when building  DescribeGroups  request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method handleResponse arguments Node  coordinator|Set&lt;CoordinatorKey &gt;  groupIds|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00107] For method handleResponse list of called methods Object monObjet|org.apache.kafka.clients.admin.internals.CoordinatorKey CoordinatorKey_byGroupIdN186626|java.util.Set&lt;AclOperation&gt; validAclOperationsN187583|org.apache.kafka.clients.consumer.ConsumerPartitionAssignor.Assignment ConsumerProtocol_deserializeAssignmentN187973"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00126] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleResponse@POLYN185893 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleResponse@POLYN185893 the MagicNumber/String  'GroupId %s is not a consumer group (%s).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method handleError arguments CoordinatorKey  groupId|Errors  error|Map&lt;CoordinatorKey ,Throwable &gt;  failed|Set&lt;CoordinatorKey &gt;  groupsToUnmap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#162"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00162] The argument groupId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00163] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#164"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00164] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument groupsToUnmap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00188] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String  ' DescribeGroups  request for group id {} failed due to error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String  ' DescribeGroups  request for group id {} failed because the coordinator ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String  'is still in the process of loading state. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String  ' DescribeGroups  request for group id {} returned error {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String  'Will attempt to find the coordinator again and retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String  ' DescribeGroups  request for group id {} failed due to unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method validAclOperations arguments int  authorizedOperations"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.validAclOperations@POLYN190724 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.buildBatchedRequest@POLYN185017"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.buildBatchedRequest@POLYN185017 the MagicNumber/String 'Invalid transaction coordinator key ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00096] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.buildBatchedRequest@POLYN185017 the MagicNumber/String ' when building  DescribeGroups  request' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00169] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String ' DescribeGroups  request for group id {} failed due to error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String ' DescribeGroups  request for group id {} failed because the coordinator ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String 'is still in the process of loading state. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String ' DescribeGroups  request for group id {} returned error {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String 'Will attempt to find the coordinator again and retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method org.apache.kafka.clients.admin.internals.DescribeConsumerGroupsHandler.handleError@POLYN189432 the MagicNumber/String ' DescribeGroups  request for group id {} failed due to unexpected error {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DescribeConsumerGroupsHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
