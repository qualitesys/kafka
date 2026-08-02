console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.Filter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.Filter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#38"
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#43"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#48"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#53"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
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
 , "c1" : "00038"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.transforms.Filter.apply@POLYN157113 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00048] Valued method close is empty or contains only a return. Interface segregation for Transformation&lt;R&gt;"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00048] In the class Filter which implements the interface(s) Transformation&lt;R&gt;, the method close is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTransformation&lt;R&gt;"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00053] Valued method configure is empty or contains only a return. Interface segregation for Transformation&lt;R&gt;"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00053] In the class Filter which implements the interface(s) Transformation&lt;R&gt;, the method configure is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTransformation&lt;R&gt;"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/Filter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
