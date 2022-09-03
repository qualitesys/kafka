console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java 11 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.raft.LeaderAndEpoch"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.LeaderAndEpoch" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "LeaderAndEpoch"
 , "c2" : "LeaderAndEpoch(OptionalInt;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "OptionalInt"
 , "c2" : "leaderId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "epoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isLeader(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class LeaderAndEpoch contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method isLeader arguments int  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00032] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.raft.LeaderAndEpoch.equals@POLYN146202 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.raft.LeaderAndEpoch.equals@POLYN146202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.raft.LeaderAndEpoch.equals@POLYN146202 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN146916 the MagicNumber/String  'LeaderAndEpoch(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN146916 the MagicNumber/String  'leaderId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN146916 the MagicNumber/String  ', epoch=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN146916 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
