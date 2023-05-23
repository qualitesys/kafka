console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ArgumentAction"
 , "c2" : "org.apache.kafka.tools.PrintVersionAndExitAction"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.PrintVersionAndExitAction" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#30"
 , "c1" : "void"
 , "c2" : "run(ArgumentParser;Argument;Map&lt;String,Object&gt;;String;Object)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#44"
 , "c1" : "void"
 , "c2" : "onAttach(Argument)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#49"
 , "c1" : "boolean"
 , "c2" : "consumeArgument()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
 , "c1" : "00030"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method run arguments ArgumentParser  parser|Argument  arg|Map&lt;String ,Object &gt;  attrs|String  flag|Object  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.tools.PrintVersionAndExitAction.run@POLYN150631 the MagicNumber/String  ' (Commit:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.tools.PrintVersionAndExitAction.run@POLYN150631 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.tools.PrintVersionAndExitAction.run@POLYN150631 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method onAttach arguments Argument  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.tools.PrintVersionAndExitAction.consumeArgument@POLYN151302 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00044] Void method onAttach is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00044] Void method onAttach is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
