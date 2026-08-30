console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "ErrorReporter"
 , "c2" : "org.apache.kafka.connect.runtime.errors.LogReporter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.errors.LogReporter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#41"
 , "c1" : "LogReporter"
 , "c2" : "LogReporter(ConnectorTaskId;ConnectorConfig;ErrorHandlingMetrics)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#57"
 , "c1" : "Future&lt;RecordMetadata&gt;"
 , "c2" : "report(ProcessingContext)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#72"
 , "c1" : "String"
 , "c2" : "message(ProcessingContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method report arguments ProcessingContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method message arguments ProcessingContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.runtime.errors.LogReporter.message@POLYN151941 the MagicNumber/String  'Error encountered in task %s. %s' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/errors/LogReporter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
