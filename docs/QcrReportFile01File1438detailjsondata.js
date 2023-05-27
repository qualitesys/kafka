console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "FuturePurgatory<T>"
 , "c2" : "org.apache.kafka.raft.internals.ThresholdPurgatory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.ThresholdPurgatory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#33"
 , "c1" : "ThresholdPurgatory"
 , "c2" : "ThresholdPurgatory(ExpirationService)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#38"
 , "c1" : "CompletableFuture&lt;Long&gt;"
 , "c2" : "await(T;long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#47"
 , "c1" : "void"
 , "c2" : "maybeComplete(T;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#56"
 , "c1" : "void"
 , "c2" : "completeAll(long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#63"
 , "c1" : "void"
 , "c2" : "completeAllExceptionally(Throwable)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#70"
 , "c1" : "int"
 , "c2" : "numWaiting()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
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
 , "c1" : "00038"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method await arguments T  threshold|long  maxWaitTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method maybeComplete arguments T  value|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method completeAll arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method completeAllExceptionally arguments Throwable  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method compareTo arguments ThresholdKey&lt;T &gt;  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.raft.internals.ThresholdPurgatory.ThresholdKey.compareTo@POLYN163672 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
