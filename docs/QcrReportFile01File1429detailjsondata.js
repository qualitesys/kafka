console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java 10 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.xml" 
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
 , "c5" : "00031"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#31"
 , "c1" : "RaftMessage"
 , "c2" : "poll(long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#46"
 , "c1" : "void"
 , "c2" : "add(RaftMessage)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#52"
 , "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#57"
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
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
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
 , "c1" : "00014"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class BlockingMessageQueue contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method poll arguments long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.raft.internals.BlockingMessageQueue.poll@POLYN147743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.raft.internals.BlockingMessageQueue.poll@POLYN147743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method add arguments RaftMessage  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.raft.internals.BlockingMessageQueue.isEmpty@POLYN148554 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.internals.BlockingMessageQueue.add@POLYN148346"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.raft.internals.BlockingMessageQueue.poll@POLYN147743"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.raft.internals.BlockingMessageQueue.poll@POLYN147743 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00035] In the recursive method org.apache.kafka.raft.internals.BlockingMessageQueue.poll@POLYN147743 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BlockingMessageQueue.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');
