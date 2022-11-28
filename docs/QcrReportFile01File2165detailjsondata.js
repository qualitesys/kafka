console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java 9 rule violations " 
 , "fic2"  : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.xml" 
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
 , "c5" : "00015"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#15"
 , "c1" : "void"
 , "c2" : "run(ArgumentParser;Argument;Map<String,Object>;String;Object)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#29"
 , "c1" : "void"
 , "c2" : "onAttach(Argument)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#34"
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
   {"ligne" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.png" 

 , "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c1" : "00012"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class PrintVersionAndExitAction contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method run arguments ArgumentParser  parser|Argument  arg|Map&lt;String ,Object &gt;  attrs|String  flag|Object  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.tools.PrintVersionAndExitAction.run@POLYN144045 the MagicNumber/String  ' (Commit:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.tools.PrintVersionAndExitAction.run@POLYN144045 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.tools.PrintVersionAndExitAction.run@POLYN144045 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method onAttach arguments Argument  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.tools.PrintVersionAndExitAction.consumeArgument@POLYN144716 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#29"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00029] Void method onAttach is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.html#29"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00029] Void method onAttach is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/tools/src/main/java/org/apache/kafka/tools/PrintVersionAndExitAction.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
