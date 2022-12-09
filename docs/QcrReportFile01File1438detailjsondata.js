console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java 6 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.xml" 
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
 , "c5" : "00018"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#18"
 , "c1" : "ThresholdPurgatory"
 , "c2" : "ThresholdPurgatory(ExpirationService)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#23"
 , "c1" : "CompletableFuture<Long>"
 , "c2" : "await(T;long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#32"
 , "c1" : "void"
 , "c2" : "maybeComplete(T;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#41"
 , "c1" : "void"
 , "c2" : "completeAll(long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#48"
 , "c1" : "void"
 , "c2" : "completeAllExceptionally(Throwable)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#55"
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
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.svg" }

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
 , "c1" : "00023"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method await arguments T  threshold|long  maxWaitTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method maybeComplete arguments T  value|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method completeAll arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method completeAllExceptionally arguments Throwable  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method compareTo arguments ThresholdKey&lt;T &gt;  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.raft.internals.ThresholdPurgatory.ThresholdKey.compareTo@POLYN154790 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/ThresholdPurgatory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
