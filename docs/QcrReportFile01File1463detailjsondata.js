console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java 29 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.CdCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.CdCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CdCommandHandler"
 , "c2" : "CdCommandHandler(Optional<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(Optional<InteractiveShell>;PrintWriter;MetadataNodeManager)"
 , "c3" : "5"
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
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
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
 , "c4" : "17"
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
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class CdCommandHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class CdCommandType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.name@POLYN169080 the MagicNumber/String  'cd' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.description@POLYN169182 the MagicNumber/String  'Set the current working directory.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.shellOnly@POLYN169284 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method addArguments arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.addArguments@POLYN169378 the MagicNumber/String  'target' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.addArguments@POLYN169378 the MagicNumber/String  '?' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.addArguments@POLYN169378 the MagicNumber/String  'The directory to change to.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method createHandler arguments Namespace  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument namespace is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.createHandler@POLYN169626 the MagicNumber/String  'target' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method completeNext arguments MetadataNodeManager  nodeManager|List&lt;String &gt;  nextWords|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument nextWords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.completeNext@POLYN169858 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.shell.CdCommandHandler.CdCommandType.completeNext@POLYN169858 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument writer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument manager is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.shell.CdCommandHandler.run@POLYN170505 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.shell.CdCommandHandler.run@POLYN170505 the MagicNumber/String  'cd: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.shell.CdCommandHandler.run@POLYN170505 the MagicNumber/String  ': not a directory.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.shell.CdCommandHandler.run@POLYN170505 the MagicNumber/String  'cd: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.shell.CdCommandHandler.run@POLYN170505 the MagicNumber/String  ': no such directory.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.shell.CdCommandHandler.equals@POLYN171847 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.shell.CdCommandHandler.equals@POLYN171847 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CdCommandHandler.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.shell.CdCommandHandler.equals@POLYN171847 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
