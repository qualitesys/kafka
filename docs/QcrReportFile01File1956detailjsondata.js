console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java 9 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.ConstrainedPrioritySet"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.ConstrainedPrioritySet" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#22"
 , "c1" : "ConstrainedPrioritySet"
 , "c2" : "ConstrainedPrioritySet(BiFunction<UUID,TaskId,Boolean>;Function<UUID,Double>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#29"
 , "c1" : "UUID"
 , "c2" : "poll(TaskId;Function<UUID,Boolean>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#48"
 , "c1" : "UUID"
 , "c2" : "poll(TaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#52"
 , "c1" : "void"
 , "c2" : "offerAll(Collection<UUID>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#58"
 , "c1" : "void"
 , "c2" : "offer(UUID)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#67"
 , "c1" : "UUID"
 , "c2" : "pollNextClient()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method poll arguments TaskId  task|Function&lt;UUID ,Boolean &gt;  extraConstraint"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00029] For method poll list of called methods Object monObjet|java.util.UUID pollNextClientN152599"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument extraConstraint is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00032] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.processor.internals.assignment.ConstrainedPrioritySet.poll@POLYN152241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method poll arguments TaskId  task"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.processor.internals.assignment.ConstrainedPrioritySet.poll@POLYN153174 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method offerAll arguments Collection&lt;UUID &gt;  clients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method offer arguments UUID  client"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConstrainedPrioritySet.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
