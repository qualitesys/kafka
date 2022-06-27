console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java 35 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.ManCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.ManCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ManCommandHandler"
 , "c2" : "ManCommandHandler(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(Optional<InteractiveShell>;PrintWriter;MetadataNodeManager)"
 , "c3" : "3"
 , "c4" : "6"
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
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.svg" }

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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "5"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
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
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class ManCommandHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class ManCommandType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.name@POLYN169336 the MagicNumber/String  'man' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.description@POLYN169438 the MagicNumber/String  'Show the help text for a specific command.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.shellOnly@POLYN169540 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method addArguments arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.addArguments@POLYN169634 the MagicNumber/String  'cmd' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.addArguments@POLYN169634 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.addArguments@POLYN169634 the MagicNumber/String  'The command to get help text for.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method createHandler arguments Namespace  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument namespace is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.createHandler@POLYN169882 the MagicNumber/String  'cmd' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.createHandler@POLYN169882 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method completeNext arguments MetadataNodeManager  nodeManager|List&lt;String &gt;  nextWords|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument nextWords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.completeNext@POLYN170141 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.shell.ManCommandHandler.ManCommandType.completeNext@POLYN170141 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument writer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String  'man: unknown command ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String  '. Type help to get a list of commands.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String  '%s: %s%n%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.shell.ManCommandHandler.equals@POLYN171696 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.shell.ManCommandHandler.equals@POLYN171696 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.shell.ManCommandHandler.equals@POLYN171696 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.shell.ManCommandHandler.run@POLYN170679"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String 'man: unknown command ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String '. Type help to get a list of commands.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/ManCommandHandler.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.shell.ManCommandHandler.run@POLYN170679 the MagicNumber/String '%s: %s%n%n' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
