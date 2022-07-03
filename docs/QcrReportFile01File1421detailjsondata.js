console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/VotedState.java 20 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "EpochState"
 , "c2" : "org.apache.kafka.raft.VotedState"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.VotedState" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "VotedState"
 , "c2" : "VotedState(Time;int;int;Set<Integer>;Optional<LogOffsetMetadata>;int;LogContext)"
 , "c3" : "1"
 , "c4" : "7"
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
 , "c2" : "votedId()"
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
   "c1" : "void"
 , "c2" : "overrideElectionTimeout(long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "canGrantVote(int;boolean)"
 , "c3" : "2"
 , "c4" : "3"
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
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.svg" }

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
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class VotedState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.raft.VotedState.name@POLYN175714 the MagicNumber/String  'Voted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method remainingElectionTimeMs arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method hasElectionTimeoutExpired arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method overrideElectionTimeout arguments long  currentTimeMs|long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method canGrantVote arguments int  candidateId|boolean  isLogUpToDate"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.raft.VotedState.canGrantVote@POLYN176444 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.raft.VotedState.canGrantVote@POLYN176444 the MagicNumber/String  'Rejecting vote request from candidate {} since we already have voted for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.raft.VotedState.canGrantVote@POLYN176444 the MagicNumber/String  'another candidate {} in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.raft.VotedState.canGrantVote@POLYN176444 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.raft.VotedState.toString@POLYN177010 the MagicNumber/String  'Voted(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.raft.VotedState.toString@POLYN177010 the MagicNumber/String  'epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.raft.VotedState.toString@POLYN177010 the MagicNumber/String  ', votedId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.raft.VotedState.toString@POLYN177010 the MagicNumber/String  ', voters=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.raft.VotedState.toString@POLYN177010 the MagicNumber/String  ', electionTimeoutMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.raft.VotedState.toString@POLYN177010 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00107] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/VotedState.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00107] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
