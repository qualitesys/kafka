console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java 33 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "QuorumStateStore"
 , "c2" : "org.apache.kafka.raft.FileBasedStateStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.FileBasedStateStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FileBasedStateStore"
 , "c2" : "FileBasedStateStore(File)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "QuorumStateData"
 , "c2" : "readStateFromFile(File)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "ElectionState"
 , "c2" : "readElectionState()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeElectionState(ElectionState)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "List<Voter>"
 , "c2" : "voters(Set<Integer>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeElectionStateToFile(File;QuorumStateData)"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clear()"
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
 , "c2" : "deleteFileIfExists(File)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
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
 , "c4" : "16"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00031] The class FileBasedStateStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method readStateFromFile arguments File  file"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  'File ended prematurely.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  'Deserialized node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  ' is not an object node' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  'Deserialized node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  ' does not have ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  ' field' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN169032 the MagicNumber/String  'Error while reading the Quorum status from the file %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method readElectionState list of called methods Object monObjet|QuorumStateData readStateFromFileN170908"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.raft.FileBasedStateStore.readElectionState@POLYN170717 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method writeElectionState arguments ElectionState  latest"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument latest is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method voters arguments Set&lt;Integer &gt;  votersId"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument votersId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method writeElectionStateToFile arguments File  stateFile|QuorumStateData  state"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument stateFile is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN172572 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN172572 the MagicNumber/String  'Writing tmp quorum state {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN172572 the MagicNumber/String  'Error while writing the Quorum status from the file %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.raft.FileBasedStateStore.clear@POLYN174315 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.raft.FileBasedStateStore.toString@POLYN174586 the MagicNumber/String  'Quorum state filepath: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method deleteFileIfExists arguments File  file"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.raft.FileBasedStateStore.deleteFileIfExists@POLYN174708 the MagicNumber/String  'Error while deleting file %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN172572"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN172572 the MagicNumber/String '.tmp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN172572 the MagicNumber/String 'Writing tmp quorum state {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN172572 the MagicNumber/String 'Error while writing the Quorum status from the file %s' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
