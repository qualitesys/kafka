console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java 7 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Commands.Handler"
 , "c2" : "org.apache.kafka.shell.NoOpCommandHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.NoOpCommandHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#28"
 , "c1" : "void"
 , "c2" : "run(Optional<InteractiveShell>;PrintWriter;MetadataNodeManager)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#34"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#39"
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
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1" : "00028"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method run arguments Optional&lt;InteractiveShell &gt;  shell|PrintWriter  writer|MetadataNodeManager  manager"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.shell.NoOpCommandHandler.hashCode@POLYN142788 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.shell.NoOpCommandHandler.equals@POLYN142890 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.NoOpCommandHandler.equals@POLYN142890 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00028] Void method run is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00028] Void method run is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/shell/src/main/java/org/apache/kafka/shell/NoOpCommandHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
