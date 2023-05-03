console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html" 
 , "texte" : "File connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.mirror.SourceAndTarget"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.SourceAndTarget" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#24"
 , "c1" : "SourceAndTarget"
 , "c2" : "SourceAndTarget(String;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#29"
 , "c1" : "String"
 , "c2" : "source()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#33"
 , "c1" : "String"
 , "c2" : "target()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#38"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#43"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#48"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.mirror.SourceAndTarget.toString@POLYN144655 the MagicNumber/String  '-&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.mirror.SourceAndTarget.equals@POLYN144933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00043] Public method hashCode is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00048] Public method equals is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
