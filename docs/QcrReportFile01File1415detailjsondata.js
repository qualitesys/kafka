console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java 40 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN174023 the MagicNumber/String  'Counter is not currently writable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN174023 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN174023 the MagicNumber/String  'Scheduled append of record {} with epoch {} at offset {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.raft.ReplicatedCounter.increment@POLYN174023 the MagicNumber/String  'Appending failed, transition to resigned' should be converted to const"
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
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  'Handle commit of batch with records {} at base offset {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  'Expected next committed value to be %d, but instead found %d on node %d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  'Counter incremented from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174888 the MagicNumber/String  'Generating new snapshot with committed offset {} and epoch {} since the previoud snapshot includes {}' should be converted to const"
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
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN177354 the MagicNumber/String  'Loading snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN177354 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN177354 the MagicNumber/String  'Expected the snapshot at %s to only contain one record %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN177354 the MagicNumber/String  'Setting value: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN177354 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN177354 the MagicNumber/String  'Finished loading snapshot. Set value: {}' should be converted to const"
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
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178645 the MagicNumber/String  'Counter uncommitted value initialized to {} after claiming leadership in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178645 the MagicNumber/String  'Counter uncommitted value reset after resigning leadership' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178645 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ReplicatedCounter.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178645 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
