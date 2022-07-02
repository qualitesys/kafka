console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/ResignedState.java 26 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "EpochState"
 , "c2" : "org.apache.kafka.raft.ResignedState"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.ResignedState" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ResignedState"
 , "c2" : "ResignedState(Time;int;int;Set<Integer>;long;List<Integer>;LogContext)"
 , "c3" : "1"
 , "c4" : "9"
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
   "c1" : "Set<Integer>"
 , "c2" : "unackedVoters()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "acknowledgeResignation(int)"
 , "c3" : "2"
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
   "c1" : "long"
 , "c2" : "remainingElectionTimeMs(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "List<Integer>"
 , "c2" : "preferredSuccessors()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c2" : "name()"
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
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
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
 , "c4" : "13"
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
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class ResignedState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method acknowledgeResignation arguments int  voterId"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.raft.ResignedState.acknowledgeResignation@POLYN181344 the MagicNumber/String  'Attempt to acknowledge delivery of `EndQuorumEpoch` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.raft.ResignedState.acknowledgeResignation@POLYN181344 the MagicNumber/String  'by a non-voter ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method hasElectionTimeoutExpired arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method remainingElectionTimeMs arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method canGrantVote arguments int  candidateId|boolean  isLogUpToDate"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.raft.ResignedState.canGrantVote@POLYN182465 the MagicNumber/String  'Rejecting vote request from candidate {} since we have resigned as candidate/leader in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.raft.ResignedState.canGrantVote@POLYN182465 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.raft.ResignedState.name@POLYN182731 the MagicNumber/String  'Resigned' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  'ResignedState(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  'localId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  ', epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  ', voters=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  ', electionTimeoutMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  ', unackedVoters=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  ', preferredSuccessors=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.raft.ResignedState.toString@POLYN182833 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00109] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00109] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ResignedState.ResignedState@POLYN179660"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.ResignedState.acknowledgeResignation@POLYN181344"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.raft.ResignedState.acknowledgeResignation@POLYN181344 the MagicNumber/String 'Attempt to acknowledge delivery of `EndQuorumEpoch` ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ResignedState.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.raft.ResignedState.acknowledgeResignation@POLYN181344 the MagicNumber/String 'by a non-voter ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
