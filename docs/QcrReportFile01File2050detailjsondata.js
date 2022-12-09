console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java 6 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.ExceptionUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.ExceptionUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00007"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#7"
 , "c1" : "ExceptionUtils"
 , "c2" : "ExceptionUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00009"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#9"
 , "c1" : "LinkedList<RuntimeException>"
 , "c2" : "executeAll(Runnable...)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#21"
 , "c1" : "void"
 , "c2" : "throwSuppressed(String;LinkedList<RuntimeException>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c1" : "00009"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#9"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00009] For method executeAll arguments Runnable  ...actions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00014] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#13"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00013] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method throwSuppressed arguments String  message|LinkedList&lt;RuntimeException &gt;  suppressed"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument suppressed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.ExceptionUtils.executeAll@POLYN143702"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
