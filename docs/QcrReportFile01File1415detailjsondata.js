console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java 69 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "RaftClient.Listener<Integer>"
 , "c2" : "org.apache.kafka.raft.ReplicatedCounter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.ReplicatedCounter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ReplicatedCounter"
 , "c2" : "ReplicatedCounter(int;RaftClient<Integer>;LogContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isWritable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "increment()"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleCommit(BatchReader<Integer>)"
 , "c3" : "7"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSnapshot(SnapshotReader<Integer>)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleLeaderChange(LeaderAndEpoch)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "int"
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
{ "ligne" :  "R0:org.apache.kafka.raft.ReplicatedCounter.this" }
,
{ "ligne" :  "R1:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941.newLeader" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 (R0 in line [00154],R1 in line [00154])" }
,
{ "ligne" : "S0:org.apache.kafka.raft.QuorumState.isLeader@POLYN251053" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 (R0 in line [00154],R1 in line [00154])" }
,
{ "ligne" : "S1:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 (R0 in line [00154],R1 in line [00154])" }
,
{ "ligne" : "S1:org.apache.kafka.raft.QuorumState.isLeader@POLYN251053" }
 ]
 } }
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
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
 , "c4" : "4"
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
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class ReplicatedCounter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#39"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00039] Lock statement on synchronized method isWritable"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#43"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00043] Lock statement on synchronized method increment"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String  'Counter is not currently writable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String  'Scheduled append of record {} with epoch {} at offset {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String  'Appending failed, transition to resigned' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#61"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00061] Lock statement on synchronized method handleCommit"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method handleCommit arguments BatchReader&lt;Integer &gt;  reader"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  'Handle commit of batch with records {} at base offset {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  'Expected next committed value to be %d, but instead found %d on node %d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  'Counter incremented from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String  'Generating new snapshot with committed offset {} and epoch {} since the previoud snapshot includes {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#124"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00124] Lock statement on synchronized method handleSnapshot"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method handleSnapshot arguments SnapshotReader&lt;Integer &gt;  reader"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String  'Loading snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String  'Expected the snapshot at %s to only contain one record %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String  'Setting value: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String  'Finished loading snapshot. Set value: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#154"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00154] Lock statement on synchronized method handleLeaderChange"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method handleLeaderChange arguments LeaderAndEpoch  newLeader"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00154] The argument newLeader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String  'Counter uncommitted value initialized to {} after claiming leadership in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String  'Counter uncommitted value reset after resigning leadership' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.raft.ReplicatedCounter.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941.newLeader"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String 'Counter is not currently writable' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String 'Scheduled append of record {} with epoch {} at offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN181319 the MagicNumber/String 'Appending failed, transition to resigned' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 'Handle commit of batch with records {} at base offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00079] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 'Expected next committed value to be %d, but instead found %d on node %d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 'Counter incremented from {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN182184 the MagicNumber/String 'Generating new snapshot with committed offset {} and epoch {} since the previoud snapshot includes {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String 'Loading snapshot {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String 'Expected the snapshot at %s to only contain one record %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String 'Setting value: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN184650 the MagicNumber/String 'Finished loading snapshot. Set value: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String 'Counter uncommitted value initialized to {} after claiming leadership in epoch {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String 'Counter uncommitted value reset after resigning leadership' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00165] In the recursive method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN185941 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
