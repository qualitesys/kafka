console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java 66 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RaftClient.Listener<Integer>"
 , "c2" : "org.apache.kafka.raft.ReplicatedCounter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.ReplicatedCounter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#44"
 , "c1" : "ReplicatedCounter"
 , "c2" : "ReplicatedCounter(int;RaftClient<Integer>;LogContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#54"
 , "c1" : "boolean"
 , "c2" : "isWritable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#58"
 , "c1" : "void"
 , "c2" : "increment()"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#76"
 , "c1" : "void"
 , "c2" : "handleCommit(BatchReader<Integer>)"
 , "c3" : "7"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#139"
 , "c1" : "void"
 , "c2" : "handleSnapshot(SnapshotReader<Integer>)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00169"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#169"
 , "c1" : "void"
 , "c2" : "handleLeaderChange(LeaderAndEpoch)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00184"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#184"
 , "c1" : "int"
 , "c2" : "handleSnapshotCalls()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527.newLeader" }
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
 , "c4" : "23"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "23"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#54"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00054] Lock statement on synchronized method isWritable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#58"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00058] Lock statement on synchronized method increment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String  'Counter is not currently writable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String  'Scheduled append of record {} with epoch {} at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String  'Appending failed, transition to resigned' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#76"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00076] Lock statement on synchronized method handleCommit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method handleCommit arguments BatchReader&lt;Integer &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00090] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  'Handle commit of batch with records {} at base offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  'Expected next committed value to be %d, but instead found %d on node %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  'Counter incremented from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String  'Generating new snapshot with committed offset {} and epoch {} since the previoud snapshot includes {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#139"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00139] Lock statement on synchronized method handleSnapshot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method handleSnapshot arguments SnapshotReader&lt;Integer &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String  'Loading snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String  'Expected the snapshot at %s to only contain one record %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String  'Setting value: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String  'Finished loading snapshot. Set value: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#169"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00169] Lock statement on synchronized method handleLeaderChange"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method handleLeaderChange arguments LeaderAndEpoch  newLeader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#169"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00169] The argument newLeader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String  'Counter uncommitted value initialized to {} after claiming leadership in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String  'Counter uncommitted value reset after resigning leadership' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00079] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 'Handle commit of batch with records {} at base offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 'Expected next committed value to be %d, but instead found %d on node %d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 'Counter incremented from {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 the MagicNumber/String 'Generating new snapshot with committed offset {} and epoch {} since the previoud snapshot includes {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String 'Loading snapshot {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00144] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String 'Expected the snapshot at %s to only contain one record %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String 'Setting value: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 the MagicNumber/String 'Finished loading snapshot. Set value: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00171] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String 'Counter uncommitted value initialized to {} after claiming leadership in epoch {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String 'Counter uncommitted value reset after resigning leadership' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00180] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String 'Counter is not currently writable' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String 'Scheduled append of record {} with epoch {} at offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN161905 the MagicNumber/String 'Appending failed, transition to resigned' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
