console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java 18 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.ExitCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.ExitCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(Optional<InteractiveShell>;PrintWriter;MetadataNodeManager)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class ExitCommandHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class ExitCommandType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.shell.ExitCommandHandler.ExitCommandType.name@POLYN147045 the MagicNumber/String  'exit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.shell.ExitCommandHandler.ExitCommandType.description@POLYN147147 the MagicNumber/String  'Exit the metadata shell.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.shell.ExitCommandHandler.ExitCommandType.shellOnly@POLYN147249 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method addArguments arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method createHandler arguments Namespace  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method completeNext arguments MetadataNodeManager  nodeManager|List&lt;String &gt;  nextWords|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00038] Void method addArguments is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00038] Void method addArguments is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00048] Void method completeNext is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00048] Void method completeNext is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.shell.ExitCommandHandler.run@POLYN147753 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.shell.ExitCommandHandler.hashCode@POLYN147982 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.shell.ExitCommandHandler.equals@POLYN148084 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ExitCommandHandler.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.shell.ExitCommandHandler.equals@POLYN148084 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
