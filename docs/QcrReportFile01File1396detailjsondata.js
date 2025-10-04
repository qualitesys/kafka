console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java 27 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "QuorumStateStore"
 , "c2" : "org.apache.kafka.raft.FileBasedStateStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.FileBasedStateStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#67"
 , "c1" : "FileBasedStateStore"
 , "c2" : "FileBasedStateStore(File)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#71"
 , "c1" : "QuorumStateData"
 , "c2" : "readStateFromFile(File)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#105"
 , "c1" : "ElectionState"
 , "c2" : "readElectionState()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#122"
 , "c1" : "void"
 , "c2" : "writeElectionState(ElectionState)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#131"
 , "c1" : "List&lt;Voter&gt;"
 , "c2" : "voters(Set&lt;Integer&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#136"
 , "c1" : "void"
 , "c2" : "writeElectionStateToFile(File;QuorumStateData)"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#167"
 , "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00173"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#173"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#177"
 , "c1" : "void"
 , "c2" : "deleteFileIfExists(File)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method readStateFromFile arguments File  file"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  'File ended prematurely.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  'Deserialized node ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  ' is not an object node' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  'Deserialized node ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  ' does not have ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  ' field' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.raft.FileBasedStateStore.readStateFromFile@POLYN180942 the MagicNumber/String  'Error while reading the Quorum status from the file %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.raft.FileBasedStateStore.readElectionState@POLYN182639 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method writeElectionState arguments ElectionState  latest"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00122] The argument latest is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method voters arguments Set&lt;Integer &gt;  votersId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#131"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00131] The argument votersId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method writeElectionStateToFile arguments File  stateFile|QuorumStateData  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument stateFile is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN184500 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN184500 the MagicNumber/String  'Writing tmp quorum state {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.raft.FileBasedStateStore.writeElectionStateToFile@POLYN184500 the MagicNumber/String  'Error while writing the Quorum status from the file %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.raft.FileBasedStateStore.clear@POLYN186249 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.raft.FileBasedStateStore.toString@POLYN186520 the MagicNumber/String  'Quorum state filepath: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method deleteFileIfExists arguments File  file"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.raft.FileBasedStateStore.deleteFileIfExists@POLYN186642 the MagicNumber/String  'Error while deleting file %s' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/FileBasedStateStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
