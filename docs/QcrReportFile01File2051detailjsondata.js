console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java 5 rule violations " 
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
 , "c5" : "00022"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#22"
 , "c1" : "ExceptionUtils"
 , "c2" : "ExceptionUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#24"
 , "c1" : "LinkedList&lt;RuntimeException&gt;"
 , "c2" : "executeAll(Runnable...)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#36"
 , "c1" : "void"
 , "c2" : "throwSuppressed(String;LinkedList&lt;RuntimeException&gt;)"
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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method executeAll arguments Runnable  ...actions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00029] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00028] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method throwSuppressed arguments String  message|LinkedList&lt;RuntimeException &gt;  suppressed"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument suppressed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ExceptionUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
