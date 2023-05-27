console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java 11 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.connect.tools.MockSourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.tools.MockSourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#37"
 , "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#42"
 , "c1" : "void"
 , "c2" : "start(Map&lt;String,String&gt;)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#58"
 , "c1" : "List&lt;SourceRecord&gt;"
 , "c2" : "poll()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#70"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
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
 , "c4" : "2"
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
 , "c4" : "1"
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
 , "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method start arguments Map&lt;String ,String &gt;  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00042] For method start list of called methods Object monObjet|long Long_parseLongN157297"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.tools.MockSourceTask.start@POLYN156643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.tools.MockSourceTask.start@POLYN156643 the MagicNumber/String  'Started MockSourceTask at {} with failure scheduled in {} ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.tools.MockSourceTask.poll@POLYN157524 the MagicNumber/String  'Triggering source task failure' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.tools.MockSourceTask.poll@POLYN157524"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.tools.MockSourceTask.start@POLYN156643"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.connect.tools.MockSourceTask.poll@POLYN157524 the MagicNumber/String 'Triggering source task failure' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.connect.tools.MockSourceTask.start@POLYN156643 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00053] In the recursive method org.apache.kafka.connect.tools.MockSourceTask.start@POLYN156643 the MagicNumber/String 'Started MockSourceTask at {} with failure scheduled in {} ms' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/tools/MockSourceTask.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
