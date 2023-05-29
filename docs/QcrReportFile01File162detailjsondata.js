console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java 21 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#48"
 , "c1" : "DeleteConsumerGroupOffsetsHandler"
 , "c2" : "DeleteConsumerGroupOffsetsHandler(String;Set&lt;TopicPartition&gt;;LogContext)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#60"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#65"
 , "c1" : "AdminApiLookupStrategy&lt;CoordinatorKey&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#69"
 , "c1" : "AdminApiFuture.SimpleAdminApiFuture&lt;CoordinatorKey,Map&lt;TopicPartition,Errors&gt;&gt;"
 , "c2" : "newFuture(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#75"
 , "c1" : "void"
 , "c2" : "validateKeys(Set&lt;CoordinatorKey&gt;)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#83"
 , "c1" : "OffsetDeleteRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set&lt;CoordinatorKey&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#104"
 , "c1" : "ApiResult&lt;CoordinatorKey,Map&lt;TopicPartition,Errors&gt;&gt;"
 , "c2" : "handleResponse(Node;Set&lt;CoordinatorKey&gt;;AbstractResponse)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#136"
 , "c1" : "void"
 , "c2" : "handleGroupError(CoordinatorKey;Errors;Map&lt;CoordinatorKey,Throwable&gt;;Set&lt;CoordinatorKey&gt;)"
 , "c3" : "8"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.apiName@POLYN174905 the MagicNumber/String  'offsetDelete' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method newFuture arguments String  groupId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method validateKeys arguments Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument groupIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.validateKeys@POLYN175418 the MagicNumber/String  'Received unexpected group ids ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.validateKeys@POLYN175418 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.validateKeys@POLYN175418 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method buildBatchedRequest arguments int  coordinatorId|Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method handleResponse arguments Node  coordinator|Set&lt;CoordinatorKey &gt;  groupIds|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method handleGroupError arguments CoordinatorKey  groupId|Errors  error|Map&lt;CoordinatorKey ,Throwable &gt;  failed|Set&lt;CoordinatorKey &gt;  groupsToUnmap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument groupId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#138"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00138] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument groupsToUnmap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN178745 the MagicNumber/String  ' OffsetDelete  request for group id {} failed due to error {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN178745 the MagicNumber/String  ' OffsetDelete  request for group id {} failed because the coordinator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN178745 the MagicNumber/String  ' is still in the process of loading state. Will retry.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN178745 the MagicNumber/String  ' OffsetDelete  request for group id {} returned error {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN178745 the MagicNumber/String  'Will attempt to find the coordinator again and retry.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.admin.internals.DeleteConsumerGroupOffsetsHandler.handleGroupError@POLYN178745 the MagicNumber/String  ' OffsetDelete  request for group id {} failed due to unexpected error {}.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/DeleteConsumerGroupOffsetsHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
