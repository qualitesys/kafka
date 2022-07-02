console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java 138 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.LsCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.LsCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "LsCommandHandler"
 , "c2" : "LsCommandHandler(List<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(Optional<InteractiveShell>;PrintWriter;MetadataNodeManager)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printTargets(PrintWriter;OptionalInt;List<String>;List<TargetDirectory>)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printEntries(PrintWriter;String;OptionalInt;List<String>)"
 , "c3" : "8"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "ColumnSchema"
 , "c2" : "calculateColumnSchema(OptionalInt;List<String>)"
 , "c3" : "8"
 , "c4" : "19"
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
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.svg" }

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
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "56"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class LsCommandHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class LsCommandType contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.name@POLYN202918 the MagicNumber/String  'ls' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.description@POLYN203020 the MagicNumber/String  'List metadata nodes.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.shellOnly@POLYN203122 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method addArguments arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.addArguments@POLYN203216 the MagicNumber/String  'targets' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.addArguments@POLYN203216 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.addArguments@POLYN203216 the MagicNumber/String  'The metadata node paths to list.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method createHandler arguments Namespace  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument namespace is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.createHandler@POLYN203464 the MagicNumber/String  'targets' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method completeNext arguments MetadataNodeManager  nodeManager|List&lt;String &gt;  nextWords|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument nextWords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.shell.LsCommandHandler.LsCommandType.completeNext@POLYN203657 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00073] The class TargetDirectory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument shell is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument writer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument manager is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00092] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00096] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.shell.LsCommandHandler.run@POLYN204625 the MagicNumber/String  'ls: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.shell.LsCommandHandler.run@POLYN204625 the MagicNumber/String  ': no such file or directory.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.shell.LsCommandHandler.run@POLYN204625 the MagicNumber/String  'LS : targetFiles = {}, targetDirectories = {}, screenWidth = {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method printTargets arguments PrintWriter  writer|OptionalInt  screenWidth|List&lt;String &gt;  targetFiles|List&lt;TargetDirectory &gt;  targetDirectories"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument targetFiles is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument targetDirectories is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String  'LS : targetDirectory name = {}, children = {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method printEntries arguments PrintWriter  writer|String  intro|OptionalInt  screenWidth|List&lt;String &gt;  entries"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument writer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#138"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00138] The argument intro is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument entries is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method calculateColumnSchema arguments OptionalInt  screenWidth|List&lt;String &gt;  entries"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00169] For method calculateColumnSchema list of called methods Object monObjet|org.apache.kafka.shell.LsCommandHandler.ColumnSchema schemasN211086|org.apache.kafka.shell.LsCommandHandler.ColumnSchema schemasN211833|org.apache.kafka.shell.LsCommandHandler.ColumnSchema schemasN212209"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#169"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00169] The argument screenWidth is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#170"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00170] The argument entries is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00184] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00200] The class ColumnSchema contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method setColumnWidths arguments Integer  ...widths"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00209] For method setColumnWidths list of called methods Object monObjet|org.apache.kafka.shell.LsCommandHandler.ColumnSchema widthsN213272"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.setColumnWidths@POLYN212975 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#216"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00216] For method process arguments int  entryIndex|String  output"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#216"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00216] The argument output is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.process@POLYN213355 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.totalWidth@POLYN213740 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.totalWidth@POLYN213740 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method columnWidth arguments int  columnIndex"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.equals@POLYN214615 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.equals@POLYN214615 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.equals@POLYN214615 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.equals@POLYN214615 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.toString@POLYN215175 the MagicNumber/String  'ColumnSchema(columnWidths=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.toString@POLYN215175 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.toString@POLYN215175 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.toString@POLYN215175 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.toString@POLYN215175 the MagicNumber/String  '], entriesPerColumn=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.shell.LsCommandHandler.ColumnSchema.toString@POLYN215175 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00276] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.shell.LsCommandHandler.equals@POLYN216141 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.shell.LsCommandHandler.equals@POLYN216141 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.shell.LsCommandHandler.equals@POLYN216141 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.shell.LsCommandHandler.run@POLYN204625"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.shell.LsCommandHandler.run@POLYN204625 the MagicNumber/String ': no such file or directory.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.shell.LsCommandHandler.run@POLYN204625 the MagicNumber/String 'ls: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.shell.LsCommandHandler.run@POLYN204625 the MagicNumber/String 'LS : targetFiles = {}, targetDirectories = {}, screenWidth = {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00149] In the recursive method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00150] In the recursive method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00159] In the recursive method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN208105 the MagicNumber/String ' ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String '%n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String ':' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN206756 the MagicNumber/String 'LS : targetDirectory name = {}, children = {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00172] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00174] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 4 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00180] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/LsCommandHandler.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.shell.LsCommandHandler.calculateColumnSchema@POLYN210222 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
