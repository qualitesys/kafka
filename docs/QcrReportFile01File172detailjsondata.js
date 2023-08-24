console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java 30 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiHandler.Batched<CoordinatorKey,Map<MemberIdentity,Errors>>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#45"
 , "c1" : "RemoveMembersFromConsumerGroupHandler"
 , "c2" : "RemoveMembersFromConsumerGroupHandler(String;List&lt;MemberIdentity&gt;;LogContext)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#57"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#62"
 , "c1" : "AdminApiLookupStrategy&lt;CoordinatorKey&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#66"
 , "c1" : "AdminApiFuture.SimpleAdminApiFuture&lt;CoordinatorKey,Map&lt;MemberIdentity,Errors&gt;&gt;"
 , "c2" : "newFuture(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#72"
 , "c1" : "void"
 , "c2" : "validateKeys(Set&lt;CoordinatorKey&gt;)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#82"
 , "c1" : "LeaveGroupRequest.Builder"
 , "c2" : "buildBatchedRequest(int;Set&lt;CoordinatorKey&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#88"
 , "c1" : "ApiResult&lt;CoordinatorKey,Map&lt;MemberIdentity,Errors&gt;&gt;"
 , "c2" : "handleResponse(Node;Set&lt;CoordinatorKey&gt;;AbstractResponse)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#117"
 , "c1" : "void"
 , "c2" : "handleGroupError(CoordinatorKey;Errors;Map&lt;CoordinatorKey,Throwable&gt;;Set&lt;CoordinatorKey&gt;)"
 , "c3" : "5"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.svg" }

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
 , "c4" : "10"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.apiName@POLYN171226 the MagicNumber/String  'leaveGroup' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method newFuture arguments String  groupId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method validateKeys arguments Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#73"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00073] The argument groupIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.validateKeys@POLYN171739 the MagicNumber/String  'Received unexpected group ids ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.validateKeys@POLYN171739 the MagicNumber/String  ' (expected only ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.validateKeys@POLYN171739 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method buildBatchedRequest arguments int  coordinatorId|Set&lt;CoordinatorKey &gt;  groupIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method handleResponse arguments Node  coordinator|Set&lt;CoordinatorKey &gt;  groupIds|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00088] For method handleResponse list of called methods Object monObjet|Errors response_topLevelErrorN172896"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method handleGroupError arguments CoordinatorKey  groupId|Errors  error|Map&lt;CoordinatorKey ,Throwable &gt;  failed|Set&lt;CoordinatorKey &gt;  groupsToUnmap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument groupId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#120"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00120] The argument failed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#121"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00121] The argument groupsToUnmap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00142] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String  ' LeaveGroup  request for group id {} failed due to error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String  ' LeaveGroup  request for group id {} failed because the coordinator ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String  'is still in the process of loading state. Will retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String  ' LeaveGroup  request for group id {} returned error {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String  'Will attempt to find the coordinator again and retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String  ' LeaveGroup  request for group id {} failed due to unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String ' LeaveGroup  request for group id {} failed due to error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String ' LeaveGroup  request for group id {} failed because the coordinator ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String 'is still in the process of loading state. Will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00137] In the recursive method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String ' LeaveGroup  request for group id {} returned error {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String 'Will attempt to find the coordinator again and retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.clients.admin.internals.RemoveMembersFromConsumerGroupHandler.handleGroupError@POLYN174212 the MagicNumber/String ' LeaveGroup  request for group id {} failed due to unexpected error {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/RemoveMembersFromConsumerGroupHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
