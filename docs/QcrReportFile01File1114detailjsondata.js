console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java 46 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.distributed.WorkerGroupMember"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.distributed.WorkerGroupMember" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WorkerGroupMember"
 , "c2" : "WorkerGroupMember(DistributedConfig;String;ConfigBackingStore;WorkerRebalanceListener;Time;String;LogContext)"
 , "c3" : "1"
 , "c4" : "29"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "ensureActive()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "poll(long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "memberId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestRejoin()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeLeaveGroup(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "ownerUrl(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "ownerUrl(ConnectorTaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "currentProtocolVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "revokeAssignment(ExtendedAssignment)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop(boolean)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Metrics"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "9"
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
 , "c4" : "6"
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
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00041] The class WorkerGroupMember contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String  'client-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String  'connect' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String  'Connect group member created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String  'Failed to construct kafka consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN186518 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.ensureActive@POLYN186764 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method poll arguments long  timeout"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.poll@POLYN186878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.poll@POLYN186878 the MagicNumber/String  'Timeout must not be negative' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.requestRejoin@POLYN187563 the MagicNumber/String  'connect worker requested rejoin' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method maybeLeaveGroup arguments String  leaveReason"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method ownerUrl arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method ownerUrl arguments ConnectorTaskId  task"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method revokeAssignment arguments ExtendedAssignment  assignment"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method stop arguments boolean  swallowException"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  'Stopping the Connect group member.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  'coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  'consumer metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  'consumer network client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  'Failed to stop the Connect group member' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188449 the MagicNumber/String  'The Connect group member has stopped.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00143] Public method stop is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.poll@POLYN186878"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.currentProtocolVersion@POLYN188217"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.maybeLeaveGroup@POLYN187677"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.memberId@POLYN187465"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.revokeAssignment@POLYN188315"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String 'client-id' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String 'connect' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String 100 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String 'Connect group member created' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00137] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181133 the MagicNumber/String 'Failed to construct kafka consumer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.poll@POLYN186878 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/WorkerGroupMember.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.poll@POLYN186878 the MagicNumber/String 'Timeout must not be negative' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
