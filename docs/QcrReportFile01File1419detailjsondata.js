console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/UnattachedState.java 17 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "EpochState"
 , "c2" : "org.apache.kafka.raft.UnattachedState"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.UnattachedState" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "UnattachedState"
 , "c2" : "UnattachedState(Time;int;Set<Integer>;Optional<LogOffsetMetadata>;long;LogContext)"
 , "c3" : "1"
 , "c4" : "6"
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
 , "c2" : "electionTimeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "remainingElectionTimeMs(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasElectionTimeoutExpired(long)"
 , "c3" : "1"
 , "c4" : "2"
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
   "c1" : "boolean"
 , "c2" : "canGrantVote(int;boolean)"
 , "c3" : "2"
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
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class UnattachedState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.raft.UnattachedState.name@POLYN171611 the MagicNumber/String  'Unattached' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method remainingElectionTimeMs arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method hasElectionTimeoutExpired arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method canGrantVote arguments int  candidateId|boolean  isLogUpToDate"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.raft.UnattachedState.canGrantVote@POLYN172318 the MagicNumber/String  'Rejecting vote request from candidate {} since candidate epoch/offset is not up to date with us' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.raft.UnattachedState.toString@POLYN172621 the MagicNumber/String  'Unattached(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.raft.UnattachedState.toString@POLYN172621 the MagicNumber/String  'epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.raft.UnattachedState.toString@POLYN172621 the MagicNumber/String  ', voters=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.raft.UnattachedState.toString@POLYN172621 the MagicNumber/String  ', electionTimeoutMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.raft.UnattachedState.toString@POLYN172621 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00096] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00096] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.UnattachedState.UnattachedState@POLYN170543"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/UnattachedState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.UnattachedState.election@POLYN171267"
}} 
]
};
console.log('leListeStr 99 main end');
