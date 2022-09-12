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
{ "ligne" : { "" : ""
 , "c1" : "AdminApiHandler.Batched<CoordinatorKey,Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#32"
 , "c1" : "ListConsumerGroupOffsetsHandler"
 , "c2" : "ListConsumerGroupOffsetsHandler(String;List<TopicPartition>;LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#40"
 , "c1" : "ListConsumerGroupOffsetsHandler"
 , "c2" : "ListConsumerGroupOffsetsHandler(String;List<TopicPartition>;boolean;LogContext)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#53"
 , "c1" : "AdminApiFuture.SimpleAdminApiFuture<CoordinatorKey,Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "newFuture(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#60"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#65"
 , "c1" : "AdminApiLookupStrategy<CoordinatorKey>"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#69"
 , "c1" : "void"
 , "c2" : "validateKeys(Set<CoordinatorKey>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#77"
 , "c1" : "OffsetFetchRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set<CoordinatorKey>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#83"
 , "c1" : "ApiResult<CoordinatorKey,Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "handleResponse(Node;Set<CoordinatorKey>;AbstractResponse)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#125"
 , "c1" : "void"
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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
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
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.ListConsumerGroupOffsetsHandler@POLYN163216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method newFuture arguments String  groupId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.apiName@POLYN164441 the MagicNumber/String  'offsetFetch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method validateKeys arguments Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument groupIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.validateKeys@POLYN164642 the MagicNumber/String  'Received unexpected group ids ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.validateKeys@POLYN164642 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.validateKeys@POLYN164642 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method buildBatchedRequest arguments int  coordinatorId|Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.buildBatchedRequest@POLYN165099 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method handleResponse arguments Node  coordinator|Set&lt;CoordinatorKey &gt;  groupIds|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00083] For method handleResponse list of called methods Object monObjet|Errors response_groupLevelErrorN165836"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleResponse@POLYN165526 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleResponse@POLYN165526 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleResponse@POLYN165526 the MagicNumber/String  'Skipping return offset for {} due to error {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method handleGroupError arguments CoordinatorKey  groupId|Errors  error|Map&lt;CoordinatorKey ,Throwable &gt;  failed|Set&lt;CoordinatorKey &gt;  groupsToUnmap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument groupId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#128"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00128] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument groupsToUnmap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00151] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String  '`OffsetFetch` request for group id {} failed due to error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String  '`OffsetFetch` request for group id {} failed because the coordinator ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String  'is still in the process of loading state. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String  '`OffsetFetch` request for group id {} returned error {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String  'Will attempt to find the coordinator again and retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String  '`OffsetFetch` request for group id {} failed due to unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String '`OffsetFetch` request for group id {} failed due to error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String '`OffsetFetch` request for group id {} failed because the coordinator ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String 'is still in the process of loading state. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String '`OffsetFetch` request for group id {} returned error {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String 'Will attempt to find the coordinator again and retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/ListConsumerGroupOffsetsHandler.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.clients.admin.internals.ListConsumerGroupOffsetsHandler.handleGroupError@POLYN167814 the MagicNumber/String '`OffsetFetch` request for group id {} failed due to unexpected error {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
