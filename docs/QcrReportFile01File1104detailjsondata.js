console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java 55 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConnectAssignor"
 , "c2" : "org.apache.kafka.connect.runtime.distributed.EagerAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.distributed.EagerAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "EagerAssignor"
 , "c2" : "EagerAssignor(LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,ByteBuffer>"
 , "c2" : "performAssignment(String;String;List<JoinGroupResponseMember>;WorkerCoordinator)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "ensureLeaderConfig(long;WorkerCoordinator)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,ByteBuffer>"
 , "c2" : "performTaskAssignment(String;long;Map<String,ExtendedWorkerState>;WorkerCoordinator)"
 , "c3" : "4"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,ByteBuffer>"
 , "c2" : "fillAssignmentsAndSerialize(Collection<String>;short;String;String;long;Map<String,Collection<String>>;Map<String,Collection<ConnectorTaskId>>)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "findMaxMemberConfigOffset(Map<String,ExtendedWorkerState>;WorkerCoordinator)"
 , "c3" : "4"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.svg" }

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
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class EagerAssignor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method performAssignment arguments String  leaderId|String  protocol|List&lt;JoinGroupResponseMember &gt;  allMemberMetadata|WorkerCoordinator  coordinator"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00032] For method performAssignment list of called methods Object monObjet|long findMaxMemberConfigOffsetN169808|Long ensureLeaderConfigN169916"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performAssignment@POLYN169151 the MagicNumber/String  'Performing task assignment' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performAssignment@POLYN169151 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method ensureLeaderConfig arguments long  maxOffset|WorkerCoordinator  coordinator"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00049] For method ensureLeaderConfig list of called methods Object monObjet|org.apache.kafka.connect.storage.ClusterConfigState coordinator_configFreshSnapshotN170764"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument coordinator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.ensureLeaderConfig@POLYN170531 the MagicNumber/String  'Was selected to perform assignments, but do not have latest config found in sync request. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.ensureLeaderConfig@POLYN170531 the MagicNumber/String  'Returning an empty configuration to trigger re-sync.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.ensureLeaderConfig@POLYN170531 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method performTaskAssignment arguments String  leaderId|long  maxOffset|Map&lt;String ,ExtendedWorkerState &gt;  memberConfigs|WorkerCoordinator  coordinator"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument memberConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument coordinator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00082] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00088] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performTaskAssignment@POLYN171259 the MagicNumber/String  'Assigning connector {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performTaskAssignment@POLYN171259 the MagicNumber/String  'Assigning task {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method fillAssignmentsAndSerialize arguments Collection&lt;String &gt;  members|short  error|String  leaderId|String  leaderUrl|long  maxOffset|Map&lt;String ,Collection&lt;String &gt; &gt;  connectorAssignments|Map&lt;String ,Collection&lt;ConnectorTaskId &gt; &gt;  taskAssignments"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument connectorAssignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument taskAssignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String  'Assignment: {} -&amp;gt; {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String  'Finished assignment' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method findMaxMemberConfigOffset arguments Map&lt;String ,ExtendedWorkerState &gt;  memberConfigs|WorkerCoordinator  coordinator"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#128"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00128] The argument memberConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument coordinator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.findMaxMemberConfigOffset@POLYN175404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.findMaxMemberConfigOffset@POLYN175404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.runtime.distributed.EagerAssignor.findMaxMemberConfigOffset@POLYN175404 the MagicNumber/String  'Max config offset root: {}, local snapshot config offsets root: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.EagerAssignor.performAssignment@POLYN169151"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.EagerAssignor.findMaxMemberConfigOffset@POLYN175404"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.EagerAssignor.performTaskAssignment@POLYN171259"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00035] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performAssignment@POLYN169151 the MagicNumber/String 'Performing task assignment' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performAssignment@POLYN169151 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.findMaxMemberConfigOffset@POLYN175404 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00136] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.findMaxMemberConfigOffset@POLYN175404 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00142] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.findMaxMemberConfigOffset@POLYN175404 the MagicNumber/String 'Max config offset root: {}, local snapshot config offsets root: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performTaskAssignment@POLYN171259 the MagicNumber/String 'Assigning connector {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.performTaskAssignment@POLYN171259 the MagicNumber/String 'Assigning task {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String 'Assignment: {} -&amp;gt; {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/EagerAssignor.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.connect.runtime.distributed.EagerAssignor.fillAssignmentsAndSerialize@POLYN173756 the MagicNumber/String 'Finished assignment' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
