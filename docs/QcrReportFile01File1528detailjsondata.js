console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java 16 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.ExitCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.ExitCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#72"
 , "c1" : "void"
 , "c2" : "run(Optional&lt;InteractiveShell&gt;;PrintWriter;MetadataNodeManager)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#79"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#84"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
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
 , "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.ExitCommandHandler.ExitCommandType.name@POLYN149419 the MagicNumber/String  'exit' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.shell.ExitCommandHandler.ExitCommandType.description@POLYN149521 the MagicNumber/String  'Exit the metadata shell.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.shell.ExitCommandHandler.ExitCommandType.shellOnly@POLYN149623 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method addArguments arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method createHandler arguments Namespace  namespace"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method completeNext arguments MetadataNodeManager  nodeManager|List&lt;String &gt;  nextWords|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00055] Valued method addArguments is empty or contains only a return. Interface segregation for Commands.Type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00055] In the class ExitCommandType which implements the interface(s) Commands.Type, the method addArguments is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedCommands.Type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00065] Valued method completeNext is empty or contains only a return. Interface segregation for Commands.Type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00065] In the class ExitCommandType which implements the interface(s) Commands.Type, the method completeNext is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedCommands.Type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.shell.ExitCommandHandler.run@POLYN150127 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.shell.ExitCommandHandler.hashCode@POLYN150356 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.shell.ExitCommandHandler.equals@POLYN150458 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.shell.ExitCommandHandler.equals@POLYN150458 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
