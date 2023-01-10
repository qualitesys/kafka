console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java 10 rule violations " 
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
 , "c5" : "00027"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#27"
 , "c1" : "LeaderAndEpoch"
 , "c2" : "LeaderAndEpoch(OptionalInt;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#32"
 , "c1" : "OptionalInt"
 , "c2" : "leaderId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#36"
 , "c1" : "int"
 , "c2" : "epoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#40"
 , "c1" : "boolean"
 , "c2" : "isLeader(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#45"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#54"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#59"
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
 , "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method isLeader arguments int  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00047] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.raft.LeaderAndEpoch.equals@POLYN147572 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.raft.LeaderAndEpoch.equals@POLYN147572 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.raft.LeaderAndEpoch.equals@POLYN147572 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN148286 the MagicNumber/String  'LeaderAndEpoch(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN148286 the MagicNumber/String  'leaderId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN148286 the MagicNumber/String  ', epoch=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.raft.LeaderAndEpoch.toString@POLYN148286 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderAndEpoch.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
