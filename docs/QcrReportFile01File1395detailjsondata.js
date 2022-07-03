console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/FollowerState.java 30 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "EpochState"
 , "c2" : "org.apache.kafka.raft.FollowerState"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.FollowerState" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FollowerState"
 , "c2" : "FollowerState(Time;int;int;Set<Integer>;Optional<LogOffsetMetadata>;int;LogContext)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ElectionState"
 , "c2" : "election()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "epoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "remainingFetchTimeMs(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "leaderId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasFetchTimeoutExpired(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetFetchTimeout(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "overrideFetchTimeout(long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "updateHighWatermark(OptionalLong)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Optional<LogOffsetMetadata>"
 , "c2" : "highWatermark()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<RawSnapshotWriter>"
 , "c2" : "fetchingSnapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setFetchingSnapshot(Optional<RawSnapshotWriter>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "canGrantVote(int;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class FollowerState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.raft.FollowerState.name@POLYN180936 the MagicNumber/String  'Follower' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method remainingFetchTimeMs arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method hasFetchTimeoutExpired arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method resetFetchTimeout arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method overrideFetchTimeout arguments long  currentTimeMs|long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method updateHighWatermark arguments OptionalLong  highWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument highWatermark is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.raft.FollowerState.updateHighWatermark@POLYN181943 the MagicNumber/String  'Attempt to overwrite current high watermark ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.raft.FollowerState.updateHighWatermark@POLYN181943 the MagicNumber/String  ' with unknown value' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.raft.FollowerState.updateHighWatermark@POLYN181943 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.raft.FollowerState.updateHighWatermark@POLYN181943 the MagicNumber/String  'Illegal negative high watermark update' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.raft.FollowerState.updateHighWatermark@POLYN181943 the MagicNumber/String  'Non-monotonic update of high watermark attempted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.raft.FollowerState.updateHighWatermark@POLYN181943 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.raft.FollowerState.updateHighWatermark@POLYN181943 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method setFetchingSnapshot arguments Optional&lt;RawSnapshotWriter &gt;  newSnapshot"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method canGrantVote arguments int  candidateId|boolean  isLogUpToDate"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.raft.FollowerState.canGrantVote@POLYN183671 the MagicNumber/String  'Rejecting vote request from candidate {} since we already have a leader {} in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.raft.FollowerState.canGrantVote@POLYN183671 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  'FollowerState(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  'fetchTimeoutMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  ', epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  ', leaderId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  ', voters=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  ', highWatermark=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  ', fetchingSnapshot=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.raft.FollowerState.toString@POLYN183971 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FollowerState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.FollowerState.close@POLYN184365"
}} 
]
};
console.log('leListeStr 99 main end');
