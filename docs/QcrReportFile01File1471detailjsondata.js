console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java 21 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.HelpCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.HelpCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(Optional<InteractiveShell>;PrintWriter;MetadataNodeManager)"
 , "c3" : "1"
 , "c4" : "2"
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
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "8"
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
   "c1" : "00014"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class HelpCommandHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class HelpCommandType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.shell.HelpCommandHandler.HelpCommandType.name@POLYN165024 the MagicNumber/String  'help' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.shell.HelpCommandHandler.HelpCommandType.description@POLYN165126 the MagicNumber/String  'Display this help message.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.shell.HelpCommandHandler.HelpCommandType.shellOnly@POLYN165228 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method addArguments arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method createHandler arguments Namespace  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method completeNext arguments MetadataNodeManager  nodeManager|List&lt;String &gt;  nextWords|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00037] Void method addArguments is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00037] Void method addArguments is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00047] Void method completeNext is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00047] Void method completeNext is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument shell is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument writer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.shell.HelpCommandHandler.run@POLYN165732 the MagicNumber/String  'Welcome to the Apache Kafka metadata shell.%n%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.shell.HelpCommandHandler.run@POLYN165732 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.shell.HelpCommandHandler.hashCode@POLYN166092 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.shell.HelpCommandHandler.equals@POLYN166194 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HelpCommandHandler.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.shell.HelpCommandHandler.equals@POLYN166194 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
