console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java 28 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.HistoryCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.HistoryCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "HistoryCommandHandler"
 , "c2" : "HistoryCommandHandler(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(Optional<InteractiveShell>;PrintWriter;MetadataNodeManager)"
 , "c3" : "3"
 , "c4" : "4"
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
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
 , "c4" : "11"
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
   "c1" : "00016"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class HistoryCommandHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class HistoryCommandType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.name@POLYN172020 the MagicNumber/String  'history' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.description@POLYN172122 the MagicNumber/String  'Print command history.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.shellOnly@POLYN172224 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method addArguments arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.addArguments@POLYN172318 the MagicNumber/String  'numEntriesToShow' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.addArguments@POLYN172318 the MagicNumber/String  '?' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.addArguments@POLYN172318 the MagicNumber/String  'The number of entries to show.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method createHandler arguments Namespace  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument namespace is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.createHandler@POLYN172615 the MagicNumber/String  'numEntriesToShow' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.shell.HistoryCommandHandler.HistoryCommandType.createHandler@POLYN172615 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method completeNext arguments MetadataNodeManager  nodeManager|List&lt;String &gt;  nextWords|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00054] Void method completeNext is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00054] Void method completeNext is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument shell is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument writer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.shell.HistoryCommandHandler.run@POLYN173292 the MagicNumber/String  'The history command requires a shell.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.shell.HistoryCommandHandler.run@POLYN173292 the MagicNumber/String  '% 5d  %s%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.shell.HistoryCommandHandler.equals@POLYN174243 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.shell.HistoryCommandHandler.run@POLYN173292"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.shell.HistoryCommandHandler.run@POLYN173292 the MagicNumber/String 'The history command requires a shell.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/HistoryCommandHandler.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.shell.HistoryCommandHandler.run@POLYN173292 the MagicNumber/String '% 5d  %s%n' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
