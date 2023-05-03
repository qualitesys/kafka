console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RaftMessageQueue"
 , "c2" : "org.apache.kafka.raft.internals.BlockingMessageQueue"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.BlockingMessageQueue" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#46"
 , "c1" : "RaftMessage"
 , "c2" : "poll(long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#61"
 , "c1" : "void"
 , "c2" : "add(RaftMessage)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#67"
 , "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#72"
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method poll arguments long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.raft.internals.BlockingMessageQueue.poll@POLYN149113 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.raft.internals.BlockingMessageQueue.poll@POLYN149113 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method add arguments RaftMessage  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.raft.internals.BlockingMessageQueue.isEmpty@POLYN149924 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.internals.BlockingMessageQueue.add@POLYN149716"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
